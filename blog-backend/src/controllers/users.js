const router = require("express").Router();
const User = require("../models/user");
const Blog = require("../models/blog");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: ["title", "author", "url", "likes"],
    },
  });

  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: {
      model: Blog,
      as: "readings",
      attributes: ["id", "url", "title", "author", "likes", "year"],
      through: {
        attributes: [],
      },
    },
  });

  if (!user) {
    return res.status(404).json({
      error: "user not found",
    });
  }

  res.json(user);
});

router.post("/", async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username) {
    return res.status(400).json({ error: "name and username required" });
  }

  const user = await User.create({ name, username, password });
  res.status(201).json(user);
});

router.put("/:username", async (req, res) => {
  const user = await User.findOne({
    where: { username: req.params.username },
  });

  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  user.name = req.body.name;
  await user.save();

  res.json(user);
});

module.exports = router;
