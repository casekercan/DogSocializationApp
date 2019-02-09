const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"

//find all dogs
router.route("/dogs")
  .get(appController.findAllDogs);

//get one dog
router.route("/dogs/:id")
  .get(appController.findOneDog);

//get one dog to edit.
router.route("/dogedit/:id")
  .get(appController.editOneDog);

//find all staff
router.route("/allstaff")
  .get(appController.findAllStaff);

//find one staff
router.route("/staff/:id")
  .get(appController.findStaff);


module.exports = router;
