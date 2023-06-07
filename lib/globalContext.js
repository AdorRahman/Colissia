import { createContext, useState, useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "./firebase";
import { doc } from "firebase/firestore";

let saved_currencyCode = null;
if (typeof window !== "undefined") {
  saved_currencyCode = localStorage?.getItem("currency");
}

export const GlobalContext = createContext(undefined);
const GlobalContextProvider = ({ children }) => {
  const [activePostComment, setActivePostComment] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [getNotice = [], noticeDataIsLoading] = useDocumentData(
    doc(db, "settings/notice")
  );
  const [getCurrency = [], currencyDataIsLoading] = useDocumentData(
    doc(db, "settings/currency")
  );

  const [currencyCode, setcurrencyCode] = useState(saved_currencyCode || "USD");

  useEffect(() => {
    if (currencyCode) {
      localStorage.setItem("currency", currencyCode);
    }
  }, [currencyCode]);

  return (
    <GlobalContext.Provider
      value={{
        getNotice,
        noticeDataIsLoading,
        isBusy,
        setIsBusy,
        currencyCode,
        setcurrencyCode,
        getCurrency,
        currencyDataIsLoading,
        activePostComment,
        setActivePostComment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
