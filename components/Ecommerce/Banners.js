import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "@components/Image";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
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
  ],
};
const Banners = ({ banners }) => {
  if (banners.length === 0) return <></>;
  return (
    <div className="w-full overflow-x-hidden my-16">
      <Slider {...settings}>
        {banners.map((banner, idx) => (
          <div className="w-1/4 relative" key={idx}>
            <Link href={banner.link}>
              <a>
                <div className="aspect-[5/7] bg-lightDark relative overflow-hidden cursor-pointer">
                  <div className="banner-image w-full h-full transition-all duration-500 transform hover:scale-110">
                    <Image src={banner.coverImage.url} />
                  </div>
                </div>
              </a>
            </Link>
            <div className="text-white pointer-events-none absolute left-0 top-1/2 transform -translate-y-1/2 bg-darker bg-opacity-50 text-center w-full px-5 py-3">
              <h2>{banner.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
