import { useState } from "react";
import { useFormik } from "formik";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";

import OnBoardingOne from "../components/OnBoardingOne";
import OnBoardingTwo from "../components/OnBoardingTwo";
import OnBoardingThree from "../components/OnBoardingThree";

const Contact = () => {
  const [page, setPage] = useState(1);

  const previousPage = () => {
    if (page == 1) return;
    setPage((prev) => prev - 1);
  };
  const nextPage = () => {
    if (page == 3) return;
    setPage((prev) => prev + 1);
  };

  return (
    <div className="font-jugo font-medium text-gray-200 h-screen w-full bg-primary flex items-center justify-center">
      {/* Container */}
      <div className="h-full lg:h-5/6 bg-black w-full max-w-4xl lg:rounded-3xl flex flex-col items-center  relative">
        {/* Contact Header */}
        <div
          className={`absolute top-0 left-0  py-4 px-4 w-full flex items-center border-b-2 border-gray-200 border-opacity-20 ${
            page === 1 ? "justify-end" : "justify-between"
          } `}
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
          {page === 1 && <OnBoardingOne />}
          {page === 2 && <OnBoardingTwo />}
          {page === 3 && <OnBoardingThree />}
          {/* <OnBoardingTwo /> */}
        </div>

        {/* Contact Footer */}
        <div className="absolute bottom-0 left-0  pt-4 pb-8 w-full flex items-center justify-center ">
          {page === 3 && (
            <button
              className="flex items-center px-16  py-2
             rounded-2xl  cursor-pointer font-semibold text-base lg:text-lg bg-blue-500   hover:bg-blue-400"
            >
              Send
            </button>
          )}

          {page !== 3 && (
            <button
              className="flex items-center px-16  py-2
             rounded-2xl  cursor-pointer font-semibold text-base lg:text-lg bg-blue-500   hover:bg-blue-400"
              onClick={nextPage}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
