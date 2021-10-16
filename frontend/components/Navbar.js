import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link as ReactScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="h-14 py-4 bg-[#1D1D1F] bg-opacity-80 backdrop-filter backdrop-blur-md z-10  fixed top-0 left-0 w-full flex justify-center items-center border-b border-gray-200 border-opacity-25">
      <nav className="flex justify-between items-center w-11/12 md:w-9/12 max-w-7xl">
        <ReactScrollLink to="HeroSection" smooth={true} duration={1500}>
          <h1 className="font-semibold text-base lg:text-lg px-3 md:px-6 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer whitespace-nowrap ">
            Dip Sagun Gurung
          </h1>
        </ReactScrollLink>

        <ul className="flex items-center">
          <ReactScrollLink to="BenefitSection" smooth={true} duration={1300}>
            <li className="hidden md:inline px-4  lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base ">
              Benefits
            </li>
          </ReactScrollLink>
          <ReactScrollLink to="ProjectSection" smooth={true} duration={1300}>
            <li className="hidden md:inline px-4  lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base ">
              Projects
            </li>
          </ReactScrollLink>
          <ReactScrollLink to="AboutMeSection" smooth={true} duration={1300}>
            <li className="hidden md:inline px-4 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer text-sm lg:text-base  ">
              About Me
            </li>
          </ReactScrollLink>
        </ul>
        <div className="text-blue-500 px-3 text-sm lg:text-base  md:px-6 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer flex items-center whitespace-nowrap ">
          <p> Contact Me</p>
          <span>
            <ChevronRightIcon className="h-5 w-5 text-blue-500" />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
