const usersController = require("../Controllers/userController");
const users2Controller = require("../Controllers/user2Controller");

// Initialiser express router
const router = require("express").Router();

router.get("/:id", usersController.getUser);
router.post("/", usersController.addUsers);

module.exports = router;