import { auth, db } from "@lib/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { GlobalContext } from "@lib/globalContext";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import toast from "react-hot-toast";
import { TiVendorMicrosoft } from "react-icons/ti";

export default function AuthSocial() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setIsBusy } = useContext(GlobalContext);

  const signInWithGoogle = () => {
    setIsLoading(true);
    setError(null);
    setIsBusy(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            createdAt: new Date(),
          });
        }
        setError(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (errorCode === "auth/popup-closed-by-user") {
          toast.error("Popup closed by user!");
        } else {
          toast.error(errorMessage);
        }
      })
      .finally(() => {
        setIsLoading(false);
        setIsBusy(false);
      });
  };
  return (
    <div className="flex items-center justify-center max-w-sm mx-auto">
      <button
        type="button"
        disabled={isLoading}
        className="text-white mr-7 transition duration-500 ease-in-out transform text-xl hover:text-fb hover:border-1 hover:border-fb focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
      >
        <FaFacebookF />
      </button>
      <button
        onClick={signInWithGoogle}
        type="button"
        disabled={isLoading}
        className="text-white mr-7 transition duration-500 ease-in-out transform text-xl hover:text-google hover:border-1 hover:border-google focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
      >
        <FaGoogle />
      </button>

      <button
        type="button"
        disabled={isLoading}
        className="text-white mr-7 transition duration-500 ease-in-out transform text-xl hover:text-ms hover:border-1 hover:border-ms focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
      >
        <TiVendorMicrosoft />
      </button>
      <button
        type="button"
        disabled={isLoading}
        className="text-white transition duration-500 ease-in-out transform text-xl hover:text-primary hover:border-1 hover:border-primary focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
      >
        <FaTwitter />
      </button>
    </div>
  );
}
