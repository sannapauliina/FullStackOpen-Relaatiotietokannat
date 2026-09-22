const Blog = require("./blog");
const User = require("./user");

User.hasMany(Blog);
Blog.belongsTo(User);

const ReadingList = require("./readingList");

User.belongsToMany(Blog, {
  through: ReadingList,
  as: "readings",
});

Blog.belongsToMany(User, {
  through: ReadingList,
});

ReadingList.belongsTo(User);
ReadingList.belongsTo(Blog);

User.hasMany(ReadingList);
Blog.hasMany(ReadingList);

module.exports = {
  Blog,
  User,
  ReadingList,
};
