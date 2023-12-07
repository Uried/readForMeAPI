const Text = require("../Models/Text");

exports.searchTitlesAndContents = async (req, res) => {
  try {
    const searchTerm = req.query.term;
    const texts = await Text.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        { content: { $regex: searchTerm, $options: "i" } },
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
