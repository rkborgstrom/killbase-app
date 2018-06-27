'use strict';

let fs = require('fs');
let knex = require('../knex');

let express = require('express');
const router = express.Router();
let port = process.env.PORT || 8000;
let bodyParser = require('body-parser');

// router.disable('x-powered-by');
router.use(express.static('public'));
router.use(bodyParser.json());

router.get('/assassins', (req, res, next) => {

    knex('assassins')
        .orderBy('id')
        .then((assassins) => {
            res.send(assassins);
        })
        .catch((err) => {
            next(err);
        })
});


router.get('/assassins/:id', (req, res, next) => {
    knex('assassins')
        .where('id', req.params.id)
        .first()
        .then((assassin) => {
            if (!assassin) {
                return next();
            }

            res.send(assassin);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/assassins', (req, res, next) => {
    knex('assassins')
        .insert({
            full_name: req.body.full_name,
            code_names: req.body.code_names,
            weapon: req.body.weapon,
            age: req.body.age,
            price: req.body.price,
            rating: req.body.rating,
            kills: req.body.kills
        }, '*')

        .then((artists) => {
            res.send(assassins[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.use(function (req, res) {
    console.error('404 status reached.');
    res.sendStatus(404);
});


module.exports = router;