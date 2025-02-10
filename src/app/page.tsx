/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "@/components/Banner";
import Skills from "@/components/Skills";
import projects from "../data/projects.json";
import FeaturedCard from "@/components/FeaturedCard";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Container>
        <section className="py-10 dark:from-gray-900 dark:to-gray-800">
          <h2 className="text-4xl ml-2 mb-8 dark:text-white">
            Some of my best work
          </h2>

          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project: any) => (
              <FeaturedCard key={project.key} project={project} />
            ))}
          </div>
          <div className="w-full mt-8 text-center">
            <Link href="/projects">
              <Button
                className=" border-blue-500 text-blue-500 px-5 py-2 rounded-sm hover:bg-blue-500 hover:text-black transition duration-200 border bg-transparent font-medium "
                variant={"outline"}
              >
                View All Projects...
              </Button>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
