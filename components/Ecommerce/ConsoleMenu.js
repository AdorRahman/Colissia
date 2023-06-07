import Link from "next/link";
import { Fragment, useState } from "react";
import { FaPlaystation, FaXbox } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const ConsoleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      onMouseDown={() => setShowMenu(false)}
    >
      <a className="cursor-pointer">Console</a>
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
        <div className="absolute block transform shadow-xl">
          <div className="bg-dark flex flex-col space-y-2 mt-7 px-4 py-4 border-t border-primaryLight">
            <Link href="/psn">
              <a className="flex duration-300 hover:text-red-500 space-x-2 items-center">
                <FaPlaystation />
                <span>PlayStation Network Cards</span>
              </a>
            </Link>
            <Link href="/xbox">
              <a className="flex space-x-2 duration-300 hover:text-red-500 items-center">
                <FaXbox />
                <span>Xbox Gift Cards</span>
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ConsoleMenu;
