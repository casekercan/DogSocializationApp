const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"
router.route("/dogs")
  .get(appController.findAllDogs)

router.route("/dogs/:id")
  .get(appController.findOneDog)


module.exports = router;
