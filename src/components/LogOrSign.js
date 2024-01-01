import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

function LogOrSign() {
  const [showPass, setShowPass] = useState(false);
  const showPassHandle = () => {
    setShowPass(!showPass);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "you must be 15 character")
        .required("required"),
      lastName: Yup.string()
        .max(20, "you must be 20 character")
        .required("required"),
      email: Yup.string().required("required"),
      password: Yup.string()
        .max(12, "max 12 character")
        .min(8, "min 8 character")
        .required("required"),
    }),
  });

  return (
    <div>
      <div className="w-10/12 md:w-5/12 mx-auto border rounded-md py-5 mt-10 ">
        <form
          onSubmit={formik.handleSubmit}
          className="w-10/12 mx-auto flex flex-col space-y-4"
        >
          <div className="flex flex-col">
            <div>
              <label htmlFor="firstName">Name: </label>
              <input
                className="border rounded-md w-full focus:outline-none px-3 py-1"
                type="text"
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-[12px] ml-3 text-red-500">
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <label htmlFor="lastName">lastName: </label>
              <input
                className="border rounded-md w-full focus:outline-none px-3 py-1"
                type="text"
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-[12px] ml-3 text-red-500">
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <label htmlFor="email">email: </label>
              <input
                className="border rounded-md w-full focus:outline-none px-3 py-1"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-[12px] ml-3 text-red-500">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="relative">
              <label htmlFor="password">password: </label>
              <input
                className="border rounded-md w-full focus:outline-none px-3 py-1"
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span
                className="absolute cursor-pointer top-8 right-8"
                onClick={showPassHandle}
              >
                <FaRegEye />
              </span>
            </div>
            <div className="text-[12px] ml-3 text-red-500">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <button className="bg-green-500 text-white rounded-md w-6/12 mx-auto" type="submit">submit</button>
        </form> 
        <div className="mt-10 w-11/12 mx-auto relative">
          <hr />
          <span className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Other
          </span>
        </div>

        <div className="mt-10 flex justify-center space-x-5 w-6/12 mx-auto">
          <span className="border border-black rounded-full p-2">
            <FaGoogle />
          </span>
          <span className="border border-black rounded-full p-2">
            {" "}
            <FaFacebookF />
          </span>
          <span className="border border-black rounded-full p-2">
            <FaXTwitter />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogOrSign;
