const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.route('/users')
    .get(userController.listAllUsers)
    .post(userController.createAUser);

module.exports = router;