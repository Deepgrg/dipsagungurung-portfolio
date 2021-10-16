import { Link as ReactScrollLink } from "react-scroll";

const MouseScroll = () => {
  return (
    <ReactScrollLink
      to="SectionOnePointFive"
      duration={1000}
      smooth={true}
      ignoreCancelEvents={true}
    >
      <div className="absolute left-1/2  bottom-6 md:bottom-20 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer">
        <div className="w-5 h-10 mb-1 border-gray-200 border border-opacity-40 rounded-3xl flex justify-center items-center      ">
          <span className="w-2 h-2 bg-gray-200 opacity-40 rounded-full block scrollwheel-down-css"></span>
        </div>
        <div>
          <span className="w-2 h-2 border-r-2 border-b-2 border-gray-200 border-opacity-40 block rotate-45 scrollarrow-down-css"></span>
        </div>
      </div>
    </ReactScrollLink>
  );
};

export default MouseScroll;
