import Image from "next/image";
const History = () => {
  return (
    <div className="bg-dark">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="uppercase max-w-lg mb-6 font-sans text-3xl font-bold text-white sm:text-4xl sm:leading-none">
                WELCOME TO Colissia Global Ltd.
              </h2>
              <p className="text-base text-body md:text-lg">
                Colissia was formed on 25th March, 2019.
                <br />
                It was known by the name of Colissia Game Shop earlier to it’s
                customers. Days were passing, more and more people from various
                parts of the world started to appreciate us for our service and
                support.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Start Shopping</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="4,4 22,4 19,14 4,14 "
                  />
                  <circle
                    cx="4"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <circle
                    cx="20"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="1,1 4,4 4,14 2,18 23,18 "
                  />
                </svg>
              </a>
              {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Get 15% discount
              </a> */}
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full">
            <div className="overflow-hidden relative w-full h-56 rounded shadow-lg sm:h-96 opacity-75">
              <Image
                src="/img/wasim-zadid.jpeg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default History;
