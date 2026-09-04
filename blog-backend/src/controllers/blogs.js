const express = require("express");
const router = express.Router();
const blogs = require("../services/blogs");

router.get("/", (req, res) => {
  res.json(blogs.getBlogs());
});

router.post("/", (req, res) => {
  const newBlog = blogs.addBlog(req.body);
  res.status(201).json(newBlog);
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  blogs.deleteBlog(id);
  res.status(204).end();
});

module.exports = router;
