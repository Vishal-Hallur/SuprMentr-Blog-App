const express = require("express");

const router = express.Router();

const {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  addComment
} = require("../controllers/blogController");

const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createBlog
);

router.get("/", getBlogs);

router.get("/:id", getSingleBlog);

router.put(
  "/:id",
  authMiddleware,
  updateBlog
);

router.delete(
  "/:id",
  authMiddleware,
  deleteBlog
);

router.put(
  "/like/:id",
  authMiddleware,
  likeBlog
);

router.post(
  "/comment/:id",
  addComment
);

module.exports = router;