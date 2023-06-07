import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import LoadingScreen from "@components/LoadingScreen";
import { useState, Fragment, useMemo } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import Link from "next/link";
import { customTableStyles, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Image from "@components/Image";

const CategoriesAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const [categories = [], catIsLoading] = useCollectionData(
    collection(db, "categories")
  );

  const filteredData = categories.filter((category) => {
    if (
      category.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return category;
    }
  });

  const handelDelete = async (categoryData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${categoryData.name}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "categories", categoryData.id));
          setIsBusy(false);
          return "Category deleted successfully";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting category");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (categoryData) => {
    return (
      <button
        disabled={isBusy}
        onClick={() => handelDelete(categoryData)}
        title="Delete category"
        className="text-pink-600 text-lg"
      >
        <FaTrash />
      </button>
    );
  };

  const editButton = (categoryData) => {
    return (
      <Link href={`/admin/categories/edit/${categoryData.id}`}>
        <a title="Edit member" className="text-yellow-500 text-xl">
          <FaEdit />
        </a>
      </Link>
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
            <div className="relative overflow-hidden w-20 h-20 my-2 rounded-md shadow-md bg-gray-100">
              {row.coverImage && <Image src={row.coverImage.url} />}
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
        name: "Name",
        selector: (row) => `${row.name}`,
        sortable: true,
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
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
        cell: (row) => editButton(row),
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

  if (catIsLoading) {
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
          <Link href="/admin/categories/new">
            <a className="flex items-center gap-2 h-12 px-10 tracking-wide text-white font-medium duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none">
              <FaPlus />
              <span>Add Category</span>
            </a>
          </Link>
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : categories}
          customStyles={customTableStyles}
          title="Categories"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

CategoriesAdmin.layout = AdminLayout;
CategoriesAdmin.title = "Categories";

export default CategoriesAdmin;
