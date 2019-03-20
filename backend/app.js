const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const eventsRoutes = require('./api/routes/event');

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
app.use('/events', eventsRoutes);

mongoose.connect('mongodb+srv://strayspirit:strayspirit123@strayspirit-bsghz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
   .then(() => {
       console.log('Connected to DB!');
   })
   .catch(() => {
       console.log('Not Connected??');
   });

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