import Link from "next/link";

const PopupVarifying = ({ orderId }) => {
  return (
    <>
      <section className="relative flex items-center justify-center w-full h-screen m-auto ">
        <div className="relative mx-4 overflow-hidden bg-white h-611px w-1123px rounded-3xl">
          <img
            className="relative left-0 hidden object-cover pointer-events-none select-none sm:block lg:left-0 min-h-700 sm:min-h-24 h-611px w-1123px sm:left-12"
            src="/img/verifying.png"
          ></img>
          <img
            className="relative left-0 z-20 block object-cover opacity-100 pointer-events-none select-none sm:hidden sm:min-h-24 h-611px w-1123px sm:left-12 "
            src="/img/success-bg.png"
          ></img>
          <div className="absolute w-full sm:w-max text-center z-30 italic font-semibold xl:text-3.2vw text-8vw sm:text-5xl font-cursive transition transform -translate-x-1/2 -translate-y-1/2 sm:transform-none left-1/2 sm:left-10 top-20 text-bestOrange">
            Verifying Payment...!
          </div>
          <div className="absolute z-30 w-full text-2xl text-center transition transform -translate-x-1/2 -translate-y-1/2 text-mypurple sm:text-left sm:w-max sm:transform-none left-1/2 sm:left-10 top-52 min-w-40">
            <span>We're currently validating your order...</span>
            <br></br>
            <span>It'll be processed shortly...</span>
          </div>
          <div className="absolute z-30 w-full px-4 pt-1 pb-1 font-semibold text-center text-red-500 transition transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-full lg:px-24 sm:px-20 lg:text-2xl sm:text-lg sm:transform-none left-1/2 sm:w-max border-opacity-70 sm:left-10 sm:top-76 top-88">
            <span>Your Order ID is -</span> <br></br>
            <span>#{orderId}</span>
          </div>
          <p className="absolute z-30 w-full px-4 text-xl text-center text-black transition transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full sm:text-left sm:w-max sm:transform-none left-1/2 sm:left-10 top-100 min-w-40">
            To check more details on your order, please check -
          </p>
          <Link href={`/dashboard/orders?id=${orderId}`}>
            <a className="absolute z-30 w-64 pt-3 pb-3 pl-8 pr-8 text-2xl font-semibold text-center text-white uppercase transition duration-500 ease-in-out transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full sm:transform-none left-1/2 hover:bg-purple-500 sm:left-28 sm:bottom-24 bottom-16">
              Order Details
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PopupVarifying;
