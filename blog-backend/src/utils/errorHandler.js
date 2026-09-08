function errorHandler(err, req, res, next) {
  console.error(err.message);

  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      error: err.errors.map((e) => e.message),
    });
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      error: err.errors.map((e) => e.message),
    });
  }

  if (err.type === "NOT_FOUND") {
    return res.status(404).json({ error: err.message });
  }

  if (err.type === "BAD_REQUEST") {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({ error: "internal server error" });
}

module.exports = errorHandler;
