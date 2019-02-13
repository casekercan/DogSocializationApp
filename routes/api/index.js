const router = require("express").Router();
const appController = require("../../controllers/appController");


// Matches with "/api"

//find all  active dogs
router.route("/dogs")
  .get(appController.findAllDogs);

//find all inactive dogs
router.route("/dogsinactive")
  .get(appController.findInactiveDogs);

//get one dog
router.route("/dogs/:id")
  .get(appController.findOneDog);

//get one dog to edit.
router.route("/dog")
  .post(appController.updateDog);

router.route("/dogdelete/:id")
  .delete(appController.deleteDog);

//find all staff
router.route("/allstaff")
  .get(appController.findAllStaff);

//find all inactive staff
router.route("/staffinactive")
  .get(appController.findInactiveStaff);

//find one staff
router.route("/staff/:id")
  .get(appController.findStaff);

router.route("/staff")
  .post(appController.updateStaff);

//find all inactive staff
router.route("/staffinactive")
  .get(appController.findInactiveStaff);

// delete one staff by ID

router.route("/staffdelete/:id")
  .delete(appController.deleteStaff);

// router.route("/staff/find/:email")
//   .get(appController.findOneStaff);

module.exports = router;
