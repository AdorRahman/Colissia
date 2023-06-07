import DashboardLayout from "@components/DashboardLayout";
import Link from "next/link";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import { useEffect, useState, Fragment, useMemo, useContext } from "react";
import { firestoreToJSON } from "@lib/healper";
import AuthContext from "@lib/authContext";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const onHold = orders.filter((order) => order.status === "on-hold");
  const sending = orders.filter((order) => order.status === "sending");
  const completed = orders.filter((order) => order.status === "completed");
  const refunded = orders.filter((order) => order.status === "refunded");

  useEffect(() => {
    if (!user) return;

    const unsubs = async () => {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      const snaps = onSnapshot(q, (querySnapshot) => {
        if (querySnapshot) {
          setOrders(querySnapshot.docs.map(firestoreToJSON));
        }
      });

      setIsLoading(false);
    };
    unsubs();
  }, [user]);
  return (
    <div className="text-body">
      <div className="flex justify-between">
        <p className="font-semibold text-white text-xl">My Orders</p>
        <Link href="/dashboard/orders">
          <a className="text-white border-2 border-white px-3 py-1 rounded transition hover:text-black hover:bg-white">
            All Orders
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-lightDark rounded mt-5">
        <div className="text-center p-3 px-5 py-20 bg-purple-700">
          <p className="text-white font-semibold text-5xl">{onHold.length}</p>
          <p className="font-semibold">On Hold</p>
        </div>
        <div className="text-center p-3 px-5 py-20 bg-fb">
          <p className="text-white font-semibold text-5xl">{sending.length}</p>
          <p className="font-semibold">Sending</p>
        </div>
        <div className="text-center p-3 px-5 py-20 bg-ms">
          <p className="text-white font-semibold text-5xl">
            {completed.length}
          </p>
          <p className="font-semibold">Completed</p>
        </div>
        <div className="text-center p-3 px-5 py-20 bg-yahoo">
          <p className="text-white font-semibold text-5xl">{refunded.length}</p>
          <p className="font-semibold">Refunded</p>
        </div>
      </div>
    </div>
  );
};

DashboardPage.layout = DashboardLayout;
DashboardPage.title = "Dashboard";
export default DashboardPage;
