const BackgroundEffect = () => {
  return (
    <div className="absolute left-1/2 h-1/2 w-full max-w-lg ">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl  opacity-75 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl  opacity-75 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-4 left-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl  opacity-75 animate-blobHorizontal animation-delay-2000"></div>
      <div className="absolute left-1/2 w-72 h-72 bg-purple-300 rounded-full  filter blur-xl  opacity-75 animate-blob "></div>
    </div>
  );
};

export default BackgroundEffect;
