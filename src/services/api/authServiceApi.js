import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

export const loginUser = async (payload) => {
  return axios.post(`${API_BASE_URL}/login`, payload);
};

export const registerUser = async (payload) => {
  return axios.post(`${API_BASE_URL}/register`, payload);
};

export const getProfile = async (token) => {
  return axios.get(`${API_BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
