import TextInput from "@components/UI/TextInput";
import { useState } from "react";
import toast from "react-hot-toast";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import LoadingScreen from "@components/LoadingScreen";

const PaymentNumbersSetting = () => {
  const [bkashNumber, setBkashNumber] = useState("");
  const [rocketNumber, setRocketNumber] = useState("");
  const [bkashIsUpdating, setBkashIsUpdating] = useState(false);
  const [rocketIsUpdating, setRocketIsUpdating] = useState(false);

  const [getPayment = [], paymentDataIsLoading] = useDocumentData(
    doc(db, "settings/payment")
  );

  const updateBkashNumber = async () => {
    if (!bkashNumber) {
      return toast.error("Please enter a number");
    }
    try {
      setBkashIsUpdating(true);
      const paymentRef = doc(db, "settings/payment");
      const paymentSnaps = await getDoc(paymentRef);
      if (paymentSnaps.exists()) {
        await updateDoc(paymentRef, {
          ...(bkashNumber && { bkashNumber: bkashNumber }),
        });
      } else {
        await setDoc(paymentRef, {
          ...(bkashNumber && { bkashNumber: bkashNumber }),
        });
      }
      toast.success(`Bkash number has been updated!`);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setBkashIsUpdating(false);
    }
  };

  const updateRocketNumber = async () => {
    if (!rocketNumber) {
      return toast.error("Please enter a number");
    }
    try {
      setRocketIsUpdating(true);
      const paymentRef = doc(db, "settings/payment");
      const paymentSnaps = await getDoc(paymentRef);
      if (paymentSnaps.exists()) {
        await updateDoc(paymentRef, {
          ...(rocketNumber && { rocketNumber: rocketNumber }),
        });
      } else {
        await setDoc(paymentRef, {
          ...(rocketNumber && { rocketNumber: rocketNumber }),
        });
      }
      toast.success(`Rocket number has been updated!`);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setRocketIsUpdating(false);
    }
  };

  if (paymentDataIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Payment Info</h1>
      <label className="block mt-2">
        <div className="flex flex-col sm:flex-row justify-center  gap-4">
          <TextInput
            type="text"
            name="bkash"
            label="Bkash Number"
            defaultValue={getPayment?.bkashNumber}
            onChange={(event) => setBkashNumber(event.target.value)}
          />
          <button
            onClick={updateBkashNumber}
            disabled={bkashIsUpdating}
            className={`btn btn-primary px-8 rounded bg-[#D51667] hover:bg-pink-500 text-white ${
              bkashIsUpdating && "loading"
            }`}
          >
            Update
          </button>
        </div>
      </label>

      <label className="block mt-2">
        <div className="flex flex-col sm:flex-row justify-center  gap-4">
          <TextInput
            type="text"
            name="rocket"
            label="Rocket Number"
            defaultValue={getPayment?.rocketNumber}
            onChange={(event) => setRocketNumber(event.target.value)}
          />
          <button
            onClick={updateRocketNumber}
            disabled={rocketIsUpdating}
            className={`btn btn-primary px-8 rounded bg-[#822687] hover:bg-[#b24ab8] text-white ${
              rocketIsUpdating && "loading"
            }`}
          >
            Update
          </button>
        </div>
      </label>
    </div>
  );
};

export default PaymentNumbersSetting;
