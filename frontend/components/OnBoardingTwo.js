import { useState, useEffect } from "react";

const OnBoardingTwo = (props) => {
  const { data, setData, nextPage } = props;
  const [methods, setMethods] = useState(data.methods);

  useEffect(() => {
    setData((prevState) => {
      return { ...prevState, methods: [...methods] };
    });
  }, [methods, setData]);

  const onOptionClick = (e) => {
    const value = e.target.value;
    if (methods.includes(value)) {
      let array = [...methods];
      let index = array.indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        setMethods(array);
      }
    } else {
      setMethods((prevState) => {
        return [...prevState, value];
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">Methods</p>
        <p className="text-center text-4xl font-semibold">
          How would you like to <br /> work with me?
        </p>
      </div>

      {/* Options */}

      <div className="py-4">
        <form className="space-y-6">
          <label htmlFor="One-Time-Project" className="cursor-pointer block">
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
              One Time Project
              <input
                type="checkbox"
                id="One-Time-Project"
                name="One-Time-Project"
                value="One-Time-Project"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={methods.includes("One-Time-Project")}
              />
            </div>
          </label>
          <label htmlFor="Long-Term-Project" className="cursor-pointer block">
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
              Long Term Project
              <input
                type="checkbox"
                id="Long-Term-Project"
                name="Long-Term-Project"
                value="Long-Term-Project"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={methods.includes("Long-Term-Project")}
              />
            </div>
          </label>
          <label htmlFor="Other" className="cursor-pointer block">
            <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
              Other
              <input
                type="checkbox"
                id="Other"
                name="Other"
                value="Other"
                className="cursor-pointer"
                onChange={onOptionClick}
                checked={methods.includes("Other")}
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

export default OnBoardingTwo;
