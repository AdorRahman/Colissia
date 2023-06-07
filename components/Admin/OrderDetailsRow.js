import { nanoid } from "nanoid";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiFillCaretUp } from "react-icons/ai";
import { firestore, serverTimestamp } from "../../lib/firebase";
import { getCalculatedPrice, getProductPrice } from "../../lib/healper";

const OrderDetailsRow = ({ item, orderDetails }) => {
  const [gameCode, setGameCode] = useState(null);
  const sendCode = async (productId, oldValues = {}) => {
    if (!gameCode) {
      return toast.error("Code is empty!!");
    }
    try {
      const batch = firestore.batch();
      const keyId = nanoid();
      const ordersRef = firestore.collection("orders").doc(orderDetails.id);
      const codesRef = firestore.collection("codes").doc(keyId);
      batch.update(ordersRef, {
        code: {
          [productId]: gameCode,
          ...oldValues,
        },
      });
      batch.set(codesRef, {
        id: keyId,
        createdAt: serverTimestamp(),
        code: gameCode,
        productId: item.productRef,
        productName: item.productName,
        variantId: item.id,
        variantName: item.name,
        used: true,
        orderRef: orderDetails.id,
      });
      await batch.commit();
      toast.success("Success!");
    } catch (error) {
      toast.error("Failed!");
    }
  };

  return (
    <>
      <div className="flex flex-col w-auto grid-flow-col grid-cols-12 px-2 py-4 text-lg font-medium text-center border rounded-lg lg:grid lg:grid-flow-row border-lightGreen2">
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
              ৳{getCalculatedPrice(getProductPrice(item), 1)} ×
            </span>
            {item.quantity}
          </p>
        </div>

        <div className="inline-flex items-center justify-between col-span-12 px-1 py-2 sm:px-8 lg:py-0 lg:justify-center lg:col-span-2 ">
          <p style={{ color: "#0d8b9480" }} className="block lg:hidden">
            Price:
          </p>
          <p>
            ৳{getCalculatedPrice(getProductPrice(item), Number(item.quantity))}
          </p>
        </div>

        <div className="inline-flex items-center justify-between order-last col-span-12 px-1 py-2 font-normal sm:px-8 lg:justify-center lg:col-span-2">
          <p style={{ color: "#0d8b9480" }} className="block lg:hidden">
            Status:
          </p>
          <span
            className={`px-4 border rounded-full text-white capitalize whitespace-nowrap ${
              orderDetails.code?.[item.id] ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {orderDetails.code?.[item.id] ? "Sent" : "Not send"}
          </span>
        </div>
      </div>
      {!orderDetails.code?.[item.id] && (
        <div className="relative flex items-center justify-end mb-4 -mt-2">
          <span className="absolute text-2xl text-green-500 -top-4 right-32 z-5">
            <AiFillCaretUp />
          </span>
          <input
            className="h-10 border-green-500"
            type="text"
            placeholder="code"
            onChange={(event) => setGameCode(event.target.value)}
          />
          <button
            className="h-10 px-4 text-lg text-white bg-green-500"
            onClick={() => sendCode(item.id, orderDetails.code)}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default OrderDetailsRow;
