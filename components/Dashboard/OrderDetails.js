import { Fragment, useContext, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import {
  fetchPostJSON,
  formatPrice,
  getPaymentFee,
  timestampToDate,
} from "@lib/healper";
import toast from "react-hot-toast";
import AuthContext from "@lib/authContext";
import Image from "next/image";
import ReviewOrderButton from "@components/ReviewOrderButton";

const OrderDetails = ({ orderDetails, isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [codeIsLoading, setCodeIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [trxNumber, setTrxNumber] = useState(
    orderDetails.paymentDetails?.trxNumber || ""
  );
  const [trxid, setTrxid] = useState(orderDetails.paymentDetails?.trxId || "");

  const viewCode = async () => {
    setCodeIsLoading(true);
    const token = await user.getIdToken();
    const response = await fetchPostJSON("/api/update-payment-details", {
      token,
      orderId: orderDetails.id,
      viewCode: true,
    });
    if (response.statusCode === 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setCodeIsLoading(false);
  };

  const sendPaymentDetails = async () => {
    return;
    if (!trxNumber || !trxid) {
      toast.error("Please fill all the fields");
      return;
    }
    if (!user) {
      toast.error("Please login to update payment details");
      return;
    }
    setIsLoading(true);
    const token = await user.getIdToken();
    const response = await fetchPostJSON("/api/update-payment-details", {
      token,
      orderId: orderDetails.id,
      paymentDetails: {
        paymentMethod: orderDetails.paymentMethod.name,
        trxNumber: trxNumber,
        trxId: trxid,
      },
    });
    if (response.statusCode === 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };
  return (
    <Transition as={Fragment} appear show={isOpen}>
      <Dialog
        onClose={closeModal}
        as="div"
        className="fixed inset-0 w-full h-full z-50"
      >
        <Transition.Child
          enter="transition-opacity ease-in-out-expo duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out-expo duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-out-expo duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out-expo duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          as={Fragment}
        >
          <div className="right-0 shadow-xl absolute top-0 h-full w-full sm:w-96 xl:w-1/3 bg-white">
            <div className="relative text-sm h-full flex flex-col">
              <div className="flex px-5 justify-between items-center pt-4 bg-white relative">
                <Dialog.Title className="text-lg font-medium text-gray-700">
                  Order Details
                </Dialog.Title>

                <a onClick={() => closeModal()}>
                  <IoMdClose className="text-2xl" />
                </a>
              </div>
              <div className=" absolute bottom-0 bg-green-500 flex justify-between items-center text-white font-semibold w-full z-10 px-5 py-4">
                <span className="">Total (Incl. payment fee) </span>
                <span className="text-2xl">
                  {formatPrice(
                    orderDetails.totalAmount,
                    orderDetails.selectedCurrency,
                    orderDetails.BDT
                  )}
                </span>
              </div>
              <div className="overflow-y-auto pb-16">
                <div className="px-5 py-4 border-y mt-4 flex flex-col gap-2">
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">Status</span>
                    <span
                      className={`capitalize font-medium text-white rounded-full px-4 py-0.5 ${
                        orderDetails?.status == "refunded"
                          ? "bg-red-500"
                          : orderDetails?.status == "completed"
                          ? "bg-green-500"
                          : orderDetails?.status == "sending"
                          ? "bg-blue-500"
                          : "bg-yellow-500"
                      }`}
                    >
                      {orderDetails.status}
                    </span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">Order ID</span>
                    <span className="text-gray-700">{orderDetails.id}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">Date</span>
                    <span className="text-gray-700">
                      {timestampToDate(
                        orderDetails.createdAt,
                        "ddd, MMM DD YYYY hh:mm A"
                      )}
                    </span>
                  </div>
                </div>

                <div className="px-5 py-4 border-b flex flex-col gap-2">
                  {orderDetails.products.map((product, index) => (
                    <Fragment key={index}>
                      <div className="flex justify-between">
                        <div className="flex gap-4">
                          {product.coverImage?.thumbDownloadUrl && (
                            <div className="w-12 aspect-square rounded overflow-hidden relative">
                              <Image
                                src={product.coverImage.thumbDownloadUrl}
                                layout="fill"
                              />
                            </div>
                          )}
                          <span className="font-semibold">
                            {product.quantity}x
                          </span>
                          <span className="text-gray-700">
                            {product.name} - {product.selectedVariant.name}
                          </span>
                        </div>
                        <span className="text-gray-700">
                          {formatPrice(
                            product.price * product.quantity,
                            orderDetails.selectedCurrency,
                            orderDetails.BDT
                          )}
                        </span>
                      </div>
                      {orderDetails.status === "completed" &&
                        orderDetails.viewCode && (
                          <div className="border-t-2 border-b-2 py-3 border-dashed">
                            {orderDetails.gameCodes?.[
                              product.selectedVariant.id
                            ]
                              ?.split(",")
                              .map((item) => (
                                <div className="flex justify-between items-center">
                                  <p className="text-lg font-semibold text-green-900">
                                    {item}
                                  </p>
                                  <span className="text-gray-400 font-medium select-none">
                                    Revealed
                                  </span>
                                </div>
                              ))}
                          </div>
                        )}
                    </Fragment>
                  ))}
                  {orderDetails.status === "completed" &&
                    !orderDetails.viewCode && (
                      <div className="flex justify-end">
                        <button
                          onClick={viewCode}
                          className={`btn btn-link btn-primary p-0 ${
                            codeIsLoading && "loading"
                          }`}
                        >
                          View Code
                        </button>
                      </div>
                    )}
                </div>
                <div className="px-5 py-4 border-b flex flex-col gap-2">
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">
                      Payment fee
                    </span>
                    <span>
                      {formatPrice(
                        getPaymentFee(
                          orderDetails.products,
                          orderDetails.paymentMethod?.fee,
                          orderDetails.discount
                        ),
                        orderDetails.selectedCurrency,
                        orderDetails.BDT
                      )}
                    </span>
                  </div>
                  {orderDetails.coupon && (
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-500 font-light">
                        Coupon ({orderDetails.coupon})
                      </span>
                      <span>-{orderDetails.discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">
                      Payment method
                    </span>
                    <span className="font-medium">
                      {orderDetails.paymentMethod.name}
                    </span>
                  </div>
                </div>
                {orderDetails.paymentMethod.type == "manual" && (
                  <>
                    <div className="px-5 py-4 border-b flex flex-col gap-2">
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-gray-500 font-light capitalize">
                          {orderDetails.paymentMethod.name} number
                        </span>
                        <p className="py-1 pointer-events-none select-none text-gray-700 text-sm">
                          {trxNumber}
                        </p>
                      </div>
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-gray-500 font-light">Trxid</span>
                        {/* <input
                          readOnly={true}
                          value={trxid}
                          onChange={(e) => setTrxid(e.target.value)}
                          className="py-1 rounded border-gray-200 focus:border-green-500 focus:ring-green-500 text-gray-700 text-sm"
                          type="text"
                        /> */}
                        <p className="py-1 pointer-events-none select-none text-gray-700 text-sm">
                          {trxid}
                        </p>
                      </div>
                      {/* <div className="flex justify-end">
                        <a
                          onClick={sendPaymentDetails}
                          className={`px-8 btn btn-primary btn-sm ${
                            isLoading && "loading"
                          }`}
                        >
                          Send
                        </a>
                      </div> */}
                    </div>
                    <div className="px-5 mt-4 flex justify-end">
                      <ReviewOrderButton products={orderDetails.products} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default OrderDetails;
