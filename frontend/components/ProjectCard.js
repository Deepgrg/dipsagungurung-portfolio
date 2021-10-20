import { useState } from "react";
import Image from "next/image";
import { PlusCircleIcon, XIcon } from "@heroicons/react/solid";

const ProjectCard = (props) => {
  const {
    imageSrc,
    imageAlt,
    projectTitle,
    projectId,
    projectDescription,
    projectLink,
  } = props;

  const [openModal, setOpenModal] = useState(false);

  const openProjectModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeProjectModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "unset";
  };

  const modal = (
    <>
      {/* Modal Background */}
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-90  z-30 overflow-y-auto"
        onClick={closeProjectModal}
      ></div>

      {/* Modal Content */}
      <div className=" rounded-3xl fixed w-full max-w-4xl h-4/5 bg-[#1D1D1F] z-40  top-12 left-1/2 -translate-x-1/2  overflow-y-auto disable-scrollbars pb-10">
        <div
          className="absolute top-7 right-7 z-40 cursor-pointer group"
          onClick={closeProjectModal}
        >
          <XIcon className="text-gray-400 h-8 w-8 group-hover:text-gray-800" />
        </div>
        <div className="">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="responsive"
            width={390}
            height={200}
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center mt-5">
            <p className="font-semibold text-lg uppercase">{projectTitle}</p>
          </div>
          <div className="w-8/12 flex justify-center mt-2 ">
            <p className="text-lg opacity-80 text-center ">
              {projectDescription}
            </p>
          </div>
          <div className=" rounded-3xl px-5 py-2 bg-[#1D1D1F] border-2 border-black cursor-pointer flex items-center justify-center mt-5 hover:bg-black">
            <span>Visit Site</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {openModal ? modal : null}
      <div
        className="w-full col-span-1 rounded-3xl overflow-hidden border-gray-200 border-opacity-10 border relative cursor-pointer group hover:border-opacity-25"
        onClick={openProjectModal}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={120}
          width={220}
          layout="responsive"
        />
        <div className="absolute top-0 w-full flex justify-between px-7 py-5 bg-black bg-opacity-50 backdrop-blur-sm invisible group-hover:visible">
          <p className="text-2xl font-semibold">{projectTitle}</p>
          <PlusCircleIcon className="h-10 w-10 text-gray-100 opacity-50" />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
