const router = require("express").Router();

const tokenExtractor = require("../middleware/tokenExtractor");
const userExtractor = require("../middleware/userExtractor");

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

router.put("/:id", tokenExtractor, userExtractor, async (req, res) => {
  const reading = await ReadingList.findByPk(req.params.id);

  if (!reading) {
    return res.status(404).json({
      error: "reading list entry not found",
    });
  }

  if (reading.userId !== req.user.id) {
    return res.status(403).json({
      error: "not allowed",
    });
  }

  reading.read = req.body.read;

  await reading.save();

  res.json(reading);
});

module.exports = router;
