/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

export default async function Blogs() {
  const res = await fetch("https://blog-project-server1.vercel.app/api/blogs");
  const blogs = await res.json();
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid gap-6">
        {blogs?.data.map((blog: any) => (
          <div key={blog._id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.category}</p>
            <p className="mt-2">{blog.content.slice(0, 100)}...</p>
            <Link
              href={`/blogs/${blog._id}`}
              className="text-blue-500 mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
