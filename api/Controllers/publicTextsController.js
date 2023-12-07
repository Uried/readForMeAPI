const Text = require("../Models/Text");


// get public texts
exports.getPublicTexts = (req, res) => {
  Text.find({ isPublic: true })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Textes publics",
        count: result.length,
        publicText: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
};
