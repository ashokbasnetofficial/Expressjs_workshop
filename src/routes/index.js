const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/user',userController.index)
router.get('/user/new',userController.index);
router.post('/user/new',userController.newUser)
module.exports = router;