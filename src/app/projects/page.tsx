/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import projects from "@/data/projects.json";
import FeaturedCard from "@/components/FeaturedCard";

const Projects = () => {
  return (
    <Container>
      <h2 className="text-4xl ml-2 my-8 dark:text-white">My Projects</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-8">
        {projects.map((project: any) => (
          <FeaturedCard key={project.key} project={project} />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
