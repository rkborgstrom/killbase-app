'use strict';

let fs = require('fs');
let bodyParser = require('body-parser');
let config = require('./knexfile.js')['development'];
let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let knex = require('knex')(config);
let assassins = require('./routes/assassins');
// let contracts = require('./routes/contracts');


app.disable('x-powered-by');
app.use(bodyParser.json());

app.use(assassins);
// app.use(contracts);


app.use((_req, res) => {
    res.sendStatus(404);
  });

app.use((err, _req, res, _next) => {
    if (err.status) {
      return res
        .status(err.status)
        .set('Content-Type', 'text/plain')
        .send(err.message);
    }
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;

