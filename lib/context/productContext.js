import { db } from "@lib/firebase";
import { collection } from "firebase/firestore";
import { createContext } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const ProductContext = createContext(undefined);
const ProductContextProvider = ({ children }) => {
  const [products = [], productsIsLoading] = useCollectionData(
    collection(db, "products")
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        productsIsLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
