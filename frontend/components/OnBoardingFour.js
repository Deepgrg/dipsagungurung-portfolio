import Link from "next/link";

const OnBoardingFour = () => {
  return (
    <div className="w-5/6">
      <div className="flex flex-col justify-center mb-12 space-y-2 ">
        <p className="text-center  text-xl opacity-50 ">Confirmation</p>
        <p className="text-center text-3xl md:text-4xl font-semibold">
          Thank you for your request.
        </p>
        <p className="text-center  text-base opacity-90 pt-5">
          I will be in touch as soon as possible. It can take{" "}
          <br className="hidden md:inline" /> upto five business days at most.
        </p>
        <div className="md:pr-32">
          <p className="text-right text-base opacity-90">Best Regards</p>
          <p className="text-right text-base opacity-90">Dip</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0  pt-4 pb-8 w-full flex items-center justify-center ">
        <Link href="/" passHref>
          <button
            className="flex items-center px-16  py-2
             rounded-2xl  cursor-pointer font-semibold text-base lg:text-lg bg-blue-500   hover:bg-blue-400"
            type="button"
          >
            Close
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OnBoardingFour;
