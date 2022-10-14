const  {Transaction}  = require('../../models/transaction')

const getStatisticsCategories = async (req, res, next) => {
    const { _id: owner } = req.user;
    const result = await Transaction.aggregate([
        { $match: { owner: owner, type: "expense" } },
        { $project: { _id: false, category: true, date: true, sum: true}},
        { $group: {_id: "$category", total: {$sum: "$sum"}} }
        
    ]);

    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getStatisticsCategories;
