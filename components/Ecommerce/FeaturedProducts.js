import ProductView from "./ProductView";

const Products = [
  {
    id: 2,
    name: "Some name",
    category: "Games",
    price: 78,
    image:
      "https://seagm-media.seagmcdn.com/material/828.jpg?x-oss-process=image/format,webp/resize,w_276",
  },
  {
    id: 3,
    name: "Some name",
    category: "Games",
    price: 78,
    image:
      "https://seagm-media.seagmcdn.com/material/919.jpg?x-oss-process=image/format,webp/resize,w_276",
  },
  {
    id: 4,
    name: "Some name",
    category: "Games",
    price: 78,
    image:
      "https://seagm-media.seagmcdn.com/material/977.jpg?x-oss-process=image/format,webp/resize,w_276",
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 gap-6">
        {Products.map((product) => (
          <ProductView size="small" product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
