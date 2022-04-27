const express = require('express');
const router = express.Router();
const clubController = require('../controller/clubController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.post('/addClub', auth, clubController.addClub);
router.put('/editClub/:id', auth, clubController.editClub);
router.delete('/deleteClub/:id', [auth, admin], clubController.deleteClub);
router.get('/showAllClubs', clubController.showAllClubs);

module.exports = router;