const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const Staff = require('../models/staff')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((staff, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(staff) // the whole raw user object!
	console.log('---------')
	done(null, { _id: staff._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	Staff.findOne(
		{ _id: id },
		'email',
		(err, staff) => {
			console.log('*** Deserialize user, user:')
			console.log(staff)
			console.log('--------------')
			done(null, staff)
		}
	)
})

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport
