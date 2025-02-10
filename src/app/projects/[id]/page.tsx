"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Container from "@/components/Container";
import projects from "@/data/projects.json";
import { useParams } from "next/navigation";
import { ExternalLink, Github, GithubIcon } from "lucide-react";
import Link from "next/link";

const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project by ID
  const project = projects.find(
    (project) => project.key === parseInt(id as string)
  );

  return (
    <Container>
      <div className=" my-10">
        <Card className="shadow-2xl rounded-lg overflow-hidden">
          <CardHeader className="relative">
            <img
              src={project.img}
              alt={project?.title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-8">
            <CardTitle className="text-4xl text-gray-800 mb-2">
              {project?.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-4"></CardDescription>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project?.description}
            </p>
            <p className=" text-justify text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              assumenda nemo sit debitis, eum labore. Adipisci, labore esse
              incidunt error excepturi tempora, ducimus expedita delectus
              voluptate magnam vitae. Pariatur, quaerat praesentium quos sequi,
              nam dolore quo officiis temporibus tempore quod et sint possimus
              autem quis nobis modi optio laborum fuga deleniti ut placeat sit.
              Ut ratione accusantium error illo suscipit molestias. Et nulla,
              veniam nostrum unde mollitia quaerat quasi accusamus laudantium
              amet illo voluptates reprehenderit deserunt, eum maxime
              dignissimos numquam nisi pariatur harum reiciendis quae corrupti
              facere ratione voluptas placeat. Tempore, reprehenderit quos
              aspernatur non repudiandae quidem alias deleniti consequatur!
            </p>
            <div className="mt-6 flex ">
              <Link
                className="block w-full"
                target="new"
                href={project?.client as string}
              >
                <Button className="bg-orange-500 w-full">
                  <GithubIcon className="w-5 h-5" />
                  Front-end code
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex ">
              <Link
                target="new"
                className="block w-full"
                href={project?.server as string}
              >
                <Button className="bg-red-500 w-full">
                  <Github className="w-5 h-5" />
                  Back-end Code
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex ">
              <Link
                target="new"
                className="block w-full"
                href={project?.live as string}
              >
                <Button className="bg-blue-500 transition-all w-full">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default ProjectDetails;
