import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRef } from "react";
import ProductCard from "./ProductCard";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

const Software = ({ products }) => {
  const SlickSlider = useRef();
  return (
    <div className="bg-dark">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8">
        <div className="relative border-3 border-gray-300 rounded-2xl py-4 px-6">
          <div className="border-b-3 border-gray-300 pb-2 mb-4 flex justify-between">
            <p className="text-gray-300 text-lg">Software</p>
            <div className="flex text-gray-300 border-2 rounded border-gray-300 px-3 justify-center items-center">
              <Link href="/shop">
                <a>View More</a>
              </Link>
            </div>
          </div>
          <div>
            <Slider ref={SlickSlider} {...settings}>
              {products.map(
                (product, idx) =>
                  product.software && (
                    <ProductCard product={product} key={idx} />
                  )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
