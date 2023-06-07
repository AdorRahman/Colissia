import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const items = [
  {
    name: "Fahim Doula",
    role: "Gamer",
    image: "/img/testimonials/01.jpeg",
    text: "I’ve purchased many products from Colissia. They’re honestly one of the best online sellers in Bangladesh. The admin is very friendly and humble. Above all, he actually cares about customers and has big ambitions to do great things for our benefit. I fully support them and fully believe that with enough time, effort and support from us customers, Colissia will be THE number one storefront for shopping all types of digital products (Video games, software and more) in Bangladesh.",
  },
  {
    name: "Farhan Sadik Zisan",
    role: "Gamer",
    image: "/img/testimonials/02.jpeg",
    caption: "Awesome Experience!",
    text: "I recommend purchasing from them. They are so friendly, and can serve you the best service!",
  },
  {
    name: "Mohammad Khan",
    role: "Gamer",
    caption: "Maximum Satisfaction",
    text: "Very FAST and Trustworthy, was looking for a site that accepts rocket payment, at least we can say better than Daraz. Genuine and Honest and Fast 👏👏✌🎉🌹👍💕",
  },
  {
    name: "Shafin Chowdhury",
    role: "Gamer",
    image: "/img/testimonials/04.jpeg",
    text: "Very good price and Very fast service. I wish I knew about Colissia Game shop before!",
  },
];
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="text-primary cursor-pointer absolute text-2xl xl:text-3xl top-1/2 transform -translate-y-1/2 -right-6 xl:-right-8"
      onClick={onClick}
    >
      <FiChevronRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="text-primary cursor-pointer absolute text-2xl xl:text-3xl top-1/2 transform -translate-y-1/2 -left-6 xl:-right-8"
      onClick={onClick}
    >
      <FiChevronLeft />
    </div>
  );
};
const CustomDots = (dots) => {
  return (
    <ul>
      {dots.map((dot, idx) => (
        <li key={idx}>
          <div
            className={`w-3 h-3 ${
              dot.props.className == "slick-active"
                ? "bg-white"
                : "border border-white"
            } rounded-full`}
          />
        </li>
      ))}
    </ul>
  );
};
const settings = {
  dots: true,
  // arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => (
    <div className="w-3 h-3 rounded-full border border-white" />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Testimonials = () => {
  return (
    <div className="bg-lightDark">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <h2 className="uppercase mb-16 text-center text-white font-bold text-3xl sm:text-4xl sm:leading-none">
          Testimonials
        </h2>
        <Slider {...settings}>
          {items.map((item, idx) => (
            <TestimonialCard
              name={item.name}
              role={item.role}
              image={item.image}
              caption={item.caption}
              text={item.text}
              key={idx}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
