import React from "react";
import Router from "next/router";
import LoadingScreen from "./LoadingScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
const CheckoutLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  if (!loading) {
    if (!user) {
      Router.push({
        pathname: "/login",
        query: { next: Router.pathname },
      });
    }
  }
  if (!user) {
    return <LoadingScreen />;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default CheckoutLayout;
