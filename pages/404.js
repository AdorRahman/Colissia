import Image from "next/image";
const Page404 = () => {
  return (
    <div className="relative bg-dark w-screen h-screen min-h-700 pt-28">
      <div className="w-full h-full absolute inset-0">
        <Image layout="fill" objectFit="cover" src="/img/404-bg.jpeg" />
      </div>
      <div className="relative text-center h-full w-full flex flex-col justify-between items-center">
        <div>
          <h1 className="text-primary font-black text-10xl leading-tight">
            404
          </h1>
          <h2 className="text-white font-semibold text-4xl uppercase">
            Sorry page not found!
          </h2>
        </div>
        <div className=" h-20 bg-dark w-full">
          <div className="flex justify-between items-center h-full mx-auto px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
            <p className="text-body">© 2019-2020, Colissia Global Ltd.</p>
            <p className="text-body">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
