import { firestore } from "@lib/firebase";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import PopupSuccess from "@components/Ecommerce/Success";
import PopupFailed from "@components/Ecommerce/Failed";
import CheckoutLayout from "@components/CheckoutLayout";

const VerifyPayment = () => {
  const { user } = useContext(AuthContext);
  const [orderDetails, setOrderDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubs = async () => {
      if (user) {
        const token = await user.getIdToken();
        const res = await fetch("/api/users/get-order-details", {
          body: JSON.stringify({
            token: token,
            orderId: id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const { error, data } = await res.json();
        if (!error) {
          setOrderDetails(data);
          console.log(data);
        }
        setIsLoading(false);
      }
    };
    return unsubs();
  }, [user]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!orderDetails || orderDetails?.length < 1) {
    return (
      <div className="w-full h-screen flex text-center justify-center items-center">
        <p className="text-danger font-semibold text-xl">
          Order not found:( Maybe deleted?
        </p>
      </div>
    );
  }
  if (orderDetails?.status == "completed") {
    return <PopupSuccess orderId={orderDetails.id} />;
  } else {
    return <PopupFailed orderDetails={orderDetails} />;
  }
};

VerifyPayment.layout = CheckoutLayout;
export default VerifyPayment;
