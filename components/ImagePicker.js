import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { IoIosImages } from "react-icons/io";
import { IoClose, IoCloudUpload } from "react-icons/io5";
import { db } from "@lib/firebase";
import Link from "next/link";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { collection, doc, setDoc } from "firebase/firestore";
import Image from "@components/Image";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { cn, orderBy } from "@lib/healper";
import toast from "react-hot-toast";
import { uploadImage } from "@lib/imageTools";
import { nanoid } from "nanoid";
import AuthContext from "@lib/authContext";

const ImagePicker = ({
  className,
  title,
  buttonTitle,
  buttonIcon,
  multiple,
  selectedImages,
  openOnStart,
}) => {
  let [isOpen, setIsOpen] = useState(openOnStart);
  const { user } = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [images = [], imagesIsLoading] = useCollectionData(
    collection(db, "media")
  );

  const orderedImages = orderBy(images, "createdAt", "desc");

  function closeModal() {
    if (uploading) return;
    setIsOpen(false);
  }

  function openModal() {
    setIsSelected([]);
    setIsOpen(true);
  }

  const toggleSelected = (imageId) => {
    setIsSelected((options) => {
      if (multiple) {
        if (isSelected.includes(imageId)) {
          return options.filter((option) => option !== imageId);
        } else {
          return [...options, imageId];
        }
      } else {
        return [imageId];
      }
    });
  };

  const handelFileChange = async (files) => {
    const asArray = Array.from(files);
    const supportedImageType = ["image/png", "image/jpeg"];
    const filteredImages = asArray.filter((file) =>
      supportedImageType.includes(file.type)
    );
    if (!filteredImages.length) {
      toast.error("Please select an image file!");
      return;
    }
    setUploading(true);

    for (const [idx, file] of filteredImages.entries()) {
      const { path, url, fileName } = await uploadImage({
        file: file,
        folder: "media",
      });
      if (!path || !url || !fileName) {
        toast.error("Upload failed! Server error!");
        break;
      } else {
        try {
          const id = nanoid();
          const mediaRef = doc(db, "media", id);
          const newImage = {
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
          };
          await setDoc(
            mediaRef,
            {
              ...newImage,
            },
            id
          );
          toggleSelected(newImage.id);
        } catch (error) {
          toast.error("Upload failed! Server error!");
          break;
        }
      }
    }
    setUploading(false);
  };

  return (
    <>
      <div className="contents">
        <button type="button" onClick={openModal} className={className}>
          {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
          {buttonTitle}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-700 shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 bg-gray-100 text-gray-900 dark:bg-gray-800 py-3 dark:text-gray-200 pb-3 border-b border-gray-200 dark:border-gray-800 px-6 flex justify-between items-center"
                >
                  {title}
                  <a
                    onClick={closeModal}
                    className="cursor-pointer text-gray-800 text-xl dark:text-gray-200"
                  >
                    <IoClose />
                  </a>
                </Dialog.Title>
                <div
                  style={{ maxHeight: "80vh", minHeight: "500px" }}
                  className="flex flex-col justify-between"
                >
                  <div className="px-6 overflow-y-auto">
                    {images.length < 1 ? (
                      <Fragment>
                        <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700 h-96 flex flex-col justify-center items-center">
                          <p>No media found</p>
                          <div className="mt-3">
                            <Link href="/admin/media">
                              <a className="flex border-2 rounded px-5 py-3 dark:border-gradient-1-start border-gradient-4-start dark:text-gradient-1-start text-gradient-4-start uppercase font-medium justify-center items-center transition-colors duration-300 hover:text-yellow-800 dark:hover:bg-gradient-1-start hover:bg-gradient-4-start">
                                <FaCloudUploadAlt className="mr-2 text-xl" />
                                Upload some images
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <div className="py-4 dark:bg-gray-700">
                        <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 justify-around justify-items-stretch gap-4 relative">
                          {orderedImages.map((image) => (
                            <Fragment key={image.id}>
                              <div
                                onClick={() => toggleSelected(image.id)}
                                className="overflow-hidden cursor-pointer relative group rounded-md"
                              >
                                {isSelected.includes(image.id) && (
                                  <Fragment>
                                    <div className="absolute inset-0 w-full h-full z-0 bg-dark/30" />
                                    <div className="text-primary absolute inset-0 w-full h-full z-10 flex justify-end p-2">
                                      <FaCheckCircle />
                                    </div>
                                  </Fragment>
                                )}
                                <div className="w-full aspect-square relative overflow-hidden rounded-md h-auto transform group-hover:scale-110 transition duration-700">
                                  <Image objectFit="contain" src={image.url} />
                                </div>
                                <div
                                  className={cn(
                                    "line-clamp-1 text-sm px-2 rounded py-1"
                                  )}
                                >
                                  {image.fileName}
                                </div>
                              </div>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-6 py-3 flex-shrink-0 bg-gray-100 dark:bg-gray-800 flex gap-4 justify-end">
                    <label className="btn btn-accent gap-2">
                      <span className="text-2xl">
                        <IoCloudUpload />
                      </span>
                      <p>Upload</p>
                      <input
                        onChange={(event) =>
                          handelFileChange(event.target.files)
                        }
                        type="file"
                        multiple
                        className="hidden"
                      />
                    </label>
                    <button
                      className="btn btn-primary px-8"
                      onClick={() => {
                        if (isSelected.length > 0) {
                          selectedImages(
                            isSelected.map((id) =>
                              images.find((image) => image.id === id)
                            )
                          );
                          closeModal();
                        } else {
                          toast.error("Please select at least one image");
                        }
                      }}
                    >
                      Open
                    </button>
                  </div>
                </div>
                {uploading && (
                  <div
                    style={{ pointerEvents: "all" }}
                    className="fixed inset-0 w-full h-full z-40 flex justify-center items-center"
                  >
                    <button class="btn loading">Uploading...</button>
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ImagePicker.defaultProps = {
  openOnStart: false,
  title: "Choose an Image",
  buttonTitle: "Choose",
  multiple: false,
  buttonIcon: <IoIosImages />,
};

export default ImagePicker;
