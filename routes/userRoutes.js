const express = require('express');
const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
    console.log("add transaction")
    res.send('User Registration protocol activated')
})

userRouter.post('/login', (req, res) => {
    console.log("add transaction")
    res.send('User Login protocol activated')
})


module.exports = userRouter;