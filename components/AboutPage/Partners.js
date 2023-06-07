import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-dark relative">
      <div className="absolute w-full h-full inset-0">
        <Image
          layout="fill"
          src="/img/about-partners-bg.jpeg"
          objectFit="cover"
        />
      </div>
      <div className="absolute w-full h-full inset-0 bg-dark opacity-90" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-32">
        <h2 className="uppercase mb-16 text-center text-white font-bold text-3xl sm:text-4xl sm:leading-none">
          Our Partners
        </h2>
        <div className="flex items-start flex-wrap flex-col md:flex-row justify-center">
          <div className="text-center w-full md:w-[30%] md:p-6">
            <a href="https://win-rar.com/" target="_blank">
              <Image
                src="/img/partners-logo-01.png"
                layout="responsive"
                width={500}
                height={142}
              />
            </a>
          </div>
          <div className="text-center w-full md:w-[30%] md:p-6">
            <a
              className="w-12 h-auto relative"
              href="https://www.tonec.com/"
              target="_blank"
            >
              <Image
                src="/img/partners-logo-02.png"
                layout="responsive"
                width={500}
                height={142}
              />
            </a>
          </div>
          <div className="text-center w-full md:w-[30%] md:p-6">
            <a
              className="w-12 h-auto relative"
              href="https://www.acdsee.com/"
              target="_blank"
            >
              <Image
                src="/img/partners-logo-03.png"
                layout="responsive"
                width={483}
                height={142}
              />
            </a>
          </div>
          <div className="text-center w-full md:w-[30%] md:p-6">
            <a
              className="w-12 h-auto relative"
              href="https://nagad.com.bd/"
              target="_blank"
            >
              <Image
                src="/img/partners-logo-04.png"
                layout="responsive"
                width={483}
                height={142}
              />
            </a>
          </div>
          <div className="text-center w-full md:w-[30%] md:p-6">
            <a
              className="w-12 h-auto relative"
              href="https://shurjomukhi.com.bd/"
              target="_blank"
            >
              <Image
                src="/img/partners-logo-05.png"
                layout="responsive"
                width={483}
                height={142}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
