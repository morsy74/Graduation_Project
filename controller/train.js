const {Train, validateTrain}= require('../models/train');
const _ = require('lodash');

exports.creatTrain=async function (req,res,next){
    const{error}= validateTrain(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let train = await Train.findOne({name: req.body.name});//,lng:req.body.lng,lat:req.body.lat
    if(train) return res.status(400).send("this cafe already in data base");
    train = await new Train(_.pick(req.body,['name','address','pic','rate','workTime','city','lat','lng']));
    train = await train.save();
    res.send(train);
    next(); 
}

exports.getTrain= async function(req,res,next){

    let filter = {};
    if(req.query.rate){
        filter = {rate: req.query.rate };
    }
    const train = await Train.find(filter).populate('city','name -_id')
    res.status(200).json({
    "status": true,
    "message": "success",
    "data": train
  });
    next();
}

exports.getTrainById= async function(req,res,next){
    const train = await Train.findById(req.params.id).populate('city','name -_id');
    if(!train) return res.status(404).send('Not found check your id ');
    res.status(200).json({
    "status": true,
    "message": "success",
    "data": train
  });
    next();
};

exports.getTrainByCityId = async function (req, res, next) {
    const train = await Train.find({ city: req.params.cityId }).select('-city');
    if (!train) return res.status(404).send('Not found check your id ');
    res.status(200).json({
    "status": true,
    "message": "success",
    "data": train
  });
    next();
  };

exports.updateTrain= async function(req,res,next){
    let train= await Train.findById(req.params.id);
    if(!train)return res.status(404).send('not found check your id ');
    
    const {error}= validateTrain(req.body);
    if(error)return res.status(400).send(error.details[0].message);
    
    train = await Train.findByIdAndUpdate(req.params.id,{
        $set:{
            name:req.body.name,
            address:req.body.address,
            pic:req.body.pic,
            price:req.body.price,
            lat:req.body.lat,
            lng:req.body.lng,
            city:req.body.city
        }
    }, {new : true})

    train = await train.save();
    res.send(train);
}


exports.deleteTrain = async function(req,res,next){
    const train = await Train.findByIdAndRemove(req.params.id);
    if(!train) return res.status(404).send('not found check id');
    res.send(train);
    next();
}