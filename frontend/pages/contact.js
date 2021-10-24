import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import emailjs from "emailjs-com";

import OnBoardingOne from "../components/OnBoardingOne";
import OnBoardingTwo from "../components/OnBoardingTwo";
import OnBoardingThree from "../components/OnBoardingThree";
import LoadingSpinner from "../components/LoadingSpinner";
import OnBoardingFour from "../components/OnBoardingFour";

const Contact = () => {
  const [data, setData] = useState({
    services: [],
    methods: [],
  });

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(3, "Must be 3 or more than 3 characters")
        .required("*Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("*Required"),
      email: Yup.string().email("Invalid email address").required("*Required"),
    }),
    onSubmit: (values) => {
      sendEmail(data, values);
    },
  });

  // For Controlling the page
  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    if (page === 5) return;
    setPage((prev) => prev + 1);
  };

  // For sending the email
  const sendEmail = (data, values) => {
    let templateObject = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      services: data.services,
      methods: data.methods,
    };

    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMALJS_SERVICEID,
        process.env.NEXT_PUBLIC_EMALJS_TEMPLATEID,
        templateObject,
        process.env.NEXT_PUBLIC_EMALJS_USERID
      )
      .then(
        (result) => {
          setLoading(false);
          nextPage();
        },
        (error) => {
          setLoading(false);
          nextPage();
        }
      );
  };

  return (
    <div className="font-jugo font-medium text-gray-200 h-screen w-full bg-primary flex items-center justify-center">
      {/* Container */}
      <div className="h-full lg:h-5/6 bg-black w-full max-w-4xl lg:rounded-3xl flex flex-col items-center  relative">
        {/* Contact Header */}
        <div
          className={`absolute top-0 left-0  py-4 px-4 w-full flex items-center border-b-2 border-gray-200 border-opacity-20 ${
            page === 1 ? "justify-end" : "justify-between"
          } ${page === 4 ? "hidden" : ""} `}
        >
          {page !== 1 ? (
            <button
              className="flex items-center px-4 pr-5  py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base"
              onClick={previousPage}
            >
              <ChevronLeftIcon className="text-gray-200 h-5 w-5" /> Back
            </button>
          ) : null}

          <Link href="/" passHref>
            <button className="flex items-center px-4  py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base">
              Cancel
            </button>
          </Link>
        </div>

        {/* Contact Body */}
        <div className="h-full w-full flex items-center justify-center">
          {page === 1 && (
            <OnBoardingOne data={data} setData={setData} nextPage={nextPage} />
          )}
          {page === 2 && (
            <OnBoardingTwo data={data} setData={setData} nextPage={nextPage} />
          )}
          {page === 3 && <OnBoardingThree formik={formik} />}
          {page === 4 && <OnBoardingFour />}
        </div>

        {/* Loading Spinner */}

        {loading ? <LoadingSpinner /> : null}
      </div>
    </div>
  );
};

export default Contact;
