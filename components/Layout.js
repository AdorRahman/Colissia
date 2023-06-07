import { ProductContext } from "@lib/context/productContext";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import Nav from "./Nav";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "@lib/globalContext";

const Layout = ({ children }) => {
  const { productsIsLoading } = useContext(ProductContext);
  const { currencyDataIsLoading, getNotice, noticeDataIsLoading } =
    useContext(GlobalContext);

  if (productsIsLoading || currencyDataIsLoading || noticeDataIsLoading)
    return <LoadingScreen />;
  return (
    <>
      <Nav />
      <div
        className={`${
          getNotice?.enable
            ? "pt-[90px] lg:pt-[170px]"
            : "pt-[58px] lg:pt-[120px]"
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
