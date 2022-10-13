const express = require('express');
const userRouter = express.Router();
const { ctrlWrapper } = require('../helpers');
const ctrl = require('../controllers/user');

const { validateBody, isUserAuthorized } = require("../middlewares");
const { schemas } = require("../models/user");

userRouter.post(
    '/register',
    validateBody(schemas.register), 
    ctrlWrapper(ctrl.register)
);

userRouter.post('/login',
    validateBody(schemas.login), 
    ctrlWrapper(ctrl.login)
);
userRouter.get('/logout', isUserAuthorized, ctrlWrapper(ctrl.logout))


module.exports = userRouter;