const  {Transaction}  = require('../../models/transaction')
const { createError } = require('../../helpers');


const deleteTransaction = async (req, res, next) => {

    const { id } = req.params;
    const removingItem = await Transaction.findByIdAndRemove(id);
    
    if (!removingItem) {
        throw createError(404, `Transaction by id${id} not found.`);
    }

    res.json({
        status: "succes",
        code: 200,
        message: "transaction deleted"
    })
}

module.exports = deleteTransaction;
