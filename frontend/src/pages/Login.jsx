import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      
      navigate("/");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold mb-2 text-center">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to continue blogging
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full border p-4 rounded-xl mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full border p-4 rounded-xl mb-6"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-4 rounded-xl">
          Login
        </button>

        <p className="text-center mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-500"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;