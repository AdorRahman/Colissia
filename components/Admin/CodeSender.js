import { useState } from "react";
import toast from "react-hot-toast";
import {
  writeBatch,
  doc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import { nanoid } from "nanoid";

const CodeSender = ({ product, orderDetails }) => {
  const [code, setCode] = useState(
    orderDetails.gameCodes?.[product.selectedVariant.id] || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [invIsLoading, setInvIsLoading] = useState(false);

  const sendCode = async () => {
    if (!code) {
      return toast.error("Code is empty!!");
    }
    if (product.quantity !== code.split(",").length) {
      return toast.error("Code quantity is not equal to product quantity!!");
    }
    try {
      setIsLoading(true);
      const batch = writeBatch(db);
      const orderRef = doc(db, "orders", orderDetails.id);
      batch.update(orderRef, {
        gameCodes: {
          ...orderDetails.gameCodes,
          [product.selectedVariant.id]: code,
        },
      });
      for (let i = 0; i < code.split(",").length; i++) {
        const q = query(
          collection(db, "codes"),
          where("code", "==", code.split(",")[i]),
          where("used", "==", false)
        );
        const invSnaps = await getDocs(q);
        const invCode = invSnaps?.docs[0]?.data();
        if (invCode) {
          const invRef = doc(db, "codes", invCode.id);
          batch.update(invRef, { used: true, orderId: orderDetails.id });
        } else {
          const id = nanoid();
          const codeRef = doc(db, "codes", id);
          batch.set(codeRef, {
            code: code.split(",")[i],
            used: true,
            productName: product.name,
            productId: product.productId,
            variantId: product.selectedVariant.id,
            variantName: product.selectedVariant.name,
            expireDate: null,
            reference: null,
            id,
            orderId: orderDetails.id,
            createdAt: Date.now(),
          });
        }
      }
      await batch.commit();
      toast.success("Code sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Server error!!");
    } finally {
      setIsLoading(false);
    }
  };

  const getFromInventory = async () => {
    try {
      setInvIsLoading(true);
      const q = query(
        collection(db, "codes"),
        where("variantId", "==", product.selectedVariant.id),
        where("used", "==", false)
      );
      const invSnaps = await getDocs(q);
      const invCodes = invSnaps.docs.map((snap) => snap.data());
      if (invCodes.length === 0) {
        return toast.error("No codes in inventory!!");
      }
      const tmpCodes = [];
      invCodes.forEach((item, idx) => {
        if (idx + 1 <= product.quantity) {
          tmpCodes.push(item.code);
        }
      });
      setCode(tmpCodes.join(","));
    } catch (error) {
      console.log(error);
      toast.error("Server error!!");
    } finally {
      setInvIsLoading(false);
    }
  };
  return (
    <>
      {product.quantity > 1 && (
        <p className="text-xs italic text-gray-400 mb-1">
          Separate multiple codes with a comma.
        </p>
      )}
      <div className="flex">
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          className="w-full"
        />
        <div className="flex justify-end flex-shrink-0">
          <button
            onClick={sendCode}
            className={`btn btn-outline rounded-none border-l-0 ${
              isLoading && "loading"
            }`}
          >
            Send
          </button>
        </div>
      </div>
      <button
        onClick={getFromInventory}
        className={`btn btn-link p-0 btn-xs ${invIsLoading && "loading"}`}
      >
        Get From Inventory
      </button>
    </>
  );
};

export default CodeSender;
