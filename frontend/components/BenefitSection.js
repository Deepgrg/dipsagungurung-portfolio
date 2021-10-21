import Image from "next/image";

import CleanCode from "./CleanCode";

const BenefitSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center py-9 px-3 md:px-6 lg:px-3"
      id="BenefitSection"
    >
      {/* Section Header */}

      <div className="w-full max-w-6xl flex items-center my-8">
        <h3 className="font-semibold text-2xl opacity-50">Benefits</h3>
      </div>

      {/* Section Content / Grid Container */}
      <div className=" max-w-7xl grid grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {/* Item A */}
        <div className="col-span-4 lg:col-span-2 row-span-2 bg-primary p-10 lg:p-16 rounded-3xl border-gray-200 border-opacity-10 border ">
          <h4 className="font-semibold text-3xl lg:text-4xl">
            Web developer with years of development experience.
          </h4>
          <p className="text-lg opacity-70 mt-5">
            I have been designing web projects with elegant UI and stunning
            animations for years. I can turn your design to pixel perfect
            websites with clean code and web friendly features.
          </p>
        </div>

        {/* Item B.i */}
        <div className="bg-primary col-span-2 lg:col-span-1 py-12 rounded-3xl flex flex-col items-center justify-center border-gray-200 border-opacity-10 border">
          <h4 className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500">
            15+
          </h4>
          <p className="text-sm lg:text-base opacity-70">Happy Clients</p>
        </div>

        {/* Item B.ii */}
        <div className="bg-primary col-span-2 lg:col-span-1 py-12 rounded-3xl flex flex-col items-center justify-center border-gray-200 border-opacity-10 border">
          <h4 className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
            3Years
          </h4>
          <p className="text-sm lg:text-base opacity-70">Experience</p>
        </div>

        {/* Item B.iii */}
        <div className="bg-primary col-span-2 lg:col-span-1 py-12 rounded-3xl flex flex-col items-center justify-center border-gray-200 border-opacity-10 border">
          <h4
            className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r 
          from-green-300 to-blue-500"
          >
            40+
          </h4>
          <p className="text-sm lg:text-base opacity-70">Web Projects</p>
        </div>

        {/* Item B.iv */}
        <div className="bg-primary col-span-2 lg:col-span-1 py-12 rounded-3xl flex flex-col items-center justify-center border-gray-200 border-opacity-10 border">
          <h4 className="text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-400">
            100%
          </h4>
          <p className="text-sm lg:text-base opacity-70">Passion</p>
        </div>

        {/* Item C */}
        <div className="col-span-4 lg:col-span-1 h-48 lg:h-auto  flex items-center justify-center rounded-3xl pixel-pattern border-gray-200 border-opacity-10 border">
          <h4 className="text-3xl font-semibold px-6">
            Pixel Perfect <br /> Development.
          </h4>
        </div>

        {/* Item D */}
        <div className="bg-primary col-span-4 lg:col-span-3 flex items-center justify-center rounded-3xl h-96 border-gray-200 border-opacity-10 border">
          <h4>Responsive Design</h4>
        </div>

        {/* Item E */}
        <CleanCode />

        {/* Item F */}
        <div className="bg-primary col-span-4 lg:col-span-2 rounded-3xl px-10 md:px-14 py-11 md:h-80 lg:h-auto border-gray-200 border-opacity-10 border">
          <h4 className=" font-semibold text-base md:text-lg">
            Development Duration
          </h4>
          <div className="pb-5 font-semibold space-y-4 h-full flex flex-col justify-center items-center text-6xl">
            <p className="line-through opacity-20">Months</p>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500">
              Weeks
            </p>
          </div>
        </div>

        {/* Item G */}
        <div className=""></div>
        <div className="col-span-4 md:col-span-2 place-content-center bg-primary rounded-3xl h-auto  border-gray-200 border-opacity-10 border  ">
          <div className="">
            <Image
              src="/Techs.png"
              width={110}
              height={50}
              alt="Technologies that I use"
              layout="responsive"
              className="object-cover object-bottom "
            />
          </div>
          <h4 className=" font-semibold text-base md:text-lg text-center py-7">
            Latest Technologies.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
