import AdminLayout from "@components/AdminLayout";
import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { Fragment, useContext } from "react";
import TextInput from "@components/UI/TextInput";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { cn } from "@lib/healper";
import AuthContext from "@lib/authContext";
const CreateOrder = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const NewUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("What should we call you without your name!?")
      .min(3)
      .max(20)
      .label("Name"),
    email: Yup.string().required().email().max(50).label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string()
      .required("Please confirm your Password again")
      .equals([Yup.ref("password")]),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewUserSchema,
    onSubmit: async ({ name, email, password }) => {
      try {
        const token = await user.getIdToken();
        const res = await fetch("/api/users/create-user", {
          body: JSON.stringify({
            token,
            name,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        toast.success("Customer created successfully!");
        router.push(`/admin/customers`);
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
  return (
    // <Fragment>
    //   <FormikProvider value={formik}>
    //     <Form>
    //       <div className="px-2 md:px-4 lg:px-6 w-full max-w-3xl py-8">
    //         <div className="xl:flex space-y-6 lg:space-y-0">
    //           <div className="flex-1 shadow-form w-full rounded-2xl p-6">
    //             <div className="space-y-6">
    //               <div className="relative">
    //                 <TextInput
    //                   label="Name"
    //                   error={Boolean(touched.name && errors.name)}
    //                   helpText={touched.name && errors.name}
    //                   {...getFieldProps("name")}
    //                 />
    //               </div>

    //               <div className="relative">
    //                 <TextInput
    //                   label="Email"
    //                   error={Boolean(touched.email && errors.email)}
    //                   helpText={touched.email && errors.email}
    //                   {...getFieldProps("email")}
    //                 />
    //               </div>
    //               <div className="relative">
    //                 <TextInput
    //                   label="Password"
    //                   type="password"
    //                   error={Boolean(touched.password && errors.password)}
    //                   helpText={touched.password && errors.password}
    //                   {...getFieldProps("password")}
    //                 />
    //               </div>
    //               <div className="relative">
    //                 <TextInput
    //                   label="Confirm Password"
    //                   type="password"
    //                   error={Boolean(
    //                     touched.confirmPassword && errors.confirmPassword
    //                   )}
    //                   helpText={
    //                     touched.confirmPassword && errors.confirmPassword
    //                   }
    //                   {...getFieldProps("confirmPassword")}
    //                 />
    //               </div>

    //               <button
    //                 type="submit"
    //                 className={cn(
    //                   "btn btn-primary btn-block text-white",
    //                   isSubmitting ? "loading" : ""
    //                 )}
    //               >
    //                 Submit
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Form>
    //   </FormikProvider>
    // </Fragment>
    <div>Comming Soon...</div>
  );
};

CreateOrder.layout = AdminLayout;
CreateOrder.title = "Create Order";
export default CreateOrder;
