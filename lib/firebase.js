import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrtdRIIEiRpMGIKCnieCx5CL0GCesIs94",
  authDomain: "colissia-web.firebaseapp.com",
  projectId: "colissia-web",
  storageBucket: "colissia-web.appspot.com",
  messagingSenderId: "328342360938",
  appId: "1:328342360938:web:b88541485304ce04d9cb13",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, db, auth };

export const uploadImage = async ({ file, filePath }) => {
  const storageRef = storage.ref(filePath);
  try {
    const res = await storageRef.put(file);
    const imageURL = await res.ref.getDownloadURL();
    return imageURL;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export const deleteImage = async (path) => {
  const storageRef = storage.ref(path);
  try {
    await storageRef.delete();
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
  };
}
