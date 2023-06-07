import { Dialog, Transition } from "@headlessui/react";
import AuthContext from "@lib/authContext";
import { db } from "@lib/firebase";
import { uploadImage, deleteImage } from "@lib/imageTools";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Fragment, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const ChangeProfilePicture = ({
  className,
  buttonTitle,
  buttonIcon,
  openOnStart,
}) => {
  const { user } = useContext(AuthContext);
  let [isOpen, setIsOpen] = useState(openOnStart);
  const [isLoading, setIsLoading] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  function closeModal() {
    if (!isLoading && !isRemoving) {
      setIsOpen(false);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  const handelFileChange = async (event) => {
    const imageTypes = ["image/png", "image/jpeg"];
    const selected = event.target.files[0];
    if (selected && imageTypes.includes(selected.type)) {
      setImageFile(selected);
    } else {
      setImageFile(null);
      event.target.value = null;
      toast.error("Please select an image file (png or jpeg)");
    }
  };

  const deleteAvatar = async (noToast = false) => {
    if (!noToast) {
      setIsRemoving(true);
    }
    const docRef = doc(db, "users", user.uid);
    const snapData = await getDoc(docRef);
    const userData = snapData.data();
    if (userData.avatar) {
      try {
        const deleteImageRes = await deleteImage(userData.avatar);
        await updateProfile(user, {
          photoURL: null,
        });
        await updateDoc(docRef, {
          avatar: null,
        });
        if (!noToast) {
          toast.success("Profile picture removed!");
          setIsRemoving(false);
          closeModal();
        }
      } catch (error) {
        if (!noToast) {
          toast.error("Error removing profile picture!");
          setIsRemoving(false);
        }
      }
    } else {
      setIsRemoving(false);
      if (!noToast) {
        toast.success("Profile picture removed!");
        closeModal();
      }
    }
  };

  async function updateAvatar() {
    if (!user) {
      return false;
    }
    if (!imageFile) {
      return false;
    }
    await deleteAvatar(true);
    const { path, url, fileName } = await uploadImage({
      file: imageFile,
      folder: `avatar/${user.uid}`,
    });
    if (!path || !url || !fileName) {
      return false;
    }
    try {
      await updateProfile(user, {
        photoURL: url,
      });
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        avatar: {
          path,
          url,
          fileName,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    const unsubs = async () => {
      if (imageFile) {
        setIsLoading(true);
        const res = await updateAvatar();
        if (res) {
          toast.success("Successfully updated profile picture!");
          setImageFile(null);
        } else {
          toast.error("Server error! Can't change profile picture!");
        }
        setIsLoading(false);
        closeModal();
      }
    };
    unsubs();
  }, [imageFile]);

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {buttonIcon && (
          <span className={`${buttonTitle && "mr-2"}`}>{buttonIcon}</span>
        )}
        {buttonTitle}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
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
              <div className="inline-block w-full pt-8 max-w-sm text-center my-8 overflow-hidden align-middle transition-all transform bg-gray-800 shadow-xl rounded-lg relative">
                <Dialog.Title
                  as="div"
                  className="text-lg border-b font-medium text-gray-200 pb-3 border-gray-700 px-6"
                >
                  <span className="mb-4 block text-xl">
                    Change Profile Picture
                  </span>
                  <a
                    onClick={closeModal}
                    className="cursor-pointer absolute right-3 top-3 text-gray-200"
                  >
                    <IoClose />
                  </a>
                </Dialog.Title>
                <div className="flex flex-col justify-center divide-y divide-gray-700">
                  <label className="cursor-pointer">
                    <a
                      disabled={isLoading}
                      type="button"
                      onClick={() => null}
                      className="block w-full text-center py-3 text-sm font-semibold text-primary bg-transparent duration-300 hover:text-sky"
                    >
                      {isLoading ? (
                        <span className="text-xl flex justify-center items-center animate-spin text-primary">
                          <CgSpinner />
                        </span>
                      ) : (
                        "Upload Picture"
                      )}
                    </a>
                    <input
                      onChange={(event) => handelFileChange(event)}
                      type="file"
                      className="hidden"
                    />
                  </label>
                  <button
                    disabled={isRemoving}
                    type="button"
                    onClick={() => deleteAvatar()}
                    className="block text-center py-3 text-sm font-semibold text-red-500 bg-transparent duration-300 hover:text-red-400"
                  >
                    {isRemoving ? (
                      <span className="text-xl flex justify-center items-center animate-spin text-red-500">
                        <CgSpinner />
                      </span>
                    ) : (
                      "Remove Current Photo"
                    )}
                  </button>
                  <button
                    disabled={isLoading || isRemoving}
                    type="button"
                    className="block text-center py-3 text-sm font-medium bg-transparent focus:outline-none text-body"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

ChangeProfilePicture.defaultProps = {
  openOnStart: false,
  buttonTitle: "Change Profile Picture",
  buttonIcon: null,
  isLoading: false,
};

export default ChangeProfilePicture;
