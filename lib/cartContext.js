import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext(undefined);

const DummyCart = [
  {
    id: 1,
    name: "Long Long Product Name",
    imageURL: "/img/demo.webp",
    price: 700,
    quantity: 1,
    category: "Software",
  },
  {
    id: 2,
    name: "UC Card",
    imageURL: "/img/demo.webp",
    price: 700,
    quantity: 3,
    category: "Games",
  },
  {
    id: 3,
    name: "UC Card",
    imageURL: "/img/demo.webp",
    price: 700,
    quantity: 1,
    category: "Games",
  },
];

// const getCartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(DummyCart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const ADD_TO_CART = (product) => {
    setCartItems((oldValues) => {
      const productIndex = oldValues.findIndex((val) => val.id === product.id);
      let updatedCartItems = [];
      if (productIndex !== -1) {
        updatedCartItems = [
          ...oldValues.slice(0, productIndex),
          {
            product,
            quantity: oldValues[productIndex].quantity + 1,
          },
          ...oldValues.slice(productIndex + 1),
        ];
      } else {
        updatedCartItems = [...oldValues, { id, quantity: 1 }];
      }

      return updatedCartItems;
    });
  };

  const SUBTRACT_FROM_CART = (id) => {
    setCartItems((oldValues) => {
      let productIndex = oldValues.findIndex((val) => val.id === id);
      let count = oldValues[productIndex].quantity;
      let updatedCartItems = [];

      if (count <= 1) {
        REMOVE_FROM_CART(id);
      } else {
        updatedCartItems = [
          ...oldValues.slice(0, productIndex),
          {
            id,
            quantity: oldValues[productIndex].quantity - 1,
          },
          ...oldValues.slice(productIndex + 1),
        ];
      }
      return updatedCartItems;
    });
  };

  const REMOVE_FROM_CART = (product) => {
    setCartItems(cartItems.filter((products) => products.id !== product.id));
  };

  const getPriceFromId = (id) => {
    let { products } = useContext(ShopContext);
    let productDetails = products.find((item) => item.id === id);
    return productDetails ? productDetails.price || 0 : 0;
  };
  const GET_CART_TOTAL = () => {
    let total = 0;
    cartItems.forEach((item) => {
      let price = item.price;
      total = total + price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        ADD_TO_CART,
        REMOVE_FROM_CART,
        SUBTRACT_FROM_CART,
        GET_CART_TOTAL,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
