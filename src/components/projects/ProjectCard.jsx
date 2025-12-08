import React from "react";
import Button from "../ui/Button";
import ProjectActions from "./ProjectActions";

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="w-full bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all space-y-8">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Title:</span>
          <p className="text-gray-900 text-xl">{project.title}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Objectives:</span>
          <p className="text-gray-900 text-lg">{project.objectives || "-"}</p>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Description:</span>
          <p className="text-gray-900 text-lg">{project.description}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Technologies:</span>
          <p className="text-gray-900 text-lg">{project.technologies || "-"}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Aim:</span>
          <p className="text-gray-900 text-lg">{project.aim || "-"}</p>
        </div>
      </div>

      {/* Video Row */}
      {(project.video_url || project.video_file) && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <span className="font-semibold text-gray-700">Video:</span>
          <div className="mt-3">
            {project.video_url && (
              <iframe
                className="w-full h-80 rounded-lg"
                src={project.video_url}
                title={project.title}
                allowFullScreen
              />
            )}

            {project.video_file && !project.video_url && (
              <video className="w-full h-80 rounded-lg" controls>
                <source src={project.video_file} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}

      {/* Bottom Row */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner flex justify-between items-center flex-wrap gap-4">
        <div className="text-gray-500">
          <p>Created: {project.created_at}</p>
          <p>Updated: {project.updated_at}</p>
        </div>

        <div className="flex gap-4">
          <Button onClick={() => onEdit(project)}>Edit</Button>
          <Button
            onClick={() => onDelete(project.id)}
            className="bg-red-500 hover:bg-red-600 rounded"
          >
            Delete
          </Button>

          <ProjectActions project={project} />

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
