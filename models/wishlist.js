const mongoose = require('mongoose');
const Joi = require('joi');

const WishListSchema = mongoose.Schema({

    UserId: {
        type: mongoose.Types.ObjectId,

    },
    Cafes: {
        type: mongoose.Types.ObjectId,
        ref: 'Cafes'
    },

    Restaurants: {
        type: mongoose.Types.ObjectId,
        ref: 'Restaurant'
    },

    Hotels: {
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    },

    TouristPlace: {
        type: mongoose.Types.ObjectId,
        ref: 'Tourist'
    },

    Train: {
        type: mongoose.Types.ObjectId,
        ref: 'TrainStation'

    },

    Club: {
        type: mongoose.Types.ObjectId,
        ref: 'Club'
    },

    City:{
        type: mongoose.Types.ObjectId,
        ref:'City'
    },

    Bus:{
        type: mongoose.Types.ObjectId,
        ref:'BusStation'
    }

});


const WishList = mongoose.model('WishList', WishListSchema);


exports.WishList = WishList