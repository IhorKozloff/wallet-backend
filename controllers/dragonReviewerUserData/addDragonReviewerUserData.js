const { DragonReviewerUserData }  = require('../../models/dragonReviewerUserData');

const addUserData = async (req, res) => {

    const transaction = await DragonReviewerUserData.create(req.body);

    res.json({
        status: "success",
        code: 200,
        result: transaction
    });
}

module.exports = addUserData;
