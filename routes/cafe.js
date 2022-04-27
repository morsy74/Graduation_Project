const cafe = require('../controller/cafe')
const express = require('express');
const router = express.Router();

router.get('/getCafes',cafe.getCafe);
router.get('/getCafeById/:id',cafe.getCafeById);
router.get('/city/:cityId',cafe.getCafeByCityId);
router.post('/',cafe.creatCafe);
router.put('/:id',cafe.updateCafe);
router.delete('/:id',cafe.deleteCafe);

module.exports=router;