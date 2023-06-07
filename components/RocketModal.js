import { useState, useContext } from "react";
import PopupFailed from "./Ecommerce/Failed";
import PopupVarifying from "./Ecommerce/Verifying";
import { Spin } from "./Svg";
import AuthContext from "@lib/authContext";
import { fetchPostJSON, formatPrice } from "@lib/healper";
import { doc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

const RocketModal = ({ data }) => {
  const [rocketNumber, setRocketNumber] = useState("");
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
        trxNumber: rocketNumber,
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
        <div className="w-full h-auto px-4 py-4 text-center rounded-none bg-darkWhite 2xl:px-10 lg:rounded-3xl">
          <p className="pt-2 pb-4 text-2xl font-semibold text-black lg:text-2xl xl:text-3xl">
            <span className="text-rocket">TrxID</span> পেতে{" "}
            <span className="text-rocket">Colissia</span> এ যেভাবে রকেট অ্যাপ
            দিয়ে <span className="text-rocket">Send Money</span> করবেন
          </p>
          <div className="grid items-center justify-center grid-rows-5 px-4 md:grid-rows-1 md:grid-cols-5 2xl:px-8">
            <img className="w-64 h-auto" src="../img/rocket1.png" />
            <img className="w-64 h-auto" src="../img/rocket2.png" />
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="../img/rocket3.png" />
              <p className="absolute top-[39.7%] text-darkestBlue  text-[14px]  md:text-[1vw] font-normal  left-[28%]">
                {getPayment?.rocketNumber}
              </p>
              <p className="absolute top-[92.8%] left-[18%] text-rocket  text-[18px]  md:text-[1.2vw] font-semibold  ">
                {getPayment?.rocketNumber}
              </p>
            </div>
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="../img/rocket4.png" />
              <p className="absolute top-[21%] text-darkestBlue  text-[14px]  md:text-[1vw] font-normal  left-[28%]">
                {getPayment?.rocketNumber}
              </p>
              <p className="absolute top-[40%] text-darkestBlue xl:text-lg text-sm font-normal  left-[29%]">
                {formatPrice(data.amount, "BDT")}
              </p>
              <p className="absolute top-95% text-rocket xl:text-lg text-[16px] font-semibold transition transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                {formatPrice(data.amount, "BDT")}
              </p>
            </div>
            <div className="relative w-full h-full">
              <img className="w-64 h-auto" src="../img/rocket5.png" />
              <p className="absolute top-[29%] left-[20%] text-darkestBlue  text-[12px]  md:text-[.8vw] font-normal  ">
                {getPayment?.rocketNumber}
              </p>
              <p className="absolute top-[34.5%] left-33% text-darkestBlue xl:text-sm text-xs  font-medium ">
                {formatPrice(data.amount, "BDT")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 sm:flex-row md:px-28 lg:px-60">
            <img className="w-40 h-40" src="../img/rocket-qr1.png" />
            <div className="flex flex-col items-center justify-center ml-0 xl:ml-10">
              <form onSubmit={(event) => handelSubmit(event)}>
                <div className="flex flex-col justify-center text-base font-semibold lg:flex-row">
                  <div className="p-4">
                    <p>Your Rocket Number :</p>
                    <input
                      onChange={(event) => {
                        setRocketNumber(event.target.value);
                      }}
                      value={rocketNumber}
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
                    className="w-64 h-10 mt-4 text-base font-semibold text-white uppercase rounded-full bg-rocket"
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

export default RocketModal;
