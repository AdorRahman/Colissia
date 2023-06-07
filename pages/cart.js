import Link from "next/link";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { RiCloseFill, RiDeleteBin2Fill } from "react-icons/ri";
import { useCart } from "react-use-cart";
import { DefaultSeo } from "next-seo";
import {
  getPaymentFee,
  getCartTotal,
  getCalculatedPrice,
  formatPrice,
} from "../lib/healper";
import Image from "@components/Image";

const CartPage = () => {
  const SEO = {
    title: `Curiouscraft | Cart`,
  };
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } =
    useCart();

  console.log(items);
  return (
    <>
      <DefaultSeo {...SEO} />
      <div className="relative w-full h-full p-4  overflow-x-hidden text-white lg:min-h-screen lg:p-10 bg-dark">
        <div className="w-full h-full p-4 py-10 lg:py-16 lg:p-16 rounded-2xl shadow-checkout">
          {isEmpty ? (
            <div className="py-10">
              <img className="mx-auto" src="/img/empty-cart.svg" />
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
          ) : (
            <>
              <h2 className="hidden mb-12 text-3xl font-thin text-center text-white font-body lg:block sm:text-4xl sm:leading-none">
                Shopping Cart
              </h2>
              <div className="flex flex-col items-end">
                <div className="w-full mb-5 sm:px-5">
                  <div className="hidden grid-cols-8 gap-3 px-5 pb-3 font-semibold text-white uppercase border-white lg:justify-items-center lg:grid">
                    <div className="col-span-4" />
                    <div className="pl-0">Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                    <div>remove</div>
                  </div>
                  {items.map((product) => (
                    <div
                      style={{ borderRadius: "6px" }}
                      className="relative grid items-center grid-cols-5 gap-1 p-5 mb-2 duration-300 ease-in-out transform bg-opacity-50 border-white hover:shadow-cart min-h-24 sm:grid-cols-5 lg:grid-cols-8 sm:gap-3 lg:bg-transparent lg:rounded-none bg-lightDark lg:mb-4 lg:border justify-items-stretch lg:justify-items-center"
                      key={product.id}
                    >
                      <div className="md:hidden" />
                      <div className="absolute w-20 p-1 overflow-hidden -translate-y-1/2 bg-white rounded h-max md:-translate-y-0 top-1/2 md:inset-0 lg:h-24 justify-center items-center flex md:relative lg:rounded-md ">
                        <div className="h-[82px] w-[66px] relative overflow-hidden  p-0.5 product-image1   rounded-md">
                          {product.coverImage && (
                            <Image
                              src={product.coverImage?.url}
                              objectFit="contain"
                            />
                          )}
                        </div>
                      </div>
                      <div className="relative col-span-3 pl-5 text-sm font-semibold text-white justify-self-start sm:pl-0 sm:col-span-2 lg:col-span-3">
                        <div>
                          <div>{product.selectedVariant?.name}</div>
                          <div className="text-sm text-gray-500">
                            {product.name}
                          </div>
                        </div>
                        <div className="sm:hidden">
                          {formatPrice(
                            Number(product.price) * Number(product.quantity)
                          )}
                        </div>
                      </div>
                      <div className="hidden text-white select-none lg:block">
                        {formatPrice(Number(product.price))}
                      </div>
                      <div className="flex self-end justify-center text-white select-none sm:self-center">
                        <i
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity - 1)
                          }
                          className="flex items-center justify-center w-6 h-6 mr-2 text-xs text-white rounded-full cursor-pointer select-none sm:bg-primary"
                        >
                          <FaMinus />
                        </i>
                        <div>{product.quantity}</div>
                        <i
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity + 1)
                          }
                          className="flex items-center justify-center w-6 h-6 ml-2 text-xs text-white rounded-full cursor-pointer select-none sm:bg-primary"
                        >
                          <FaPlus />
                        </i>
                      </div>
                      <div className="justify-center hidden text-white sm:flex">
                        {formatPrice(Number(product.price) * product.quantity)}{" "}
                      </div>
                      <div className="absolute justify-center text-xl text-gray-500 lg:text-white right-2 top-2 lg:right-auto lg:top-auto lg:relative">
                        <span
                          onClick={() => removeItem(product.id)}
                          className="hidden transition-colors cursor-pointer lg:block hover:text-danger"
                        >
                          <RiDeleteBin2Fill />
                        </span>
                        <span
                          onClick={() => removeItem(product.id)}
                          className="transition-colors cursor-pointer lg:hidden sm:text-2xl hover:text-danger"
                        >
                          <RiCloseFill />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full sm:px-5">
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-48">
                    <div />
                    {/* <div>
                      <div className="hidden pt-3 pb-1 font-semibold text-white uppercase lg:block">
                        Order Summary
                      </div>
                      <div className="pb-3 border-t-2 border-gray-600 lg:border-t-0 lg:border-none">
                        <div className="flex justify-between pt-3 text-sm sm:text-base">
                          <div className="opacity-50 text-body">
                            Items total
                          </div>
                          <div className="font-semibold text-body">
                            {getCartTotal(items)} Tk
                          </div>
                        </div>
                        <div className="mt-5">
                          <a
                            onClick={() => emptyCart()}
                            className="block w-full px-10 py-3 font-semibold text-center text-white uppercase transition-colors duration-500 border-2 border-white cursor-pointer lg:w-auto hover:bg-white hover:text-black"
                          >
                            <span>Clear Cart</span>
                          </a>
                        </div>
                      </div>
                    </div> */}
                    <div>
                      <div className="flex justify-between pt-3 mt-8">
                        <div className="text-xl font-semibold text-white uppercase lg:text-base">
                          Subtotal
                        </div>
                        <div className="text-xl font-semibold text-white lg:text-base">
                          {formatPrice(getCartTotal(items))}
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link href="/checkout">
                          <a className="block w-full px-10 py-3 font-semibold text-center text-black uppercase transition-colors duration-500 bg-white border-2 border-white rounded lg:w-auto hover:bg-primary hover:text-white hover:border-primary">
                            <span className="hidden lg:block">Checkout</span>
                            <span className="lg:hidden">
                              Proceed to Checkout
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
