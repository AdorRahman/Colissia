import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Image from "@components/Image";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  autoplay: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
};

const Hero = ({ offers }) => {
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);
  const video = useRef();
  const offersSlider = useRef();
  useEffect(() => {
    const unsubs = () => {
      if (offers.length > 0) {
        return;
      }
      video.current.src = "/video/trailer.mp4";
      video.current.play().then(() => {
        setVideoIsLoaded(true);
      });
    };
    unsubs();
  }, []);
  return (
    <div
      className={`bg-darker relative h-auto w-screen overflow-hidden flex justify-center items-center mb-8`}
    >
      <div className="absolute w-full h-full inset-0 pointer-events-none">
        <Image src="/img/demo-bg2.jpg" />
        <video
          id="vid"
          ref={video}
          loop
          height="100%"
          width="100%"
          muted
          autoPlay
          preload="auto"
          className={`absolute ${
            !videoIsLoaded ? "hidden" : "block"
          } inset-0 object-cover w-full h-full`}
        />
        <div
          className={`absolute w-full h-full inset-0 bg-black pointer-events-none ${
            videoIsLoaded ? "bg-opacity-80" : "bg-opacity-70"
          } `}
        />
      </div>
      <div className="px-4 relative pb-8 pt-16 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div>
            <p className="text-secondaryLight lg:mb-2 text-center text-2xl font-cursive md:text-4xl">
              Ground for gamers
            </p>
            <h2
              className={`text-center uppercase whitespace-nowrap text-white mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl ${
                offers.length < 1 && "md:text-5xl lg:text-7xl"
              } sm:leading-none`}
            >
              All the cards you need
            </h2>
            {offers.length > 0 && (
              <div className="relative">
                <Slider ref={offersSlider} {...settings}>
                  {offers.map((offer, idx) => (
                    <div
                      className="w-10/12 relative mx-auto mb-5 px-10"
                      key={idx}
                    >
                      <Link href={offer.link}>
                        <a>
                          <div className="lg:aspect-[16/5] aspect-video relative overflow-hidden rounded-2xl">
                            <Image src={offer.coverImage.url} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </Slider>
                <div
                  className="cursor-pointer w-10 text-2xl h-10 rounded-full bg-dark top-1/2 flex justify-center items-center transform -translate-y-1/2 absolute left-20 z-2 text-white"
                  onClick={() => offersSlider.current.slickPrev()}
                >
                  <FiChevronLeft />
                </div>
                <div
                  className="cursor-pointer w-10 text-2xl h-10 rounded-full bg-dark top-1/2 flex justify-center items-center transform -translate-y-1/2 absolute right-20 z-2 text-white"
                  onClick={() => offersSlider.current.slickNext()}
                >
                  <FiChevronRight />
                </div>
              </div>
            )}
            {offers.length < 1 && (
              <div className="max-w-xl sm:mx-auto lg:max-w-2xl mb-5">
                <p className="text-white opacity-70 font-thin text-center md:leading-6 leading-7 px-6 md:px-0 font-display uppercase md:text-lg">
                  Our focus is to eliminate any financial or technical hiccups
                  that can prevent customers from purchasing their desired
                  products.
                </p>
              </div>
            )}
          </div>
          <div className="text-center">
            <Link href="/shop">
              <a className="inline-flex items-center justify-center h-12 px-10 tracking-wide text-black transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-secondaryLight hover:bg-white focus:shadow-outline focus:outline-none">
                <span className="mr-2 text-2xl">
                  <TiShoppingCart />
                </span>
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
