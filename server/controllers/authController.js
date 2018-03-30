const jwt = require('jsonwebtoken');
const passport = require('passport');

exports.login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                'message': 'email or password is wrong',
                'user': 'user'
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.status(500).send(err);
            }
            let token = jwt.sign({id: user._id, email: user.email}, 'secretKey');
            return res.json({ user, token });
        });
    })
        (req, res);
}