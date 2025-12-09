import { useState } from "react";
import { loginUser, registerUser } from "@/apiService/authService";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (credentials) => {
    try {
      setLoading(true);
      setError("");

      const res = await loginUser(credentials);

      localStorage.setItem("token", res.data.token);

      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const register = async (data) => {
    try {
      setLoading(true);
      setError("");

      const res = await registerUser(data);

      localStorage.setItem("token", res.data.token);

      return { success: true };
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, register, loading, error };
};
