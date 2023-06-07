import Image from "@components/Image";
import AuthContext from "@lib/authContext";
import { useContext, useState } from "react";
import ChangeProfilePicture from "./ChangeProfilePicture";
import { Country } from "country-state-city";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { updateProfile } from "firebase/auth";

const EditProfile = ({ userData = {} }) => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState(userData.email || user.email || "");
  const [name, setName] = useState(
    userData.displayName || user.displayName || ""
  );
  const [phone, setPhone] = useState(userData.phone || "");
  const [country, setCountry] = useState(Country.getAllCountries());
  const [selectedCountry, setSelectedCountry] = useState(
    userData.country || ""
  );
  const [city, setCity] = useState(userData.city || "");
  const [district, setDistrict] = useState(userData.district || "");
  const [street, setStreet] = useState(userData.street || "");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const userDocRef = doc(db, "users", user.uid);
      const userData = {
        name,
        phone,
        country: selectedCountry,
        city,
        district,
        street,
      };
      await updateDoc(userDocRef, {
        ...userData,
      });
      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
      }
      toast.success("Profile updated!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="flex gap-4 items-center">
          <div className="relative overflow-hidden mask mask-squircle w-16 aspect-square bg-slate-700">
            {user.photoURL ? (
              <Image src={user.photoURL} />
            ) : (
              <span className="w-full h-full flex justify-center items-center text-bold rounded-full border border-gray-600 text-gray-700 text-lg">
                <p className="font-bold uppercase text-body text-2xl">
                  {user.displayName?.substring(0, 1)}
                </p>
              </span>
            )}
          </div>

          <div>
            <p className="text-white text-xl">{user.displayName}</p>
            <ChangeProfilePicture
              uid={user?.uid}
              className="cursor-pointer font-semibold text-primary text-sm duration-300 hover:text-primaryLight"
            />
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary input-ghost text-body"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary input-ghost text-body"
              value={email}
              required
              readOnly
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="select select-bordered select-primary select-ghost text-body"
              required
            >
              <option value="">Country...</option>
              {country.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="District"
              className="input input-bordered input-primary input-ghost text-body"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              className="input input-bordered input-primary input-ghost text-body"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <input
              type="text"
              placeholder="Street Address"
              className="input input-bordered input-primary input-ghost text-body md:col-span-2"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              className="input input-bordered input-primary input-ghost text-body"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button
              className={`btn btn-primary btn-block ${isLoading && "loading"}`}
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
