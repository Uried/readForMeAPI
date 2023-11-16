const users2Controller = require('../Controllers/user2Controller')

//Initialize express router
const router = require('express').Router();
//Set default API response 
router.get('/', users2Controller.getUsers2);
router.post('/', users2Controller.addUsers2);
router.get('/:id', users2Controller.getUser2);

// //Export API routes
module.exports = router;