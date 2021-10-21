const OnBoardingTwo = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">Method</p>
        <p className="text-center text-4xl font-semibold">
          How would you like to <br /> work with me?
        </p>
      </div>

      {/* Options */}

      <div className="py-4">
        <form className="space-y-6">
          <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
            <label htmlFor="One-Time-Project" className="cursor-pointer">
              One Time Project
            </label>
            <input
              type="checkbox"
              id="One-Time-Project"
              name="One-Time-Project"
              value="One-Time-Project"
              className="cursor-pointer"
            />
          </div>
          <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
            <label htmlFor="Long-Term-Project" className="cursor-pointer">
              Long Term Project
            </label>
            <input
              type="checkbox"
              id="Long-Term-Project"
              name="Long-Term-Project"
              value="Long-Term-Project"
              className="cursor-pointer"
            />
          </div>
          <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
            <label htmlFor="Other" className="cursor-pointer">
              Other
            </label>
            <input
              type="checkbox"
              id="Other"
              name="Other"
              value="Other"
              className="cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnBoardingTwo;
