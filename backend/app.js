const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
// Passport Config
require('./passport')(passport);

const petsRoutes = require('./api/routes/pets');
const userRoutes = require('./api/routes/user');

app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
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
app.use('/user', userRoutes);

mongoose.connect('mongodb+srv://strayspirit:' + process.env.MONGO_ATLAS_PW + '@strayspirit-bsghz.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.statud = 404;
    next(error);
})

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;