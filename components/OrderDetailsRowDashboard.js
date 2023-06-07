import { Fragment, useState } from "react";
import { getProductPrice } from "../lib/healper";
import { Transition } from "@headlessui/react";

const OrderDetailsRowDashboard = ({ item, orderDetails }) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <>
      <div
        className={`flex transition-all duration-300 z-1 bg-gray-100 flex-col grid-flow-col grid-cols-12 px-2 py-4 text-lg font-medium text-center border w-auto lg:grid lg:grid-flow-row border-lightGreen2 ${
          showCode ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <div className="inline-flex items-center justify-between order-2 px-1 py-2 text-red-500 sm:px-8 lg:p-0 lg:order-first lg:justify-center sm:col-span-12 lg:col-span-2">
          <p
            style={{ color: "#0d8b9480" }}
            className="block whitespace-nowrap lg:hidden"
          >
            Order ID:
          </p>
          <p className="text-base uppercase whitespace-nowrap lg:text-sm xl:text-lg">
            {item.id}
          </p>
        </div>

        <div className="relative left-0 flex-col items-start justify-center col-span-12 lg:justify-start lg:flex-row lg:inline-flex lg:text-left lg:col-span-4 lg:left-14 xl:left-0">
          <img
            className="w-24 ml-auto mr-auto text-center rounded-md lg:border-3 border-lightGreen2 lg:ml-0 lg:mr-3 lg:w-10 lg:hidden sm:block xl:block lg:h-14"
            src={item.imageURL}
          />
          <div className="py-2 text-xs lg:text-sm xl:text-lg lg:p-0">
            {item.isVariant && <p>{item.productName}</p>}
            <p>{item.name}</p>
          </div>
        </div>

        <div className="relative inline-flex items-center justify-between w-full col-span-12 px-1 py-2 sm:px-8 lg:p-0 lg:justify-center lg:col-span-2 ">
          <p style={{ color: "#0d8b9480" }} className="block lg:hidden">
            Quantity:
          </p>
          <p>
            <span
              style={{ color: "#0d8b9480" }}
              className="px-2 mr-2 text-sm border rounded-full whitespace-nowrap 2xl:left-0 xl:-left-6 lg:absolute sm:inline-flex lg:hidden xl:block border-lightGreen2"
            >
              ৳{getProductPrice(item)} ×
            </span>
            {item.quantity}
          </p>
        </div>

        <div className="inline-flex items-center justify-between col-span-12 px-1 py-2 sm:px-8 lg:py-0 lg:justify-center lg:col-span-2 ">
          <p style={{ color: "#0d8b9480" }} className="block lg:hidden">
            Price:
          </p>
          <p>৳{getProductPrice(item) * Number(item.quantity)}</p>
        </div>

        <div className="inline-flex items-center justify-between order-last col-span-12 px-1 py-2 font-normal sm:px-8 lg:justify-center lg:col-span-2">
          <p style={{ color: "#0d8b9480" }} className="block lg:hidden">
            Status:
          </p>
          <span
            className={`lg-px-4 px-2 border text-base lg:text-lg rounded-full text-white capitalize whitespace-nowrap ${
              orderDetails.code?.[item.id] ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {orderDetails.code?.[item.id] ? (
              <>
                <button onClick={() => setShowCode(!showCode)}>
                  {showCode ? "Hide code" : "View code"}
                </button>
              </>
            ) : (
              "Pending"
            )}
          </span>
        </div>
      </div>

      <Transition
        show={showCode}
        as={Fragment}
        enter="transition-all scale-y-100 origin-top"
        enterFrom="scale-y-0"
        enterTo="scale-y-100"
        leave="transition-all duration-300 origin-top"
        leaveFrom="scale-y-100"
        leaveTo="scale-y-0 -translate-y-full"
      >
        <div
          style={{ marginTop: "0px" }}
          className="z-0 block px-4 py-3 bg-lightGreen2 rounded-b-md"
        >
          <div>
            {orderDetails.code?.[item.id]?.split(",").map((item, idx) => (
              <p key={idx} className="text-lg font-semibold text-green-900">
                {item}
              </p>
            ))}
          </div>
        </div>
      </Transition>
    </>
  );
};

export default OrderDetailsRowDashboard;
