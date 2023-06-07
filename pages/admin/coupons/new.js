import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Fragment } from "react";
import TextInput from "@components/UI/TextInput";
import { useRouter } from "next/router";
import kebabCase from "lodash.kebabcase";
import { nanoid } from "nanoid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@lib/firebase";
import toast from "react-hot-toast";
import AdminLayout from "@components/AdminLayout";
import { cn } from "@lib/healper";
import SelectInput from "@components/UI/SelectInput";

const NewCoupon = () => {
  const router = useRouter();

  const NewCouponSchema = Yup.object().shape({
    code: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Code required"),
    value: Yup.number().required("Value required"),
    type: Yup.string().required("Type required"),
    startDate: Yup.string(),
    endDate: Yup.string(),
    minimumAmount: Yup.number(),
    usageLimit: Yup.number(),
    usageLimitPerUser: Yup.number(),
    description: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      code: "",
      value: "",
      type: "",
      startDate: "",
      endDate: "",
      minimumAmount: "",
      usageLimit: "",
      usageLimitPerUser: "",
      description: "",
    },
    validationSchema: NewCouponSchema,
    onSubmit: async ({
      code,
      value,
      type,
      startDate,
      endDate,
      minimumAmount,
      usageLimit,
      usageLimitPerUser,
      description,
    }) => {
      try {
        const id = nanoid();
        const couponRef = doc(db, "coupons", id);
        await setDoc(
          couponRef,
          {
            code,
            value,
            type,
            startDate: startDate || null,
            endDate: endDate || null,
            minimumAmount: minimumAmount || null,
            usageLimit: usageLimit || null,
            usageLimitPerUser: usageLimitPerUser || null,
            description,
            used: 0,
            usedBy: [],
            id,
            createdAt: Date.now(),
          },
          id
        );
        toast.success("Coupon created successfully");
        router.push(`/admin/coupons`);
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
    setSlug(encodeURI(kebabCase(value)));
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
                      label="Code"
                      error={Boolean(touched.code && errors.code)}
                      helpText={touched.code && errors.code}
                      {...getFieldProps("code")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="number"
                      label="Value"
                      borderColor="border-gray-300 focus:border-gray-300"
                      error={Boolean(touched.value && errors.value)}
                      helpText={touched.value && errors.value}
                      {...getFieldProps("value")}
                    />
                  </div>

                  <div className="relative">
                    <SelectInput
                      label="Type"
                      isEmpty={!values.type}
                      error={Boolean(touched.type && errors.type)}
                      helpText={touched.type && errors.type}
                      {...getFieldProps("type")}
                    >
                      <option selected disabled value="">
                        Type...
                      </option>
                      <option value="fixed">Fixed</option>
                      <option value="percentage">Percentage</option>
                    </SelectInput>
                  </div>

                  <div className="relative">
                    <TextInput
                      type="date"
                      label="Start Date"
                      borderColor="border-gray-300 focus:border-gray-300"
                      error={Boolean(touched.startDate && errors.startDate)}
                      helpText={touched.startDate && errors.startDate}
                      {...getFieldProps("startDate")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="date"
                      label="End Date"
                      borderColor="border-gray-300 focus:border-gray-300"
                      error={Boolean(touched.endDate && errors.endDate)}
                      helpText={touched.endDate && errors.endDate}
                      {...getFieldProps("endDate")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="number"
                      label="Minimum Amount Requirement"
                      error={Boolean(
                        touched.minimumAmount && errors.minimumAmount
                      )}
                      helpText={touched.minimumAmount && errors.minimumAmount}
                      {...getFieldProps("minimumAmount")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="number"
                      label="Usage Limit"
                      error={Boolean(touched.usageLimit && errors.usageLimit)}
                      helpText={touched.usageLimit && errors.usageLimit}
                      {...getFieldProps("usageLimit")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="number"
                      label="Usage Limit Per User"
                      error={Boolean(
                        touched.usageLimitPerUser && errors.usageLimitPerUser
                      )}
                      helpText={
                        touched.usageLimitPerUser && errors.usageLimitPerUser
                      }
                      {...getFieldProps("usageLimitPerUser")}
                    />
                  </div>

                  <div className="relative">
                    <TextInput
                      type="text"
                      label="Description"
                      error={Boolean(touched.description && errors.description)}
                      helpText={touched.description && errors.description}
                      {...getFieldProps("description")}
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

NewCoupon.layout = AdminLayout;
NewCoupon.title = "Add Coupon";
export default NewCoupon;
