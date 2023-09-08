const express = require('express');
const router = express.Router();
require('dotenv').config();

// const knex = require('knex')({
//     client: 'pg',
//   connection: {
//     host : process.env.DATABASE_URL,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASSWORD,
//     database : process.env.DB_NAME
// }
// });

const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
  });
  
// GET all product items
router.get('/', (_req, res) => {
    knex
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