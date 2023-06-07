import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import { BiSupport, BiHappyAlt } from "react-icons/bi";

const Features = () => {
  return (
    <div className="bg-darker relative">
      <div className="absolute w-full h-full inset-0">
        <Image
          layout="fill"
          src="/img/about-features-bg.jpeg"
          objectFit="cover"
        />
      </div>
      <div className="absolute w-full h-full inset-0 bg-dark opacity-90" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 text-6xl font-extrabold rounded-full text-primary sm:mx-auto">
              <BiHappyAlt />
            </div>
            <h2 className="mb-2 font-semibold text-5xl text-white">93%</h2>
            <p className="text-white uppercase inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400">
              customers recommend us
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 text-6xl font-extrabold rounded-full text-primary sm:mx-auto">
              <FaTruck />
            </div>
            <h2 className="mb-2 font-semibold text-5xl text-white">23,587+</h2>
            <p className="text-white uppercase inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400">
              products delivered
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4 text-6xl font-extrabold rounded-full text-primary sm:mx-auto">
              <BiSupport />
            </div>
            <h2 className="mb-2 font-semibold text-5xl text-white">24x7</h2>
            <p className="text-white uppercase inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400">
              constant support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
