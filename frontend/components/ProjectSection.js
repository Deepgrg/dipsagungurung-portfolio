import ProjectCard from "./ProjectCard";
import { useState } from "react";

const ProjectSection = () => {
  const projects = [
    {
      projectId: 1,
      projectTitle: "Handcraft",
      projectDescription:
        "Handcraft is an e-commerce site which was built with client-server architecture. The frontend for the project is built with ReactJS and the backend is built with Laravel and is hosted in Digital Ocean Servers.",
      projectLink: "htpps://SomewhereInTheWorld.com",
      imageSrc: "/Handcraft-webpage.JPG",
      imageAlt: "Handcraft image",
    },
  ];

  const projectsJSX = projects.map((current, index) => {});

  return (
    <section className="bg-[#1D1D1F] flex justify-center" id="ProjectSection">
      <div className="max-w-7xl w-full  flex flex-col items-center py-9 px-3 md:px-6 lg:px-3">
        {/* Section Header */}
        <div className="w-full max-w-6xl flex items-center my-8">
          <h3 className="font-semibold text-2xl opacity-50">Projects</h3>
        </div>

        {/* Section Content/ Container */}
        <div className=" max-w-7xl grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-5 lg:gap-6 w-full">
          <ProjectCard
            key={projects[0].projectId}
            imageSrc={projects[0].imageSrc}
            imageAlt={projects[0].imageAlt}
            projectTitle={projects[0].projectTitle}
            projectDescription={projects[0].projectDescription}
            projectLink={projects[0].projectLink}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
