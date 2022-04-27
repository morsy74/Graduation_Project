const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logging = require('../middleware/logger');
const users = require('../routes/auth/user');
const auth = require('../routes/auth/auth');
const resetPassword = require('../routes/auth/resetPassword');
const city = require("../routes/city");
const restaurant = require('../routes/restaurant');
const cafe = require('../routes/cafe');
const courses = require('../routes/course');
const clubs = require('../routes/club');
const hotels = require('../routes/hotel');
const touristPlaces = require('../routes/tourist-place')

module.exports = function(app){
  app.use(express.json());
  app.use(helmet());
  app.use('/api/courses', courses);
  app.use('/api/clubs', clubs);
  app.use('/api/hotels', hotels);
  app.use('/api/touristPlaces', touristPlaces);
  app.use('/api/user/register', users);
  app.use('/api/users', users);
  app.use('/api/user/login', auth);
  app.use("/api", resetPassword);
  app.use("/api/city",city);
  app.use("/api/restaurant",restaurant);
  app.use('/api/cafe',cafe);

  if (app.get('env') === 'development') {
    app.use(logging);
    app.use(morgan('tiny'));
  }
}