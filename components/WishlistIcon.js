import AuthContext from "@lib/authContext";
import { countWishlistProducts } from "@lib/wishList";
import { useState, useEffect, useContext } from "react";

const { BsHeart } = require("react-icons/bs");

const WishlistIcon = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const count = await countWishlistProducts(user.uid);
      setWishlistCount(count);
    };
    fetchData();
  }, [user]);

  return (
    <div className="relative">
      <BsHeart />
      <span
        style={{ fontSize: "10px" }}
        className="absolute -right-2 -top-1 bg-primary w-4 h-4 rounded-full flex justify-center items-center text-white"
      >
        {wishlistCount}
      </span>
    </div>
  );
};

export default WishlistIcon;
