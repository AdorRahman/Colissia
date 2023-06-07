import Image from "next/image";
import Link from "next/link";
const PageTitle = (props) => {
  return (
    <section className="relative bg-gray-700">
      <div className="absolute w-full h-full inset-0">
        {/* <Image layout="fill" src={props.img} objectFit="cover" /> */}
      </div>
      <div className="relative py-28">
        <h2 className="text-white uppercase text-center text-5xl">
          {props.title}
        </h2>
        <div className="flex justify-center mt-3">
          <Link href="/">
            <a className="uppercase text-white font-semibold text-sm hover:text-primary transition-colors">
              Home
            </a>
          </Link>
          <span className="text-white font-semibold mx-3 text-sm opacity-80">
            /
          </span>
          {props.breadcrumbs && <a>{props.breadcrumbs}</a>}
          <p className="uppercase text-primary font-semibold text-sm">
            {props.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
