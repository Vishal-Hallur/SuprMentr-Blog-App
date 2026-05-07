const Blog = require("../models/Blog");

exports.createBlog = async (req, res) => {

  try {

    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      image: req.file?.filename,
      author: req.user.id
    });

    res.status(201).json(blog);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }
};

exports.getBlogs = async (req, res) => {

  try {

    const blogs = await Blog.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });

    res.json(blogs);

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.getSingleBlog = async (req, res) => {

  try {

    const blog = await Blog.findById(
      req.params.id
    );

    res.json(blog);

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.updateBlog = async (req, res) => {

  try {

    const updatedBlog =
      await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedBlog);

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.deleteBlog = async (req, res) => {

  try {

    await Blog.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Blog deleted"
    });

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.likeBlog = async (req, res) => {

  try {

    const blog = await Blog.findById(
      req.params.id
    );

    const userId = req.user.id;

    if (
      blog.likes.includes(userId)
    ) {

      blog.likes = blog.likes.filter(
        (id) => id.toString() !== userId
      );

    } else {

      blog.likes.push(userId);

    }

    await blog.save();

    res.json(blog);

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.addComment = async (req, res) => {

  try {

    console.log(req.body);

    const blog = await Blog.findById(
      req.params.id
    );

    if (!blog) {

      return res.status(404).json({
        message: "Blog not found"
      });

    }

    const newComment = {
      user: req.body.user,
      text: req.body.text
    };

    blog.comments.push(newComment);

    await blog.save();

    res.status(200).json(blog);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Comment failed"
    });

  }
};