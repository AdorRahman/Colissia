import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useState, Fragment, useMemo } from "react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { customTableStyles, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import LoadingScreen from "@components/LoadingScreen";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Link from "next/link";

const CouponsAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const [coupons = [], couponsIsLoading] = useCollectionData(
    collection(db, "coupons")
  );

  const filteredData = coupons.filter((coupon) => {
    if (
      coupon.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coupon.description?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return coupon;
    }
  });

  const handelDelete = async (couponData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${couponData.code}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "coupons", couponData.id));
          setIsBusy(false);
          return "Coupon deleted successfully";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting coupon");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (couponData) => {
    return (
      <button
        disabled={isBusy}
        onClick={() => handelDelete(couponData)}
        title="Delete coupon"
        className="text-pink-600 text-lg"
      >
        <FaTrash />
      </button>
    );
  };

  const columns = useMemo(
    () => [
      {
        name: "Code",
        selector: (row) => `${row.code}`,
        sortable: true,
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Value",
        selector: (row) => `${row.value}`,
        sortable: true,
        format: (row, index) => {
          return row.type == "fixed" ? `$${row.value}` : `${row.value}%`;
        },
      },
      {
        name: "Start Date",
        selector: (row) => `${row.startDate}`,
        sortable: true,
        format: (row, index) => {
          return row.startDate || "-";
        },
      },
      {
        name: "End Date",
        selector: (row) => `${row.endDate}`,
        sortable: true,
        format: (row, index) => {
          return row.endDate || "-";
        },
      },
      {
        name: "Created",
        selector: (row) => `${row.createdAt}`,
        sortable: true,
        format: (row, index) => {
          return timestampToDate(row.createdAt);
        },
        style: {
          color: "rgba(0,0,0,.54)",
        },
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

  if (couponsIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <Fragment>
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
          <Link href="/admin/coupons/new">
            <a className="flex items-center gap-2 h-12 px-10 tracking-wide text-white font-medium duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none">
              <FaPlus />
              <span>Add Coupon</span>
            </a>
          </Link>
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : coupons}
          customStyles={customTableStyles}
          title="Coupons"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

CouponsAdmin.layout = AdminLayout;
CouponsAdmin.title = "Coupons";

export default CouponsAdmin;
