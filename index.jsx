const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
//Fallback for .env
const PORT = process.env.PORT || 5051; 


// Using CORS for cross origin requests
app.use(cors());
//Using express json to receive request body in JSON for post call
app.use(express.json());

const productsRouter = require('./routes/products');

app.use('/products', productsRouter);

app.listen(PORT, ()=> {
    console.log('Listening on', PORT);
})


