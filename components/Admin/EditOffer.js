import { useState, Fragment, useRef } from "react";
import { Transition, Dialog } from "@headlessui/react";
import toast from "react-hot-toast";
import ImagePicker from "@components/ImagePicker";
import Image from "@components/Image";
import TextInput from "@components/UI/TextInput";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { GrEdit } from "react-icons/gr";

const EditOffer = ({ data }) => {
  const [newModalOpen, setNewModalOpen] = useState(false);
  const newModalcancelButtonRef = useRef();
  const [coverImage, setCoverImage] = useState(data.coverImage || null);
  const [link, setLink] = useState(data.link || null);
  const [isLoading, setIsLoading] = useState(false);

  function closeNewModal() {
    setNewModalOpen(false);
  }
  function openNewModal() {
    setNewModalOpen(true);
  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!coverImage) {
      toast.error("Please select a cover image");
      return;
    }
    try {
      setIsLoading(true);
      const offerRef = doc(db, "offers", data.id);
      await updateDoc(offerRef, {
        coverImage,
        link,
      });
      toast.success("Offer updated successfully!");
      closeNewModal();
    } catch (error) {
      toast.error("Failed! Server error!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div
        onClick={openNewModal}
        className="w-10 aspect-square rounded-full flex justify-center items-center cursor-pointer bg-white"
      >
        <GrEdit />
      </div>

      <Transition show={newModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={newModalcancelButtonRef}
          static
          open={newModalOpen}
          onClose={closeNewModal}
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
              <Dialog.Overlay className="fixed inset-0 bg-dark bg-opacity-70" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="p"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add offer
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handelSubmit}>
                    <label className="block mt-2">
                      <TextInput
                        required
                        label="Link"
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                      />
                    </label>
                    <div className="relative mt-2">
                      {coverImage && (
                        <div className="relative w-32 h-32 mb-3 overflow-hidden rounded-md shadow-md">
                          <Image src={coverImage.url} />
                        </div>
                      )}
                      <ImagePicker
                        buttonTitle={coverImage ? "Change Image" : "Add Image"}
                        multiple={false}
                        selectedImages={(images) => setCoverImage(images[0])}
                        className="cursor-pointer !m-0 focus:outline-none inline-flex justify-center items-center px-4 lg:px-16 py-2 flex-shrink-0 bg-pink-500 text-pink-100 duration-300 hover:bg-pink-400 font-medium rounded ml-2"
                      />
                    </div>

                    <div className="block mt-4">
                      <button
                        type="submit"
                        className={`btn btn-primary btn-block ${
                          isLoading && "loading"
                        }`}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditOffer;
