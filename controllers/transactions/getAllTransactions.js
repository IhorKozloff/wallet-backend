const  {Transaction}  = require('../../models/transaction')

const getAllTransactions = async (req, res, next) => {

    const transactions = await Transaction.find({});

    res.json({
        status: "success",
        code: 200,
        data: {
            result: transactions
        }
    })
}

module.exports = getAllTransactions;
