const { Transaction }  = require('../../models/transaction');

const addTransactions = async (req, res) => {

    const transaction = await Transaction.create(req.body);

    res.json({
        status: "success",
        code: 200,
        data: {
            result: transaction
        }
    });
}

module.exports = addTransactions;
