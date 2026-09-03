const express = require("express");
const app = express();
const blogs = require("./blogs");

app.use(express.json());

app.get("/api/blogs", (req, res) => {
  res.json(blogs.getBlogs());
});

app.post("/api/blogs", (req, res) => {
  const newBlog = blogs.addBlog(req.body);
  res.status(201).json(newBlog);
});

app.delete("/api/blogs/:id", (req, res) => {
  const id = Number(req.params.id);
  blogs.deleteBlog(id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
