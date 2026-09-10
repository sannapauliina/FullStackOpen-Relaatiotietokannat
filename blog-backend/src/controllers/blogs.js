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

module.exports = router;
