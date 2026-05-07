import React, { useState } from "react";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      navigate("/login");

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
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Start your blogging journey
        </p>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full border p-4 rounded-xl mb-4"
          onChange={handleChange}
        />

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
          placeholder="Create password"
          className="w-full border p-4 rounded-xl mb-6"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-4 rounded-xl">
          Register
        </button>

        <p className="text-center mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-blue-500"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;