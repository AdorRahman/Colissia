import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import styles from "../../styles/Auth.module.css";

const AuthPage = () => {
  const [registerIsSelected, setRegisterIsSelected] = useState(false);
  return (
    <div
      className={`bg-dark ${styles.container} ${
        registerIsSelected && styles.containerSignupMode
      }`}
    >
      <div className={styles.formsContainer}>
        <div className={styles.signinSignup}>
          <LoginForm
            className={`px-6 md:px-20 transition-all duration-200 delay-700 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 py-0 flex items-center justify-center flex-col ${
              registerIsSelected ? "opacity-0 z-1" : "z-2"
            }`}
          />
          <RegisterForm
            className={`px-6 md:px-20 transition-all duration-200 delay-700 overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 py-0 flex items-center justify-center flex-col ${
              registerIsSelected ? "opacity-1 z-2" : "z-1 opacity-0 "
            }`}
          />
        </div>
      </div>
      <div className={styles.panelsContainer}>
        <div className={`${styles.panel} ${styles.leftPanel}`}>
          <div className={styles.content}>
            <h3 className="text-white font-body text-xl">Hey You...!</h3>
            <p>
              Looking to Purchase Gift Cards from us...!? Alrighty...! Hop In -
            </p>
            <button
              onClick={() => setRegisterIsSelected(true)}
              className="border-2 focus:outline-none border-white text-white rounded transition-all hover:text-primary hover:bg-white px-10 py-2"
            >
              Sign up
            </button>
          </div>
          <img className={styles.image} src="/img/login-bg.svg" alt="" />
        </div>
        <div className={`${styles.panel} ${styles.rightPanel}`}>
          <div className={styles.content}>
            <h3 className="text-white font-body text-xl">
              Ground for Gamers...!
            </h3>
            <p>Already a Curious Customer of ours...? If so -</p>
            <button
              className="border-2 focus:outline-none border-white text-white rounded transition-all hover:text-primary hover:bg-white px-10 py-2"
              onClick={() => setRegisterIsSelected(false)}
            >
              Sign in
            </button>
          </div>
          <img src="img/register-bg.svg" className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
