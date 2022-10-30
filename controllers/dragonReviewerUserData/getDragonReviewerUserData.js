const { DragonReviewerUserData }  = require('../../models/dragonReviewerUserData');

const getUserData = async (req, res) => {

    let result = null;
    console.log('this is request params', req.query)
    const userData = await DragonReviewerUserData.findOne({email: req.query.email});
    if (userData === null) {
        result = {}
    } else {
        result = userData
    }
    console.log('this is user data', userData)
    res.json({
        status: "success",
        code: 200,
        result: result
    });
}

module.exports = getUserData;
