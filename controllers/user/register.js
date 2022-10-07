const { createError } = require("../../helpers");
const { User } = require("../../models/user");


const register = async (req, res) => {
    console.log(req.body);
    const {email} = req.body;
    const user = await User.findOne({email});

    if (user) {
        throw createError(409, "Email in use");
    }
    const result = await User.create(req.body);
    
    res.status(201).json({
        user: {
            email: result.email,
            name: result.name
        }
    })
}

module.exports = register;
