const router = require("express").Router();

const {
  addComment,
  getComments
} = require("../controllers/commentController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/:blogId",
  authMiddleware,
  addComment
);

router.get("/:blogId", getComments);

module.exports = router;