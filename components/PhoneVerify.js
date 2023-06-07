import { useContext } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import AuthContext from "../lib/authContext";
import firebase, { auth, firestore } from "../lib/firebase";
import { useState } from "react";
import { Spin } from "./Svg";
import { useDocumentData } from "react-firebase-hooks/firestore";
import InputField from "./InputField";
import { TiTick } from "react-icons/ti";

const PhoneVerify = (props) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);
  const [addressData, loading, error] = useDocumentData(
    firestore.collection("users").doc(user.uid)
  );
  const sendVerificationCode = () => {
    setIsLoading(true);
    setErrorMessage(null);
    // if (!addressData) {
    //   setIsLoading(false);
    //   return setErrorMessage("Something wend wrong!");
    // }
    if (user.phoneNumber) {
      setIsLoading(false);
      return setErrorMessage("Already verified!");
    }
    if (!addressData?.phone) {
      setIsLoading(false);
      return setErrorMessage(
        "Please add phone number(with country code) in your profile!"
      );
    }

    // return firebase.auth().verifyPhoneNumber(addressData.phoneNumber);
    const applicationVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    const provider = new firebase.auth.PhoneAuthProvider();
    provider
      .verifyPhoneNumber(addressData.phone, applicationVerifier)
      .then((id) => {
        setVerificationId(id);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };
  const checkVerificationCode = () => {
    setIsLoading(true);
    setErrorMessage(null);
    const phoneCredential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    user
      .updatePhoneNumber(phoneCredential)
      .then(() => {
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch(function (error) {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };
  if (loading) {
    return (
      <div class="border border-secondary shadow rounded-md p-4 w-full max-w-md">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-secondary h-12 w-12"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-secondary rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-secondary rounded"></div>
              <div class="h-4 bg-secondary rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {user.phoneNumber ? (
        <div className="p-5 bg-secondary w-full max-w-md flex items-center rounded">
          <span className="text-primary text-3xl">
            <TiTick />
          </span>
          <p className="text-darkGreen text-xl">
            Your phone number is verified!
          </p>
        </div>
      ) : (
        <>
          <div className="w-full max-w-md">
            <div className="mt-3">
              <p className="text-sm">
                Please make sure your phone {addressData?.phoneNumber} is
                available to receive verification code.
              </p>
              <button
                disabled={isLoading}
                onClick={() => sendVerificationCode()}
                className="inline-flex mt-5 transition-colors hover:bg-darkGreen hover:text-white cursor-pointer justify-center items-center px-5 py-2 bg-secondaryLight text-black rounded"
              >
                {isLoading ? (
                  <span className="inline-flex text-black">
                    <Spin />
                    Please wait
                  </span>
                ) : (
                  <>
                    <span className="mr-3">
                      <RiSendPlaneFill />
                    </span>{" "}
                    Send Verification Code
                  </>
                )}
              </button>
              {verificationId && (
                <div className="flex w-full mt-5 items-center">
                  <input
                    className="bg-opacity-10 w-full flex-grow text-darkGreen"
                    type="text"
                    name="verificationId"
                    placeholder="OTP code"
                    disabled={isLoading}
                    onChange={(event) =>
                      setVerificationCode(event.target.value)
                    }
                    label="Enter verification code"
                    required
                  />
                  <button
                    disabled={isLoading}
                    onClick={() => checkVerificationCode()}
                    className="ml-3 cursor-pointer transition-colors hover:bg-green-600 px-6 py-3 rounded bg-darkGreen text-white"
                  >
                    {isLoading ? (
                      <span className="inline-flex justify-center items-center px-2">
                        <Spin />
                      </span>
                    ) : (
                      <>Verify</>
                    )}
                  </button>
                </div>
              )}
              {!verificationId && (
                <div id="recaptcha-container" className="mt-5" />
              )}
            </div>
            {errorMessage ? (
              <p className=" text-danger py-2 text-sm font-semibold w-full max-w-sm">
                {errorMessage}
              </p>
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default PhoneVerify;
