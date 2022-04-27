const {City, validateCity} = require('../models/city');
const _ = require('lodash');

exports.creatCity = async function (req, res, next) {

    const { error } = validateCity(req.body);
    if (error) return res.status(400).send(error.details[0].message);
 
    let city = new City(_.pick(req.body, ["name", "population", "area"]));
    city = await City.findOne({ name: req.body.name});
    if (city) return res.status(400).send("this city is already in database");
    city = await city.save();
    res.send(_.pick(req.body, ["name", "population", "area"]));

    
    next();
}

exports.getCity = async function (req, res, next) {
    const city = await City.find().sort('name');
    res.send(city);
    next();
}

exports.getCityById = async function (req, res, next) {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).send("Not fond check your Id");
    res.send(city);
    next();
}

exports.editCity= async function (req,res,next){
    let city = await City.findById(req.params.id);
    if(!city) return res.status(404).send('check your id');

    const{ error }= validateCity(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    city = await City.findByIdAndUpdate(req.params.id,{
        $set:{ 
            name:req.body.name,
            area:req.body.area,
            population:req.body.population,
            touristPlaces:req.body.touristPlaces,
        }},{ new:true });
    
    city= await city.save();     
    res.send(city);

    next();
     
} 

exports.deleteCity=async function(req,res,next){
    const city = await City.findByIdAndRemove(req.params.id);
    if(!city)return res.status(404).send("not found check your id");
    res.send(city);

    next();
}