import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { useState, useEffect, Fragment } from "react";
import TextInput from "@components/UI/TextInput";
import TextareaInput from "@components/UI/TextareaInput";
import kebabCase from "lodash.kebabcase";
import ImagePicker from "@components/ImagePicker";
import Image from "@components/Image";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import toast from "react-hot-toast";
import { cn } from "@lib/healper";
import { useQuill } from "react-quilljs";
import LoadingScreen from "@components/LoadingScreen";

const EditCategory = ({ category }) => {
  if (!category) {
    return <LoadingScreen fullScreen={false} bg="bg-white" />;
  }
  const [coverImage, setCoverImage] = useState(category.coverImage || null);
  const { quill, quillRef } = useQuill();
  const [instruction, setInstruction] = useState(category.instruction || "");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setInstruction(quill.root.innerHTML);
      });
      quill.clipboard.dangerouslyPasteHTML(instruction);
    }
  }, [quill]);

  const NewCategorySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name required"),
    slug: Yup.string().required("Slug required"),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: category.name || "",
      slug: category.slug || "",
      description: category.description || "",
    },
    validationSchema: NewCategorySchema,
    onSubmit: async ({ name, slug, description }) => {
      try {
        const categoryRef = doc(db, "categories", category.id);
        await updateDoc(categoryRef, {
          name,
          description,
          instruction,
          coverImage,
          slug,
        });
        toast.success("Category updated successfully");
      } catch (error) {
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

  return (
    <Fragment>
      <FormikProvider value={formik}>
        <Form>
          <div className="px-2 md:px-4 lg:px-6 w-full max-w-3xl py-8">
            <div className="xl:flex space-y-6 lg:space-y-0">
              <div className="flex-1 shadow-form w-full rounded-2xl p-6">
                <div className="space-y-6">
                  <div className="relative">
                    <TextInput
                      label="Name"
                      error={Boolean(touched.name && errors.name)}
                      helpText={touched.name && errors.name}
                      value={values.name}
                      onChange={generateSlug}
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
                    <TextareaInput
                      rows={5}
                      textColor="text-gray-500"
                      label="Description"
                      error={Boolean(touched.description && errors.description)}
                      helpText={touched.description && errors.description}
                      {...getFieldProps("description")}
                    />
                  </div>

                  <div className="relative w-full aspect-video">
                    <div ref={quillRef} />
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
                      buttonTitle="Add Thumbnail"
                      multiple={false}
                      selectedImages={(images) => setCoverImage(images[0])}
                      className="cursor-pointer !m-0 focus:outline-none inline-flex justify-center items-center px-4 lg:px-16 py-2 flex-shrink-0 bg-pink-500 text-pink-100 duration-300 hover:bg-pink-400 font-medium rounded ml-2"
                    />
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
          </div>
        </Form>
      </FormikProvider>
    </Fragment>
  );
};
export default EditCategory;
