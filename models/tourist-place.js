const mongoose = require('mongoose');
const Joi = require('joi');

const touristPlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50
  },
  description:{
    type: String
  },
  address: {
    type: String,
    required: true,
  },
  workTime: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
    required: true
  }
});

const Tourist = mongoose.model('Tourist', touristPlaceSchema);

function validateTourist(tourist){

  const schema = Joi.object({ 
      name: Joi.string().max(50).required(),
      address: Joi.string().required(),
      description: Joi.string(),
      workTime: Joi.string().required(),
      price: Joi.string().required(),
      picture: Joi.string(),
      lng: Joi.number().required(),
      lat: Joi.number().required(),
      city:Joi.objectId().min(20).max(50).required()
  });

  return schema.validate(tourist);
}

exports.touristPlaceSchema = touristPlaceSchema;
exports.Tourist = Tourist;
exports.validate = validateTourist;
