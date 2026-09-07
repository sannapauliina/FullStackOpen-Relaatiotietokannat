require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const blogRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");

app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

const errorHandler = require("./utils/errorHandler");
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
