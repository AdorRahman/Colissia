const { AiFillPlusCircle } = require("react-icons/ai");
import { nanoid } from "nanoid";
import { useState, Fragment, useRef } from "react";
import { Transition, Dialog, Switch } from "@headlessui/react";
import addCollection from "../../lib/addCollection";
import { uploadImage, firestore, storage, timestamp } from "../../lib/firebase";
import toast from "react-hot-toast";
import { getFileEx } from "../../lib/healper";

const AddNewPromo = () => {
  const [newModalOpen, setNewModalOpen] = useState(false);
  const newModalcancelButtonRef = useRef();
  const [code, setCode] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [usageLimit, setUsageLimit] = useState(null);
  const [usageLimitPerUser, setUsageLimitPerUser] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [type, setType] = useState("fixed");
  const [minimumAmount, setMinimumAmount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { addDoc } = addCollection("promo");

  function closeNewModal() {
    setNewModalOpen(false);
  }
  function openNewModal() {
    setNewModalOpen(true);
  }
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!code || !discount || !type) {
      return setErrorMessage("Invalid data!");
    }
    setIsLoading(true);

    const id = nanoid(8)

    await addDoc({
      code: code,
      id: id,
      discount: Number(discount),
      type: type,
      start: start,
      end: end,
      usageLimit: Number(usageLimit),
      usageLimitPerUser: Number(usageLimitPerUser),
      minimumAmount: Number(minimumAmount),
      usedBy: [],
      used: 0,
    },id);

    setIsLoading(false);
    toast.success("Promo added!");
    closeNewModal();
  };
  return (
    <div>
      <div
        onClick={openNewModal}
        style={{ width: "190px", height: "95px" }}
        className="bg-gray-400 rounded flex justify-center flex-col items-center cursor-pointer"
      >
        <span className="text-gray-600 text-5xl">
          <AiFillPlusCircle />
        </span>
        <div className="text-gray-600 font-semibold">Add new</div>
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
                  Add promo
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={(event) => handelSubmit(event)}>
                    <label className="block mt-2">
                      <span>Code</span>
                      <input
                        type="text"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                        name="code"
                        value={code}
                        required
                        onChange={(event) => setCode(event.target.value)}
                      />
                    </label>

                    <div className="flex">
                      <label className="block mt-2 flex-grow">
                        <span>Value</span>
                        <input
                          type="number"
                          className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          placeholder=""
                          name="discount"
                          value={discount}
                          required
                          onChange={(event) => setDiscount(event.target.value)}
                        />
                      </label>
                      <label className="block mt-2">
                        <span>Type</span>
                        <select
                          className="mt-1 border-1 border-gray-300 rounded block shadow-sm "
                          required
                          name="type"
                          defaultValue="fixed"
                          onChange={(event) => {
                            setType(event.target.value);
                          }}
                        >
                          <option value="fixed" selected>
                            Fixed
                          </option>

                          <option value="percentage">Percentage</option>
                        </select>
                      </label>
                    </div>

                    <label className="block mt-2">
                      <span>Start date</span>
                      <input
                        type="date"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="start"
                        value={start}
                        onChange={(event) => setStart(event.target.value)}
                      />
                    </label>

                    <label className="block mt-2">
                      <span>End date</span>
                      <input
                        type="date"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="end"
                        value={end}
                        onChange={(event) => setEnd(event.target.value)}
                      />
                    </label>

                    <label className="block mt-2">
                      <span>Minimum amount requirement</span>
                      <input
                        type="number"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="minimum"
                        value={minimumAmount}
                        onChange={(event) =>
                          setMinimumAmount(event.target.value)
                        }
                      />
                    </label>
                    <label className="block mt-2">
                      <span>Usage limit</span>
                      <input
                        type="number"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="limit"
                        value={usageLimit}
                        onChange={(event) => setUsageLimit(event.target.value)}
                      />
                    </label>

                    <label className="block mt-2">
                      <span>Usage limit per user</span>
                      <input
                        type="number"
                        className="mt-1 bg-opacity-30 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        name="limitPerUser"
                        value={usageLimitPerUser}
                        onChange={(event) =>
                          setUsageLimitPerUser(event.target.value)
                        }
                      />
                    </label>

                    <div className="block">
                      <button
                        type="submit"
                        className="w-full h-full text-white mt-5 text-center bg-primaryDark rounded-full px-3 py-2 outline-none focus:outline-none transition-colors hover:bg-darkblue font-medium"
                      >
                        {isLoading ? "Please wait..." : "Add Promo"}
                      </button>
                      {errorMessage && (
                        <div className="text-danger">{errorMessage}</div>
                      )}
                    </div>
                  </form>
                </div>

                <div className="mt-4 flex justify-between">
                  <div />
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-yellow-900 bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500"
                    onClick={closeNewModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddNewPromo;
