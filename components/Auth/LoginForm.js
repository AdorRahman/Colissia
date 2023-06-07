import React, { useContext, useState } from "react";
import AuthContext from "@lib/authContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spin } from "../Svg";
import { auth } from "@lib/firebase";
import { MdEmail } from "react-icons/md";
import { AiFillLock, AiFillAndroid, AiFillApple } from "react-icons/ai";
import InputField from "../InputField";
import Modal from "../Modal";
import ResetPassword from "./ResetPassword";
import AuthSocial from "./AuthSocial";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = ({ className }) => {
  const { user, setUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }) => {
      setIsLoading(true);
      setErrorMessage(null);
      await auth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          setIsLoading(false);
          setErrorMessage(null);
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
          return setErrorMessage(error.message);
        });
    },
  });

  return (
    <>
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        <ResetPassword />
      </Modal>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className={className}
      >
        <div className="mb-8 text-center">
          <h1 className="font-body font-semibold text-white tracking-ringtighter text-xl">
            Welcome!
          </h1>
          <p className="text-body">Sign in to your account</p>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <label className="block text-white mb-1">Email</label>
          <InputField
            className="bg-opacity-30 placeholder-body placeholder-opacity-50"
            icon={<MdEmail />}
            type="email"
            name="email"
            disabled={isLoading}
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

        <div className="mt-4 w-full max-w-sm mx-auto">
          <label className="block text-white mb-1">Password</label>
          <InputField
            className="bg-opacity-30 placeholder-body placeholder-opacity-50"
            icon={<AiFillLock />}
            type="password"
            name="password"
            disabled={isLoading}
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
            placeholder="Your Password"
            required
          />
          {formik.errors.password ? (
            <p className="text-secondaryLight py-2 text-sm font-semibold">
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <div className="mt-2 text-right w-full max-w-sm mx-auto">
          <a
            onClick={() => {
              setShowModal(true);
            }}
            className="text-sm cursor-pointer font-semibold leading-relaxed text-muted hover:text-primary"
          >
            Forgot Password?
          </a>
        </div>
        <div className="w-full text-center">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex items-center justify-center w-full max-w-sm px-10 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded-full hover:bg-secondaryLight hover:text-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
          >
            {isLoading ? (
              <span className="inline-flex text-white">
                <Spin />
                Please wait
              </span>
            ) : (
              "Sign-In"
            )}
          </button>
          {errorMessage ? (
            <p className=" text-secondaryLight py-2 text-sm font-semibold w-full max-w-sm mx-auto">
              {errorMessage}
            </p>
          ) : null}
        </div>
        <div>
          <p className="text-body text-center my-6">
            Login with your Social Platform
          </p>
          <AuthSocial />
        </div>
        <div className="max-w-sm mx-auto px-5 mb-5">
          <a className="text-white cursor-pointer transition-colors hover:text-black hover:bg-body mt-10 rounded font-semibold flex justify-center items-center text-center border-2 border-body px-5 py-2">
            <span className="text-xl">
              <AiFillApple />
            </span>
            <span>/</span>
            <span className="text-xl">
              <AiFillAndroid />
            </span>
            <span className="ml-3">Install our app</span>
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
