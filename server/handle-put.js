module.exports = (req, _, next) => {
  if (req.method === "PATCH") {
    req.body.modifiedAt = Date.now();
  }

  next();
};
