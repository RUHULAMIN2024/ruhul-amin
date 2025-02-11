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

const API_URL = "https://ruhul-amin-server.vercel.app/api/projects";

// Define the Project type
interface Project {
  _id?: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveLink: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({
    title: "",
    description: "",
    category: "",
    image: "",
    liveLink: "",
  });
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const fetchProjects = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        fetchProjects();
        toast("Project added succesfully");
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }

    resetForm();
  };

  const updateProject = async () => {
    if (!editingProject || !editingProject._id) return;
    try {
      const response = await fetch(`${API_URL}/${editingProject._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        toast("Project updated succesfully");

        fetchProjects(); // Update UI
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }

    resetForm();
  };

  const deleteProject = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        fetchProjects();
        toast("project deleted succesfully");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const editProject = (project: Project) => {
    setEditingProject(project);
    setNewProject(project);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setNewProject({
      title: "",
      description: "",
      category: "",
      image: "",
      liveLink: "",
    });
    setEditingProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <Button
          className="bg-green-500"
          onClick={() => {
            setEditingProject(null);
            setNewProject({
              title: "",
              description: "",
              category: "",
              image: "",
              liveLink: "",
            });
            setIsModalOpen(true);
          }}
        >
          Add Project
        </Button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project._id}>
            <CardContent className="p-5">
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 object-cover rounded-lg lg:w-1/3"
                />
                <div className="lg:w-2/3">
                  <CardTitle>{project.title}</CardTitle>
                  <p className="mt-2">Category: {project.category}</p>
                  <p>{project.description}</p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 block mt-2"
                  >
                    Live Preview
                  </a>
                  <div className="flex space-x-2 mt-2">
                    <Button
                      className="bg-blue-500"
                      onClick={() => editProject(project)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteProject(project._id!)}
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
            <DialogTitle>
              {editingProject ? "Edit Project" : "Add Project"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
            />
            <Input
              placeholder="Project Image URL"
              value={newProject.image}
              onChange={(e) =>
                setNewProject({ ...newProject, image: e.target.value })
              }
            />
            <Input
              placeholder="Category"
              value={newProject.category}
              onChange={(e) =>
                setNewProject({ ...newProject, category: e.target.value })
              }
            />
            <Textarea
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <Input
              placeholder="Live Project URL"
              value={newProject.liveLink}
              onChange={(e) =>
                setNewProject({ ...newProject, liveLink: e.target.value })
              }
            />
            <Button onClick={editingProject ? updateProject : addProject}>
              {editingProject ? "Update Project" : "Add Project"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
