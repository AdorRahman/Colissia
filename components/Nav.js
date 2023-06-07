import Menu from "./MobileMenu/Menu";
import { motion, useViewportScroll } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import Link from "next/link";
import { AiFillShopping } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import ActiveLink from "./ActiveLink";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import GameTopUpMenu from "./Ecommerce/GameTopUpMenu";
import CartIcon from "./Ecommerce/CartIcon";
import WishlistIcon from "./WishlistIcon";
import { GlobalContext } from "../lib/globalContext";
import Search from "./Ecommerce/Search";
import ConsoleMenu from "./Ecommerce/ConsoleMenu";
import MobileMenu from "./Ecommerce/MobileMenu";
import PcMenu from "./Ecommerce/PcMenu";
import SoftwareMenu from "./Ecommerce/SoftwareMenu";

const variants = {
  visible: { y: 0 },
  hidden: { y: -100 },
};

const mobileBottomNavItems = [
  {
    name: "Home",
    icon: <ImHome />,
    href: "/",
  },
  {
    name: "Shop",
    icon: <AiFillShopping />,
    href: "/shop",
  },
  {
    name: "Cart",
    icon: <CartIcon />,
    href: "/cart",
  },
  {
    name: "Wishlist",
    icon: <WishlistIcon />,
    href: "/dashboard/wishlist",
  },
  {
    name: "Account",
    icon: <FaUser />,
    href: "/dashboard",
  },
];

const Nav = () => {
  // const [hidden, setHidden] = useState(false);
  // const { scrollY } = useViewportScroll();
  // function update() {
  //   if (scrollY?.current < scrollY?.prev) {
  //     setHidden(false);
  //     console.log("visible");
  //   } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
  //     setHidden(true);
  //     console.log("hidden");
  //   }
  // }
  // useEffect(() => {
  //   return scrollY.onChange(() => update());
  // });
  const [smallNav, setSmallNav] = useState(false);
  const { scrollY } = useViewportScroll();
  function update() {
    if (scrollY?.current > 150) {
      setSmallNav(true);
    } else {
      setSmallNav(false);
    }
  }
  useEffect(() => {
    scrollY.onChange(() => update());
  });
  const { getNotice, noticeDataIsLoading, currencyCode, setcurrencyCode } =
    useContext(GlobalContext);
  return (
    <>
      <nav
        // variants={variants}
        // animate={hidden ? "hidden" : "visible"}
        // transition={{ ease: [0.1, 0.25, 0.3, 1] }}
        className={`fixed top-0 left-0 z-40 w-full ${
          !noticeDataIsLoading && getNotice?.enable
            ? "py-0 pb-3"
            : "py-5 lg:py-3"
        } standalone:pt-safe-top bg-dark bg-opacity-80 backdrop-filter backdrop-saturate-150 backdrop-blur-lg border-b border-lightDark`}
      >
        {!noticeDataIsLoading ? (
          getNotice?.enable ? (
            <div
              style={{ background: getNotice?.bgColor || "#2895D9" }}
              className="relative top-0 flex items-center justify-center w-full h-12 px-10 mb-3 font-semibold text-center text-white marquee z-41"
            >
              <div>
                <span>{getNotice.message}</span>
                <span>{getNotice.message}</span>
              </div>
            </div>
          ) : null
        ) : null}
        <div className="flex items-center justify-between w-full h-full lg:hidden">
          <Menu />
          <div />
          <div className="ml-8 font-semibold text-white"></div>
          <div className="mr-8 text-primary">
            <Search />
          </div>
        </div>
        <div className="items-center justify-between hidden px-10 lg:flex ">
          <div className="flex items-center w-nav">
            <Link href="/">
              <a
                className={`bg-white inline-flex  transition-all ease-fav duration-500 ${
                  smallNav ? "w-20 h-14 rounded-xl" : "w-36 h-24 rounded-2xl"
                } justify-center items-center`}
              >
                <div
                  className={`relative  transition-all ease-fav duration-500 ${
                    smallNav ? "w-14 h-14" : "w-24 h-24"
                  }`}
                >
                  <Image
                    src="/img/logo.svg"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div>
            <div className="flex text-primaryLight">
              <span className="mx-4">
                <PcMenu />
              </span>
              <span className="mx-4">
                <ConsoleMenu />
              </span>
              <span className="mx-4">
                <MobileMenu />
              </span>
              <span className="mx-4">
                <GameTopUpMenu />
              </span>
              <span className="mx-4">
                <SoftwareMenu />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 text-primaryLight w-nav">
            <Search />
            {/* <Link href="/dashboard/wishlist">
              <a className="text-xl transition-colors hover:text-primary">
                <WishlistIcon />
              </a>
            </Link> */}
            <Link href="/cart">
              <a className="text-xl transition-colors hover:text-primary">
                <CartIcon />
              </a>
            </Link>
            <select
              value={currencyCode}
              onChange={(e) => setcurrencyCode(e.target.value)}
              className="w-24 h-full bg-transparent border-none appearance-none focus:border-none focus:outline-none active:border-none focus:ring-0"
            >
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
            </select>
            <Link href="/dashboard">
              <a className="px-3 py-1 transition border-2 rounded border-primaryLight hover:bg-primary hover:border-primary hover:text-white">
                Dashboard
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile tab view */}
      <div className="fixed bottom-0 left-0 z-40 flex items-center w-screen py-3 border-t justify-evenly lg:hidden standalone:pb-safe-bottom border-lightDark bg-darker bg-opacity-80 backdrop-filter backdrop-saturate-150 backdrop-blur-xl">
        {mobileBottomNavItems.map((item) => (
          <div className="text-body" key={item.name}>
            <ActiveLink activeClassName="text-primary" href={item.href}>
              <a className="flex flex-col items-center justify-center md:flex-row">
                <span className="text-2xl md:mr-2 md:text-lg">{item.icon}</span>
                <p className="text-xs sm:text-sm">{item.name}</p>
              </a>
            </ActiveLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
