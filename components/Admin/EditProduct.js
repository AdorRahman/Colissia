import * as Yup from "yup";
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
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import AddVariant from "@components/Ecommerce/AddVariant";
import toast from "react-hot-toast";
import TextInput from "@components/UI/TextInput";
import TextareaInput from "@components/UI/TextareaInput";
import SelectInput from "@components/UI/SelectInput";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import EditVariant from "./EditVaraint";

const EditProduct = ({ product }) => {
  const [coverImage, setCoverImage] = useState(product.coverImage || null);
  const router = useRouter();
  const [galleryImages, setGalleryImages] = useState(
    product.galleryImages || []
  );
  const [inStock, setInStock] = useState(product.inStock || false);
  const [bestSeller, setBestSeller] = useState(product.bestSeller || false);
  const [topRated, setTopRated] = useState(product.topRated || false);
  const [featured, setFeatured] = useState(product.featured || false);
  const [topUp, setTopUp] = useState(product.topUp || false);
  const [requiredPlayerId, setRequiredPlayerId] = useState(
    product.requiredPlayerId || false
  );
  const [requiredIGN, setRequiredIGN] = useState(product.requiredIGN || false);
  const [requiredIDCard, setRequiredIDCard] = useState(
    product.requiredIDCard || false
  );
  const [variants, setVariants] = useState(product.variants || []);
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
  const updateVariant = (id, data) => {
    setVariants((oldVariants) => {
      return oldVariants.map((v) => {
        if (v.id == id) {
          return { ...v, ...data };
        }
        return v;
      });
    });
  };

  const NewProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    slug: Yup.string().required("Slug required"),
    region: Yup.string(),
    description: Yup.string().required("Product description is required"),
    sku: Yup.string().min(4, "Too Short!").max(20, "Too Long!"),
    category: Yup.string().required("Category is required"),
    tags: Yup.string().required("Tags is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: product.name || "",
      slug: product.slug || "",
      region: product.region || "",
      description: product.description || "",
      sku: product.sku || "",
      category: product.category || "",
      tags: product.tags || "",
    },
    validationSchema: NewProductSchema,
    onSubmit: async ({
      name,
      slug,
      description,
      sku,
      category,
      tags,
      region,
    }) => {
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
        const productRef = doc(db, "products", product.id);
        const updatedProduct = {
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
          slug,
          bestSeller,
          topRated,
          featured,
          topUp,
          requiredPlayerId,
          requiredIGN,
          requiredIDCard,
        };
        await updateDoc(productRef, { ...updatedProduct });
        toast.success("Product updated successfully");
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
    setFieldValue("slug", kebabCase(value));
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
                      value={values.name}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      label="Slug"
                      error={Boolean(touched.slug && errors.slug)}
                      helpText={touched.slug && errors.slug}
                      {...getFieldProps("slug")}
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
                        <option key={category.id} value={category.name}>
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
                      <div className="space-y-2 mb-6">
                        {variants.map((variant, idx) => (
                          <Disclosure>
                            {({ open }) => (
                              <Fragment key={idx}>
                                <Disclosure.Button className="flex gap-2 items-center p-4 pr-8 bg-green-50 rounded-xl relative w-full">
                                  <a
                                    onClick={() => removeVariant(variant.id)}
                                    className="absolute text-yellow-500 text-xl cursor-pointer top-1 right-1 z-10"
                                  >
                                    <IoMdCloseCircle />
                                  </a>
                                  <BiChevronDown
                                    className={cn(
                                      "text-green-700 text-2xl duration-300",
                                      open ? "rotate-180" : ""
                                    )}
                                  />
                                  <p className="text-green-700 flex-1 text-left text-sm font-semibold">
                                    {variant.name} -{" "}
                                    <span className="text-xs font-normal">
                                      ({variant.stockQuantity})
                                    </span>
                                  </p>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-4 pt-8 text-sm text-gray-500 border rounded-md">
                                  <EditVariant
                                    variant={variant}
                                    onSubmit={(data) =>
                                      updateVariant(variant.id, data)
                                    }
                                  />
                                </Disclosure.Panel>
                              </Fragment>
                            )}
                          </Disclosure>
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
                  Update
                </button>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </Fragment>
  );
};
export default EditProduct;
