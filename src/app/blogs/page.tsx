/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blogs | Developer Ruhul Amin",
  description:
    "Read my latest blogs on web development, programming, and technology trends.",
};

export default async function Blogs() {
  const res = await fetch("http://localhost:5000/api/blogs");
  const blogs = await res.json();
  return (
    <Container>
      <div className=" p-8">
        <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
        <div className="grid gap-6">
          {blogs?.data.map((blog: any) => (
            <Card key={blog._id}>
              <CardContent className="p-5">
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-32 object-cover rounded-lg lg:w-1/3"
                  />
                  <div className="lg:w-2/3">
                    <h2 className="text-xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-700">Category: {blog.category}</p>
                    <p className="mt-2">{blog.content}</p>
                    <Link
                      href={`/blogs/${blog._id}`}
                      className="text-blue-500 mt-2 block"
                    >
                      Read More
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
}
