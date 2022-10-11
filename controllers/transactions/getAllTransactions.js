const  {Transaction}  = require('../../models/transaction')

const getAllTransactions = async (req, res, next) => {
    const { _id: owner } = req.user;
    const transactions = await Transaction.find({owner}, "-createdAt -updatedAt").populate("owner", "name email");

    res.json({
        status: "success",
        code: 200,
        result: [...transactions]
    })
}

module.exports = getAllTransactions;
