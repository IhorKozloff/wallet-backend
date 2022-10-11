const { Transaction }  = require('../../models/transaction');

const addTransactions = async (req, res) => {

    const { _id: owner} = req.user;

    const transaction = await Transaction.create({...req.body, owner}).populate("owner", "name email");

    res.json({
        status: "success",
        code: 200,
        data: {
            result: transaction
        }
    });
}

module.exports = addTransactions;
