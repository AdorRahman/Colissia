import { Fragment, useContext, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { fetchPostJSON, formatPrice, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { Disclosure } from "@headlessui/react";
import { BiChevronRight } from "react-icons/bi";
import CodeSender from "./CodeSender";
import AuthContext from "@lib/authContext";

const OrderDetailsAdmin = ({ orderDetails, isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [orderStatus, setOrderStatus] = useState(orderDetails.status);
  const [gameCodes, setGameCodes] = useState(orderDetails.gameCodes || []);
  const [trxNumber, setTrxNumber] = useState(
    orderDetails.paymentDetails?.trxNumber || ""
  );
  const [trxid, setTrxid] = useState(orderDetails.paymentDetails?.trxId || "");

  const sendPaymentDetails = async () => {
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

  const handelOrderStatusChange = async (e) => {
    setOrderStatus(e.target.value);
    const Request = async () => {
      try {
        const orderRef = doc(db, "orders", orderDetails.id);
        await updateDoc(orderRef, { status: e.target.value });
        return "Order status updated successfully";
      } catch (error) {
        throw new Error("Error updating order status");
      }
    };
    toast.promise(Request(), {
      loading: <b>Loading...</b>,
      success: (data) => <b>{data}</b>,
      error: (err) => <b>{err.toString()}</b>,
    });
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

                <a className=" cursor-pointer" onClick={() => closeModal()}>
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
                  <div className="flex justify-between items-center gap-8 pb-4">
                    <span className="text-gray-500 font-light">Status</span>
                    <select
                      onChange={handelOrderStatusChange}
                      className="w-full text-sm invalid:text-gray-500 disabled:text-gray-500 py-2 border focus:border-2 ring-0 focus:ring-0 rounded bg-transparent undefined border-gray-300 focus:border-green-500 px-2"
                      value={orderStatus}
                    >
                      <option value="on-hold">On-Hold</option>
                      <option value="sending">Sending</option>
                      <option value="completed">Completed</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">Order ID</span>
                    <span className="text-gray-700">{orderDetails.id}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-gray-500 font-light">Ordered By</span>
                    <span className="text-gray-700">
                      {orderDetails.userEmail}
                    </span>
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
                  {orderDetails.status === "completed" && (
                    <div className="flex justify-between gap-8">
                      <span className="text-gray-500 font-light">
                        Code Seen By User
                      </span>
                      <span className="text-gray-700">
                        {orderDetails.viewCode ? "Yes" : "No"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-5 py-4 border-b flex flex-col gap-2">
                  {orderDetails.products.map((product, index) => (
                    <Fragment key={index}>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="py-2 flex gap-1 items-center">
                              <BiChevronRight
                                className={`text-xl ${open ? "rotate-90" : ""}`}
                              />
                              <div className="flex justify-between flex-1">
                                <div className="flex gap-4">
                                  <span className="font-semibold">
                                    {product.quantity}x
                                  </span>
                                  <span className="text-gray-700 line-clamp-1">
                                    {product.name} -{" "}
                                    {product.selectedVariant.name}
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
                            </Disclosure.Button>
                            <Disclosure.Panel className="">
                              <CodeSender
                                product={product}
                                orderDetails={orderDetails}
                              />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </Fragment>
                  ))}
                </div>
                <div className="px-5 py-4 border-b flex flex-col gap-2">
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
                        <span className="text-gray-500 font-light">
                          {orderDetails.paymentMethod.name} number
                        </span>
                        <input
                          value={trxNumber}
                          onChange={(e) => setTrxNumber(e.target.value)}
                          className="py-1 rounded border-gray-200 focus:border-green-500 focus:ring-green-500 text-gray-700 text-sm"
                          type="text"
                        />
                      </div>
                      <div className="flex justify-between items-center gap-8">
                        <span className="text-gray-500 font-light">
                          {orderDetails.paymentMethod.name} TrxId
                        </span>
                        <input
                          value={trxid}
                          onChange={(e) => setTrxid(e.target.value)}
                          className="py-1 rounded border-gray-200 focus:border-green-500 focus:ring-green-500 text-gray-700 text-sm"
                          type="text"
                        />
                      </div>
                      <div className="flex justify-end">
                        <a
                          onClick={sendPaymentDetails}
                          className={`px-8 btn btn-primary btn-sm ${
                            isLoading && "loading"
                          }`}
                        >
                          Send
                        </a>
                      </div>
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

export default OrderDetailsAdmin;
