import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import { useState, Fragment, useMemo, useContext } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { customTableStyles, orderBy, timestampToDate } from "@lib/healper";
import Image from "@components/Image";
import toast from "react-hot-toast";
import Link from "next/link";
import AdminLayout from "@components/AdminLayout";
import { ProductContext } from "@lib/context/productContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const orderedProducts = orderBy(products, "createdAt", "desc");

  const filteredData = orderedProducts.filter((product) => {
    if (
      product.fileName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.userName?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return product;
    }
  });

  const handelDelete = async (productData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${productData.name}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "products", productData.id));
          setIsBusy(false);
          return "Product deleted successfully";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting product");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (productData) => {
    return (
      <a
        disabled={isBusy}
        onClick={() => handelDelete(productData)}
        title="Delete product"
        className="text-pink-600 text-lg cursor-pointer"
      >
        <FaTrash />
      </a>
    );
  };

  const editButton = (productData) => {
    return (
      <Link href={`/admin/products/edit/${productData.id}`}>
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
        selector: (row) => `${row.fileName}`,
        sortable: true,
        format: (row, index) => {
          return `${row.name}`;
        },
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Category",
        hide: "md",
        selector: (row) => `${row.category}`,
        sortable: true,
      },
      {
        name: "In Stock",
        selector: (row) => `${row.inStock}`,
        sortable: true,
        format: (row, index) => {
          return (
            <span
              className={`rounded-full text-white text-opacity-80 text-xs font-medium px-3 py-0.5 block capitalize ${
                row.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {row.inStock ? "Yes" : "No"}
            </span>
          );
        },
      },
      {
        name: "Date",
        hide: "md",
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
  return (
    <Fragment>
      <div className="py-8 max-w-screen-2xl mx-auto">
        <div className="flex justify-between flex-col-reverse gap-8 sm:flex-row sm:items-center mb-8">
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
              className="border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-500 duration-300"
            />
          </div>
          <Link href="/admin/products/new">
            <a className="flex items-center gap-2 h-12 px-10 tracking-wide text-white font-medium duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none">
              <FaPlus />
              <span>Add Product</span>
            </a>
          </Link>
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : orderedProducts}
          customStyles={customTableStyles}
          title="Products"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

Products.layout = AdminLayout;
Products.title = "Products";
export default Products;
