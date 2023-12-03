const Text = require("../Models/Text");
const User = require("../Models/User")

// Ajouter un texte
exports.createText = async (req, res) => {
  try {
    const { title, content, isPublic, jId } = req.body;

    console.log("Received request to create text:");
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Is Public:", isPublic);
    console.log("User ID:", jId);

    const existingUser = await User.findOne({ jId });

    if (!existingUser) {
      return res.status(404).json({
        error: "Utilisateur non trouvé.",
      });
    }

    const newText = new Text({
      title: title,
      content: content,
      isPublic: isPublic,
      user: existingUser._id,
    });

    console.log("New text object:", newText);

    await newText.save();

    console.log("Text created successfully.");

    res.status(201).json({
      message: "Création réussie",
      data: newText,
    });
  } catch (error) {
    console.error("An error occurred while creating the text:", error);
    res.status(500).json({
      error: "Une erreur est survenue lors de la création du texte.",
    });
  }
};


//Recuperer tout les textes
exports.getTexts = (req, res) => {
  Text.find()
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

    const texts = await Text.find({ user: userId });

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
