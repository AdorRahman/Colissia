import Link from "next/link";
import toast from "react-hot-toast";
import Router from "next/router";
import { useState } from "react";

const PopupFailed = ({ orderDetails }) => {
  const [manualPaymentConfirmModal, setManualPaymentConfirmModal] =
    useState(false);
  const retry = () => {
    if (orderDetails) {
      if (orderDetails.paymentMethod?.type == "manual") {
        return setManualPaymentConfirmModal(orderDetails);
      }
      return Router.push({
        pathname: orderDetails.paymentMethod.url,
        query: { orderId: orderDetails.id },
      });
    } else {
      toast.error("Checkout failed! Invalid data!");
    }
  };
  return (
    <>
      <section className="relative flex items-center justify-center w-full m-auto h-screen">
        <div className="relative mx-4 overflow-hidden bg-red-100 sm:bg-white h-611px w-1123px rounded-3xl">
          <img
            className="relative left-0 hidden object-cover pointer-events-none select-none lg:left-0 sm:-left-20 sm:block h-611px w-1123px"
            src="/img/failed.png"
          ></img>
          <img
            className="relative left-0 z-20 block object-cover opacity-100 pointer-events-none select-none sm:hidden sm:min-h-24 h-611px w-1123px sm:left-12 "
            src="/img/popup-bg.png"
          ></img>
          <div className="absolute z-30 w-full italic font-semibold text-center text-red-500 transition transform translate-x-1/2 translate-y-1/2 sm:w-max sm:transform-none right-1/2 text-8vw sm:text-6xl sm:text-right font-cursive sm:right-10 top-10 sm:top-24">
            Payment Failed...!
          </div>
          <div className="absolute z-30 w-full text-center text-mypurple transition transform translate-x-1/2 translate-y-1/2 text-3.2vw sm:text-2xl sm:w-max sm:transform-none right-1/2 sm:right-40 sm:top-52 top-32 sm:text-left">
            <span>The payment is unsuccessful...</span>
            <br></br>
            <span>Please try again....</span>
          </div>
          <div className="absolute z-30 overflow-hidden text-center text-red-500 transition transform translate-x-1/2 translate-y-1/2 bg-none sm:bg-white w-max sm:transform-none right-1/2 sm:w-26rem text-3.2vw sm:text-base sm:text-left sm:right-12 sm:top-72 top-48">
            Canceled
          </div>
          <div className="absolute z-30 w-full px-4 pt-1 pb-1 font-semibold text-center text-red-500 transition transform translate-x-1/2 translate-y-1/2 border-2 border-black rounded-full bg-none sm:bg-white sm:px-24 text-6vw sm:text-3xl sm:transform-none right-1/2 sm:w-max border-opacity-70 sm:right-10 top-56 sm:top-88">
            <span>Your Order ID is -</span> <br></br>
            <span>#{orderDetails.id}</span>
          </div>
          <Link href={`/dashboard/orders/${orderDetails.id}`}>
            <a className="absolute z-30 pt-3 pb-3 pl-8 pr-8 text-2xl font-semibold text-center text-white uppercase transition ease-in-out transform translate-x-1/2 translate-y-1/2 bg-purple-600 rounded-full w-max sm:transform-none right-1/2 duration-400 hover:bg-purple-700 sm:right-10 bottom-24">
              Order Details
            </a>
          </Link>
          <a
            onClick={() => retry()}
            className="absolute cursor-pointer z-30 pt-3 pb-3 pl-8 pr-8 text-2xl font-semibold text-center text-white uppercase transition ease-in-out transform translate-x-1/2 translate-y-1/2 bg-red-500 rounded-full w-max sm:transform-none right-1/2 duration-400 hover:bg-red-600 sm:right-72 bottom-40 sm:bottom-24"
          >
            try again
          </a>
        </div>
      </section>
    </>
  );
};

export default PopupFailed;
