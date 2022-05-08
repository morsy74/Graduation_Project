const bus = require('../controller/bus')
const express = require('express');
const router = express.Router();

router.get('/getBuses',bus.getBus);
router.get('/getBusById/:id',bus.getBusById);
router.get('/city/:cityId',bus.getBusByCityId);
router.post('/',bus.creatBus);
router.put('/:id',bus.updateBus);
router.delete('/:id',bus.deleteBus);

module.exports=router;