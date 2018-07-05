// 'use strict';

let knex = require('../knex');

let router = require('express').Router();

router.get('/assassins', (req, res, next) => {
    knex('assassins')
        .orderBy('id')
        .then((assassins) => {
            res.render('assassins', {data: assassins});
        })
        .catch((err) => {
            res.send(err);
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
            Full_name: req.body.Full_name,
            code_names: req.body.code_names,
            weapon: req.body.weapon,
            age: req.body.age,
            price: req.body.price,
            rating: req.body.rating,
            kills: req.body.kills
        }, '*')

        .then((assassins) => {
            res.send(assassins[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/assassins/:id', (req, res, next) => {
    knex('assassins')
        .where('id', req.params.id)
        .first()
        .then((assassin) => {
            if (!assassin) {
                return next();
            }

            return knex('assassins')
                .update({
                    Full_name: req.body.Full_name,
                    code_names: req.body.code_names,
                    weapon: req.body.weapon,
                    age: req.body.age,
                    price: req.body.price,
                    rating: req.body.rating,
                    kills: req.body.kills
                }, '*')
                .where('id', req.params.id);
        })
        .then((assassins) => {
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