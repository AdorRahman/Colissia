import { db } from "@lib/firebase";
import PageTitle from "@components/PageTitle";
import ProductsView from "@components/Ecommerce/ProductsView";
import { DefaultSeo } from "next-seo";
import { useContext } from "react";
import { ProductContext } from "@lib/context/productContext";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import LoadingScreen from "@components/LoadingScreen";
import { collection } from "firebase/firestore";

const CategoryView = () => {
  const { products } = useContext(ProductContext);
  const [cats = [], catsIsLoading] = useCollectionData(
    collection(db, "categories")
  );
  const router = useRouter();
  const { category } = router.query;
  const catsData = cats.find((cat) => cat.slug === category);
  const SEO = {
    title: `Curiouscraft | ${category}`,
  };

  const productsByCategory = products.filter(
    (product) => product.category == catsData?.slug
  );

  if (catsIsLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <div>
        <ProductsView products={productsByCategory} category={catsData} />
      </div>
    </>
  );
};

export default CategoryView;
