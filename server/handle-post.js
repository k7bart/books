module.exports = (req, _, next) => {
  if (req.method === "POST") {
    req.body.createdAt = new Date().toISOString();
    req.body.isActive = true;
  }

  next();
};
