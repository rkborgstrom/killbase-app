'use strict';

let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
// let killbasePath = path.join(__dirname, 'knexfile.js');
let config = require('./knexfile.js')['development'];
let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let knex = require('knex')(config);

app.disable('x-powered-by');
app.use(bodyParser.json());


app.get('/assassins', function (req, res) {
    res.send('assassins');
});

// app.get('/clients', function (req, res) {
//     res.send('clients');
// });

// app.get('/contracts', function (req, res) {
//     res.send('contracts');
// });

// app.get('/targets', function (req, res) {
//     res.send('targets');
// });

// app.get('/assassins_contracts', function (req, res) {
//     res.send('assassins_contracts');
// });

// app.get('/assassins_codename', function (req, res) {
//     res.send('assassins_codename');
// });

app.use(function (req, res) {
    res.sendStatus(404);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
