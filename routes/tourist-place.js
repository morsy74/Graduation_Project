const express = require('express');
const router = express.Router();
const touristController = require('../controller/touristController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/addTouristPlace', auth, touristController.addTourist);
router.put('/editTouristPlace/:id', auth, touristController.editTourist);
router.delete('/deleteTouristPlace/:id', [auth, admin], touristController.deleteTourist);
router.get('/showAllTouristPlaces', touristController.showAllTourists);

module.exports = router;