import MyOrders from "@components/Dashboard/Orders";
import DashboardLayout from "@components/DashboardLayout";

const Orders = () => {
  return (
    <>
      <MyOrders />
    </>
  );
};

Orders.layout = DashboardLayout;
export default Orders;
