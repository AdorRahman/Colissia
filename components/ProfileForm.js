import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import csc from "country-state-city";
import { useContext, useState } from "react";
import AuthContext from "../lib/authContext";
import { firestore } from "../lib/firebase";
import { Spin } from "./Svg";
import toast from "react-hot-toast";

const ProfileForm = ({ profileData }) => {
  const { user } = useContext(AuthContext);
  const [countryList, setCountryList] = useState(csc.getAllCountries);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState(profileData.displayName || "");
  const [phone, setPhone] = useState(profileData.phone || "");
  const [email, setEmail] = useState(profileData.email || "");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const HandelSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        displayName: name,
        phone,
        email,
        ...(selectedCountry && { country: selectedCountry || null }),
      })
      .then(() => {
        toast.success("Success!!");
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        toast.error("Failed!");
        setErrorMessage(error.message);
        return setIsLoading(false);
      });
  };
  return (
    <form onSubmit={(event) => HandelSubmit(event)}>
      <div class="mb-0">
        <label class="block text-gray-900 text-sm mb-1" for="username">
          Name:
        </label>
        <div class="flex items-center mb-2">
          <i class="text-base w-4 h-4 fill-current ml-4 z-10 text-lightGreen2">
            <FaUser />
          </i>
          <input
            type="text"
            placeholder="Your Full Name"
            class="w-full -ml-8 pl-10 px-4 py-2 border rounded text-darkGreen focus:outline-none focus:border-darkGreen"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>

      <label class="block text-gray-900 text-sm mb-1" for="username">
        Country:
      </label>
      <select
        className="w-full border bg-white focus:outline-none focus:border-darkGreen text-darkGreen rounded px-3 mb-2 py-2 outline-none"
        required
        name="country"
        onChange={(event) => {
          setSelectedCountry(event.target.value);
        }}
      >
        <option disabled value="" selected={!selectedCountry}>
          None
        </option>
        {countryList.map((c, idx) => (
          <option
            key={idx}
            selected={profileData.country == c.name}
            value={c.name}
          >
            {c.name}
          </option>
        ))}
      </select>

      <div class="mb-0">
        <label class="block text-gray-900 text-sm mb-1" for="username">
          Phone:
        </label>
        <div class="flex items-center mb-2">
          <i class="text-base w-4 h-4 fill-current ml-4 z-10 text-lightGreen2">
            <ImPhone />
          </i>
          <input
            type="text"
            placeholder="Your Mobile Number"
            class="w-full -ml-8 pl-10 px-4 py-2 border rounded text-darkGreen focus:outline-none focus:border-darkGreen"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </div>

      <div class="mb-0">
        <label class="block text-gray-900 text-sm mb-1" for="username">
          Email Address:
        </label>
        <div class="flex items-center mb-2">
          <i class="text-base w-4 h-4 fill-current ml-4 z-10 text-lightGreen2">
            <HiMail />
          </i>
          <input
            type="email"
            placeholder="Email"
            class="w-full -ml-8 pl-10 px-4 py-2 border rounded text-darkGreen focus:outline-none focus:border-darkGreen"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <button
        disabled={isLoading}
        className="px-8 mt-2 py-2.5 text-white rounded bg-darkGreen"
      >
        {isLoading ? (
          <span className="py-0.5">
            <Spin />
          </span>
        ) : (
          "Save Profile"
        )}
      </button>
    </form>
  );
};

export default ProfileForm;
