import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from "@lib/firebase";
import LoadingScreen from "@components/LoadingScreen";
import { useEffect, useState, Fragment, useMemo } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { customTableStyles, orderBy, timestampToDate } from "@lib/healper";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import { useCollectionData } from "react-firebase-hooks/firestore";
import UploadMedia from "@components/UploadMedia";
import Image from "@components/Image";
import { deleteImage } from "@lib/imageTools";

const Media = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  const [images = [], imagesIsLoading] = useCollectionData(
    collection(db, "media")
  );

  const orderedImages = orderBy(images, "createdAt", "desc");

  const filteredData = orderedImages.filter((image) => {
    if (
      image.fileName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.userName?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return image;
    }
  });

  const handelDelete = async (imageData) => {
    const userAction = confirm(
      `Are you sure you want to delete ${imageData.fileName}?`
    );
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);

        try {
          await deleteDoc(doc(db, "media", imageData.id));
          await deleteImage(imageData);
          setIsBusy(false);
          return "Image deleted successfully";
        } catch (error) {
          setIsBusy(false);
          console.log(error);
          throw new Error("Error deleting image");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  const deleteButton = (imageData) => {
    return (
      <button
        disabled={isBusy}
        onClick={() => handelDelete(imageData)}
        title="Delete image"
        className="text-pink-600 text-lg"
      >
        <FaTrash />
      </button>
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
            <div className="relative overflow-hidden w-20 h-20 my-2 rounded-md shadow-md">
              <Image src={row.url} />
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
        name: "File Name",
        selector: (row) => `${row.fileName}`,
        sortable: true,
        format: (row, index) => {
          return `${row.fileName}`;
        },
        style: {
          color: "#202124",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      {
        name: "Uploader",
        selector: (row) => `${row.userName}`,
        sortable: true,
        format: (row, index) => {
          return (
            <div>
              <p className="font-medium">{row.uploader?.name}</p>
              <p className="text-gray-500">{row.uploader?.email}</p>
            </div>
          );
        },
      },
      {
        name: "Date",
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

  if (imagesIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }
  return (
    <Fragment>
      <div>
        <UploadMedia />
      </div>
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
        </div>

        <DataTable
          defaultSortFieldId="Date"
          columns={columns}
          data={searchTerm ? filteredData : orderedImages}
          customStyles={customTableStyles}
          title="Images"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          noHeader
        />
      </div>
    </Fragment>
  );
};

Media.layout = AdminLayout;
Media.title = "Media";
export default Media;
