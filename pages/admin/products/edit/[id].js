import LoadingScreen from "@components/LoadingScreen";
import { useRouter } from "next/router";
import { doc } from "firebase/firestore";
import { db } from "@lib/firebase";
import AdminLayout from "@components/AdminLayout";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import EditProduct from "@components/Admin/EditProduct";

const EditProductAdmin = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  const [product = null, catIsLoading] = useDocumentDataOnce(
    doc(db, "products", id)
  );

  if (catIsLoading) return <LoadingScreen fullScreen={false} bg="bg-white" />;
  return (
    <div>
      <div className="mt-8">
        <div className="mb-6">
          <EditProduct product={product} />
        </div>
      </div>
    </div>
  );
};

EditProductAdmin.title = "Edit Product";
EditProductAdmin.layout = AdminLayout;
export default EditProductAdmin;
