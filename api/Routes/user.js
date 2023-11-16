const usersController = require("../Controllers/userController");
const users2Controller = require("../Controllers/user2Controller");

// Initialiser express router
const router = require("express").Router();

//Set default API response
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.post("/", usersController.addUsers);

module.exports = router;