const  {Transaction}  = require('../../models/transaction')

const getAllTransactions = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    
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
