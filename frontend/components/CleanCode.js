const CleanCode = () => {
  return (
    <div className="bg-[#1D1D1F] col-span-4 lg:col-span-2 rounded-3xl px-8 md:px-11 lg:px-13 py-9 md:py-10 lg:py-12 lg:pb-16  border-gray-200 border-opacity-10 border">
      <h4 className=" font-semibold text-base md:text-lg">Clean code</h4>

      {/* Codes Example */}
      <div className="font-mono text-sm md:text-2xl mt-3 md:mt-6 space-y-1 md:space-y-2 md:ml-9">
        <div className="">
          <span className="text-red-600">&lt;ul&gt;</span>
        </div>
        <div className="ml-5 md:ml-10">
          <span className="text-red-600">&lt;li&gt;</span>Semantic HTML.
          <span className="text-red-600">&lt;/li&gt;</span>
        </div>
        <div className="ml-5 md:ml-10">
          <span className="text-red-600">&lt;li&gt;</span>Battle tested.
          <span className="text-red-600">&lt;/li&gt;</span>
        </div>
        <div className="ml-5 md:ml-10">
          <span className="text-red-600">&lt;li&gt;</span>Optimized for
          performance.
          <span className="text-red-600">&lt;/li&gt;</span>
        </div>
        <div className="">
          <span className="text-red-600">&lt;/ul&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default CleanCode;
