import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import {
  useNavigate
} from "react-router-dom";

import Navbar from "../components/Navbar";

const Dashboard = () => {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const res = await axios.get(
          "http://localhost:5000/api/blogs"
        );

        setBlogs(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchBlogs();

  }, []);

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/blogs/${id}`,
        {
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      setBlogs(
        blogs.filter(
          (blog) => blog._id !== id
        )
      );

      alert("Blog Deleted");

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10 px-4">

        <h1 className="text-5xl font-bold mb-10">
          Dashboard
        </h1>

        <div className="grid gap-6">

          {
            blogs.map((blog) => (

              <div
                key={blog._id}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >

                <h2 className="text-2xl font-bold">
                  {blog.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {blog.category}
                </p>

                <div className="flex gap-4 mt-4">

                  <button
                    onClick={() =>
                      navigate(
                        `/edit-blog/${blog._id}`
                      )
                    }
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(blog._id)
                    }
                    className="bg-red-500 text-white px-5 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))
          }

        </div>

      </div>
    </>
  );
};

export default Dashboard;