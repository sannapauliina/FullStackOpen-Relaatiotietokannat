let blogs = [
  { id: 1, author: "Dan Abramov", title: "On let vs const", likes: 0 },
  {
    id: 2,
    author: "Matti Luukkainen",
    title: "Kun MOOCit Helsingin yliopistoon tulivat",
    likes: 0,
  },
];

function getBlogs() {
  return blogs;
}

function addBlog(blog) {
  const newBlog = { id: Date.now(), ...blog };
  blogs.push(newBlog);
  return newBlog;
}

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
}

module.exports = { getBlogs, addBlog, deleteBlog };
