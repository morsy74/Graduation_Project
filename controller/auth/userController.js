const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');  
const bcrypt = require('bcrypt');
const { User, validateUser } = require('../../models/user/user');

exports.sinUp =  async (req, res, next) =>{
  const { error } = validateUser(req.body);
  if(error) return res.status(200).json({
    "status": false,
    "message": error.details[0].message,
    "data": null
  });

  let user = await User.findOne({ email: req.body.email}).exec();
  if(user) return res.status(200).json({
    "status": false,
    "message":"User already registered.",
    "data": null
  });

  user = new User(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken();
  user.token = token;
  await user.save();
  const userBack = {
    "id": user.id,
    "name": user.name,
    "email": user.email,
    "token": user.token
  }
  res.status(200).header('x-auth-token', token).json({
    "status": true,
    "message": "Registration done successfully",
    "data": userBack
  });
  next();
};

exports.showUsers = async (req, res, next) => {
  const user = await User.find().sort('name').select('-password');
  res.send(user);
  next();
};

