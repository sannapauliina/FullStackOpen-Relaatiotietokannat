const express = require("express");
const app = express();

const blogRouter = require("./controllers/blogs");

app.use(express.json());
app.use("/api/blogs", blogRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const errorHandler = require("./utils/errorHandler");
app.use(errorHandler);
