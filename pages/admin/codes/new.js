import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Fragment } from "react";
import TextInput from "@components/UI/TextInput";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import kebabCase from "lodash.kebabcase";
import { nanoid } from "nanoid";
import {
  doc,
  setDoc,
  writeBatch,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@lib/firebase";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import { cn } from "@lib/healper";
import SelectInput from "@components/UI/SelectInput";
import { ProductContext } from "@lib/context/productContext";
import TextareaInput from "@components/UI/TextareaInput";
import { MdImportExport } from "react-icons/md";

const NewCode = () => {
  const router = useRouter();
  const fileInputRef = useRef();
  const { products } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const fileTypes = ["text/plain"];
  const readFile = async (file) => {
    if (fileTypes.includes(file.type)) {
      const data = await new Response(file).text();
      return data;
    } else {
      return null;
    }
  };

  const NewCodeSchema = Yup.object().shape({
    code: Yup.string().required("Code is required"),
    productName: Yup.string().required("Product is required"),
    productId: Yup.string().required("Product is required"),
    variantId: Yup.string().required("Variant is required"),
    variantName: Yup.string().required("Variant is required"),
    expireDate: Yup.string(),
    reference: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      productName: "",
      productId: "",
      variantId: "",
      variantName: "",
      expireDate: "",
      reference: "",
    },
    validationSchema: NewCodeSchema,
    onSubmit: async ({
      code,
      productName,
      productId,
      variantId,
      variantName,
      expireDate,
      reference,
    }) => {
      const keys = code.split(",");
      if (keys.length < 1) {
        return toast.error("No key found!");
      }
      const uniqueKeys = keys.filter((v, i, a) => a.indexOf(v) === i);

      try {
        let duplicateCount = 0;
        const batch = writeBatch(db);
        const oldKeysRef = collection(db, "codes");
        const oldKeysSnap = await getDocs(oldKeysRef);
        const oldKeys = oldKeysSnap.docs.map((doc) => doc.data());
        for (const key in uniqueKeys) {
          if (oldKeys.some((k) => k.code === uniqueKeys[key])) {
            duplicateCount += 1;
            console.log("Found duplicate!");
          } else {
            const id = nanoid();
            const codeRef = doc(db, "codes", id);
            batch.set(codeRef, {
              code: uniqueKeys[key],
              productName,
              productId,
              variantId,
              variantName,
              expireDate: expireDate || null,
              reference,
              used: false,
              id,
              createdAt: Date.now(),
            });
          }
        }
        await batch.commit();
        toast.success("Code added successfully");
        router.push(`/admin/codes`);
      } catch (error) {
        console.log(error);
        toast.error("Failed! Server error!");
      } finally {
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
    setSlug(encodeURI(kebabCase(value)));
  };

  const handelFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (fileTypes.includes(file.type)) {
        const content = await readFile(file);
        const data = content.split("\n");
        if (values.code) {
          setFieldValue("code", `${values.code},${data.join(",")}`);
        } else {
          setFieldValue("code", data.join(","));
        }
      } else {
        toast.error("File type not supported");
      }
      fileInputRef.current.value = "";
    }
  };

  const onChangeProduct = (e) => {
    const { value } = e.target;
    const product = products.find((p) => p.id === value);
    if (product) {
      setSelectedProduct(product);
      setFieldValue("variantId", "");
      setFieldValue("productId", product.id);
      setFieldValue("productName", product.name);
    }
  };

  const onChangeVariant = (e) => {
    if (!selectedProduct) return;
    const { value } = e.target;
    const variant = selectedProduct.variants.find((v) => v.id === value);
    if (variant) {
      setFieldValue("variantId", variant.id);
      setFieldValue("variantName", variant.name);
    }
  };

  return (
    <Fragment>
      <FormikProvider value={formik}>
        <Form>
          <div className="px-2 md:px-4 lg:px-6 w-full max-w-3xl py-8">
            <div className="xl:flex space-y-6 lg:space-y-0">
              <div className="flex-1 shadow-form w-full rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="relative">
                    <SelectInput
                      label="Product"
                      isEmpty={!values.productId}
                      error={Boolean(touched.productId && errors.productId)}
                      helpText={touched.productId && errors.productId}
                      onChange={(e) => {
                        onChangeProduct(e);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("productId", true);
                      }}
                    >
                      <option selected disabled value="">
                        Product...
                      </option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </SelectInput>
                  </div>

                  <div className="relative">
                    <SelectInput
                      label="Variant"
                      isEmpty={!values.variantId}
                      error={Boolean(touched.variantId && errors.variantId)}
                      helpText={touched.variantId && errors.variantId}
                      onChange={(e) => {
                        onChangeVariant(e);
                      }}
                      onBlur={() => {
                        formik.setFieldTouched("variantId", true);
                      }}
                    >
                      <option selected disabled value="">
                        Variant...
                      </option>
                      {selectedProduct?.variants?.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                          {variant.name}
                        </option>
                      ))}
                    </SelectInput>
                  </div>

                  <div className="relative">
                    <TextareaInput
                      label="Codes"
                      rows={5}
                      error={Boolean(touched.code && errors.code)}
                      helpText={touched.code && errors.code}
                      {...getFieldProps("code")}
                    />
                    <div className="flex justify-end mt-2">
                      <label className="btn btn-success btn-outline gap-2">
                        <span className="text-2xl">
                          <MdImportExport />
                        </span>
                        <p>Import from file</p>
                        <input
                          ref={fileInputRef}
                          onChange={(event) => handelFileChange(event)}
                          type="file"
                          accept={fileTypes.join(",")}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <TextInput
                      type="date"
                      label="Expire Date"
                      error={Boolean(touched.expireDate && errors.expireDate)}
                      helpText={touched.expireDate && errors.expireDate}
                      {...getFieldProps("expireDate")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="text"
                      label="Reference"
                      error={Boolean(touched.reference && errors.reference)}
                      helpText={touched.reference && errors.reference}
                      {...getFieldProps("reference")}
                    />
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="submit"
                      className={cn(
                        "btn btn-primary btn-block text-white",
                        isSubmitting ? "loading" : ""
                      )}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </Fragment>
  );
};

NewCode.layout = AdminLayout;
NewCode.title = "Add Coupon";
export default NewCode;
