const mongoose = require('mongoose');
const Joi = require('joi');

const trainStation= mongoose.Schema({
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

const Train = mongoose.model('TrainStation',trainStation);

function validateTrain(train){

    const schema= Joi.object({
        name:Joi.string().min(3).max(100).required(),
        address:Joi.string().min(3).required(),
        price:Joi.string().min(3).required(),
        lat:Joi.number().required(),
        lng:Joi.number().required(),
        city:Joi.required()
    });

    return schema.validate(train);
}

module.exports.Train=Train;
module.exports.validateTrain=validateTrain;