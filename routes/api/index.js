const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"
router.route("/dogs")
  .get(appController.findAllDogs);

router.route("/dogs/:id")
  .get(appController.findOneDog);

router.route("/dogs/deactivate/:id")
  .get(appController.deActivateDog);

router.route("/dogs/delete/:id")
  .get(appController.removePup);

router.route("/dogs/location/:loc")
  .get(appController.findDogsLoc);

router.route("/allstaff")
  .get(appController.findAllStaff);

router.route("/staff/:id")
  .get(appController.findStaff);

router.route("/staff/delete/:id")
  .get(appController.removeStaff);

router.route("/staff/deactivate/:id")
  .get(appController.deActivateStaff);

module.exports = router;
