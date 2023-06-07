import { Fragment, useState, useEffect } from "react";
import TextInput from "@components/UI/TextInput";
import toast from "react-hot-toast";
import TextareaInput from "@components/UI/TextareaInput";

const EditVariant = ({ variant, onSubmit }) => {
  const [name, setName] = useState(variant.name || "");
  const [price, setPrice] = useState(variant.price || "");
  const [salePrice, setSalePrice] = useState(variant.salePrice || "");
  const [cost, setCost] = useState(variant.cost || "");
  const [stockQuantity, setStockQuantity] = useState(
    variant.stockQuantity || ""
  );
  const [description, setDescription] = useState(variant.description || "");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const update = () => {
      if (!name) {
        setErrors((e) => ({ ...e, name: "Name is required" }));
      } else {
        delete errors.name;
      }
      if (!price) {
        setErrors((e) => ({ ...e, price: "Price is required" }));
      } else {
        delete errors.price;
      }
      if (!cost) {
        setErrors((e) => ({ ...e, cost: "Cost is required" }));
      } else {
        delete errors.cost;
      }
      if (!stockQuantity) {
        setErrors((e) => ({
          ...e,
          stockQuantity: "Stock quantity is required",
        }));
      } else {
        delete errors.stockQuantity;
      }
      if (!name || !price || !cost || !stockQuantity) {
        return;
      }
      onSubmit({
        id: variant.id,
        name,
        price: Number(price),
        salePrice: salePrice ? Number(salePrice) : null,
        cost: cost ? Number(cost) : null,
        stockQuantity: stockQuantity ? Number(stockQuantity) : null,
        description,
      });
    };
    update();
  }, [name, price, salePrice, cost, stockQuantity, description]);

  return (
    <Fragment>
      <div className="w-full space-y-6">
        <div className="relative">
          <TextInput
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Name*"
            error={Boolean(errors.name)}
            helpText={errors.name}
          />
        </div>

        <div className="relative">
          <TextInput
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            label="Price*"
            error={Boolean(errors.price)}
            helpText={errors.price}
          />
        </div>

        <div className="relative">
          <TextInput
            required
            onChange={(e) => setCost(e.target.value)}
            value={cost}
            type="number"
            label="Cost*"
            error={Boolean(errors.cost)}
            helpText={errors.cost}
          />
        </div>

        <div className="relative">
          <TextInput
            onChange={(e) => setSalePrice(e.target.value)}
            value={salePrice}
            type="number"
            label="Sale Price"
            error={Boolean(errors.salePrice)}
            helpText={errors.salePrice}
          />
        </div>
        <div className="relative">
          <TextInput
            required
            onChange={(e) => setStockQuantity(e.target.value)}
            value={stockQuantity}
            type="number"
            label="Stock quantity*"
            error={Boolean(errors.stockQuantity)}
            helpText={errors.stockQuantity}
          />
        </div>

        <div className="relative">
          <TextareaInput
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            label="Description"
            error={Boolean(errors.description)}
            helpText={errors.description}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default EditVariant;
