import { useCart } from "react-use-cart";

const { TiShoppingCart } = require("react-icons/ti");

const CartIcon = () => {
  const { totalUniqueItems } = useCart();
  return (
    <div className="relative">
      <TiShoppingCart />
      <span
        style={{ fontSize: "10px" }}
        className="absolute -right-2 -top-1 bg-primary w-4 h-4 rounded-full flex justify-center items-center text-white"
      >
        {totalUniqueItems}
      </span>
    </div>
  );
};

export default CartIcon;
