const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"
router.route("/dogs")
  .get(appController.findAllDogs);

router.route("/dogs/:id")
  .get(appController.findOneDog);

router.route("/staff")
  .get(appController.findAllStaff);

router.route("/volunteer/:id")
  .get(appController.findVolunteer);


module.exports = router;
