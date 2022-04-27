const Joi = require('joi');
const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');
const { Hotel, validate } = require('../models/hotel');

exports.addHotel = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let hotel = new Hotel(_.pick(req.body,
    ['name', 'address', 'roomsNumbers', 'singlePrice', 'doublePrice', 'picture', 'lat', 'lng', 'city']));
  
    await hotel.save();
    res.send(hotel)
    next();
};

exports.editHotel = async (req, res, next) =>{
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const hotel = await Hotel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    roomsNumber: req.body.roomsNumber,
    singlePrice: req.body.singlePrice,
    doublePrice: req.body.doublePrice,
    picture: req.body.picture,
    lat: req.body.lat,
    lng: req.body.lng,
    city: req.body.city
  }, {new: true});

  if (!hotel) return res.status(404).send("The hotel with the given ID is not found!..");
  res.send(hotel);
  next();
};

exports.deleteHotel = async (req, res, next) => {
  const hotel = await Hotel.findByIdAndRemove(req.params.id);

  if (!hotel) return res.status(404).send('The hotel with the given ID was not found.');
  res.send(hotel);
  next();
};

exports.showAllHotels = async (req, res, next) => {
  const hotel = await Hotel.find().sort('name');
  res.send(hotel);
  next();
}
