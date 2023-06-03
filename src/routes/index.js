const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/user',userController.index)
router.get('/user',userController.new);
router.get('/user',userController.newUser)
module.exports = router;