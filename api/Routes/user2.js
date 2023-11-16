const users2Controller = require('../Controllers/user2Controller')

//Initialize express router
const router = require('express').Router();

router.post('/', users2Controller.addUsers2);
router.get('/:id', users2Controller.getUser2);

// //Export API routes
module.exports = router;