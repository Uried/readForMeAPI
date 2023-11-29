const Texts = require("../Models/Text");

// Ajouter un utilisateur
exports.addText = async (req, res) => {
  try {
    const {  title,content, isPublic } = req.body;

    const newText = new Texts({
      title: title,
      content: content,
      isPublic: isPublic
    });

    await newText.save();

    res.status(201).json({
      message: "Création réussie",
      data: newText
    });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la création du texte."
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

// Obtenir un texte par son ID
exports.getText = async (req, res) => {
  try {
    const { id } = req.params;

    if (id.length !== 24) {
      throw Error("ID d'utilisateur invalide");
    }

    const text = await Text.findById(id);

    if (!user) {
      throw Error("Texte non trouvé");
    }

    res.status(200).json({
      title: title,
        content: content,
        isPublic: isPublic,
      message: "OK"
    });
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
};
