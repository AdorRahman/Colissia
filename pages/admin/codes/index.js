import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useState, Fragment, useMemo } from "react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { customTableStyles, orderBy, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import LoadingScreen from "@components/LoadingScreen";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Link from "next/link";

const CodesAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const [codes = [], codesIsLoading] = useCollectionData(
    collection(db, "codes")
  );

  const orderedCodes = orderBy(codes, "createdAt", "desc");

  const filteredData = orderedCodes.filter((code) => {
    if (
      code.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.referance?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return code;
    }
  });

  const handelDelete = async (codeData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${codeData.code}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "codes", codeData.id));
          setIsBusy(false);
          return "Code deleted successfully";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting code!");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (codeData) => {
    return (
      <button
        disabled={isBusy}
        onClick={() => handelDelete(codeData)}
        title="Delete code"
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
        name: "Product",
        selector: "productName",
        sortable: true,
        format: (row, index) => {
          return (
            <div>
              <p>{row.productName}</p>
              <p>{row.variantName}</p>
            </div>
          );
        },
      },
      {
        name: "Expiration date",
        selector: "expireDate",
        sortable: true,
        format: (row, index) => {
          return row.expireDate || "-";
        },
      },
      {
        name: "Reference",
        selector: "reference",
        sortable: true,
        format: (row, index) => {
          return row.reference || "-";
        },
      },
      {
        name: "Order ID",
        selector: "orderId",
        sortable: true,
        format: (row, index) => {
          return row.orderId || "-";
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

  if (codesIsLoading) {
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
          <Link href="/admin/codes/new">
            <a className="flex items-center gap-2 h-12 px-10 tracking-wide text-white font-medium duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none">
              <FaPlus />
              <span>Add Code</span>
            </a>
          </Link>
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : orderedCodes}
          customStyles={customTableStyles}
          title="Codes"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

CodesAdmin.layout = AdminLayout;
CodesAdmin.title = "Game Codes";

export default CodesAdmin;
