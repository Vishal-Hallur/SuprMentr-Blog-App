import React, { useState } from "react";

const CommentBox = () => {

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(comment);

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">

      <textarea
        placeholder="Write your comment..."
        className="w-full border p-4 rounded-xl h-32"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button className="bg-black text-white px-6 py-3 rounded-xl mt-4">
        Post Comment
      </button>

    </form>
  );
};

export default CommentBox;