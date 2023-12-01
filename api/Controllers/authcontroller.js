const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token manquant" });
  }

  try {
    const decoded = jwt.verify(token, "mySecretKey");
    req.jId = decoded.jId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};
