import MyWishlist from "@components/Dashboard/Wishlist";
import DashboardLayout from "@components/DashboardLayout";

const Wishlist = () => {
  return (
    <>
      <MyWishlist />
    </>
  );
};

Wishlist.layout = DashboardLayout;
export default Wishlist;
