import Footer from "./Footer";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import { GlobalContext } from "@lib/globalContext";
import { useContext } from "react";
import LoadingScreen from "./LoadingScreen";

const ShopLayout = ({ children }) => {
  const { getNotice, noticeDataIsLoading } = useContext(GlobalContext);

  if (noticeDataIsLoading) return <LoadingScreen />;

  return (
    <>
      <Nav />
      <div className={`${getNotice?.enable ? "pt-[170px]" : "pt-[120px]"}`}>
        <PageTitle title="Shop" />
        <div className="bg-dark pt-4 pb-24 min-h-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default ShopLayout;
