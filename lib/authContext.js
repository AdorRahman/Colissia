import { createContext } from "react";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [userIsLoading, setUserIsLoading] = useState(true);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      // await createUserProfileDocument(user);
    } else {
      setUser(null);
    }
    setUserIsLoading(false);
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
