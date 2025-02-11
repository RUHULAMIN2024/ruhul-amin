"use client";
import Container from "@/components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  title: string;
  image: string;
  category: string;
  description: string;
}

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null); // Initialize with null or empty object
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data.data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center text-lg">Blog not found</p>;
  }

  return (
    <Container>
      <div className="my-10">
        <Card className="shadow-2xl rounded-lg overflow-hidden">
          <CardHeader className="relative">
            <img
              src={blog?.image} // Corrected typo here
              alt={blog?.title}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-8">
            <CardTitle className="text-4xl text-gray-800 mb-2">
              {blog?.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-4"></CardDescription>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Category: {blog?.category}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {blog?.description}
            </p>
            <p className="text-justify text-gray-700">
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
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
