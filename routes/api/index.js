const router = require("express").Router();
const appController = require("../../controllers/appController");

// Matches with "/api/"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/:id"
router.route("/:id")
  .delete(appController.remove);

module.exports = router;
