import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
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
            imageSrc="/Handcraft-webpage.JPG"
            imageAlt="Handcraft landing page screenshot"
            projectTitle="Handcraft"
          />
          <ProjectCard
            imageSrc="/Dipsagungurung-webpage.JPG"
            imageAlt="Dip Sagun Gurung landing page screenshot"
            projectTitle="Dip Sagun Gurung"
          />
          <ProjectCard
            imageSrc="/Dipsagungurung-webpage.JPG"
            imageAlt="Dip Sagun Gurung landing page screenshot"
            projectTitle="Dip Sagun Gurung"
          />
          <ProjectCard
            imageSrc="/Dipsagungurung-webpage.JPG"
            imageAlt="Dip Sagun Gurung landing page screenshot"
            projectTitle="Dip Sagun Gurung"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
