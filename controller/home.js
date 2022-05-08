const { Restaurant } = require('../models/restaurant');
const { Cafe } = require('../models/cafe');
const { Club } = require('../models/club');
const { Hotel } = require('../models/hotel');
const { Tourist } = require('../models/tourist-place');
const { Train } = require('../models/train');
const { Bus } = require('../models/bus')
exports.getTrend = async function (req, res, next) {
     const Restaurants = await Restaurant.find({ rate: 4.5 }).populate('city', 'name -_id');
     const Cafes = await Cafe.find({ rate: 4 }).populate('city', 'name -_id');
     const BusStation = await Bus.find({ rate: 5 }).populate('city', 'name -_id');
     const TrainStation = await Train.find({ rate: 5 }).populate('city', 'name -_id');
     const Hotels = await Hotel.find({ rate: 5 }).populate('city', 'name -_id');
     const TouristPlace = await Tourist.find({ rate: 5 }).populate('city', 'name -_id');
     const club = await Club.find({ rate: 5 }).populate('city', 'name -_id');
     //const city= await City.find()
     let home = {
          Restaurants,
          Cafes,
          BusStation,
          TrainStation,
          Hotels,
          TouristPlace,
          club
     }
     res.status(200).json({
          "status": true,
          "message": "success",
          "data": home
     });
     next();
};

