import TextInput from "@components/UI/TextInput";
import { cn } from "@lib/healper";
import { useState, useContext } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "@lib/firebase";
import { GlobalContext } from "@lib/globalContext";

const CurrencyAdmin = () => {
  const { getCurrency } = useContext(GlobalContext);
  const [BDT, setBDT] = useState(getCurrency?.BDT || "");
  const [isGetting, setIsGetting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const updateFromOnline = async () => {
    try {
      setIsGetting(true);
      var myHeaders = new Headers();
      myHeaders.append("apikey", process.env.NEXT_PUBLIC_FIXER_API_KEY);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };
      const response = await fetch(
        "https://api.apilayer.com/fixer/convert?to=BDT&from=USD&amount=1",
        requestOptions
      );
      const data = await response.json();
      setBDT(data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsGetting(false);
    }
  };

  const handleSubmit = async () => {
    if (!BDT) {
      return toast.error("Nothing to update!");
    }
    if (BDT < 80) {
      return toast.error("Are you kidding?");
    }
    setIsLoading(true);
    try {
      const currencyRef = doc(db, "settings/currency");
      const currencySnaps = await getDoc(currencyRef);
      if (currencySnaps.exists()) {
        await updateDoc(currencyRef, {
          BDT: BDT,
        });
      } else {
        await setDoc(currencyRef, {
          BDT: BDT,
        });
      }
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <p>
          1 <span className="font-bold">USD</span> ={" "}
        </p>
        <div className="w-24">
          <TextInput
            type="number"
            required
            value={BDT}
            onChange={(event) => setBDT(event.target.value)}
          />
        </div>
        <p className="font-bold">BDT</p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <button
          onClick={handleSubmit}
          className={cn("btn btn-primary btn-wide", isLoading && "loading")}
        >
          Update
        </button>
        <button
          onClick={updateFromOnline}
          className={cn(
            "btn btn-outline btn-primary btn-wide",
            isGetting && "loading"
          )}
        >
          Get from online
        </button>
      </div>
    </div>
  );
};

export default CurrencyAdmin;
