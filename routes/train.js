const train = require('../controller/train')
const express = require('express');
const router = express.Router();

router.get('/getTrainStations',train.getTrain);
router.get('/getTrainStationsById/:id',train.getTrainById);
router.get('/city/:cityId',train.getTrainByCityId);
router.post('/',train.creatTrain);
router.put('/:id',train.updateTrain);
router.delete('/:id',train.deleteTrain);

module.exports=router;