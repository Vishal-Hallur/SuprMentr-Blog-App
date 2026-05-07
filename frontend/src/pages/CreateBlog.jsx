import React, { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

const CreateBlog = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const blogData = new FormData();

    blogData.append("title", formData.title);

    blogData.append("content", formData.content);

    blogData.append("category", formData.category);

    blogData.append("image", image);

    try {

      await axios.post(
        "http://localhost:5000/api/blogs",
        blogData,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );

      alert("Blog Created Successfully");

      setFormData({
        title: "",
        content: "",
        category: ""
      });

      setImage(null);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">

          <h1 className="text-5xl font-bold mb-3">
            Create New Blog
          </h1>

          <p className="text-gray-500 mb-8">
            Share your ideas with the world
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Blog Title"
              className="w-full border p-4 rounded-xl mb-5"
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              value={formData.category}
              placeholder="Category"
              className="w-full border p-4 rounded-xl mb-5"
              onChange={handleChange}
            />

            <textarea
              name="content"
              value={formData.content}
              placeholder="Write your blog content..."
              className="w-full border p-4 rounded-xl mb-5 h-72"
              onChange={handleChange}
            />

            <input
              type="file"
              className="mb-6"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <button className="bg-black text-white px-8 py-4 rounded-xl">
              Publish Blog
            </button>

          </form>

        </div>

      </div>
    </>
  );
};

export default CreateBlog;