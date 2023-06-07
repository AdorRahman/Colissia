import { FaHome } from "react-icons/fa";
import { ImDrawer } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import ActiveLink from "@components/ActiveLink";

const tabs = [
  { icon: <FaHome />, title: "Dashboard", href: "/dashboard" },
  { icon: <ImDrawer />, title: "Orders", href: "/dashboard/orders" },
  { icon: <CgProfile />, title: "Profile", href: "/dashboard/profile" },
  { icon: <AiFillHeart />, title: "Wishlist", href: "/dashboard/wishlist" },
];
const DashboardNav = () => {
  return (
    <div className="border-t border-b md:border-b-0 border-gray-700">
      <div className="flex gap-12 items-center justify-evenly md:justify-center">
        {tabs.map((tab) => (
          <ActiveLink
            activeClassName="!text-primary md:border-t border-primary"
            key={tab.title}
            href={tab.href}
          >
            <a className="flex text-body/50 tracking-wider items-center gap-2 py-3 md:py-4 uppercase font-medium">
              <span className="text-2xl md:text-base">{tab.icon}</span>
              <span className="hidden md:block">{tab.title}</span>
            </a>
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;
