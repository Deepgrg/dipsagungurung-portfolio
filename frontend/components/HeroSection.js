import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";

import MouseScroll from "./MouseScroll";

const HeroSection = () => {
  return (
    <section
      className="h-screen pt-14 flex flex-col items-center bg-primary relative"
      id="HeroSection"
    >
      {/* My Picture */}
      <div className="flex flex-col p-10   sm:p-10 lg:p-16 items-center ">
        <div className="relative group">
          <div
            className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-red-600 rounded-full blur opacity-75 group-hover:opacity-100 group-hover:transition duration-1000 ease-in-out 
          "
          ></div>
          <div className=" relative w-56 h-56 pr-1 bg-gray-50 rounded-full flex items-center justify-center border-4 border-opacity-10 border-gray-300">
            <Image
              src="/MyProfile.svg"
              width={285}
              height={285}
              alt="Dip Sagun Gurung profile image"
            ></Image>
          </div>
        </div>
      </div>

      {/* My Picture Caption */}
      <div className="flex flex-col items-center ">
        <h2 className="text-xl md:text-2xl text-center mb-2">Portfolio</h2>
        <h1 className="text-6xl md:text-7xl text-center">Dip Sagun Gurung</h1>

        <Link href="/contact" passHref>
          <div className="mt-3 flex items-center  px-3 md:px-6 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer">
            <p className="text-center text-blue-500 text-xl md:text-2xl">
              Get in touch with me
            </p>
            <span>
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
            </span>
          </div>
        </Link>
      </div>
      <MouseScroll />
    </section>
  );
};

export default HeroSection;
