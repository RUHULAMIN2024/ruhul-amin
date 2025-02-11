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
import { useParams } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define TypeScript types
export interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveLink: string;
}

const ProjectDetails = () => {
  const { id } = useParams() as { id: string };
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/projects/${id}`);
      const data = await res.json();
      setProject(data?.data);
    } catch (err) {
      console.error("Error fetching project data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Added dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <Container>
      <div className="my-10">
        <Card className="shadow-2xl rounded-lg overflow-hidden">
          <CardHeader className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-8">
            <CardTitle className="text-4xl text-gray-800 mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-700 mb-2">
              Category: {project.category}
            </CardDescription>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.description}{" "}
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                exercitationem voluptates soluta nostrum ipsum ab sunt ad
                dolores, voluptatum tempore eum nemo iusto tempora nisi deleniti
                impedit nesciunt laboriosam commodi aperiam alias vel!
                Doloremque dolore quis nisi perspiciatis mollitia vitae ipsum
                asperiores? Eveniet iste aliquid voluptatem quisquam, modi non
                tempore incidunt quo suscipit quae minus possimus doloremque
                itaque assumenda, reiciendis aperiam ipsum similique consectetur
                veniam animi ab reprehenderit commodi. Libero facere quidem
                perspiciatis minima magnam natus modi itaque voluptatum ab velit
                delectus, excepturi enim iure assumenda voluptate. Error ab
                magni ad quod, recusandae voluptates rem facere explicabo
                molestiae, maiores unde nisi ullam! Excepturi, iste nisi sequi
                alias impedit nobis ab, nihil quos ipsa et maiores eos soluta a
                totam, ullam aliquid ad dicta architecto quidem modi doloremque
                laudantium! Repudiandae exercitationem vero excepturi id,
                perferendis ratione a in quia ipsa nostrum. Qui iusto officiis
                minima blanditiis beatae quis suscipit quos tempora.
              </span>
            </p>

            <div className="mt-6 flex">
              <Link
                target="_blank"
                className="block w-full"
                href={project.liveLink}
              >
                <Button className="bg-blue-500 transition-all w-full">
                  <ExternalLink className="w-5 h-5 mr-2" />
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
