const Joi = require("joi");
const {Schema, model} = require("mongoose");

const transactionSchema = Schema({
    date: {
       type: Object,
       required: true
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    category: {
        type: String,
        enum: ['main', 'house', 'children', 'development', 'food', 'basic', 'products', 'car', 'health', 'child care', 'household', 'education', 'leisure', 'other', 'salary'],
        required: true,
    },
    comment: {
        type: String,
        required: false,
        default: '-'
    },
    sum: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
}, {versionKey: false, timestamps: true});

const joiAddTransactionSchema = Joi.object({
    date: Joi.object().required(),
    type: Joi.string().required(),
    category: Joi.string().required(),
    comment: Joi.string(),
    sum: Joi.number().required(),
})


const Transaction = model('transaction', transactionSchema);


module.exports = {
    Transaction, 
    joiAddTransactionSchema
};