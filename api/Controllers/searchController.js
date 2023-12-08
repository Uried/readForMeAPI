const Text = require("../Models/Text");
const User = require("../Models/User");

exports.searchTitlesAndContents = async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const jId = req.query.jId;
    console.log(jId)
    console.log(searchTerm);

    const user = await User.findOne({ jId });
    if (!user) {
      return res.status(404).json({
        error: "Utilisateur non trouvé.",
      });
    }

    const texts = await Text.find({
      $or: [
        { user: user._id, title: { $regex: searchTerm, $options: "i" } },
        { user: user._id, content: { $regex: searchTerm, $options: "i" } },
        { isPublic: true, title: { $regex: searchTerm, $options: "i" } },
        { isPublic: true, content: { $regex: searchTerm, $options: "i" } },
      ],
    });

    res.json(texts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur lors de la recherche des textes et de leurs contenus.",
    });
  }
};
