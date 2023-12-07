const publicTextController = require("../Controllers/publicTextsController");
const authorization = require("../Controllers/authcontroller");

//Initialize express router
const router = require("express").Router();

router.get("/", publicTextController.getPublicTexts);

module.exports = router;