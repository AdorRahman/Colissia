import EditProfile from "@components/Dashboard/EditProfile";
import DashboardLayout from "@components/DashboardLayout";
import LoadingScreen from "@components/LoadingScreen";
import AuthContext from "@lib/authContext";
import { db } from "@lib/firebase";
import { doc } from "firebase/firestore";
import { useContext } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData = {}, userIsLoading] = useDocumentData(
    doc(db, "users", user.uid)
  );

  if (userIsLoading) {
    return <LoadingScreen fullScreen={false} />;
  }

  return (
    <div className="py-8 max-w-screen-2xl mx-auto">
      <EditProfile userData={userData} />
    </div>
  );
};

Profile.layout = DashboardLayout;
export default Profile;
