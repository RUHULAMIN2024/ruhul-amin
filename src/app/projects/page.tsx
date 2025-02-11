import Container from "@/components/Container";
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Projects | Developer Ruhul Amin",
  description: "Explore my latest projects built with modern web technologies.",
};

// Define Project Type
interface Project {
  _id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

const Projects = async () => {
  const res = await fetch("http://localhost:5000/api/projects", {
    next: { revalidate: 5 },
  });

  const data = await res.json();
  const projects: Project[] = data?.data;

  return (
    <Container>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid gap-6">
          {projects.map((project: Project) => (
            <Card key={project._id}>
              <CardContent className="p-5">
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg lg:w-1/3"
                  />
                  <div className="lg:w-2/3">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-gray-700">
                      Category: {project.category}
                    </p>
                    <p className="mt-2">{project.description}</p>
                    <Link
                      href={`/projects/${project._id}`}
                      className="text-blue-500 mt-2 block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
