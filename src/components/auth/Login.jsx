import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { login, loading, error } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);

    if (res.success) {
      alert("Login Success");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-3 text-sm">
            {error}
          </p>
        )}

        <div className="mb-4">
          <label className="text-gray-600 text-sm mb-1 block">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-gray-600 text-sm mb-1 block">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 outline-none"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
