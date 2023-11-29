const textController = require('../Controllers/textController')

//Initialize express router
const router = require('express').Router();

router.post('/', textController.addText);
router.get('/:id', textController.getText);
router.get("/", textController.getTexts);

// //Export API routes
module.exports = router;