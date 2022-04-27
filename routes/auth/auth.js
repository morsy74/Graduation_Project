const express = require('express');
const router = express.Router();
const authController = require('../../controller/auth/authController');

router.post('/', authController.login);

module.exports = router;
