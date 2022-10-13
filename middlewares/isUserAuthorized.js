const { createError } = require('../helpers')
const jwt = require('jsonwebtoken')
const { User } = require("../models/user");

const {SECRET_KEY} = process.env

const isUserAuthorized = async (req, res, next) => {
    

    try {
        const { authorization } = req.headers;
        console.log(authorization)
        const [bearer, token] = authorization.split(" ");

        if (bearer !== "Bearer") {
            throw createError(401)
        }
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
           
            const user = await User.findById(id);

            if (!user || !user.token) {
                throw createError(401);
            }
            req.user = user;
            next()
        } catch (err) {
            err.status = 401
            throw err
        }

    } catch (error) {
        next(error)
    }
}

module.exports = isUserAuthorized;