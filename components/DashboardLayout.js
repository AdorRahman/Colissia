import LoadingScreen from "./LoadingScreen";
import Router from "next/router";
import Nav from "./Nav";
import Footer from "./Footer";
import AuthContext from "@lib/authContext";
import { useContext, useEffect } from "react";
import DashboardHeader from "./Dashboard/Header";
import DashboardNav from "./Dashboard/Nav";
import { GlobalContext } from "@lib/globalContext";

const DashboardLayout = ({ children, title }) => {
  const { user, userIsLoading } = useContext(AuthContext);
  const { getNotice, noticeDataIsLoading } = useContext(GlobalContext);

  useEffect(() => {
    if (!userIsLoading && !user) {
      Router.push({
        pathname: "/login",
        query: { next: Router.pathname },
      });
    }
  }, [user, userIsLoading]);

  if (!user || userIsLoading || noticeDataIsLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Nav />
      <div
        className={`container mx-auto max-w-screen-2xl pb-24 ${
          getNotice?.enable ? "pt-[170px]" : "pt-[120px]"
        }`}
      >
        <DashboardHeader user={user} />
        <DashboardNav />
        <div className="pt-8">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
