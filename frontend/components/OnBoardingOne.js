const OnBoardingOne = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">Services</p>
        <p className="text-center text-4xl font-semibold">
          How can I help you?
        </p>
      </div>

      {/* Options */}

      <div className="py-4">
        <form className="space-y-6">
          <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
            <label htmlFor="Web-Development" className="cursor-pointer">
              Web Development
            </label>
            <input
              type="checkbox"
              id="Web-Development"
              name="Web-Development"
              value="Web-Development"
              className="cursor-pointer"
            />
          </div>
          <div className="border-2 border-gray-200 border-opacity-10 rounded-2xl bg-primary px-8 py-5 flex items-center justify-between w-96 cursor-pointer">
            <label htmlFor="Web-Design" className="cursor-pointer">
              Web Design
            </label>
            <input
              type="checkbox"
              id="Web-Design"
              name="Web-Design"
              value="Web-Design"
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

export default OnBoardingOne;
