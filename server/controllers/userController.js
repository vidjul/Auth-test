const User = require('../models/userModel');

exports.listAllUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err);
        }
        res.send(users);
    })
};

exports.createAUser = (req, res) => {
    const user = User(req.body);
    user.save((err) => {
        if(err) {
            res.status(500).send(err);
        }
        res.send({'message': 'User has been created', user});
    })
};