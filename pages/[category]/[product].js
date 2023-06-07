import ProductViewSingle from "@components/Ecommerce/ProductViewSingle";
import { Fragment } from "react";
import { ProductJsonLd } from "next-seo";
import Head from "next/head";
import { db, postToJSON } from "@lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductView = ({ product }) => {
  const SEO = {
    title: `Curiouscraft | ${product?.name}`,
    description: product?.shortDesc,
  };
  return (
    <Fragment>
      <Head>
        <title>{`Curiouscraft | ${product?.name}`}</title>
      </Head>
      {/* <ProductJsonLd
        productName={seo?.fields?.productName || product.name}
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        description={seo?.fields?.description}
        brand={seo?.fields?.brand}
        slogan={seo?.fields?.slogan}
        disambiguatingDescription={seo?.fields?.disambiguatingDescription}
        reviews={seo?.fields?.reviews?.reviews}
        aggregateRating={seo?.fields?.aggregateRating?.aggregateRating}
        offers={seo?.fields?.offers?.offers}
      /> */}
      <div className="container mx-auto max-w-screen-2xl">
        <ProductViewSingle product={product} />
      </div>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const productsRef = collection(db, "products");
  const productsSnap = await getDocs(productsRef);
  const products = productsSnap.docs.map(postToJSON);
  const paths = products?.map((product) => ({
    params: { product: product.slug, category: product.category },
  }));

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  let products = [];
  const productsRef = query(
    collection(db, "products"),
    where("slug", "==", params.product)
  );
  const productsSnap = await getDocs(productsRef);
  products = productsSnap.docs.map(postToJSON);

  console.log(products);
  if (!products.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: products[0],
    },
    revalidate: 1,
  };
}

export default ProductView;
