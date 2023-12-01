const Texts = require("../Models/Text");

// Ajouter un texte
exports.createText = async (req, res) => {
  try {
    const { title, content, isPublic } = req.body;
    const userId = req.user.jId;

    const newText = new Texts({
      title: title,
      content: content,
      isPublic: isPublic,
      user: userId,
    });

    await newText.save();
    await User.findByIdAndUpdate(
      userId,
      { $push: { texts: newText._id } },
      { new: true }
    );

    res.status(201).json({
      message: "Création réussie",
      data: newText,
    });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la création du texte.",
    });
  }
};


//Recuperer tout les textes
exports.getTexts = (req, res) => {
  Texts.find()
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Textes",
        count: result.length,
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
};

// get user texts

exports.getUserTexts = async (req, res) => {
  try {
    const userId = req.params.jId;

    const texts = await Texts.find({ user: userId });

    res.status(200).json({
      message: "Textes récupérés avec succès",
      data: texts,
    });
  } catch (error) {
    res.status(500).json({
      error:
        "Une erreur est survenue lors de la récupération des textes de l'utilisateur.",
    });
  }
};
