import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";

const Home = () => {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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

      setLoading(false);

    };

    fetchBlogs();

  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-black text-white rounded-3xl p-10 mb-12">

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Share Your Ideas With The World
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Create beautiful blogs and connect with readers globally.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold">
            Start Writing
          </button>

        </div>

        <h1 className="text-5xl font-bold mb-10">
          Latest Blogs
        </h1>

        {
          loading ? (
            <Loader />
          ) : (
            <div className="grid md:grid-cols-3 gap-8">

              {
                blogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    blog={blog}
                  />
                ))
              }

            </div>
          )
        }

      </div>

      <Footer />
    </>
  );
};

export default Home;