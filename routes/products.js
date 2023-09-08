const knex = require('knex');
const config = require('../knexfile');
const express = require('express');
const router = express.Router();
require('dotenv').config();

const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);
  
// GET all product items
router.get('/', (_req, res) => {
    db
        .select('*')
        .from('products')
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error getting product items :(");
        });
});

module.exports = router;