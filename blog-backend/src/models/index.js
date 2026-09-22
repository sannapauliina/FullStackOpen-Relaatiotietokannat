const Blog = require("./blog");
const User = require("./user");

User.hasMany(Blog);
Blog.belongsTo(User);

const ReadingList = require("./readingList");

User.belongsToMany(Blog, {
  through: ReadingList,
});

Blog.belongsToMany(User, {
  through: ReadingList,
});

module.exports = {
  Blog,
  User,
  ReadingList,
};
