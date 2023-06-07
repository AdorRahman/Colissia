import { Fragment, useState } from "react";
import TextInput from "@components/UI/TextInput";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import TextareaInput from "@components/UI/TextareaInput";

const AddVariant = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [cost, setCost] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
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
      setErrors((e) => ({ ...e, stockQuantity: "Stock quantity is required" }));
    } else {
      delete errors.stockQuantity;
    }
    if (!name || !price || !cost || !stockQuantity) {
      toast.error("Please fill all the required fields!");
      return;
    }
    const id = nanoid();
    onSubmit({
      id,
      name,
      price: Number(price),
      salePrice: salePrice ? Number(salePrice) : null,
      cost: cost ? Number(cost) : null,
      stockQuantity: stockQuantity ? Number(stockQuantity) : null,
      description,
    });
    onClose();
  };

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

        <div className="flex items-center justify-end space-x-4">
          <a className="btn btn-link btn-warning" onClick={() => onClose()}>
            Cancel
          </a>
          <a
            className="btn btn-outline btn-success"
            onClick={() => handleSubmit()}
          >
            Add Variant
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AddVariant;
