import Image from "@components/Image";
import Link from "next/link";
import { Fragment } from "react";
const ProductCardSmall = ({ product }) => {
  return (
    <Fragment>
      <Link href={`/${product.category}/${product.slug}`}>
        <a>
          <div className="aspect-[6/8] relative overflow-hidden transition-all duration-500 transform hover:scale-110 p-0.5 product-image1 rounded-md">
            <Image src={product.coverImage.url} objectFit="contain" />
          </div>
        </a>
      </Link>
    </Fragment>
  );
};

export default ProductCardSmall;
