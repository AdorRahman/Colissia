import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spin } from "../Svg";
import InputField from "../InputField";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().max(50).label("Email"),
});
const ResetPassword = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: ({ email }) => {
      setIsLoading(true);
      setErrorMessage(null);
      setResetSuccess(false);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setIsLoading(false);
          setResetSuccess(true);
        })
        .catch((error) => {
          setIsLoading(false);
          setResetSuccess(false);
          return setErrorMessage(error.message);
        });
    },
  });

  return (
    <div className="lg:max-w-full md:mx-auto md:w-2/3">
      <h1 className="text-2xl font-semibold text-white tracking-ringtighter sm:text-3xl">
        Lost your password?
      </h1>
      <p className="text-body leading-tight mt-5">
        Please enter your email address. You will receive a link to create a new
        password via email.
      </p>

      <form className="mt-6" onSubmit={formik.handleSubmit}>
        <div>
          <InputField
            type="email"
            name="email"
            disabled={isLoading}
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Your Email"
            required
          />
          {formik.errors.email ? (
            <p className="text-danger py-2 text-sm font-semibold">
              That email address looks a bit weird
            </p>
          ) : null}
        </div>
        <div>
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-primary rounded hover:bg-secondary hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
          >
            {isLoading ? (
              <span className="inline-flex text-white">
                <Spin />
                Please wait
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
          {resetSuccess ? (
            <p className="text-primary py-2 text-sm font-semibold">
              An email has been sent with instruction to reset your password.
            </p>
          ) : null}
          {errorMessage ? (
            <p className="text-danger py-2 text-sm font-semibold">
              {errorMessage}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
