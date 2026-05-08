import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";

const EditBlog = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: ""
  });

  useEffect(() => {

    const fetchBlog = async () => {

      try {

        const res = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );

        setFormData({
          title: res.data.title,
          category: res.data.category,
          content: res.data.content
        });

      } catch (error) {

        console.log(error);

      }
    };

    fetchBlog();

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/blogs/${id}`,
        formData,
        {
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      alert("Blog Updated Successfully");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">

          <h1 className="text-5xl font-bold mb-6">
            Edit Blog
          </h1>

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
              placeholder="Update your content..."
              className="w-full border p-4 rounded-xl h-72 mb-5"
              onChange={handleChange}
            />

            <button className="bg-black text-white px-8 py-4 rounded-xl">

              Update Blog

            </button>

          </form>

        </div>

      </div>
    </>
  );
};

export default EditBlog;