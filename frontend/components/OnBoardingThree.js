const OnBoardingThree = (props) => {
  const { formik } = props;

  return (
    <div>
      <div className="flex flex-col justify-center mb-12 space-y-2">
        <p className="text-center  text-xl opacity-50 ">About you</p>
        <p className="text-center text-3xl md:text-4xl font-semibold">
          How can I contact you?
        </p>
      </div>

      {/* Options */}

      <div className="flex items-center justify-center">
        <form
          className="space-y-3  md:space-y-4 w-5/6 md:w-full"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full cursor-pointer">
            <label htmlFor="firstName" className="block pl-2 ">
              First name
            </label>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-xs  text-red-600 pb-1 pl-2">
                {formik.errors.firstName}
              </div>
            ) : null}
            <input
              type="input"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="cursor-pointer w-full bg-primary py-2 md:py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10 "
            />
          </div>
          <div className="w-full cursor-pointer">
            <label htmlFor="lastName" className="block pl-2 ">
              Last name
            </label>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-xs  text-red-600 pb-1 pl-2">
                {formik.errors.lastName}
              </div>
            ) : null}
            <input
              type="input"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="cursor-pointer w-full bg-primary py-2 md:py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10 "
            />
          </div>
          <div className="w-full cursor-pointer">
            <label htmlFor="email" className="block pl-2 ">
              Email
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-xs  text-red-600 pb-1 pl-2">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="cursor-pointer w-full bg-primary py-2 md:py-3 px-6 rounded-2xl border-2 border-gray-200 border-opacity-10 "
            />
          </div>
          <div className="absolute bottom-0 left-0  pt-4 pb-8 w-full flex items-center justify-center ">
            <button
              className="flex items-center px-16  py-2
             rounded-2xl  cursor-pointer font-semibold text-base lg:text-lg bg-blue-500   hover:bg-blue-400"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnBoardingThree;
