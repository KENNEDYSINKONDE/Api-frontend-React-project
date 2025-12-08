import React, { useState, useEffect } from "react";
import { useProjectCrud } from "@/hooks/project/useProjectCrud";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard"; // Use ProjectCard instead of ProjectRow
import ProjectSearch from "./ProjectSearch";
import Button from "../ui/Button";
import { ProjectMessages } from "@/constants/messages";
import { ProjectApi } from "@/services/api/ProjectApi";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const { createProject, updateProject, deleteProject, success, error: crudError, resetStatus } =
    useProjectCrud();

  // Fetch projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await ProjectApi.getProjects();
      setProjects(response.data.data || []);
    } catch (err) {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filtered projects
  const projectsToShow = projects.filter((p) =>
    p.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const handleAddClick = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleFormSubmit = async (data) => {
    if (editingProject) {
      await updateProject(editingProject.id, data);
    } else {
      const newProject = await createProject(data);
      if (newProject) projects.push(newProject.data); // push new project
    }
    setShowForm(false);
    resetStatus();
    fetchProjects(); // refresh list
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(projects.filter((p) => p.id !== id));
    resetStatus();
  };

  return (
    <div className="container mx-auto p-6">
     
      <h2 className="text-2xl font-bold mb-4 text-violet-800">Projects</h2>

      <div className="flex justify-between items-center mb-4">
        <ProjectSearch onSearch={setSearchKeyword} />
        <Button onClick={handleAddClick}>Add Project</Button>
      </div>

      {showForm && (
        <ProjectForm
          initialData={editingProject}
          onSubmit={handleFormSubmit}
          onClose={() => setShowForm(false)}
        />
      )}

      {loading && <p className="text-center text-gray-500 mt-6">Loading...</p>}
      {(error || crudError) && <p className="text-center text-red-500 mt-6">{error || crudError}</p>}
      {success && <p className="text-center text-green-500 mt-6">{success}</p>}

      {/* Project Cards */}
      {projectsToShow.length === 0 ? (
        <p className="text-center py-8 text-gray-500">{ProjectMessages.PROJECT_NOT_FOUND}</p>
      ) : (
        <div className="flex flex-col gap-6">
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;
