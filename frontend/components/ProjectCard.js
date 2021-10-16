import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/solid";

const ProjectCard = (props) => {
  const { imageSrc, imageAlt, projectTitle } = props;
  return (
    <div className="w-full col-span-1 rounded-3xl overflow-hidden border-gray-200 border-opacity-10 border relative cursor-pointer group hover:border-opacity-25">
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
  );
};

export default ProjectCard;
