import { useState, useEffect } from "react";

const OnBoardingOne = (props) => {
  const { data, setData, nextPage } = props;
  const [services, setServices] = useState(data.services);

  useEffect(() => {
    setData((prevState) => {
      return { ...prevState, services: [...services] };
    });
  }, [services, setData]);

  const onOptionClick = (e) => {
    const value = e.target.value;
    if (services.includes(value)) {
      let array = [...services];
      let index = array.indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        setServices(array);
      }
    } else {
      setServices((prevState) => {
        return [...prevState, value];
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">Services</p>
        <p className="text-center text-3xl md:text-4xl font-semibold">
          How can I help you?
        </p>
      </div>

      {/* Options */}

      <div className="py-4">
        <form className="space-y-5 md:space-y-6">
          <label
            htmlFor="Web-Development"
            className="cursor-pointer  flex items-center justify-center"
          >
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-72  md:w-96 cursor-pointer">
              Web Development
              <input
                type="checkbox"
                id="Web-Development"
                name="Web-Development"
                value="Web-Development"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={services.includes("Web-Development")}
              />
            </div>
          </label>
          <label
            htmlFor="Web-Design"
            className="cursor-pointer flex items-center justify-center"
          >
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-72 md:w-96 cursor-pointer">
              Web Design
              <input
                type="checkbox"
                id="Web-Design"
                name="Web-Design"
                value="Web-Design"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={services.includes("Web-Design")}
              />
            </div>
          </label>
          <label
            htmlFor="Other"
            className="cursor-pointer flex items-center justify-center"
          >
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-72 md:w-96 cursor-pointer">
              Other
              <input
                type="checkbox"
                id="Other"
                name="Other"
                value="Other"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={services.includes("Other")}
              />
            </div>
          </label>
          <div className="absolute bottom-0 left-0  pt-4 pb-8 w-full flex items-center justify-center ">
            <button
              className="flex items-center px-16  py-2
             rounded-2xl  cursor-pointer font-semibold text-base lg:text-lg bg-blue-500   hover:bg-blue-400"
              onClick={nextPage}
              type="button"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnBoardingOne;
