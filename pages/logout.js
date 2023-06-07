import { useContext, useEffect } from "react";
import Router from "next/router";
import AuthLayout from "@components/AuthLayout";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import { auth } from "@lib/firebase";

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    auth.signOut();
    setUser(undefined);
    Router.push("/");
  }, []);
  return <LoadingScreen />;
};

Logout.layout = AuthLayout;
export default Logout;
