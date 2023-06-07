import { FaFacebookF } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

import Link from "next/link";
import Collapse from "./Global/Collapse";
const getCurrentYear = () => {
  return new Date().getFullYear();
};

const FooterLinks = {
  Legal: [
    {
      title: "Delivery and Refund Policy",
      links: "/refund-policy",
    },
    {
      title: "Terms and Conditions",
      links: "/terms-and-conditions",
    },
    {
      title: "Privacy Policy",
      links: "/privacy-policy",
    },
    {
      title: "Disclaimer",
      links: "/disclaimer",
    },
  ],
  Quick: [
    {
      title: "FAQ",
      links: "/faq",
    },
    {
      title: "Career",
      links: "/career",
    },
    {
      title: "About Us",
      links: "/about",
    },
    {
      title: "Contact Us",
      links: "/contact",
    },
  ],
  Social: [
    {
      title: "facebook.com/colissiaglobal",
      links: "http://facebook.com/colissiaglobal",
      icon: <FaFacebookF />,
    },
    {
      title: "contact@colissia.com",
      links: "mailto:contact@colissia.com",
      icon: <GrMail />,
    },
    {
      title: "+880 1608563609",
      links: "tel:+8801608563609",
      icon: <RiPhoneFill />,
    },
  ],
};
const Footer = () => {
  return (
    <div className="relative mt-24 bg-transparent">
      <div className="absolute w-full -translate-y-full top-0 left-0  lg:block">
        <svg
          viewBox="0 0 1777 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", top: "1px" }}
        >
          <path
            d="M1025 31.7798C1295.96 7 1470.73 0.805046 1549.32 13.195C1627.9 25.5849 1692.8 47.8532 1744 80L1025 58.9037V31.7798Z"
            fill="#C27B43"
          />
          <path
            d="M0.760742 110.412C68.5312 39.1171 190.287 -5.06574 284.801 0.959208C379.314 6.98416 822.79 15.352 1700.5 51.1668C1754.26 55.9119 1763.51 57.3849 1776.51 63.9119C1776.84 74.6228 1776.84 92.6718 1776.51 110.412H0.760742Z"
            fill="#292a44"
          />
        </svg>
      </div>
      <div className="bg-[#292a44]">
        <div className="relative mx-auto container max-w-screen-2xl pt-4 lg:pt-8">
          {/* Desktop version */}

          <div className="relative grid-cols-2 gap-1 px-4 pb-0 text-center text-white lg:px-20 lg:-top-12 xl:grid-cols-4 lg:justify-self-start 2xl:grid-cols-5 hidden lg:grid">
            <div className="col-span-3 xl:col-span-1 2xl:col-span-2 leading-118.5 pr-0 text-center text-base lg:pr-8 lg:text-left lg:col-span-3">
              <div className="flex justify-center text-center">
                <Link href="/">
                  <div className="px-6 py-1 my-4 bg-white cursor-pointer rounded-xl">
                    <img
                      src="../img/logo.svg"
                      className="w-20 h-auto text-center"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className="px-0 text-sm sm:px-6 xl:px-0 2xl:px-8">
                <p className="mb-2 tracking-wider text-center text-muted">
                  Our focus is to eliminate any financial or technical hiccups
                  that can prevent customers from purchasing their desired
                  products.{" "}
                </p>
                <p className="mb-0 tracking-wider text-center text-muted">
                  This website is operated and maintained by{" "}
                  <span className="font-semibold text-primaryLight2">
                    Colissia Global Ltd
                  </span>
                  , a Bangladeshi Registered Company.
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <div className="relative inline-flex flex-col sm:flex-row">
                  <a
                    href="/"
                    className="w-32 mt-2 mr-0 transition duration-300 sm:mr-1 sm:mt-0 hover:shadow-dashbord"
                  >
                    <img
                      src="https://kitwind.io/assets/kometa/google-play.png"
                      className="object-cover object-top w-full h-auto mx-auto"
                      alt=""
                    />
                  </a>

                  <a
                    href="/"
                    className="w-32 mt-2 mr-0 transition duration-300 sm:ml-1 sm:mt-0 hover:shadow-dashbord"
                  >
                    <img
                      src="https://kitwind.io/assets/kometa/app-store.png"
                      className="object-cover object-top w-full h-auto mx-auto"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full pr-1.5 sm:pr-4 ml-1.5 text-center lg:mt-16 mt-14 lg:w-56 lg:ml-8 lg:text-left md:col-span-1 lg:col-span-1">
              <h5 className="w-full mb-5 text-lg font-medium uppercase border-b-2 border-primary lg:text-xl lg:w-5 duration-900 transition-width hover:w-10 lg:whitespace-nowrap font-body ">
                Legal Pages
              </h5>
              <div className="text-sm list-none lg:text-base grid gap-2">
                {FooterLinks.Legal.map((item, index) => (
                  <Link href={item.links}>
                    <a className="mb-2 transition duration-300 cursor-pointer text-muted hover:text-primary">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-1.5 ml-0 text-center lg:mt-16 mt-14 lg:ml-8 lg:text-left md:col-span-1 lg:col-span-1">
              <h5 className="w-full mb-5 text-lg font-medium uppercase border-b-2 border-primary lg:text-xl lg:w-5 duration-900 transition-width hover:w-10 lg:whitespace-nowrap font-body">
                Quick Links
              </h5>
              <div className="text-sm list-none lg:text-base grid gap-2">
                {FooterLinks.Quick.map((item, index) => (
                  <Link href={item.links}>
                    <a className="mb-2 transition duration-300 cursor-pointer text-muted hover:text-primary">
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative w-full col-span-3 mb-10 ml-0 text-center lg:mb-0 md:block lg:-left-20 xl:-left-4 lg:mt-16 lg:w-52 mt-14 lg:text-left md:col-span-2 lg:col-span-1">
              <h5 className="w-full mb-5 text-lg font-medium uppercase border-b-2 border-primary lg:text-xl lg:w-5 duration-900 transition-width hover:w-10 lg:whitespace-nowrap font-body ">
                Get In Touch
              </h5>
              <div className="text-sm list-none lg:text-base grid gap-2">
                {FooterLinks.Social.map((item, index) => (
                  <div className="inline-flex mb-2">
                    <a
                      className="inline-flex items-center group"
                      href={item.links}
                      target="_blank"
                    >
                      <p className="mr-2 transition duration-300 text-primary group-hover:text-muted">
                        {item.icon}
                      </p>

                      <span className="text-base transition duration-300 group-hover:text-primary group-hover:underline text-muted hover:text-primary hover:underline">
                        {item.title}
                      </span>
                    </a>
                  </div>
                ))}

                <div className="inline-flex mb-2 group">
                  <p className="mr-2 transition duration-300 text-primary group-hover:text-muted">
                    <MdLocationOn />
                  </p>
                  <span className="relative text-base leading-none text-left break-words w-52 min-w-max text-muted">
                    <p className="mb-2 break-words max-w-15 2xl:max-w-sm">
                      Alif Laam Meem, House#27/4, Road #Beradanga-2
                    </p>
                    <p className="mb-2 break-words max-w-15 2xl:max-w-sm">
                      Rajbari, Dhaka, Bangladesh - 7700
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone version */}
          <div className="lg:hidden">
            <div className="text-center pb-8">
              <div className="flex justify-center text-center">
                <Link href="/">
                  <div className="px-6 py-1 my-4 bg-white cursor-pointer rounded-xl">
                    <img
                      src="../img/logo.svg"
                      className="w-20 h-auto text-center"
                      alt="image"
                    />
                  </div>
                </Link>
              </div>
              <div className="px-0 text-sm sm:px-6 xl:px-0 2xl:px-8">
                <p className="mb-2 tracking-wider text-center text-muted">
                  Our focus is to eliminate any financial or technical hiccups
                  that can prevent customers from purchasing their desired
                  products.{" "}
                </p>
                <p className="mb-0 tracking-wider text-center text-muted">
                  This website is operated and maintained by{" "}
                  <span className="font-semibold text-primaryLight2">
                    Colissia Global Ltd
                  </span>
                  , a Bangladeshi Registered Company.
                </p>
              </div>
            </div>
            <div className="grid gap-2 pb-16">
              <Collapse title="LEGAL PAGES">
                <div className="mt-2 space-y-2">
                  {FooterLinks.Legal.map((item, idx) => (
                    <Link key={idx} href={item.links}>
                      <a className="text-gray-400 block transition-colors duration-300 hover:text-primary">
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </Collapse>
              <Collapse title="QUICK LINKS">
                <div className="mt-2 space-y-2">
                  {FooterLinks.Quick.map((item, idx) => (
                    <Link key={idx} href={item.links}>
                      <a className="text-gray-400 block transition-colors duration-300 hover:text-primary">
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </div>
              </Collapse>
              <Collapse title="GET IN TOUCH">
                <div className="mt-2 space-y-2">
                  {FooterLinks.Social.map((item, index) => (
                    <div className="mb-2">
                      <a
                        className="inline-flex items-center group"
                        href={item.links}
                      >
                        <p className="mr-2 transition duration-300 text-primary group-hover:text-muted">
                          {item.icon}
                        </p>

                        <span className="text-base transition duration-300 group-hover:text-primary group-hover:underline text-muted hover:text-primary hover:underline">
                          {item.title}
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              </Collapse>
              <div className="text-muted pb-10">
                <p className="text-sm">
                  © 2019-<span>{getCurrentYear()}</span>{" "}
                  <span className="font-semibold text-primary">|</span> All
                  Rights Reserved{" "}
                  <span className="font-semibold text-primary">|</span> Powered
                  by{" "}
                  <span className="relative text-primaryLight2">
                    {" "}
                    Colissia Global Ltd
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center hidden py-1 align-middle border-t lg:flex bg-darker border-lightDark">
        <div className="container flex justify-center mx-auto lg:flex lg:max-w-screen-xl md:px-14 lg:px-32">
          <div className="items-center justify-center p-0 m-0 text-center lg:text-left lg:inline-flex grig text-muted">
            <p>
              © 2019-<span>{getCurrentYear()}</span>{" "}
              <span className="font-semibold text-primary">|</span> All Rights
              Reserved <span className="font-semibold text-primary">|</span>{" "}
              Powered by{" "}
              <span className="relative text-primaryLight2">
                {" "}
                Colissia Global Ltd
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
