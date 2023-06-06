const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
router.get('/user',userController.index)
router.get('/user/new',userController.index);
router.post('/user/new',userController.newUser);
router.get('/user/new/:id',userController.edit);
router.post('/user/new/:id',userController.editUser)
module.exports = router;