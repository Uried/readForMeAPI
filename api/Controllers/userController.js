const Users = require("../Models/User");

//Add Users
exports.addUsers = async (req, res) => {
  // Verifier si email existe

  var user = new Users({
    nom: req.body.nom,
    age: req.body.age,
    phone: req.body.phone,
    csp: req.body.csp,
    photo: req.body.photo
  });
  user.save().then((result) => {
    res.status(201).json({
      message: "Création reussie",
      data: result
    });
  });
};



//get a single user
exports.getUser = async (req, res) => {
  const id = req.params.id;

  if (id.length != 24) {
    return Error("une erreur est survenue");
  } else {
    const user = await Users.findById(id)

        res.status(200).json({
          nom: user.nom,
          age: user.age,
          phone: user.phone,
          csp: user.csp,
          photo: user.photo,
          message: "ok",
        })
      ;
  }
};

//get all users
exports.getUsers = (req, res) => {
    Users.find()
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Utilisateurs',
                count: result.length,
                data: result
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error
            });
        });
};

