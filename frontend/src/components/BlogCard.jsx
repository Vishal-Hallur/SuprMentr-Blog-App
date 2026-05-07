import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

      <img
        src={`http://localhost:5000/uploads/${blog.image}`}
        alt=""
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-blue-500">
          {blog.category}
        </span>

        <h2 className="text-2xl font-bold mt-2 mb-3">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {blog.content}
        </p>

        <Link
          to={`/blog/${blog._id}`}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Read More
        </Link>

      </div>

    </div>
  );
};

export default BlogCard;