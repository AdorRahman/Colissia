import React, { useEffect, useContext } from "react";
import Router, { useRouter } from "next/router";
import AuthContext from "../lib/authContext";
import { GlobalContext } from "@lib/globalContext";
const AuthLayout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { isBusy } = useContext(GlobalContext);
  const router = useRouter();
  const path = router.query["next"];
  const nextPath = path ? path : "/";
  useEffect(() => {
    if (user) {
      if (!isBusy) {
        Router.push(nextPath);
      }
    }
  }, [user, isBusy]);
  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthLayout;
