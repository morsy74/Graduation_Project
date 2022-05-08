const mongoose = require('mongoose');
const Joi = require('joi');

const BusStation= mongoose.Schema({
    name:String,
    address:String,
    rate:Number,//احتمال نحتاجها
    price:String,//احتمال نحتاجها
    pic:String,
    lat:Number,
    lng:Number,
    city:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City'
    }
})

const Bus = mongoose.model('BusStation',BusStation);

function validateBus(bus){

    const schema= Joi.object({
        name:Joi.string().min(3).max(100).required(),
        address:Joi.string().min(3).required(),
        price:Joi.string().min(3).required(),
        lat:Joi.number().required(),
        lng:Joi.number().required(),
        city:Joi.required()
    });

    return schema.validate(bus);
}

module.exports.Bus=Bus;
module.exports.validateBus=validateBus;