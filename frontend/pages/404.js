import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Custom404() {
  return (
    <div className="font-jugo font-medium text-gray-200 h-screen overflow-hidden">
      <Navbar />;
      <div className="w-full h-full bg-[#1D1D1F] flex flex-col items-center justify-center">
        <div>
          <p className="text-3xl md:text-5xl font-semibold text-center">
            Oops - The page you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
        <div className="mt-10 text-blue-500 px-3 text-2xl  md:px-6 lg:px-7 py-2 rounded-xl hover:bg-gray-200 hover:bg-opacity-10 cursor-pointer flex items-center whitespace-nowrap ">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
