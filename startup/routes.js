const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const logging = require('../middleware/logger');
const register = require('../routes/user/register');
const login = require('../routes/user/login');
const forgotPassword = require('../routes/user/forgotPassword');
const resetPassword = require('../routes/user/resetPassword');
const profile = require('../routes/profile');
const city = require("../routes/city");
const restaurant = require('../routes/restaurant');
const cafe = require('../routes/cafe');
const courses = require('../routes/course');
const clubs = require('../routes/club');
const hotels = require('../routes/hotel');
const touristPlaces = require('../routes/tourist-place')
const train=require('../routes/train');
const bus=require('../routes/bus');
const wishlist= require('../routes/wishlist');
const home = require('../routes/home');

module.exports = function(app){
  app.use(express.json());
  app.use(helmet());
  app.use('/api/courses', courses);
  app.use('/api/user', register);
  app.use('/api/user/register', register);
  app.use('/api/user/login', login);
  app.use("/api/user", forgotPassword);
  app.use("/api/user", resetPassword);
  app.use("/api/user", profile);
  app.use('/api/clubs', clubs);
  app.use('/api/hotels', hotels);
  app.use('/api/touristPlaces', touristPlaces);
  app.use("/api/city",city);
  app.use("/api/restaurant",restaurant);
  app.use('/api/cafe',cafe);
  app.use("/api/train",train);
  app.use("/api/bus",bus);
  app.use("/api/user",wishlist);
  app.use("/api/home",home);

  if (app.get('env') === 'development') {
    app.use(logging);
    app.use(morgan('tiny'));
  }
}