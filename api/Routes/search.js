const searchController = require("../Controllers/searchController");
const authorization = require("../Controllers/authcontroller");

//Initialize express router
const router = require("express").Router();
router.get("/", searchController.searchTitlesAndContents);

// //Export API routes
module.exports = router;
