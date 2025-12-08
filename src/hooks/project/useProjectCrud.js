import { useState } from "react";
import { ProjectApi } from "@/services/api/ProjectApi";
import { ProjectMessages } from "@/constants/messages";

export function useProjectCrud() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const resetStatus = () => {
    setError(null);
    setSuccess(null);
  };

  const createProject = async (data) => {
    setLoading(true);
    resetStatus();
    try {
      const response = await ProjectApi.createProject(data);
      setSuccess(ProjectMessages.PROJECT_CREATED);
      return response.data;
    } catch (err) {
      console.error(err);
      setError(ProjectMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  const updateProject = async (id, data) => {
    setLoading(true);
    resetStatus();
    try {
      const response = await ProjectApi.updateProject(id, data);
      setSuccess(ProjectMessages.PROJECT_UPDATED);
      return response.data;
    } catch (err) {
      console.error(err);
      setError(ProjectMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    setLoading(true);
    resetStatus();
    try {
      await ProjectApi.deleteProject(id);
      setSuccess(ProjectMessages.PROJECT_DELETED);
    } catch (err) {
      console.error(err);
      setError(ProjectMessages.ACTION_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    createProject,
    updateProject,
    deleteProject,
    resetStatus,
  };
}
