import AuthLayout from "@components/AuthLayout";
import { useEffect, useState } from "react";
import LoginForm from "@components/Auth/LoginForm";
import Link from "next/link";
import RegisterForm from "@components/Auth/RegisterForm";
import { Transition } from "@headlessui/react";
import { DefaultSeo } from "next-seo";

const LoginPage = () => {
  const SEO = {
    title: `Curiouscraft | Login`,
  };
  const [registerIsSelected, setRegisterIsSelected] = useState(false);
  const [loadForm, setLoadForm] = useState(<LoginForm />);
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (registerIsSelected) {
        setLoadForm(<RegisterForm />);
      } else {
        setLoadForm(<LoginForm />);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [registerIsSelected]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Transition show={isShowing}>
        <div
          className={`${
            registerIsSelected ? "animate-topToBottom" : "animate-bottomToTop"
          } fixed bg-lightDark w-screen block h-screen -top-full left-0 z-5 md:hidden`}
        />
      </Transition>
      <div className="relative w-screen h-screen overflow-hidden bg-light">
        <div
          className={`w-3/5 absolute transform ${
            registerIsSelected ? "left-full -translate-x-full" : "left-0"
          } duration-1000 h-screen transition-all ease-fav z-2 hidden bg-light md:flex flex-col justify-center items-center`}
        >
          <div
            className={`absolute w-max flex justify-center items-center top-5 transition-all duration-1000 transform ease-fav ${
              registerIsSelected ? "left-95per -translate-x-full" : "left-5"
            }`}
          >
            <Link href="/">
              <a className="">
                <img src="/img/logo.svg" width={100} />
              </a>
            </Link>
          </div>
          <div className="w-full h-full">
            <div className="text-center">
              <div
                className={`${
                  registerIsSelected ? "opacity-0" : "opacity-100"
                } ease-fav transition-all duration-1000 flex flex-col w-8/12 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`}
              >
                <img className=" flow-root" src="/img/login-bg.svg" />

                <p className="text-secondaryDark mt-5 opacity-70 text-2xl uppercase font-semibold">
                  We are Colissia
                </p>
                <p className="text-lightDark opacity-60 text-sm">
                  Our focus is to eliminate any financial or technical hiccups
                  that can prevent customers from purchasing their desired
                  products.
                </p>
              </div>
              <div
                className={`${
                  registerIsSelected ? "opacity-1" : "opacity-0"
                } transition-all duration-1000 flex flex-col w-8/12 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`}
              >
                <img className=" flow-root" src="/img/register-bg.svg" />

                <p className="text-secondary mt-5 opacity-70 text-2xl uppercase font-semibold">
                  We are Colissia
                </p>
                <p className="text-lightDark opacity-60 text-sm">
                  Our focus is to eliminate any financial or technical hiccups
                  that can prevent customers from purchasing their desired
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`md:w-2/5 w-full absolute transform ${
            registerIsSelected
              ? "md:right-full md:translate-x-full bg-secondary"
              : "right-0 bg-darkblue"
          } px-5 grid items-center duration-1000 transition-all ease-fav h-screen overflow-y-auto py-10 `}
        >
          <a
            onClick={() => {
              setRegisterIsSelected(!registerIsSelected);
              setIsShowing(true);
            }}
            className={`duration-1000 transform ease-fav ${
              !registerIsSelected
                ? "md:left-95per md:-translate-x-full"
                : "md:left-5"
            } inline-block w-max text-body font-semibold right-5 top-5 absolute px-6 py-2 rounded border text-sm border-body cursor-pointer transition-all hover:text-black hover:bg-body`}
          >
            {registerIsSelected ? "Sing in" : "Sign up"}
          </a>
          <div
            className={`${
              isShowing
                ? registerIsSelected
                  ? "animate-slideToBottom md:animate-none"
                  : "animate-slideToTop md:animate-none"
                : ""
            }`}
          >
            {loadForm}
          </div>
        </div>
      </div>
    </>
  );
};

LoginPage.layout = AuthLayout;
export default LoginPage;
