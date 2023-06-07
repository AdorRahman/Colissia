import AdminLayout from "@components/AdminLayout";
import { useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import OffersAdmin from "@components/Admin/Offers";
import BannerAdmin from "@components/Admin/Banner";
import CurrencyAdmin from "@components/Admin/Currency";
import SettingsAdmin from "@components/Admin/Settings";

const Others = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  let [categories] = useState({
    Settings: [
      {
        id: 1,
        content: <SettingsAdmin />,
      },
    ],
    Banners: [
      {
        id: 2,
        content: <BannerAdmin />,
      },
    ],
    Offers: [
      {
        id: 3,
        content: <OffersAdmin />,
      },
    ],
    Currency: [
      {
        id: 4,
        content: <CurrencyAdmin />,
      },
    ],
  });
  return (
    <Fragment>
      <div className="w-full mx-auto px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-primary rounded-t-md">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-primary rounded",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow font-semibold"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className=" border rounded-b-md border-primary p-2 lg:p-4">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "bg-white dark:bg-gray-700 rounded-xl p-3",
                  "focus:outline-none"
                )}
              >
                {posts.map((post, idx) => (
                  <div key={idx}>{post.content}</div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Fragment>
  );
};
Others.layout = AdminLayout;
Others.title = "Others";
export default Others;
