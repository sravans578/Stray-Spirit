const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const petsRoutes = require('./api/routes/pets');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if(req.method === 'OPTIONS'){
          res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE');
          return res.status(200).json({}); 
      }
      next();
});

app.use('/pets', petsRoutes);

mongoose.connect('mongodb+srv://strayspirit:' + process.env.MONGO_ATLAS_PW + '@strayspirit-bsghz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.statud = 404;
    next(error);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;