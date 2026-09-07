function errorHandler(err, req, res, next) {
  console.error(err.message);

  if (err.type === "NOT_FOUND") {
    return res.status(404).json({ error: err.message });
  }

  if (err.type === "BAD_REQUEST") {
    return res.status(400).json({ error: err.message });
  }

  // fallback
  res.status(500).json({ error: "internal server error" });
}

module.exports = errorHandler;
