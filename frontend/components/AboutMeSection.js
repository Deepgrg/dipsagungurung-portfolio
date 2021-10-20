import Image from "next/image";

const AboutMeSection = () => {
  return (
    <section className="flex justify-center" id="AboutMeSection">
      <div className="max-w-7xl w-full  flex flex-col items-center  py-20 px-3 md:px-6 lg:px-3">
        {/* Section Header */}
        <div className="w-full max-w-6xl flex items-center my-8">
          <h3 className="font-semibold text-2xl opacity-50">About Me</h3>
        </div>

        {/* Section Content/ Container */}
        <div className="w-full max-w-7xl grid grid-cols-5">
          <div className="col-span-5 lg:col-span-3 w-full ">
            <div className="mt-6">
              {/* top */}
              <div className="uppercase text-lg lg:text-xl flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-3xl">👋 </span>
                <p className="opacity-70 ml-2">Hello there, My name is</p>
                <span className="font-semibold opacity-100 ml-2"> Dip</span>
              </div>

              {/* mid */}
              <div className="text-5xl text-center lg:text-left lg:text-7xl font-semibold mt-3 mb-10 ">
                <p>I&apos;m a Freelance Web Developer from Kathmandu, Nepal.</p>
              </div>

              {/* bottom */}
              <div className="space-y-2 ">
                <p className="text-xl opacity-80">
                  I am a full stack developer and I enjoy listening to lofi
                  music while coding. I love setting up a business as it gives
                  me ample opportunities to meet with new peoples.
                </p>
                <p className="text-xl opacity-80">
                  ✔ Workout:4-5 days a week. <br /> ✔ Coffee: Soft
                  <br />✔ Genres: Actions & Adventures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2 order-first lg:order-1 flex justify-center lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded- blur rounded-full h-72 w-72  lg:h-96 lg:w-96"></div>
              <div
                className="bg-[#1D1D1F] rounded-full overflow-hidden relative h-72 w-72  lg:h-96 lg:w-96
                border-4  border-black
              "
              >
                <Image
                  src="/Dip-cover-image.jpg"
                  alt="Dip sagun gurung image"
                  layout="responsive"
                  width={150}
                  height={150}
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
