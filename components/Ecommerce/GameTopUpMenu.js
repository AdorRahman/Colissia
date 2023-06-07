import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { motion, useViewportScroll } from "framer-motion";
import { useContext, useEffect, useState, Fragment } from "react";
import Image from "@components/Image";

const GameTopUpMenu = () => {
  const [smallNav, setSmallNav] = useState(false);
  const { scrollY } = useViewportScroll();
  function update() {
    if (scrollY?.current >= 100) {
      setSmallNav(true);
    } else {
      setSmallNav(false);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      onMouseDown={() => setShowMenu(false)}
    >
      <a className="cursor-pointer">Game Top-Up</a>
      <Transition
        show={showMenu}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-5 scale-y-90"
        enterTo="opacity-100 translate-y-0 scale-y-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0 scale-y-100"
        leaveTo="opacity-0 translate-y-5 scale-y-95"
      >
        <div className="absolute left-0 w-full transform shadow-xl">
          <div
            className={`pb-10  border-t bg-dark border-primaryLight ${
              smallNav ? "mt-7" : "mt-12"
            }`}
          >
            <div className="grid max-w-screen-xl grid-cols-4 gap-10 px-5 mx-auto">
              <div className="w-full pt-5">
                <div className="relative overflow-hidden rounded-lg aspect-[5/3]">
                  <Image
                    src="/img/apex-menu.jpeg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    Apex Legend Coins
                  </a>
                </Link>
              </div>
              <div className="w-full pt-5">
                <div className="relative overflow-hidden rounded-lg aspect-[5/3]">
                  <Image
                    src="/img/pubg-menu.webp"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    PUBG Mobile UC
                  </a>
                </Link>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    Free Fire Diamond
                  </a>
                </Link>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    PUBG Mobile Lite BC
                  </a>
                </Link>
              </div>
              <div className="w-full pt-5">
                <div className="relative overflow-hidden rounded-lg aspect-[5/3]">
                  <Image
                    src="/img/valorant-menu.jpeg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    Valorant Points
                  </a>
                </Link>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    League of Legends RP
                  </a>
                </Link>
              </div>
              <div className="w-full pt-5">
                <div className="relative overflow-hidden rounded-lg aspect-[5/3]">
                  <Image
                    src="/img/fort-menu.jpeg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Link href="/top-up/apex-coin">
                  <a className="flex items-center mt-2 transition-colors hover:text-primary">
                    <span className="mr-1 text-xl">
                      <FaCaretRight />
                    </span>
                    Fortnite V-Bucks Card
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default GameTopUpMenu;
