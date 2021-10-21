import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";

const FooterSection = () => {
  return (
    <footer className="h-screen  bg-primary flex flex-col justify-center items-center">
      <div className="h-full max-w-6xl flex flex-col justify-center items-center border-b   border-opacity-10 border-gray-200">
        <p className=" text-4xl md:text-5xl lg:text-8xl text-center font-semibold gradient-css ">
          Interested in working with me?
        </p>
        <Link href="/contact" passHref>
          <div className="text-blue-500 px-3 text-lg lg:text-2xl  md:px-6 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer flex items-center whitespace-nowrap mt-6">
            <p> Contact Me</p>
            <span>
              <ChevronRightIcon className="h-5 w-5 text-blue-500" />
            </span>
          </div>
        </Link>
      </div>
      <div className="   max-w-6xl w-full flex justify-center items-center py-5">
        <p className="text-sm opacity-50">
          © 2021 Dip Sagun Gurung. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
