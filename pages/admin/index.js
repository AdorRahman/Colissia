import {
  doc,
  deleteDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import LoadingScreen from "@components/LoadingScreen";
import { useState, Fragment, useMemo, useEffect } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { firestoreToJSON, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import { BsFillEyeFill } from "react-icons/bs";
import OrderDetailsAdmin from "@components/Admin/OrderDetails";
import AdminLayout from "@components/AdminLayout";

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

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

  const handelDelete = async (orderData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${orderData.id}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "orders", orderData.id));
          setIsBusy(false);
          return "Order deleted successfully";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting order");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (orderData) => {
    return (
      <a
        disabled={isBusy}
        onClick={() => handelDelete(orderData)}
        title="Delete order"
        className="text-pink-600 text-lg"
      >
        <FaTrash />
      </a>
    );
  };

  const viewButton = (orderData) => {
    return (
      <a
        onClick={() => {
          setSelectedOrder(orderData);
          setIsOpen(true);
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
        name: "Order ID",
        selector: (row) => `${row.id}`,
        sortable: true,
        style: {
          color: "#202124",
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
        format: (row, index) => {
          return <p className="font-medium">{row.paymentMethod.name}</p>;
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
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        cell: (row) => viewButton(row),
        allowOverflow: true,
        button: true,
        width: "56px",
      },
      {
        cell: (row) => deleteButton(row),
        allowOverflow: true,
        button: true,
        width: "56px",
      },
    ],
    []
  );

  useEffect(() => {
    const unsubs = async () => {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snaps = onSnapshot(q, (querySnapshot) => {
        if (querySnapshot) {
          setOrders(querySnapshot.docs.map(firestoreToJSON));
        }
      });

      setIsLoading(false);
    };
    unsubs();
  }, []);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <Fragment>
      {isOpen && (
        <OrderDetailsAdmin
          isOpen={isOpen}
          closeModal={closeModal}
          orderDetails={selectedOrder}
        />
      )}
      <div className="py-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FaSearch className="text-lg text-primary mr-1" />
            <input
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              value={searchTerm}
              type="search"
              name="search"
              placeholder="Search"
              className="border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-500 duration-300 transition-colors"
            />
          </div>
          {/* <Button
            link
            href="/admin/media/upload"
            startIcon={<FaPlus />}
            color="green"
          >
            Upload
          </Button> */}
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : orders}
          //   customStyles={customTableStyles}
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

AdminPage.layout = AdminLayout;
AdminPage.title = "Orders";

export default AdminPage;
