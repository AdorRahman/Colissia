import AdminLayout from "@components/AdminLayout";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import {
  customTableStyles,
  fetchPostJSON,
  timestampToDate,
} from "@lib/healper";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { FaPlus, FaSearch } from "react-icons/fa";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(AuthContext);

  const isCustomer = customers.filter((c) => {
    if (!c.customClaims?.admin) {
      return c;
    }
  });

  const filteredData = isCustomer.filter((customer) => {
    if (
      customer.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return customer;
    }
  });

  const columns = useMemo(
    () => [
      {
        name: "",
        selector: (row) => `${row.uid}`,
        width: "128px",
        format: (row, index) => {
          return (
            <div className="relative overflow-hidden w-20 h-20 my-2 rounded-md shadow-md bg-gray-100">
              {row.photoURL && (
                <Image objectFit="cover" layout="fill" src={row.photoURL} />
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
        name: "Name",
        selector: (row) => `${row.displayName}`,
        sortable: true,
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Email",
        selector: (row) => `${row.email}`,
        sortable: true,
      },
      {
        name: "Join Date",
        selector: (row) => `${row.createdAt}`,
        sortable: true,
        format: (row, index) => {
          return timestampToDate(row.metadata.creationTime);
        },
        style: {
          color: "rgba(0,0,0,.54)",
        },
      },
      {
        cell: (row) => (
          <Link href={`/admin/customers/create-order/${row.uid}`}>
            <a className="btn btn-primary btn-outline">Create Order</a>
          </Link>
        ),
        allowOverflow: true,
        button: true,
        width: "150px",
      },
    ],
    []
  );

  useEffect(() => {
    const fetchCustomers = async () => {
      if (user) {
        const token = await user.getIdToken();
        const response = await fetchPostJSON("/api/get-customers", { token });
        if (response.statusCode === 200) {
          setCustomers(response.data);
          console.log(response.data);
        }
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, [user]);

  if (isLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <>
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
          <Link href="/admin/customers/new">
            <a className="flex items-center gap-2 h-12 px-10 tracking-wide text-white font-medium duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none">
              <FaPlus />
              <span>Add Customer</span>
            </a>
          </Link>
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : isCustomer}
          customStyles={customTableStyles}
          title="Customers"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </>
  );
};

Customers.layout = AdminLayout;
Customers.title = "Customers";
export default Customers;
