import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ProductCardSmall from "./ProductCardSmall";

const settings = {
  dots: true,
  arrows: false,
  rows: 2,
  slidesPerRow: 2,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => (
    <div className="w-3 h-3 border border-white rounded-full" />
  ),
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
};

const BestRated = ({ products }) => {
  return (
    <div className="text-gray-300 bg-dark">
      <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="relative px-6 py-4 overflow-hidden border-gray-300 border-3 rounded-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="relative">
              <div
                style={{ height: "calc(100% + 100px)" }}
                className="absolute hidden w-1 transform bg-gray-300 lg:block -right-1 -top-5 rotate-6"
              />
              <div className="relative pb-2 mb-4 text-lg border-gray-300 border-b-3">
                Best Sellers
              </div>
              <div className="w-full pr-0 lg:pr-4 slick-best-sellers">
                <Slider {...settings}>
                  {products.map(
                    (product, idx) =>
                      product.bestSeller & (idx < 10) && (
                        <div className="relative w-1/2 px-1 py-2 " key={idx}>
                          <div className="relative grid grid-cols-10 gap-x-3 gap-y-1">
                            <div className="relative w-10 h-12 col-span-4 overflow-hidden bg-white border-2 border-gray-300 rounded cursor-pointer sm:w-auto sm:h-auto sm:p-1 ">
                              <ProductCardSmall product={product} />
                            </div>
                            <Link href={`/${product.category}/${product.slug}`}>
                              <a className="col-span-6 sm:py-2 cursor-pointer ">
                                <p className="mb-2 text-xs text-white cursor-pointer text sm:text-base">
                                  {product.name}
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      )
                  )}
                </Slider>
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div
                style={{ height: "calc(100% + 100px)" }}
                className="absolute hidden w-1 transform bg-gray-300 lg:block -left-6 -top-5 rotate-6"
              />
              <div className="relative flex justify-between pb-2 mb-4 text-lg border-gray-300 border-b-3">
                <span className="hidden lg:block" />
                Top Rated
              </div>
              <div className="w-full pr-5 slick-top-rated">
                <Slider {...settings}>
                  {products.map(
                    (product, idx) =>
                      product.topRated & (idx < 10) && (
                        <div className="relative w-1/2 py-2" key={idx}>
                          <div className="relative grid grid-cols-10 gap-x-3 gap-y-1">
                            <div className="relative w-10 h-12 col-span-4 overflow-hidden bg-white border-2 border-gray-300 rounded cursor-pointer sm:w-auto sm:h-auto sm:p-1 ">
                              <ProductCardSmall product={product} />
                            </div>
                            <Link href={`/${product.category}/${product.slug}`}>
                              <a className="col-span-6 sm:py-2 cursor-pointer ">
                                <p className="mb-2 text-xs text-white cursor-pointer text sm:text-base">
                                  {product.name}
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      )
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRated;
