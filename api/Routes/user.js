const usersController = require("../Controllers/userController");

// Initialiser express router
const router = require("express").Router();

router.get("/:id", usersController.getUser);
router.post("/", usersController.addUsers);

module.exports = router;