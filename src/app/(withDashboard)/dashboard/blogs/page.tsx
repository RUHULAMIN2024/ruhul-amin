"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// Define Blog Type
interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  image: string;
}

// Define New Blog Type (No _id)
interface NewBlog {
  title: string;
  content: string;
  category: string;
  image: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [newBlog, setNewBlog] = useState<NewBlog>({
    title: "",
    content: "",
    category: "",
    image: "",
  });
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch Blogs from API
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data || []))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Add New Blog
  const addBlog = async () => {
    const response = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    });

    const data = await response.json();
    if (data.success) {
      toast("blog added succesfully");

      setBlogs([...blogs, { _id: data.data.insertedId, ...newBlog }]);
      setNewBlog({ title: "", content: "", category: "", image: "" });
      setIsModalOpen(false);
    }
  };

  // Update Existing Blog
  const updateBlog = async () => {
    if (!editingBlog) return;
    const response = await fetch(
      `http://localhost:5000/api/blogs/${editingBlog._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      }
    );

    const data = await response.json();
    if (data.success) {
      toast("blog updated succesfully");

      setBlogs(
        blogs.map((blog) =>
          blog._id === editingBlog._id ? { ...blog, ...newBlog } : blog
        )
      );
      setNewBlog({ title: "", content: "", category: "", image: "" });
      setEditingBlog(null);
      setIsModalOpen(false);
    }
  };

  // Delete Blog
  const deleteBlog = async (id: string) => {
    const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (data.success) {
      toast("blog deleted succesfully");

      setBlogs(blogs.filter((blog) => blog._id !== id));
    }
  };

  const editBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setNewBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <Button
          className="bg-green-500"
          onClick={() => {
            setEditingBlog(null);
            setNewBlog({ title: "", content: "", category: "", image: "" });
            setIsModalOpen(true);
          }}
        >
          Add Blog
        </Button>
      </div>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Card key={blog._id}>
            <CardContent className="p-5">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-32 object-cover rounded-lg lg:w-1/3"
                />
                <div className="lg:w-2/3">
                  <CardTitle>{blog.title}</CardTitle>
                  <p className="mt-2">Category: {blog.category}</p>
                  <p>{blog.content}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button
                      className="bg-blue-500"
                      onClick={() => editBlog(blog)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteBlog(blog._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingBlog ? "Edit Blog" : "Add Blog"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Blog Title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
            <Input
              placeholder="Blog Image URL"
              value={newBlog.image}
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.value })
              }
            />
            <Input
              placeholder="Category"
              value={newBlog.category}
              onChange={(e) =>
                setNewBlog({ ...newBlog, category: e.target.value })
              }
            />
            <Textarea
              placeholder="Blog Content"
              value={newBlog.content}
              onChange={(e) =>
                setNewBlog({ ...newBlog, content: e.target.value })
              }
            />
            <Button onClick={editingBlog ? updateBlog : addBlog}>
              {editingBlog ? "Update Blog" : "Add Blog"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Blogs;
