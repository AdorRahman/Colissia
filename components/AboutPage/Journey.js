import Image from "next/image";
import { GoPrimitiveDot } from "react-icons/go";

const Items = [
  {
    event: "Founded",
    date: "25th March, 2019",
    text: `Customers came to know about us by the name "Colissia Game Shop"`,
  },
  {
    event: "Website",
    date: "22nd January, 2020",
    text: `We came live with this URL, where all the customers can securely purchase their product with just a click.`,
  },
  {
    event: "Global Reach",
    date: "March, 2020",
    text: `Satisfied customers from Singapore, Malaysia, Egypt, Italy, United States and some other countries as well.`,
  },
  {
    event: "Renowned Partners",
    date: "June, 2020",
    text: `Internationally prominent companies being teammate, started to provide products and support to our happy customers.`,
  },
  {
    event: "Ever Growing",
    date: "September, 2020",
    text: `More then 10000 products delivered to our cheerful shoppers from various part of our planet.`,
  },
];
const Journey = () => {
  return (
    <div className="bg-dark">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <h2 className="uppercase max-w-lg mb-6 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
          Journey of Colissia Global Ltd
        </h2>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            {Items.map((item, idx) => (
              <div className="flex" key={item.event}>
                {console.log(Items.length, idx + 1)}
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div
                      className={`flex items-center justify-center w-6 h-6 md:h-8 md:w-8 border  rounded-full ${
                        idx + 1 == Items.length
                          ? "border-primary text-primary"
                          : "border-body text-body"
                      }`}
                    >
                      <i className="text-2xl md:text-3xl">
                        <GoPrimitiveDot />
                      </i>
                    </div>
                  </div>
                  {idx + 1 == Items.length ? null : (
                    <div className="w-px h-full bg-body" />
                  )}
                </div>
                <div className="pt-1 pb-8">
                  <div className="mb-2">
                    <p className="text-lg text-white font-bold">{item.event}</p>
                    <p className="text-sm text-primary font-bold">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-body">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="overflow-hidden inset-0 object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full">
              <Image
                src="/img/about-journey-bg.jpeg"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
