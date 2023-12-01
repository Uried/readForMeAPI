const User = require("../Models/User");
const generateToken = require("./generateToken")

// Ajouter un utilisateur
exports.addUsers = async (req, res) => {
  try {
    const { jId, pseudo, phone} = req.body;

    const newUser = new User({
      jId: jId,
      pseudo: pseudo,
      phone: phone
    });

    await newUser.save();

    res.status(201).json({
      message: "Création réussie",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur est survenue lors de la création de l'utilisateur.",
    });
  }
};

// Obtenir un utilisateur par son ID
exports.getUser = async (req, res) => {
  try {
    const { jId } = req.params;

    if (jId.length !== 24) {
      throw Error("ID d'utilisateur invalide");
    }

    const user = await User.findById(jId);

    if (!user) {
      throw Error("Utilisateur non trouvé");
    }

    res.status(200).json({
      jId: jId,
      pseudo: pseudo,
      phone: phone,
      message: "OK",
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

//log user

exports.login = async (req, res) => {
  const { pseudo, phone } = req.body;
  //Check if the user phone exist
  try {
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(400).json({ message: "utilisateur non trouve" });
    } else {

      if (pseudo !== user.pseudo) {
        return res.json({ message: "cet utilisateur n'existe pas " });
      } else {
        res.status(200).json({
          message: "Connected",
          jId: user.jId,
          pseudo: user.pseudo,
          phone: user.phone,
          token: generateToken(user.jId)
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "une erreur est survenue" });
  }
};
