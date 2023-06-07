import Image from "next/image";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { AiTwotoneHeart } from "react-icons/ai";
import { BiZoomIn } from "react-icons/bi";
import { Transition } from "@headlessui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { formatPrice } from "@lib/healper";

const ProductView = ({ product, size }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`flex cursor-pointer ${
        size == "small" ? "flex-row" : "flex-col"
      }`}
    >
      <div
        className="relative overflow-hidden rounded"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`absolute transition-all duration-500 w-full h-full bg-darker z-1 pointer-events-none ${
            size != "small"
              ? hovered
                ? "bg-opacity-70"
                : "bg-opacity-0"
              : "hidden"
          }`}
        />
        <div
          className={`transition-transform relative overflow-hidden rounded ${
            size == "small" ? "w-24 h-24 mr-2" : "aspect-w-6 aspect-h-8"
          } ${
            hovered && size != "small"
              ? "scale-125 duration-1000 transform "
              : ""
          }`}
        >
          <Image src={product.imageURL} layout="fill" objectFit="cover" />
        </div>
        {size != "small" && (
          <>
            <div className="absolute z-2 w-full text-primary text-xl top-1/2 transform -translate-y-1/2 left-0 flex justify-center items-center px-3 py-2">
              <Transition
                show={hovered}
                enter="transition-all duration-400"
                enterFrom="opacity-0 mt-20"
                enterTo="opacity-100"
                leave="transition-all duration-600"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 -mt-20"
              >
                <div className="w-10 has-tooltip h-10 mr-2 rounded bg-white cursor-pointer transition-colors hover:bg-primary hover:text-white duration-600 flex justify-center items-center">
                  <span class="tooltip text-sm rounded shadow-lg px-2 py-1 bg-primary text-white -mt-24">
                    <span className="absolute bottom-2 translate-y-full text-xl text-primary left-1/2 transform -translate-x-1/2">
                      <AiOutlineCaretDown />
                    </span>
                    Add to cart
                  </span>
                  <IoCart />
                </div>
              </Transition>
              <Transition
                show={hovered}
                enter="transition-all duration-500"
                enterFrom="opacity-0 mt-20"
                enterTo="opacity-100"
                leave="transition-all duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 -mt-20"
              >
                <div className="has-tooltip w-10 h-10 mr-2 transition-colors hover:bg-primary hover:text-white duration-600 rounded bg-white cursor-pointer flex justify-center items-center">
                  <span class="tooltip text-sm rounded shadow-lg px-2 py-1 bg-primary text-white -mt-24">
                    <span className="absolute bottom-2 translate-y-full text-xl text-primary left-1/2 transform -translate-x-1/2">
                      <AiOutlineCaretDown />
                    </span>
                    Quick view
                  </span>
                  <BiZoomIn />
                </div>
              </Transition>
              <Transition
                show={hovered}
                enter="transition-all duration-600"
                enterFrom="opacity-0 mt-20"
                enterTo="opacity-100"
                leave="transition-all duration-400"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 -mt-20"
              >
                <div className="w-10 h-10 has-tooltip transition-colors hover:bg-primary hover:text-white duration-600 rounded bg-white cursor-pointer flex justify-center items-center">
                  <span class="tooltip text-sm rounded shadow-lg px-2 py-1 bg-primary text-white -mt-24">
                    <span className="absolute bottom-2 translate-y-full text-xl text-primary left-1/2 transform -translate-x-1/2">
                      <AiOutlineCaretDown />
                    </span>
                    Add to Wishlist
                  </span>
                  <AiTwotoneHeart />
                </div>
              </Transition>
            </div>
          </>
        )}
      </div>
      <div
        className={`mt-2 flex-grow ${
          size != "small" ? "flex justify-between" : ""
        }`}
      >
        <div>
          <p className="text-white">{product.name}</p>
          <p className="text-body">{product.category}</p>
        </div>
        <p className="text-primary font-semibold text-lg">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductView;
