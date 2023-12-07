const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token manquant" });
  }

  try {
    const decoded = jwt.verify(token, "mySecretKey");
    req.jId = decoded.jId;

    // Vérifier si le jeton est sur le point d'expirer (par exemple, dans les 5 prochaines minutes)
    const now = Date.now() / 1000; // Convertir en secondes
    const expirationTime = decoded.exp;
    const timeToExpiration = expirationTime - now;
    const tokenRenewalThreshold = 300; // 5 minutes

    if (timeToExpiration < tokenRenewalThreshold) {
      // Générer un nouveau jeton
      const newToken = jwt.sign({ jId: decoded.jId }, "mySecretKey", {
        expiresIn: "1h",
      });

      // Envoyer le nouveau jeton dans la réponse
      res.set("Authorization", `Bearer ${newToken}`);
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide" });
  }
};
