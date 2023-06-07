import Image from "@components/Image";
import ProductCard from "./ProductCard";

const ProductsView = ({ products, category }) => {
  if (!products || !category) return <></>;
  return (
    <>
      <section className="relative flex items-center justify-center w-full m-auto mb-16">
        <div className="relative flex flex-col w-full min-w-full mx-4 overflow-hidden bg-center bg-cover lg:flex-row h-max content-evenly bg-cat-bg">
          <div className="flex flex-col items-center justify-center w-full bg-white sm:flex-row xl:bg-transparent container mx-auto max-w-screen-2xl">
            <div className="w-full flex-1 aspect-square relative overflow-hidden">
              <Image
                objectFit="contain"
                src={category?.coverImage?.url || "/img/no-image.png"}
              />
            </div>
            <div className="px-4 py-4 lg:py-10 2xl:py-4 xl:pl-6 xl:pr-16 flex-1">
              <p className="w-full mb-8 text-4xl font-medium 2xl:w-96">
                {category.name}
              </p>
              <div className="2xl:pr-20">{category.description}</div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full text-white bg-darkpurple xl:bg-transparent">
            <div
              dangerouslySetInnerHTML={{ __html: category.instruction }}
              className="py-4 mx-4 prose xl:ml-24 xl:mr-8"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-2xl pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsView;
