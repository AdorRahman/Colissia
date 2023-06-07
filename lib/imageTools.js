import Resizer from "react-image-file-resizer";
import { nanoid } from "nanoid";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getFileEx, getFileNameWithoutExt } from "./healper";

//Resize image
export const resizeImage = ({
  file,
  width = 1600,
  height = 1600,
  format = "JPEG",
  quality = 70,
}) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      format,
      quality,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });

function getImageFormat(file) {
  const fileName = file.name;
  const fileExt = getFileEx(fileName);
  switch (fileExt) {
    case "jpg":
      return "JPEG";
    case "jpeg":
      return "JPEG";
    case "png":
      return "PNG";
    case "gif":
      return "GIF";
    default:
      return "JPEG";
  }
}

//Upload image
export const uploadImage = async ({ file, folder, format }) => {
  if (!file || !folder) return false;

  if (!format) format = getImageFormat(file);

  const storage = getStorage();
  const random = nanoid();
  const fileName = getFileNameWithoutExt(file.name);
  const path = `${folder}/${random}.${format.toLowerCase()}`;
  const imageRef = ref(storage, path);

  try {
    var blob = await resizeImage({
      file: file,
      width: 1200,
      height: 1200,
      format: format,
      quality: 70,
    });
  } catch (err) {
    console.log(err);
    return false;
  }

  try {
    const snapshot = await uploadBytes(imageRef, blob);
    const url = await getDownloadURL(snapshot.ref);

    return {
      path,
      url,
      fileName,
    };
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

//Delete image
export const deleteImage = async (image) => {
  const storage = getStorage();
  const imageRef = ref(storage, image.path);
  try {
    await deleteObject(imageRef);
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};
