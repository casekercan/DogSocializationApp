const router = require("express").Router();
const appController = require("../../controllers/appController");
const passport = require('../../passport');


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


//PASSPORT NO APPCONTROLLER.JS//
//////////////////////////////
/////////////////////////////
/////////////////////////////

  //SIGN UP
  router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    Staff.findOne({ email: email }, (err, staff) => {
        if (err) {
            console.log('staff.js post error: ', err)
        } else if (staff) {
            res.json({
                error: `Sorry, already a staff with the email: ${email}`
            })
        }
        else {
            const newStaff = new Staff({
                email: email,
                password: password
            })
            newStaff.save((err, savedStaff) => {
                if (err) return res.json(err)
                res.json(savedStaff)
            })
        }
    })
})

  //LOGIN 
  router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.staff)
  if (req.staff) {
      res.json({ staff: req.staff })
  } else {
      res.json({ staff: null })
  }
})

router.post('/logout', (req, res) => {
  if (req.staff) {
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no staff to log out' })
  }
})


module.exports = router;
