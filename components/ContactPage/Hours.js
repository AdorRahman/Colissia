import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

const OpeningHours = () => {
  return (
    <div className="bg-darker relative">
      <div className="absolute w-full h-full inset-0">
        <Image layout="fill" src="/img/hours-bg.jpeg" objectFit="cover" />
      </div>
      <div className="absolute w-full h-full inset-0 bg-dark opacity-90" />
      <div>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="max-w-xl sm:mx-auto lg:max-w-3xl">
            <h2 className="text-center uppercase mb-16 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
              BUSINESS HOURS
            </h2>
            <div className="grid gap-5 grid-cols-1">
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4 inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Monday – 10:00 AM Till 11:00 PM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Tuesday – 10:00 AM Till 11:00 PM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Wednesday – 10:00 AM Till 11:00 PM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Thursday – 10:00 AM Till 11:00 PM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Friday – 10:00 AM Till 2:00 AM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Saturday – 6:00 AM Till 2:00 AM</p>
              </div>
              <div className="text-xl text-body rounded-md bg-gray-600 bg-opacity-70 py-4 px-4  inline-flex justify-start items-center">
                <i className="mr-3 text-primary">
                  <FaRegClock />
                </i>
                <p>Sunday – 6:00 AM Till 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
