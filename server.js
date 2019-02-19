const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;


//route requires
const routes = require("./routes");

//Middleware here
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json());

//sessions
app.use(
	session({
		secret: 'carolinekamrandavid', //pick a random string to make the hash that is generated securer
		resave: true,
		saveUninitialized: false
	})
)

// passport
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static("client/build"))
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// }

//ROUTES
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dogSocialization";
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useMongoClient: true }).then(() => {
	console.log('Connected to MongoDB.');
}).catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
