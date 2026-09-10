const express = require("express");
const router = express.Router();

const Blog = require("../models/blog");
const User = require("../models/user");

const tokenExtractor = require("../middleware/tokenExtractor");
const userExtractor = require("../middleware/userExtractor");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll({
    include: {
      model: User,
      attributes: ["name", "username"],
    },
  });

  res.json(blogs);
});

router.post("/", tokenExtractor, userExtractor, async (req, res) => {
  const { title, author, url, likes } = req.body;

  if (!req.user) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const blog = await Blog.create({
    title,
    author,
    url,
    likes: likes || 0,
    userId: req.user.id,
  });

  res.status(201).json(blog);
});

router.delete("/:id", tokenExtractor, userExtractor, async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);

  if (!blog) {
    return res.status(404).json({ error: "blog not found" });
  }

  if (blog.userId !== req.user.id) {
    return res
      .status(403)
      .json({ error: "only the creator can delete a blog" });
  }

  await blog.destroy();
  res.status(204).end();
});

module.exports = router;
