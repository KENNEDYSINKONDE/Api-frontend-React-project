import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/v1.0/projects";

export const ProjectApi = {
  getProjects: () => axios.get(API_URL),
  getProject: (id) => axios.get(`${API_URL}/${id}`),
  createProject: (data) => axios.post(API_URL, data),
  updateProject: (id, data) => axios.put(`${API_URL}/${id}`, data),
  deleteProject: (id) => axios.delete(`${API_URL}/${id}`),
  searchProjects: (q) => axios.get(`${API_URL}/search?q=${q}`),

};
