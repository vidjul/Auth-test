const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/userModel');

passport.use(new LocalStrategy({
    'usernameField': 'email',
    'passwordField': 'password'
},
    function (username, password, done) {
        User.findOne({ 'email': username, 'password': password }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            return done(null, user);
        });
    }
));