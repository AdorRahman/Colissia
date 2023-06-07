import Link from "next/link";
import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spin } from "../Svg";
import { auth, db } from "@lib/firebase";
import InputField from "../InputField";
import { FaUser, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { GlobalContext } from "@lib/globalContext";
import toast from "react-hot-toast";
import AuthSocial from "./AuthSocial";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("What should we call you without your name!?")
    .min(3)
    .max(20)
    .label("Name"),
  email: Yup.string().required().email().max(50).label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Please confirm your Password again")
    .equals([Yup.ref("password")]),
});

const RegisterForm = ({ className }) => {
  const { setIsBusy } = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async ({ name, email, password }) => {
      setIsBusy(true);
      setErrorMessage(null);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: name });
        const userDocRef = doc(db, "users", userCredential.user.uid);
        await setDoc(userDocRef, {
          displayName: name,
          email: email,
          uid: userCredential.user.uid,
          createdAt: Date.now(),
        });
        setIsBusy(false);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        toast.error(errorMessage);
        setIsBusy(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className}>
      <div className="mb-16 text-center">
        <h1 className="font-body font-semibold text-white tracking-ringtighter text-xl">
          Welcome!
        </h1>
        <p className="text-body">Create a new account</p>
      </div>
      <div className="w-full max-w-sm mx-auto mb-4">
        <label className="block text-white mb-1">Name</label>
        <InputField
          className="bg-opacity-30 placeholder-body placeholder-opacity-50"
          icon={<FaUser />}
          type="name"
          name="name"
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Your Name"
          required
        />
        {formik.errors.email ? (
          <p className="text-secondaryLight py-2 text-sm font-semibold">
            {formik.errors.name}
          </p>
        ) : null}
      </div>

      <div className="w-full max-w-sm mx-auto mb-4">
        <label className="block text-white mb-1">Email</label>
        <InputField
          className="bg-opacity-30 placeholder-body placeholder-opacity-50"
          icon={<MdEmail />}
          type="email"
          name="email"
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Your Email"
          required
        />
        {formik.errors.email ? (
          <p className="text-secondaryLight py-2 text-sm font-semibold">
            That email address looks a bit weird
          </p>
        ) : null}
      </div>

      <div className="w-full max-w-sm mx-auto mb-4">
        <label className="block text-white mb-1">Password</label>
        <InputField
          className="bg-opacity-30 placeholder-body placeholder-opacity-50"
          icon={<AiFillLock />}
          type="password"
          name="password"
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Your Password"
          required
        />
        {formik.errors.password ? (
          <p className="text-secondaryLight py-2 text-sm font-semibold">
            {formik.errors.password}
          </p>
        ) : null}
      </div>
      <div className="w-full max-w-sm mx-auto mb-3">
        <label className="block text-white mb-1">Confirm Password</label>
        <InputField
          className="bg-opacity-30 placeholder-body placeholder-opacity-50"
          icon={<AiFillLock />}
          type="password"
          name="confirmPassword"
          disabled={formik.isSubmitting}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Confirm Your Password"
          required
        />
        {formik.errors.confirmPassword ? (
          <p className="text-secondaryLight py-2 text-sm font-semibold">
            {formik.errors.confirmPassword}
          </p>
        ) : null}{" "}
      </div>
      <div className="text-xs text-body w-full max-w-sm mx-auto">
        Read our{" "}
        <Link href="/privacy-policy">
          <a className="text-primary">privacy policy</a>
        </Link>
      </div>
      <div className="w-full text-center">
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="inline-flex items-center justify-center w-full max-w-sm px-10 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded-full hover:bg-secondaryLight hover:text-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
        >
          {formik.isSubmitting ? (
            <span className="inline-flex text-white">
              <Spin />
              Please wait
            </span>
          ) : (
            "Sign Up"
          )}
        </button>
        {errorMessage ? (
          <p className="text-secondaryLight py-2 text-sm font-semibold">
            {errorMessage}
          </p>
        ) : null}
      </div>
      <div className="mb-5">
        <p className="text-body text-center my-6">
          Sign up with your Social Platform
        </p>
        <AuthSocial />
      </div>
    </form>
  );
};

export default RegisterForm;
