/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function FeaturedCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project._id}`}>
      <div className="transition-transform duration-300 transform hover:scale-105">
        <Card className="rounded-2xl overflow-hidden shadow-xl dark:shadow-gray-800 bg-white dark:bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
          <CardContent className="p-6 text-left">
            <h3 className="text-2xl text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Category: {project.category}
            </p>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {project.description}
            </p>

            <div className="mt-3">
              <Link
                href={`/projects/${project._id}`}
                className="border w-full block text-center bg-transparent border-blue-500 text-blue-500 px-5 py-1 rounded-lg hover:bg-blue-500 hover:text-black transition duration-200 mt-5 font-medium "
              >
                View Details
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
