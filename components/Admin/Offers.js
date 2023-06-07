import { useCollectionData } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import AddNewOffer from "./AddNewOffer";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "@lib/firebase";
import Image from "@components/Image";
import LoadingScreen from "@components/LoadingScreen";
import EditOffer from "./EditOffer";

const OffersAdmin = () => {
  const [offers = [], offersIsLoading] = useCollectionData(
    collection(db, "offers")
  );
  const [isBusy, setIsBusy] = useState(false);

  const handelDelete = async (id) => {
    const userAction = confirm(`Are you sure you want to delete?`);
    if (userAction) {
      const Request = async () => {
        setIsBusy(true);
        try {
          await deleteDoc(doc(db, "offers", id));
          setIsBusy(false);
          return "Offer deleted successfully!";
        } catch (error) {
          setIsBusy(false);
          throw new Error("Error deleting offer!");
        }
      };
      toast.promise(Request(), {
        loading: <b>Loading...</b>,
        success: (data) => <b>{data}</b>,
        error: (err) => <b>{err.toString()}</b>,
      });
    }
  };

  if (offersIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <div className="xl:flex xl:flex-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {offers.map((item, idx) => (
        <div key={idx} className="relative">
          <button
            disabled={isBusy}
            onClick={() => handelDelete(item.id)}
            className="w-5 h-5 absolute right-2 cursor-pointer z-1 top-2 flex justify-center items-center bg-danger rounded-full text-white focus:outline-none outline-none"
          >
            <IoClose />
          </button>
          <div className="relative w-full xl:w-52 aspect-square overflow-hidden rounded-xl">
            <span className="absolute -right-2 -bottom-2 z-10">
              <EditOffer data={item} />
            </span>
            <Image src={item.coverImage.url} />
          </div>
        </div>
      ))}
      <AddNewOffer />
    </div>
  );
};

export default OffersAdmin;
