const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"
router.route("/dogs")
  .get(appController.findAllDogs);

router.route("/dogs/:id")
  .get(appController.findOneDog);

router.route("/allstaff")
  .get(appController.findAllStaff);

router.route("/staff/:id")
  .get(appController.findStaff);


module.exports = router;
