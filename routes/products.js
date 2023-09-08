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
    connection: 'postgres://xznpjiniubcnit:fcde821f872257bdef085aa2231ac446e69585b0e414d79fd935f3e0eff2849d@ec2-44-214-132-149.compute-1.amazonaws.com:5432/d5105gc4hbqde1',
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
            console.error(error+connection);
            res.status(500).send("Error getting product items :(");
        });
});

module.exports = router;