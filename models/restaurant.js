const mongoose=  require('mongoose');
const Joi= require('joi');


const restaurantSchema= mongoose.Schema({
    name:String,
    address:String,
    rate:String,
    workTime:String,
    cuisineType:String,
    pic:[String],
    menu:[String],
    lat:Number,
    lng:Number,
    city:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

function validateRestaurant(restaurant){

    const schema= Joi.object({
        name:Joi.string().min(3).max(100).required(),
        address:Joi.string().min(3).required(),
        rate:Joi.required(),
        pic:Joi.required(),
        menu:Joi.required(),
        cuisineType:Joi.string().required(),
        workTime:Joi.string().min(7).max(10).required(),
        lat:Joi.number().required(),
        lng:Joi.number().required(),
        city:Joi.required()
    });

    return schema.validate(restaurant);
}

exports.Restaurant=Restaurant;
exports.validateRestaurant=validateRestaurant;