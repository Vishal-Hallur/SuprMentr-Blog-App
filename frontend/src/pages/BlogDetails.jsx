import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

const BlogDetails = () => {

  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  const [comment, setComment] = useState("");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const fetchBlog = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/blogs/${id}`
    );

    setBlog(res.data);
  };

  useEffect(() => {

    fetchBlog();

  }, []);

  const handleLike = async () => {

    try {

      await axios.put(
        `http://localhost:5000/api/blogs/like/${id}`,
        {},
        {
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      fetchBlog();

    } catch (error) {

      console.log(error);

    }
  };

  const handleComment = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `http://localhost:5000/api/blogs/comment/${id}`,
        {
          user: user?.name,
          text: comment
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      setComment("");

      fetchBlog();

    } catch (error) {

      console.log(error);

    }
  };

  if (!blog) {

    return <h1>Loading...</h1>;

  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-10 px-4">

        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt=""
          className="w-full h-[500px] object-cover rounded-2xl mb-8"
        />

        <h1 className="text-5xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {blog.category}
        </p>

        <div className="text-lg leading-9 mb-8">
          {blog.content}
        </div>

        <button
          onClick={handleLike}
          className="bg-red-500 text-white px-6 py-3 rounded-xl"
        >
          ❤️ {blog.likes.length} Likes
        </button>

        <form
          onSubmit={handleComment}
          className="mt-10"
        >

          <textarea
            placeholder="Write a comment..."
            className="w-full border p-4 rounded-xl h-32"
            value={comment}
            onChange={(e) =>
              setComment(e.target.value)
            }
          />

          <button className="bg-black text-white px-6 py-3 rounded-xl mt-4">

            Post Comment

          </button>

        </form>

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Comments
          </h2>

          {
            blog.comments.map(
              (comment, index) => (

                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow mb-4"
                >

                  <h3 className="font-bold">
                    {comment.user}
                  </h3>

                  <p className="mt-2">
                    {comment.text}
                  </p>

                </div>

              )
            )
          }

        </div>

      </div>
    </>
  );
};

export default BlogDetails;