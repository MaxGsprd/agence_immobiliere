require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const advertisementRouter = require('./routes/advertisement');
const realtorRouter = require('./routes/realtor');
const propertyRouter = require('./routes/property');
const buyerRouter = require('./routes/buyer');

app.use('/properties', propertyRouter);
app.use('/advertisements', advertisementRouter);
app.use('/realtors', realtorRouter);
app.use('/buyers', buyerRouter);

app.listen( port, ()=>{
  console.log(`Server running on localhost:${port}`);
})

module.exports = app;