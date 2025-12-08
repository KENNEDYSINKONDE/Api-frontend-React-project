import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { ProjectMessages } from "@/constants/messages";

function ProjectForm({ initialData = null, onSubmit, onClose }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    aim: "",
    objectives: "",
  });

  const [errors, setErrors] = useState({});
useEffect(() => {
  if (initialData) {
    setForm({
      title: initialData.title ?? "",
      description: initialData.description ?? "",
      technologies: initialData.technologies ?? "",
      aim: initialData.aim ?? "",
      objectives: initialData.objectives ?? "",
    });
  }
}, [initialData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!form.title) newErrors.title = ProjectMessages.REQUIRED;
    if (!form.description) newErrors.description = ProjectMessages.REQUIRED;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(form);

    // Reset form if creating
    if (!initialData) {
      setForm({
        title: "",
        description: "",
        technologies: "",
        aim: "",
        objectives: "",
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">
        {initialData ? "Update Project" : "Add Project"}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block mb-1">Technologies</label>
          <input
            type="text"
            name="technologies"
            value={form.technologies}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Aim</label>
          <textarea
            name="aim"
            value={form.aim}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Objectives</label>
          <textarea
            name="objectives"
            value={form.objectives}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="submit">{initialData ? "Update" : "Add"}</Button>
          <Button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
