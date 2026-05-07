import React, { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

const Dashboard = () => {

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

                  <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
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