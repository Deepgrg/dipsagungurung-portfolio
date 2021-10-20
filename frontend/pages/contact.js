import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Contact = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="font-jugo font-medium text-gray-200 h-screen w-full bg-[#1D1D1F] flex items-center justify-center">
      {/* Container */}
      <div className="h-5/6 bg-black w-full max-w-4xl rounded-3xl flex flex-col items-center divide-y divide-gray-200 divide-solid divide-opacity-20">
        {/* Contact Header */}
        <div className="  py-4 px-4 w-full flex items-center justify-between">
          <button className="flex items-center px-4 pr-5  py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base">
            <ChevronLeftIcon className="text-gray-200 h-5 w-5" /> Back
          </button>
          <button className="flex items-center px-4  py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base">
            Cancel
          </button>
        </div>

        {/* Contact Body */}
        <div className="h-full w-full">
          <h2>Testign</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
