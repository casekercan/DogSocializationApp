const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./passport");
const session = require("express-session");


//sessions
app.use(
	session({
		secret: 'carolinekamrandavid', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
)
// passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
var CONNECTION_URI = process.env.MONGODB_URI || "mongodb://localhost/dogSocialization";

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true }).then(() => {
	console.log('Connected to MongoDB.');
}).catch(err => console.log(err));


// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
