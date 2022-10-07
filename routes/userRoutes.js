const express = require('express');
const userRouter = express.Router();
const { ctrlWrapper } = require('../helpers');
const ctrl = require('../controllers/user');

const { validateBody } = require("../middlewares");
const { schemas } = require("../models/user");

userRouter.post(
    '/register',
    validateBody(schemas.register), 
    ctrlWrapper(ctrl.register)
);

userRouter.post('/login', (req, res) => {
    console.log("add transaction")
    res.send('User Login protocol activated')
})


module.exports = userRouter;