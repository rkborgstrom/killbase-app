// 'use strict';

// let fs = require('fs');
// let knex = require('../knex');
let router = require('express').Router();
// let port = process.env.PORT || 8000;
// let bodyParser = require('body-parser');

// router.disable('x-powered-by');
// router.use(express.static('public'));
// router.use(bodyParser.json());

router.get('/contracts', (req, res, next) => {

    knex('contracts')
        .orderBy('id')
        .then((contracts) => {
            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        })
});

router.get('/contracts/:id', (req, res, next) => {
    knex('contracts')
        .where('id', req.params.id)
        .first()
        .then((contracts) => {
            if (!contracts) {
                return next();
            }
            res.send(contracts);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/contracts', (req, res, next) => {
    knex('contracts')
        .insert({
            client_id: req.body.client_id,
            budget: req.body.budget,
            target_id: req.body.target_id,
            completed: req.body.completed,
            assassins_id: req.body.assassins_id,
        }, '*')

        .then((contracts) => {
            res.send(contracts[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/contracts/:id', (req, res, next) => {
    knex('contracts')
        .where('id', req.params.id)
        .first()
        .then((contracts) => {
            if (!contracts) {
                return next();
            }

            return knex('contracts')
                .update({
                    client_id: req.body.client_id,
                    budget: req.body.budget,
                    target_id: req.body.target_id,
                    completed: req.body.completed,
                    assassins_id: req.body.assassins_id,
                }, '*')
                .where('id', req.params.id);
        })
        .then((contracts) => {
            res.send(contracts[0]);
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