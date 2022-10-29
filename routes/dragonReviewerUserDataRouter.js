const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/dragonReviewerUserData');
const { ctrlWrapper } = require('../helpers');




router.get('/get', ctrlWrapper(ctrl.getUserData));

router.post('/add', ctrlWrapper(ctrl.addUserData));




module.exports = router;