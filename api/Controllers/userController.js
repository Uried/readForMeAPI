const User = require("../Models/User");

// Ajouter un utilisateur
exports.addUsers = async (req, res) => {
  try {
    const { idUser, pseudo, phone, password } = req.body;

    const newUser = new User({
      idUser: idUser,
      pseudo: pseudo,
      phone: phone,
      password: password,
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
    const { id } = req.params;

    if (id.length !== 24) {
      throw Error("ID d'utilisateur invalide");
    }

    const user = await User.findById(id);

    if (!user) {
      throw Error("Utilisateur non trouvé");
    }

    res.status(200).json({
      idUser: idUser,
      pseudo: pseudo,
      phone: phone,
      password: password,
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
  const { email, password } = req.body;
  //Check if the user email exist
  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "utilisateur non trouve" });
    } else {
      const isMatch = bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.json({ message: "mot de passe incorrect " });
      } else {
        res.status(200).json({
          message: "Connected",
          idUser: idUser,
          pseudo: user.pseudo,
          phone: phone,
          token: generateToken(user._id),
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "une erreur est survenue" });
  }
};
