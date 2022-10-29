const { DragonReviewerUserData }  = require('../../models/dragonReviewerUserData');

const getUserData = async (req, res) => {

    const userData = await DragonReviewerUserData.findOne(req.params.email);

    res.json({
        status: "success",
        code: 200,
        result: userData
    });
}

module.exports = getUserData;
