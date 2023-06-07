import AuthContext from "@lib/authContext";
import { db } from "@lib/firebase";
import { fetchPostJSON, formatPrice } from "@lib/healper";
import { useState, useContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import PopupFailed from "./Ecommerce/Failed";
import PopupVarifying from "./Ecommerce/Verifying";
import { Spin } from "./Svg";
import { doc } from "firebase/firestore";

const BkashModal = ({ data }) => {
  const [bkaskNumber, setBkashNumber] = useState("");
  const [trxId, setTrxId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const { user } = useContext(AuthContext);

  const [getPayment = [], paymentDataIsLoading] = useDocumentData(
    doc(db, "settings/payment")
  );

  const handelSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const token = await user.getIdToken();
    const response = await fetchPostJSON("/api/update-payment-details", {
      token,
      orderId: data.id,
      paymentDetails: {
        paymentMethod: data.paymentMethod.name,
        trxNumber: bkaskNumber,
        trxId: trxId,
      },
    });
    if (response.statusCode === 200) {
      setSuccess(true);
    } else {
      setFailed(true);
    }
    setIsLoading(false);
  };

  if (failed) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <PopupFailed orderId={data.id} message="Invalid data!" />
      </div>
    );
  }
  if (success) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <PopupVarifying orderId={data.id} />
      </div>
    );
  }
  return (
    <>
      <section className="relative flex items-center justify-center w-full px-0 py-8 m-auto lg:px-12 h-screen">
        <div className="w-full h-auto px-4 py-4 text-center bg-white rounded-none 2xl:px-10 lg:rounded-3xl">
          <p className="pt-2 pb-4 text-2xl font-semibold text-black lg:text-3xl xl:text-4xl">
            <span className="text-bkash">TrxID</span> পেতে{" "}
            <span className="text-bkash">Colissia</span> এ যেভাবে বিকাশ অ্যাপ
            দিয়ে <span className="text-bkash">Send Money</span> করবেন{" "}
          </p>
          <div className="grid items-center justify-center grid-rows-5 px-4 md:grid-rows-1 md:grid-cols-5 2xl:px-8">
            <img className="w-64 h-auto" src="/img/bkash1.png" />
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="/img/bkash2.png" />
              <p className="absolute top-[19%] text-gray-900  text-[18px]  md:text-[1.2vw] font-normal left-[16%]">
                {getPayment?.bkashNumber}
              </p>
              <p className="absolute top-[93.4%] text-bkash text-[18px]  md:text-[1.18vw] font-semibold left-[16.7%]">
                {getPayment?.bkashNumber}
              </p>
            </div>
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="/img/bkash3.png" />
              <p className="absolute top-[22%] text-gray-400  text-[16px]  md:text-[1vw] font-semibold left-[30%]">
                {getPayment?.bkashNumber}
              </p>
              <p className="absolute top-32% text-bkash font-semibold left-15%">
                {formatPrice(data.amount, "BDT")}
              </p>
              <p className="absolute top-96% text-bkash text-lg font-semibold transition transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                {formatPrice(data.amount, "BDT")}
              </p>
            </div>
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="/img/bkash4.png" />
              <p className="absolute top-[29%] text-gray-400  text-[16px]  md:text-[1vw] font-semibold left-[27%]">
                {getPayment?.bkashNumber}
              </p>
              <p className="absolute top-41% text-darkestBlue xl:text-sm text-xs font-semibold left-14%">
                {formatPrice(data.amount, "BDT")}
              </p>
            </div>
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="/img/bkash5.png" />
              <p className="absolute top-51.5% text-darkestBlue xl:text-sm text-xs font-semibold left-14%">
                {formatPrice(data.amount, "BDT")}
              </p>
              <p className="absolute top-[31%] text-gray-400  text-[16px]  md:text-[1vw] font-semibold left-[26%]">
                {getPayment?.bkashNumber}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 sm:flex-row md:px-28 lg:px-60">
            <img className="w-40 h-40" src="/img/bkash-qr1.png" />
            <div className="flex flex-col items-center justify-center ml-0 xl:ml-10">
              <form onSubmit={(event) => handelSubmit(event)}>
                <div className="flex flex-col justify-center text-base font-semibold lg:flex-row">
                  <div className="p-4">
                    <p>Your bKash Number :</p>
                    <input
                      onChange={(event) => {
                        setBkashNumber(event.target.value);
                      }}
                      value={bkaskNumber}
                      required
                      className="w-auto h-10 px-2 bg-transparent border-2 border-black rounded-lg lg:w-80 "
                    />
                  </div>
                  <div className="p-4">
                    <p>TrxID You Received :</p>
                    <input
                      onChange={(event) => {
                        setTrxId(event.target.value);
                      }}
                      value={trxId}
                      required
                      className="w-auto h-10 px-2 bg-transparent border-2 border-black rounded-lg lg:w-80 "
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-64 h-10 mt-4 text-base font-semibold text-white uppercase rounded-full bg-bkash"
                  >
                    {isLoading ? (
                      <span className="inline-flex">
                        <Spin />
                        Please wait
                      </span>
                    ) : (
                      "Verify Payment"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BkashModal;
