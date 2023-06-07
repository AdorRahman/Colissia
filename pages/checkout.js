import CheckoutLayout from "@components/CheckoutLayout";
import { Fragment, useContext, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
import CheckoutForm from "@components/Ecommerce/CheckoutForm";
import Link from "next/link";
import Router from "next/router";
import { useCart } from "react-use-cart";
import {
  getPaymentFee,
  getCartTotal,
  formatPrice,
  validateCouponCode,
} from "@lib/healper";
import { db } from "@lib/firebase";
import AuthContext from "@lib/authContext";
import BkashModal from "@components/BkashModal";
import toast from "react-hot-toast";
import RocketModal from "@components/RocketModal";
import { DefaultSeo } from "next-seo";
import { Spin } from "@components/Svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "@components/Image";
import { GlobalContext } from "@lib/globalContext";
import LoadingScreen from "@components/LoadingScreen";
import { FiChevronLeft } from "react-icons/fi";
import { useBkash } from "react-bkash";

const Methods = [
  {
    name: "bkash",
    logo: "/img/bkash.svg",
    url: "/api/payment/bkash",
    fee: 0.018,
  },
  {
    name: "nagad",
    logo: "/img/nagad.svg",
    url: "/api/payment/nagad",
    fee: 0.01,
  },
  {
    name: "rocket",
    logo: "/img/rocket.svg",
    url: "/api/payment/rocket",
    type: "manual",
    fee: 0.015,
  },
  {
    name: "shurjo",
    logo: "/img/shurjo-1.png",
    url: "/api/payment/shurjopay",
    fee: 0.02,
  },
  {
    name: "shurjo-ccf",
    logo: "/img/shurjo-2.png",
    url: "/api/payment/shurjopay/ccf",
    fee: 0.025,
  },
  {
    name: "cb",
    logo: "/img/cb.svg",
    url: "/api/payment/cb",
    fee: 0.022,
  },
];

const Checkout = () => {
  const SEO = {
    title: `Curiouscraft | Checkout`,
  };
  const { items, cartTotal, isEmpty, emptyCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponId, setCouponId] = useState(null);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponIsLoading, setCouponIsLoading] = useState(false);
  const [manualPaymentConfirmModal, setManualPaymentConfirmModal] =
    useState(false);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const { currencyCode, getCurrency, currencyDataIsLoading } =
    useContext(GlobalContext);

  const applyCoupon = async () => {
    if (!coupon) {
      toast.error("Please enter a coupon code!");
      return;
    }
    setCouponIsLoading(true);
    const q = query(collection(db, "coupons"), where("code", "==", coupon));
    const couponSnaps = await getDocs(q);
    const couponData = couponSnaps?.docs[0]?.data();
    if (couponData) {
      const validCoupon = validateCouponCode(couponData, cartTotal, user.uid);
      if (!validCoupon.error) {
        setDiscount(validCoupon.discount);
        setCouponId(couponData.id);
        setIsCouponApplied(true);
        toast.success("Coupon applied successfully!");
      } else {
        toast.error(validCoupon.message);
      }
    } else {
      toast.error("Coupon not found!");
    }
    setCouponIsLoading(false);
  };

  const removeCoupon = () => {
    setDiscount(0);
    setIsCouponApplied(false);
    setCoupon("");
    setCouponId(null);
  };

  const createCheckout = async () => {
    const token = await user.getIdToken();
    const res = await fetch("/api/create-order", {
      body: JSON.stringify({
        paymentMethod: paymentMethod,
        selectedCurrency: currencyCode,
        BDT: getCurrency?.BDT || null,
        products: items,
        couponCodeId: couponId,
        token: token,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error, data } = await res.json();
    if (error) {
      return { error };
    } else {
      setCheckoutSuccess(true);
      emptyCart();
      return { data };
    }
  };

  // const { error, loading, triggerBkash } = useBkash({
  //   onSuccess: (data) => {
  //     console.log(data); // this contains data from api response from onExecutePayment
  //   },
  //   onClose: () => {
  //     console.log("Bkash iFrame closed");
  //   },
  //   bkashScriptURL:
  //     "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js",
  //   amount: 1000,
  //   onCreatePayment: async (paymentRequest) => {
  //     return await fetch("<your backend api>/create/", {
  //       method: "POST",
  //       body: JSON.stringify(paymentRequest),
  //     }).then((res) => res.json());
  //   },
  //   onExecutePayment: async (paymentID) => {
  //     return await fetch("<your backend api>/execute/${paymentID}", {
  //       method: "POST",
  //     }).then((res) => res.json());
  //   },
  // });

  const handelSubmit = async () => {
    if (!paymentMethod) {
      return toast.error("Pleace select a payment method!");
    }
    setIsLoading(true);
    const { data, error } = await createCheckout();
    if (data) {
      if (data.paymentMethod?.type == "manual") {
        return setManualPaymentConfirmModal(data);
      }
      return Router.push({
        pathname: data.paymentMethod.url,
        query: { orderId: data.id },
      });
    } else {
      toast.error(error || "Checkout failed! Invalid data!");
    }
    setIsLoading(false);
  };

  if (currencyDataIsLoading) {
    return <LoadingScreen />;
  }

  if (!checkoutSuccess && isEmpty) {
    return (
      <div className="relative min-w-full min-h-screen bg-dark">
        <div className="flex items-center justify-center w-full h-screen">
          <div>
            <img src="/img/empty-cart.svg" />
            <p className="mb-4 text-2xl font-semibold text-center text-body">
              Empty Cart
            </p>
            <p className="text-center opacity-50 text-body">
              Your cart is still empty, browse the <br />
              attractive products from{" "}
              <Link href="/shop">
                <a className="font-semibold transition-colors text-primary hover:text-secondary">
                  Shop
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  if (manualPaymentConfirmModal) {
    if (paymentMethod.name == "bkash") {
      return <BkashModal data={manualPaymentConfirmModal} />;
    }
    if (paymentMethod.name == "rocket") {
      return <RocketModal data={manualPaymentConfirmModal} />;
    }
  }
  return (
    <Fragment>
      <DefaultSeo {...SEO} />
      <div className="relative w-full min-h-screen overflow-x-hidden text-white lg:p-10 bg-dark">
        <div className="">
          <Link href="/cart">
            <a className="gap-2 btn btn-link">
              <FiChevronLeft />
              Back
            </a>
          </Link>
        </div>
        <div className="grid w-full h-full p-4 overflow-y-auto lg:gap-10 shadow-checkout bg-dark xl:grid-cols-10 lg:p-10 rounded-2xl">
          <div className="col-span-10 p-5 border-white rounded-lg xl:col-span-4 lg:border-2">
            <p className="uppercase">Order Summary</p>
            <div className="pb-8 mb-4 border-b-2">
              <div className="h-56 mt-6 overflow-y-auto">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="grid items-center grid-cols-5 gap-2 p-2 mb-2 bg-white rounded"
                  >
                    <div className="relative flex items-center w-full h-full">
                      <div className="w-[70px] aspect-square relative overflow-hidden">
                        <Image
                          src={product.coverImage.url}
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm font-medium text-black">
                        {product.selectedVariant?.name}
                      </p>
                      <p className="text-xs font-light text-black">
                        {product.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-center text-black">
                        x{product.quantity}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-center text-black">
                        {formatPrice(
                          Number(product.price) * Number(product.quantity)
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white">Have any Discount Coupon?</p>
            <div className="pb-5 border-b-2">
              <div className="flex mt-2">
                <input
                  type="text"
                  className="block w-full mr-3 text-white border-white shadow-sm bg-dark bg-opacity-30 focus:border-primary"
                  placeholder="Coupon code"
                  name="coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  required
                />
                {!isCouponApplied ? (
                  <button
                    className="px-5 py-1 text-white transition-colors border hover:bg-white hover:text-dark"
                    type="submit"
                    onClick={applyCoupon}
                    disabled={couponIsLoading}
                  >
                    {couponIsLoading ? (
                      <span className="inline-flex">
                        <Spin />
                      </span>
                    ) : (
                      "Apply"
                    )}
                  </button>
                ) : (
                  <a
                    onClick={removeCoupon}
                    className="flex items-center justify-center px-5 py-1 text-2xl text-white transition-colors border cursor-pointer hover:bg-white hover:text-dark"
                  >
                    <AiFillCloseCircle />
                  </a>
                )}
              </div>
            </div>
            <div className="mt-7">
              <div className="pb-3 border-b-4 border-dotted">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Cart Subtoal</span>
                  <span className="text-sm font-semibold text-body">
                    {formatPrice(getCartTotal(items))}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex items-center justify-between flex-none ">
                    <span className="text-sm text-gray-400">Discount</span>
                    <span className="text-sm font-semibold text-body">
                      -{formatPrice(discount)}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Payment Fee</span>
                  <span className="text-sm font-semibold text-body">
                    {paymentMethod
                      ? `+${formatPrice(
                          getPaymentFee(items, paymentMethod.fee, discount)
                        )}`
                      : "Select a payment method."}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white uppercase sm:text-lg">
                  Total
                </span>
                <span className="text-sm font-semibold text-white sm:text-lg">
                  {paymentMethod
                    ? `${formatPrice(
                        getCartTotal(items) +
                          getPaymentFee(items, paymentMethod?.fee, discount) -
                          discount
                      )}`
                    : `${formatPrice(
                        getCartTotal(items) - discount
                      )} + Payment Fee`}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-10 p-5 xl:col-span-6">
            <p className="text-2xl text-white uppercase">Payment Method</p>
            <p className="mt-2 text-sm font-light text-white">
              Choose your preferd payment option below and fill out the
              appropriate information.
            </p>

            {currencyCode === "BDT" ? (
              <div className="mt-3">
                <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                  <RadioGroup.Label className="sr-only">
                    Payment method
                  </RadioGroup.Label>
                  <div className="flex flex-wrap">
                    {Methods.map((method) => (
                      <RadioGroup.Option
                        key={method.name}
                        value={method}
                        style={{ marginTop: 0 }}
                        className={({ active, checked }) =>
                          `${active ? "" : ""}
                  ${
                    checked
                      ? "bg-white bg-opacity-100 ring-2 ring-offset-2 ring-offset-blue text-white"
                      : "bg-white bg-opacity-90"
                  }
                  ${
                    method.name == "shurjo" || method.name == "shurjo-ccf"
                      ? "px-0"
                      : " px-5"
                  }
                    relative transition-colors rounded-md w-24 sm:w-40 h-16 sm:h-28 mb-3 mr-3 flex-shrink-0 shadow-md py-4 cursor-pointer flex focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked
                                        ? "text-yellow-100"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    <img
                                      src={method.logo}
                                      className="object-cover"
                                    />
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div className="absolute flex-shrink-0 text-blue right-2 top-2">
                                  <FaCheckCircle className="w-6 h-6 text-primary" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            ) : (
              <div className="text-4xl my-8">
                There is no payment method available for the currency you
                selected...
              </div>
            )}
            <p className="mt-2 mb-2 text-white uppercase"></p>
            <div>
              <CheckoutForm cb={handelSubmit} loading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
Checkout.layout = CheckoutLayout;
export default Checkout;
