import React from "react";

import Navbar from "../components/Navbar";

const EditBlog = () => {

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">

          <h1 className="text-5xl font-bold mb-6">
            Edit Blog
          </h1>

          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border p-4 rounded-xl mb-5"
          />

          <input
            type="text"
            placeholder="Category"
            className="w-full border p-4 rounded-xl mb-5"
          />

          <textarea
            placeholder="Update your content..."
            className="w-full border p-4 rounded-xl h-72 mb-5"
          />

          <button className="bg-black text-white px-8 py-4 rounded-xl">
            Update Blog
          </button>

        </div>

      </div>
    </>
  );
};

export default EditBlog;