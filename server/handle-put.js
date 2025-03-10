module.exports = (req, _, next) => {
  if (req.method === "PATCH") {
    req.body.modifiedAt = new Date().toISOString();
  }

  next();
};
