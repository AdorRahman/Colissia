import Banners from "@components/Ecommerce/Banners";
import BestRated from "@components/Ecommerce/BestRated";
import FeaturedCards from "@components/Ecommerce/FeaturedCards";
import Software from "@components/Ecommerce/Software";
import TopUpCards from "@components/Ecommerce/TopUpCards";
import Hero from "@components/HomePage/Hero";
import { ProductContext } from "@lib/context/productContext";
import { db, postToJSON } from "@lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useContext } from "react";

export default function Home({ banners, offers }) {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Hero offers={offers || []} />
        <FeaturedCards products={products} />
        <TopUpCards products={products} />
        <Banners banners={banners || []} />
        <BestRated products={products} />
        <Software products={products} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  let banners = [];
  let offers = [];
  const bannersRef = collection(db, "banners");
  const offersRef = collection(db, "offers");

  const bannersSnap = await getDocs(bannersRef);
  const offersSnap = await getDocs(offersRef);

  banners = bannersSnap.docs.map(postToJSON);
  offers = offersSnap.docs.map(postToJSON);

  return {
    props: { banners, offers },
    revalidate: 60,
  };
}
