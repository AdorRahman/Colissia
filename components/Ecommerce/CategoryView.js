import Image from "@components/Image";
import Link from "next/link";

const CategoryView = ({ category }) => {
  return (
    <Link href={`/${category.slug}`}>
      <a>
        <div className="overflow-hidden w-full aspect-square relative">
          <Image
            src={category?.coverImage?.url || "/img/no-image.png"}
            objectFit="contain"
          />
        </div>
        <div className="text-white text-center">{category.name}</div>
      </a>
    </Link>
  );
};

export default CategoryView;
