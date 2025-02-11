/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import FeaturedCard from "@/components/FeaturedCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Developer Ruhul Amin",
  description: "Explore my latest projects built with modern web technologies.",
};

const Projects = async () => {
  const res = await fetch("http://localhost:5000/api/projects", {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  const projects = data?.data;
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
