/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.key}`}>
      <div className="transition-transform duration-300 transform hover:scale-105">
        <Card className="rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 bg-white dark:bg-gray-800">
          <Image
            src={project.img}
            alt={project.title}
            width={500}
            height={224}
            className="w-full h-56 object-cover"
          />
          <CardContent className="p-6 text-left">
            <h3 className="text-2xl text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
              {project.description}
            </p>
            <Button className="border w-full bg-transparent border-blue-500 text-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-black transition duration-200 mt-5 font-medium ">
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
