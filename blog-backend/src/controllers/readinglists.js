const router = require("express").Router();

const ReadingList = require("../models/readingList");
const User = require("../models/user");
const Blog = require("../models/blog");

router.post("/", async (req, res) => {
  const { userId, blogId } = req.body;

  const user = await User.findByPk(userId);
  const blog = await Blog.findByPk(blogId);

  if (!user) {
    return res.status(400).json({
      error: "invalid userId",
    });
  }

  if (!blog) {
    return res.status(400).json({
      error: "invalid blogId",
    });
  }

  const reading = await ReadingList.create({
    userId,
    blogId,
    read: false,
  });

  res.status(201).json(reading);
});

module.exports = router;
