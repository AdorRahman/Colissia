import React, { useContext, useState, Fragment } from "react";
import { HiSelector } from "react-icons/hi";
import { FaCheck, FaPhone, FaUser } from "react-icons/fa";
import InputField from "./InputField";
import AuthContext from "@lib/authContext";
import { Listbox, Transition } from "@headlessui/react";
import PhoneVerify from "./PhoneVerify";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { firestore } from "@lib/firebase";
import { Spin } from "./Svg";

const Countrys = [
  { name: "Unknown", code: null },
  { name: "Afghanistan", code: 93 },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const EditProfileForm = ({ className }) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [usersData = [], loading, error] = useDocumentData(
    firestore.collection("users").doc(user.uid)
  );
  const [phoneInput, setPhoneInput] = useState();
  const [nameInput, setNameInput] = useState();

  const [selectedCountry, setSelectedCountry] = useState(
    Countrys.findIndex((val) => val.name == "Afghanistan")
  );

  const HandelSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        phoneNumber: phoneInput || usersData.phoneNumber || "",
        country: selectedCountry.name || usersData.country || "",
      })
      .then(() => {
        user.updateProfile({
          displayName: nameInput || user.displayName || "",
        });
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        return setIsLoading(false);
      });
  };

  return (
    <>
      <form
        onSubmit={(event) => HandelSubmit(event)}
        autoComplete="off"
        className={className}
      >
        <div className="w-full mx-auto mb-5">
          <InputField
            className="placeholder-body placeholder-opacity-50"
            icon={<FaUser />}
            type="name"
            name="name"
            disabled={isLoading}
            onChange={(event) => setNameInput(event.target.value)}
            value={nameInput || user.displayName}
            label="Name"
            placeholder="Your Full Name"
            required
          />
        </div>
        <label>Country</label>
        <Listbox value={selectedCountry} onChange={setSelectedCountry}>
          {({ open }) => (
            <>
              <div className="relative mt-1">
                <Listbox.Button
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  className="relative w-full pl-3 pr-10 text-left bg-lightDark rounded shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                >
                  <span className="block truncate text-lg">
                    {selectedCountry.name}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <HiSelector
                      className="w-5 h-5 text-body"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    static
                    className="absolute z-5 w-full py-1 mt-1 overflow-auto text-base bg-indigo-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {Countrys.map((country, idx) => (
                      <Listbox.Option
                        key={idx}
                        className={({ active }) =>
                          `${active ? "text-white bg-indigo-800" : "text-body"}
                          cursor-default select-none relative py-2 pl-10 pr-4 font-semibold`
                        }
                        value={country}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {country.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <FaCheck
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        <div className="w-full mt-12 mb-5">
          <InputField
            className="placeholder-body placeholder-opacity-50"
            icon={<FaPhone />}
            type="tel"
            name="phone"
            disabled={isLoading}
            onChange={(event) => setPhoneInput(event.target.value)}
            value={phoneInput || usersData.phoneNumber}
            label="Phone"
            placeholder="Your Phone Number"
          />
        </div>
        <button
          className="mb-5 bg-primary text-white px-8 py-3 rounded"
          disabled={setIsLoading}
        >
          {isLoading ? (
            <span className="inline-flex justify-center items-center text-black">
              <Spin /> Loading
            </span>
          ) : (
            <>Save Profile</>
          )}
        </button>
        {errorMessage ? (
          <p className=" text-danger py-2 text-sm font-semibold w-full max-w-sm">
            {errorMessage}
          </p>
        ) : null}
      </form>
      <PhoneVerify />
    </>
  );
};

export default EditProfileForm;
