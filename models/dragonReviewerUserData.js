const {Schema, model} = require("mongoose");

const dragonReviewerSchema = Schema({

    email: {
        type: String,
    },
    data: {
        type: Array,
    },
    avatar: {
        type: String
    }

}, {versionKey: false, timestamps: true});



const DragonReviewerUserData = model('dragonReviewerUserData', dragonReviewerSchema);


module.exports = {
    DragonReviewerUserData, 
};