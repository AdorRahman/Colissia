import { Fragment, useContext, useEffect, useState } from "react";
import { FaPlus, FaUsers } from "react-icons/fa";
import {
  BiArrowBack,
  BiCategory,
  BiFoodMenu,
  BiMessageDetail,
} from "react-icons/bi";
import Link from "next/link";
import ActiveLink from "@components/ActiveLink";
import { RiAdminFill, RiLogoutBoxRLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { IoIosImages, IoMdSettings } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { AiOutlineBarcode, AiOutlineTags } from "react-icons/ai";
import AuthContext from "@lib/authContext";
import LoadingScreen from "@components/LoadingScreen";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import AdminSidebar from "@components/Admin/AdminSidebar";
import useMediaQuery from "@lib/hooks/useMediaQuery";
import toast from "react-hot-toast";
import { ProductContext } from "@lib/context/productContext";
import { GlobalContext } from "@lib/globalContext";

export const adminSidebarTabs = [
  { icon: <BiFoodMenu />, title: "Orders", href: "/admin" },
  { icon: <BsBox />, title: "Products", href: "/admin/products" },
  { icon: <BiCategory />, title: "Categories", href: "/admin/categories" },
  { icon: <FaUsers />, title: "Customers", href: "/admin/customers" },
  { icon: <IoIosImages />, title: "Media", href: "/admin/media" },
  { icon: <AiOutlineBarcode />, title: "Game Codes", href: "/admin/codes" },
  { icon: <AiOutlineTags />, title: "Coupons", href: "/admin/coupons" },
  {
    icon: <IoMdSettings />,
    title: "Others",
    href: "/admin/others",
  },
];
const AdminLayout = ({ children, title, cta }) => {
  const { productsIsLoading } = useContext(ProductContext);
  const { currencyDataIsLoading } = useContext(GlobalContext);
  const { user, userIsLoading } = useContext(AuthContext);
  const [showAdimnSidebar, setShowAdminSidebar] = useState(false);
  const router = useRouter();
  const isSm = useMediaQuery("(max-width: 640px)");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubs = async () => {
      if (!isSm) {
        setShowAdminSidebar(false);
      }
    };
    unsubs();
  }, [isSm]);

  useEffect(() => {
    const unsubs = async () => {
      if (!userIsLoading && !user) {
        return router.replace({
          pathname: "/login",
          query: { next: "/admin" },
        });
      } else {
        if (user) {
          const token = await user.getIdTokenResult();
          if (!!token.claims.admin) {
            setIsAdmin(true);
          } else {
            toast.error("You are not an admin!");
            router.push("/");
          }
        }
      }
    };
    unsubs();
  }, [user, userIsLoading]);

  if (
    userIsLoading ||
    !user ||
    !isAdmin ||
    productsIsLoading ||
    currencyDataIsLoading
  ) {
    return <LoadingScreen bg="bg-white" />;
  }

  return (
    <Fragment>
      <AdminSidebar
        isOpen={showAdimnSidebar}
        closeModal={() => setShowAdminSidebar(false)}
      />
      <div
        data-theme="bumblebee"
        className="flex mx-auto h-screen w-full bg-white"
      >
        <aside className="lg:w-1/5 hidden  w-[70px] items-center lg:items-baseline lg:min-w-[250px] lg:overflow-y-auto border-r px-2 lg:px-6 py-2 sm:flex sm:flex-col justify-between">
          <div className="w-full">
            <a
              onClick={() => router.back()}
              className="h-12 w-12 cursor-pointer flex justify-center items-center ml-1 mb-4 hover:text-primaryLight text-3xl text-primary duration-300"
            >
              <BiArrowBack />
            </a>
            <div className="">
              {adminSidebarTabs.map((tab) => (
                <ActiveLink
                  key={tab.title}
                  activeClassName="!text-primary"
                  href={tab.href}
                >
                  <a className="focus:outline-none hover:text-primary text-primary-900 flex items-center py-2 px-4 hover:bg-primaryLight/30 rounded-full mr-auto mb-3">
                    <i className="text-2xl lg:mr-4 text-left">{tab.icon}</i>
                    <p className="text-lg whitespace-nowrap font-semibold text-left hidden lg:block">
                      {tab.title}
                    </p>
                  </a>
                </ActiveLink>
              ))}
            </div>
            {cta && (
              <Link href={cta?.url || "/admin"}>
                <a className="flex justify-center items-center text-white bg-primary rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-primary-300">
                  <p className="hidden lg:block capitalize">{cta?.title}</p>
                  <i className="lg:hidden">
                    <FaPlus />
                  </i>
                </a>
              </Link>
            )}
          </div>
          <div className="lg:w-full relative mt-16">
            <Link href="/logout">
              <a className="focus:outline-none text-primary-600 hover:text-primary-400 duration-300 flex items-center py-2 px-4 rounded-full mr-auto mb-3">
                <i className="text-2xl mr-4 text-left">
                  <RiLogoutBoxRLine />
                </i>
                <p className="text-lg font-semibold text-left hidden lg:block">
                  Logout
                </p>
              </a>
            </Link>
          </div>
        </aside>
        {/* Main section */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto flex-1">
          <div className="px-5 py-3 border-b border-lighter sticky top-0 flex items-center justify-between bg-white z-10">
            <div className="flex gap-2 items-center">
              <span className="sm:hidden">
                <a
                  onClick={() => {
                    setShowAdminSidebar(true);
                  }}
                >
                  <HiMenuAlt2 />
                </a>
              </span>
              <h1 className="text-xl font-bold text-primary-900">
                {title || "Admin"}
              </h1>
            </div>
            <div className="text-right">
              <div className="border-2 outline-none focus:outline-none border-gray-200 dark:border-gray-600 relative rounded-full overflow-hidden w-11 h-11">
                <Image
                  src={user.photoURL || "/img/avatar.svg"}
                  width={44}
                  height={44}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-3">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
