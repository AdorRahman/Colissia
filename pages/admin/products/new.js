import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useFormik, Form, FormikProvider } from "formik";
import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import kebabCase from "lodash.kebabcase";
import ImagePicker from "@components/ImagePicker";
import Image from "@components/Image";
import { GoPlus } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import Toggle from "@components/UI/Toggle";
import { cn } from "@lib/healper";
import LoadingScreen from "@components/LoadingScreen";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import AddVariant from "@components/Ecommerce/AddVariant";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import TextInput from "@components/UI/TextInput";
import TextareaInput from "@components/UI/TextareaInput";
import SelectInput from "@components/UI/SelectInput";
import { useCollectionData } from "react-firebase-hooks/firestore";

const NewProduct = () => {
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const router = useRouter();
  const [galleryImages, setGalleryImages] = useState([]);
  const [inStock, setInStock] = useState(true);
  const [bestSeller, setBestSeller] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [topUp, setTopUp] = useState(false);
  const [requiredPlayerId, setRequiredPlayerId] = useState(false);
  const [requiredIGN, setRequiredIGN] = useState(false);
  const [requiredIDCard, setRequiredIDCard] = useState(false);
  const [variants, setVariants] = useState([]);
  const [showAddVariant, setShowAddVariant] = useState(false);

  const [categories = [], catIsLoading] = useCollectionData(
    collection(db, "categories")
  );

  const addGalleryImages = (newImages) => {
    setGalleryImages((oldImages) => {
      const combArray = [
        ...oldImages,
        ...newImages.map((img) => {
          const { createdAt, ...filteredObj } = img;
          return filteredObj;
        }),
      ];
      return combArray.filter(
        (tag, index, array) => array.findIndex((t) => t.id == tag.id) == index
      );
    });
  };
  const removeGalleryImage = (id) => {
    setGalleryImages((images) => {
      return images.filter((img) => img.id !== id);
    });
  };

  const addNewVariant = (variant) => {
    setVariants((oldVariants) => {
      return [...oldVariants, variant];
    });
  };
  const removeVariant = (id) => {
    setVariants((variants) => {
      return variants.filter((v) => v.id !== id);
    });
  };

  const NewProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    region: Yup.string(),
    description: Yup.string().required("Product description is required"),
    sku: Yup.string().min(4, "Too Short!").max(20, "Too Long!"),
    category: Yup.string().required("Category is required"),
    tags: Yup.string().required("Tags is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      region: "",
      description: "",
      sku: "",
      category: "",
      tags: "",
    },
    validationSchema: NewProductSchema,
    onSubmit: async ({ name, description, sku, category, tags, region }) => {
      if (!category) {
        return toast.error("Category is required");
      }
      if (!coverImage) {
        return toast.error("Thumbnail is required");
      }
      if (variants.length === 0) {
        return toast.error("Variant is required");
      }
      try {
        const id = nanoid();
        const productRef = doc(db, "products", id);
        const product = {
          name,
          region,
          description,
          inStock,
          coverImage,
          galleryImages,
          sku,
          variants,
          category,
          tags,
          id,
          slug,
          bestSeller,
          topRated,
          featured,
          topUp,
          requiredPlayerId,
          requiredIGN,
          requiredIDCard,
          createdAt: Date.now(),
        };
        await setDoc(productRef, { ...product }, id);
        toast.success("Product added successfully");
        router.push(`/admin/products`);
      } catch (error) {
        console.log(error);
        toast.error("Failed! Server error!");
      }
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  const generateSlug = (e) => {
    const { value } = e.target;
    setFieldValue("name", value);
    setSlug(kebabCase(value));
  };

  if (catIsLoading) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }

  return (
    <Fragment>
      <FormikProvider value={formik}>
        <Form>
          <div className="px-2 md:px-4 lg:px-6 w-full mx-auto max-w-screen-2xl py-8">
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex-1 shadow-form w-full rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="relative">
                    <TextInput
                      label="Product Name"
                      error={Boolean(touched.name && errors.name)}
                      helpText={touched.name && errors.name}
                      onChange={generateSlug}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      label="Region"
                      error={Boolean(touched.region && errors.region)}
                      helpText={touched.region && errors.region}
                      {...getFieldProps("region")}
                    />
                  </div>

                  <div className="relative">
                    <TextareaInput
                      rows={5}
                      placeholder="Write something awesome..."
                      label="Description"
                      error={Boolean(touched.description && errors.description)}
                      helpText={touched.description && errors.description}
                      {...getFieldProps("description")}
                    />
                  </div>

                  <div className="relative">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      Thumbnail
                    </p>
                    {coverImage && (
                      <div className="relative w-32 h-32 mb-3 overflow-hidden rounded-md shadow-md">
                        <Image src={coverImage.url} />
                      </div>
                    )}
                    <ImagePicker
                      buttonTitle={
                        coverImage ? "Change Thumbnail" : "Add Thumbnail"
                      }
                      multiple={false}
                      selectedImages={(images) => setCoverImage(images[0])}
                      className="cursor-pointer !m-0 focus:outline-none inline-flex justify-center items-center px-4 lg:px-16 py-2 flex-shrink-0 bg-pink-500 text-pink-50 duration-300 hover:bg-pink-400 font-medium rounded ml-2"
                    />
                  </div>

                  <div className="relative">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      Gallery
                    </p>
                    <div className="flex flex-wrap -ml-2">
                      {galleryImages.map((image, idx) => (
                        <div
                          key={idx}
                          className="w-24 h-24 m-1 md:m-2 relative overflow-hidden rounded-md"
                        >
                          <a
                            onClick={() => removeGalleryImage(image.id)}
                            className="absolute text-red-500 text-xl cursor-pointer top-1 right-1 z-10"
                          >
                            <IoMdCloseCircle />
                          </a>
                          <Image src={image.url} />
                        </div>
                      ))}
                      <ImagePicker
                        buttonTitle={<GoPlus />}
                        title="Choose Images"
                        buttonIcon={null}
                        multiple={true}
                        selectedImages={(images) => addGalleryImages(images)}
                        className="w-24 h-24 m-2 text-2xl border-primary text-primary border-2 rounded-md justify-center items-center flex hover:text-white hover:bg-primary duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap pt-8">
                  <div className="flex items-center space-x-4">
                    <Toggle
                      enabled={bestSeller}
                      onChange={setBestSeller}
                      size={60}
                    />
                    <p>Best seller</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Toggle
                      enabled={topRated}
                      onChange={setTopRated}
                      size={60}
                    />
                    <p>Top rated</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Toggle
                      enabled={featured}
                      onChange={setFeatured}
                      size={60}
                    />
                    <p>Featured</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Toggle enabled={topUp} onChange={setTopUp} size={60} />
                    <p>Game Top-Up</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 xl:w-[340px] space-y-6">
                <div className="shadow-form w-full rounded-2xl p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Toggle enabled={inStock} onChange={setInStock} size={60} />
                    <p>In stock</p>
                  </div>
                  <div className="relative">
                    <SelectInput
                      defaultValue=""
                      label="Category"
                      error={Boolean(touched.category && errors.category)}
                      helpText={touched.category && errors.category}
                      isEmpty={!values.category}
                      {...getFieldProps("category")}
                    >
                      <option selected disabled value="">
                        Category...
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.slug}>
                          {category.name}
                        </option>
                      ))}
                    </SelectInput>
                  </div>

                  <div className="relative">
                    <TextInput
                      type="text"
                      label="Product SKU"
                      borderColor="border-gray-300 focus:border-green-500"
                      error={Boolean(touched.sku && errors.sku)}
                      helpText={touched.sku && errors.sku}
                      {...getFieldProps("sku")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="text"
                      label="Tags (comma separated)..."
                      borderColor="border-gray-300 focus:border-green-500"
                      error={Boolean(touched.tags && errors.tags)}
                      helpText={touched.tags && errors.tags}
                      {...getFieldProps("tags")}
                    />
                  </div>
                </div>

                <div className="shadow-form w-full rounded-2xl p-6">
                  <p className="font-medium text-sm text-gray-500 mb-6">
                    Variants
                  </p>

                  {variants.length > 0 && (
                    <Fragment>
                      <div className="flex justify-between items-center px-4 pr-8 mb-2">
                        <p className="text-gray-500 flex-1 font-medium text-xs">
                          Name
                        </p>
                        <p className="text-gray-500 flex-1 text-center font-medium text-xs">
                          Price
                        </p>
                        <p className="text-gray-500 flex-1 text-right font-medium text-xs">
                          Sale Price
                        </p>
                      </div>
                      <div className="space-y-2 mb-6">
                        {variants.map((variant, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-4 pr-8 bg-green-50 rounded-xl relative"
                          >
                            <a
                              onClick={() => removeVariant(variant.id)}
                              className="absolute text-yellow-500 text-xl cursor-pointer top-1 right-1 z-10"
                            >
                              <IoMdCloseCircle />
                            </a>
                            <p className="text-green-700 flex-1 text-sm font-semibold">
                              {variant.name} -{" "}
                              <span className="text-xs font-normal">
                                ({variant.stockQuantity})
                              </span>
                            </p>
                            <p className="flex-1 text-sm text-center text-green-700 text-opacity-70">
                              ${variant.price}
                            </p>
                            <p className="flex-1 text-sm text-right text-green-700 text-opacity-70">
                              {variant.salePrice
                                ? `$${variant.salePrice}`
                                : "-"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Fragment>
                  )}
                  {showAddVariant ? (
                    <AddVariant
                      onSubmit={(data) => addNewVariant(data)}
                      onClose={() => setShowAddVariant(false)}
                    />
                  ) : (
                    <button
                      className="btn btn-secondary btn-outline"
                      onClick={() => setShowAddVariant(true)}
                    >
                      Add Variant
                    </button>
                  )}
                </div>

                <div className="shadow-form w-full rounded-2xl p-6">
                  <p className="font-medium text-sm text-gray-500 mb-6">
                    Additional requirements
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center space-x-4">
                      <Toggle
                        enabled={requiredPlayerId}
                        onChange={setRequiredPlayerId}
                        size={60}
                      />
                      <p>Required player ID</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Toggle
                        enabled={requiredIGN}
                        onChange={setRequiredIGN}
                        size={60}
                      />
                      <p>Required IGN</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Toggle
                        enabled={requiredIDCard}
                        onChange={setRequiredIDCard}
                        size={60}
                      />
                      <p>Required ID card</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={cn(
                    "btn btn-primary btn-block text-white",
                    isSubmitting ? "loading" : ""
                  )}
                >
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </Fragment>
  );
};

NewProduct.layout = AdminLayout;
NewProduct.title = "Add New Product";
export default NewProduct;
