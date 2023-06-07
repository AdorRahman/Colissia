import ProductCard from "@components/Ecommerce/ProductCard";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import { getWishlistProducts } from "@lib/wishList";
import { useContext, useEffect, useState } from "react";

const MyWishlist = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        const wishlist = await getWishlistProducts(user.uid);
        setProducts(wishlist);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }
  return (
    <div className="py-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
