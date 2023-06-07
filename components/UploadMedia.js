import AuthContext from "@lib/authContext";
import { nanoid } from "nanoid";
import { useState, useEffect, useContext, Fragment } from "react";
import toast from "react-hot-toast";
import { BiError } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
import { MdCloudDone } from "react-icons/md";
import { FileDrop } from "react-file-drop";
import { db } from "@lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { uploadImage } from "@lib/imageTools";

const UploadMedia = () => {
  const { user } = useContext(AuthContext);
  const [imageFiles, setImageFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [processFinished, setProcessFinished] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setIsLoading(false);
    setUploadError(false);
    setProcessFinished(false);
    setProgress(0);
    setImageFiles([]);
  };
  const handelFileDrop = (files) => {
    const asArray = Array.from(files);
    const supportedImageType = ["image/png", "image/jpeg"];
    const filteredImages = asArray.filter((file) =>
      supportedImageType.includes(file.type)
    );

    setImageFiles((oldFiles) => [...oldFiles, ...filteredImages]);
  };
  const handelImageUpload = async () => {
    if (!imageFiles.length) return;
    setIsLoading(true);

    for (const [idx, file] of imageFiles.entries()) {
      const { path, url, fileName } = await uploadImage({
        file: file,
        folder: "media",
      });
      if (!path || !url || !fileName) {
        setUploadError(true);
        break;
      } else {
        try {
          const id = nanoid();
          const mediaRef = doc(db, "media", id);
          await setDoc(
            mediaRef,
            {
              path,
              url,
              fileName,
              id,
              uploader: {
                uid: user?.uid,
                name: user?.displayName,
                email: user.email,
              },
              createdAt: Date.now(),
            },
            id
          );
        } catch (error) {
          toast.error("Upload failed! Server error!");
          setUploadError(true);
          break;
        }
      }
      setProgress(Math.round(((idx + 1) / imageFiles.length) * 100));
    }

    setProcessFinished(true);
    setIsLoading(false);
    if (uploadError) {
      toast.error("Upload failed!");
    } else {
      toast.success("Successfully uploaded!");
    }
  };
  return (
    <div className="py-8 max-w-screen-2xl mx-auto">
      <div className="mb-6">
        <Fragment>
          <div className="rounded-md bg-gray-100 dark:bg-gray-600 shadow-form overflow-hidden relative">
            <div className="bg-gray-50 dark:bg-gray-700 p-5">
              {!isLoading && !processFinished && (
                <FileDrop onDrop={(files, event) => handelFileDrop(files)}>
                  <div className="py-4 px-5 border-4 lg:border-8 border-dashed border-gray-200 dark:border-gray-600 dark:bg-gray-700 h-80 flex flex-col justify-center items-center space-y-4">
                    <h1 className="text-xl lg:text-2xl text-gray-400">
                      Drag images here
                    </h1>
                    <p className="text-gray-400">Or, if you prefer...</p>
                    <label className="cursor-pointer">
                      <a className="flex cursor-pointer mt-2 border-2 rounded px-5 py-3 border-yellow-500 text-yellow-600 uppercase font-medium justify-center items-center duration-300 hover:text-yellow-900 hover:bg-yellow-500">
                        <IoIosImages className="mr-2 text-xl" />
                        <span className="whitespace-nowrap text-sm">
                          Click to select
                        </span>
                      </a>
                      <input
                        onChange={(event) => handelFileDrop(event.target.files)}
                        type="file"
                        multiple
                        className="hidden"
                      />
                    </label>
                  </div>
                </FileDrop>
              )}
              {processFinished && (
                <div className="py-4 px-5 dark:bg-gray-700 h-80 flex flex-col justify-center items-center">
                  {uploadError ? (
                    <Fragment>
                      <div className="text-center">
                        <BiError className="text-7xl mx-auto text-red-500" />
                        <h1 className="font-medium text-4xl">Failed!</h1>
                        <button
                          onClick={reset}
                          className="outline-none focus:outline-none px-5 py-2 border-2 mt-2 text-gradient-4-start transition-color duration-300 font-medium hover:text-yellow-900 hover:bg-gradient-4-start border-gradient-4-start rounded"
                        >
                          Try again
                        </button>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="text-center">
                        <MdCloudDone className="text-7xl mx-auto text-green-400" />
                        <h1 className="font-medium text-4xl">Success!</h1>
                        <button
                          onClick={reset}
                          className="outline-none focus:outline-none px-5 py-2 border-2 mt-2 text-gradient-4-start transition-color duration-300 font-medium hover:text-yellow-900 hover:bg-gradient-4-start border-gradient-4-start rounded"
                        >
                          Upload more
                        </button>
                      </div>
                    </Fragment>
                  )}
                </div>
              )}
              {isLoading && (
                <div className="p-4 h-80 w-full flex flex-col justify-center items-center">
                  <div className="text-center space-y-2">
                    <p className="text-5xl md:text-8xl font-bold">
                      {progress}%
                    </p>
                    <p className="text-sm font-semibold text-gray-500 animate-pulse uppercase">
                      Uploading...
                    </p>
                  </div>
                </div>
              )}
            </div>
            {imageFiles.length > 0 && (
              <div className="relative flex gap-4 flex-wrap px-5 py-4 overflow-hidden">
                {imageFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 rounded-md shadow-md overflow-hidden"
                  >
                    <img
                      className="object-cover w-full h-full"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {imageFiles.length > 0 && !isLoading && !processFinished && (
            <div className="mt-8">
              <button
                className="btn btn-primary"
                onClick={() => handelImageUpload()}
                size="large"
              >
                Start Uploading
              </button>
            </div>
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default UploadMedia;
