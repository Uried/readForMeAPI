const textController = require('../Controllers/textController')
const authorization = require('../Controllers/authcontroller')

//Initialize express router
const router = require('express').Router();

router.post('/', textController.createText);
router.get("/:id",authorization.verifyToken, textController.getUserTexts);
router.get("/", textController.getTexts);
router.delete("/:id",textController.deleteText);

// //Export API routes
module.exports = router;