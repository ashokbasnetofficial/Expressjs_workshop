const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/user',userController.index)
module.exports = router;