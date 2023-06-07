import { ImQuotesLeft } from "react-icons/im";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialCard = ({ name, role, image, caption, text }) => {
  return (
    <div className="pt-14 sm:px-3 mb-10">
      <div className="w-full bg-darker rounded-xl relative px-16 pt-24 pb-16">
        <div className="rounded-full overflow-hidden inline-block absolute bg-dark left-1/2 transform -translate-x-1/2 -top-14 w-28 h-28">
          <Image
            src={image ? image : "/img/testimonials/no-avatar.png"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-lightDark absolute -top-2 right-2 text-8xl opacity-30">
          <ImQuotesLeft />
        </div>
        <div className="relative text-center uppercase font-semibold text-2xl text-white font-display">
          {name}
        </div>
        <div className="text-primary text-center uppercase font-semibold text-sm">
          {role}
        </div>
        <div className="text-body italic text-center mt-8 line-clamp-3 h-18 overflow-hidden">
          <b>{caption}</b> {text}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
