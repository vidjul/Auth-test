const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('./passport');

const routes = require('./routes');
const app = express();

// ---- Request body parsing ---- //

app.use(bodyParser.urlencoded({
    extended: false // We will not use url encoded.
}));

app.use(bodyParser.json())


// ---- Load all routes ---- //

app.use(routes);

// ---- DB connection ---- //
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/authTest')
    .then(() => console.log('Connection to DB - OK!'))
    .catch((err) => console.log(err));

// ---- Server launch ---- /

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
