const Joi = require('joi');
const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');
const { Tourist, validate } = require('../models/tourist-place');

exports.addTourist = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let tourist = new Tourist(_.pick(req.body,
    ['name', 'description', 'address', 'workTime', 'price', 'picture', 'lat', 'lng', 'city']));
  
    await tourist.save();
    res.send(tourist)
    next();
};

exports.editTourist = async (req, res, next) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const tourist = await Tourist.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    workTime: req.body.workTime,
    price: req.body.price,
    picture: req.body.picture,
    lat: req.body.lat,
    lng: req.body.lng,
    city: req.body.city
  }, {new: true});

  if (!tourist) return res.status(404).send("The tourist with the given ID is not found!..");
  res.send(tourist);
  next();
};

exports.deleteTourist = async (req, res, next) => {
  const tourist = await Tourist.findByIdAndRemove(req.params.id);

  if (!tourist) return res.status(404).send('The tourist with the given ID was not found.');
  res.send(tourist);
  next();
};

exports.showAllTourists = async (req, res, next) => {
  const tourist = await Tourist.find().sort('name');
  res.send(tourist);
  next();
}
