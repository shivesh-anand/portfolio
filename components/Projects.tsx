import { projectDetails } from "./data";
import ProjectCard from "./ProjectCard";
import GradualSpacing from "./ui/gradual-spacing";

function Projects() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen gap-4 my-16 md:py-16"
      id="projects"
    >
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest dark:text-white md:text-7xl md:leading-[5rem]"
        text="Projects"
      />
      <h1 className="text-2xl font-normal my-8">
        Some of my personal projects
      </h1>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projectDetails.map((data, index) => (
          <ProjectCard
            key={index}
            description={data.description}
            href={data.href}
            name={data.name}
            src={data.src}
            techStack={data.techStack}
            title={data.title}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
