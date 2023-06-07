import ShopLayout from "@components/ShopLayout";
import { collection, getDocs } from "firebase/firestore";
import CategoryView from "@components/Ecommerce/CategoryView";
import { db, postToJSON } from "@lib/firebase";

const ShopPage = ({ categories }) => {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <CategoryView category={category} key={idx} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  let categories = [];
  const categoriesRef = collection(db, "categories");
  const categoriesSnap = await getDocs(categoriesRef);
  categories = categoriesSnap.docs.map(postToJSON);
  return {
    props: { categories },
    revalidate: 60,
  };
}

ShopPage.layout = ShopLayout;
export default ShopPage;
