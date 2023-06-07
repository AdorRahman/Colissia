import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import LoadingScreen from "@components/LoadingScreen";
import { useEffect, useState, Fragment, useMemo, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import DataTable, { createTheme } from "react-data-table-component";
import { firestoreToJSON, timestampToDate } from "@lib/healper";
import AuthContext from "@lib/authContext";
import { BsFillEyeFill } from "react-icons/bs";
import OrderDetails from "./OrderDetails";
import Image from "@components/Image";
import { useRouter } from "next/router";

createTheme(
  "solarized",
  {
    text: {
      primary: "#F4F7F6",
      secondary: "#c2d4f8",
    },
    background: {
      default: "#1A1D23",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#c27b43",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const MyOrders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { id } = router.query;

  const filteredData = orders.filter((order) => {
    if (
      order.id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.userEmail?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return order;
    }
  });
  function closeModal() {
    setIsOpen(false);
  }

  const viewButton = (orderData) => {
    return (
      <a
        onClick={() => {
          router.push(
            {
              query: { id: orderData.id },
              shallow: true,
            },
            undefined,
            { scroll: false }
          );
        }}
        title="View order"
        className="text-green-500 text-lg"
      >
        <BsFillEyeFill />
      </a>
    );
  };

  const columns = useMemo(
    () => [
      {
        name: "",
        selector: (row) => `${row.userId}`,
        sortable: true,
        width: "128px",
        format: (row, index) => {
          return (
            <div className="relative overflow-hidden w-16 aspect-square my-2 rounded-md shadow-md">
              {row.products[0].coverImage?.url && (
                <Image src={row.products[0].coverImage?.url} />
              )}
            </div>
          );
        },
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Order ID",
        selector: (row) => `${row.id}`,
        sortable: true,
        style: {
          color: "#c2d4f8",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Status",
        selector: (row) => `${row.status}`,
        sortable: true,
        format: (row, index) => {
          return (
            <p
              className={`capitalize font-medium text-white rounded-full px-4 py-1 ${
                row?.status == "refunded"
                  ? "bg-red-500"
                  : row?.status == "completed"
                  ? "bg-green-500"
                  : row?.status == "sending"
                  ? "bg-blue-500"
                  : "bg-yellow-500"
              }`}
            >
              {row.status}
            </p>
          );
        },
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Payment",
        hide: "sm",
        selector: (row) => `${row.paymentMethod.name}`,
        sortable: true,
        style: {
          color: "#c2d4f8",
        },
      },
      {
        name: "Date",
        hide: "md",
        selector: (row) => `${row.createdAt}`,
        sortable: true,
        format: (row, index) => {
          return timestampToDate(row.createdAt, "ddd, MMM DD YYYY hh:mm A");
        },
        style: {
          color: "#c2d4f8",
        },
      },
      {
        cell: (row) => viewButton(row),
        allowOverflow: true,
        button: true,
        width: "56px",
      },
    ],
    []
  );

  useEffect(() => {
    if (router.isReady) {
      if (id && orders.length > 0) {
        setSelectedOrder(orders.find((order) => order.id === id));
        setIsOpen(true);
      }
    }
  }, [router, orders]);

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

  if (!router.isReady || isLoading) {
    return <LoadingScreen fullScreen={false} />;
  }
  return (
    <Fragment>
      {selectedOrder && isOpen && (
        <OrderDetails
          isOpen={isOpen}
          closeModal={closeModal}
          orderDetails={selectedOrder}
        />
      )}
      <div className="py-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FaSearch className="text-lg text-primary mr-2" />
            <input
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              value={searchTerm}
              type="search"
              name="search"
              placeholder="Search"
              className="input input-bordered input-primary input-ghost"
            />
          </div>
        </div>

        <DataTable
          theme="solarized"
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : orders}
          title="Orders"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

export default MyOrders;
