module.exports = (req, _, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
    req.body.isActive = true;
  }

  next();
};
