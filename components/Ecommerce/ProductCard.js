import Image from "@components/Image";
import Link from "next/link";
import { Fragment } from "react";

const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <div className="relative w-full p-5">
        <Link href={`/${product.category}/${product.slug}`}>
          <a>
            <div className="p-2 duration-300 bg-white rounded-2xl hover:scale-105">
              {product.coverImage && (
                <div className="aspect-[6/8] relative product-image rounded-2xl overflow-hidden cursor-pointer">
                  <Image src={product.coverImage.url} objectFit="contain" />
                </div>
              )}
            </div>
            <p className="mt-3 text-center text-gray-300">{product.name}</p>
          </a>
        </Link>
        {product.onSale && (
          <div className="absolute w-24 h-20 right-8 top-2 z-2">
            <Image src="/img/sale.png" layout="fill" objectFit="contain" />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ProductCard;
