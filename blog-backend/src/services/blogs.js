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
  if (!blog.title || !blog.author) {
    const error = new Error("title and author required");
    error.type = "BAD_REQUEST";
    throw error;
  }

  const newBlog = { id: Date.now(), ...blog };
  blogs.push(newBlog);
  return newBlog;
}

function deleteBlog(id) {
  blogs = blogs.filter((blog) => blog.id !== id);
}

function updateLikes(id, likes) {
  const blog = blogs.find((b) => b.id === id);
  if (!blog) {
    const error = new Error("blog not found");
    error.type = "NOT_FOUND";
    throw error;
  }

  blog.likes = likes;
  return blog;
}

module.exports = { getBlogs, addBlog, deleteBlog, updateLikes };
