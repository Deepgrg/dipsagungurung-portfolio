const OnBoardingThree = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">About you</p>
        <p className="text-center text-4xl font-semibold">
          How can I contact you?
        </p>
      </div>

      {/* Options */}

      <div className="">
        <form className="space-y-4 w-full">
          <div className="w-full cursor-pointer">
            <label htmlFor="fname" className="block pl-2 pb-2">
              First name
            </label>
            <input
              type="input"
              id="fname"
              name="fname"
              value=""
              className="cursor-pointer w-full bg-primary py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10"
            />
          </div>
          <div className="w-full cursor-pointer">
            <label htmlFor="lname" className="block pl-2 pb-2">
              Last name
            </label>
            <input
              type="input"
              id="lname"
              name="lname"
              value=""
              className="cursor-pointer w-full bg-primary py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10"
            />
          </div>
          <div className="w-full cursor-pointer">
            <label htmlFor="email" className="block pl-2 pb-2">
              Email
            </label>
            <input
              type="input"
              id="email"
              name="email"
              value=""
              className="cursor-pointer w-full bg-primary py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnBoardingThree;
