import LoadingScreen from "@components/LoadingScreen";
import { useRouter } from "next/router";
import { doc } from "firebase/firestore";
import { db } from "@lib/firebase";
import AdminLayout from "@components/AdminLayout";
import EditCategory from "@components/Admin/EditCategory";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";

const EditCategoryAdmin = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  const [category = null, catIsLoading] = useDocumentDataOnce(
    doc(db, "categories", id)
  );

  if (catIsLoading) return <LoadingScreen fullScreen={false} bg="bg-white" />;
  return (
    <div>
      <div className="mt-8">
        <div className="mb-6">
          <EditCategory category={category} />
        </div>
      </div>
    </div>
  );
};

EditCategoryAdmin.title = "Edit Category";
EditCategoryAdmin.layout = AdminLayout;
export default EditCategoryAdmin;
