const { DragonReviewerUserData }  = require('../../models/dragonReviewerUserData');

const addUserData = async (req, res) => {
    let result = null;
    const { email } = req.body;
    console.log(email)
    const userData = await DragonReviewerUserData.findOne({email: email});

    if (!userData) {
        result = await DragonReviewerUserData.create(req.body);
    } else {
        // await DragonReviewerUserData.findOneAndRemove({email: email});
        // result = await DragonReviewerUserData.create(req.body);
        result = await DragonReviewerUserData.findOneAndUpdate({email: email}, req.body, {new: true});
    }
    

    res.json({
        status: "success",
        code: 200,
        result: result
    });
}

module.exports = addUserData;