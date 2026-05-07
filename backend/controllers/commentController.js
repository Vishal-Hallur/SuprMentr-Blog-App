const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {

  try {

    const comment = await Comment.create({
      text: req.body.text,
      user: req.user.id,
      blog: req.params.blogId
    });

    res.status(201).json(comment);

  } catch (error) {

    res.status(500).json(error);

  }
};

exports.getComments = async (req, res) => {

  try {

    const comments = await Comment.find({
      blog: req.params.blogId
    }).populate("user", "name");

    res.json(comments);

  } catch (error) {

    res.status(500).json(error);

  }
};