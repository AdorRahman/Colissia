import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import PopupSuccess from "@components/Ecommerce/Success";
import PopupFailed from "@components/Ecommerce/Failed";
import CheckoutLayout from "@components/CheckoutLayout";
import toast from "react-hot-toast";

const VerifyBkashPayment = () => {
  const { user } = useContext(AuthContext);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const router = useRouter();
  const { paymentID, status } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!paymentID || !user || !status) return;
      if (status !== "success") {
        setErrorMessage("Payment Failed!");
        return;
      }
      const token = await user.getIdToken();
      const res = await fetch("/api/payment/bkash/execute", {
        body: JSON.stringify({
          token: token,
          paymentID: paymentID,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error, data } = await res.json();
      if (!error) {
        setPaymentDetails(data);
      } else {
        toast.error(error);
        setErrorMessage(error);
      }
      setIsLoading(false);
    };
    verifyPayment();
  }, [user, paymentID]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (paymentDetails?.statusCode == "0000") {
    return <PopupSuccess orderId={paymentDetails.merchantInvoiceNumber} />;
  } else {
    return (
      <div className="text-white w-screen h-screen flex justify-center items-center">
        {errorMessage}
      </div>
    );
  }
};

VerifyBkashPayment.layout = CheckoutLayout;
export default VerifyBkashPayment;
