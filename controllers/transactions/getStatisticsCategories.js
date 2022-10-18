const  {Transaction}  = require('../../models/transaction')

const getStatisticsCategories = async (req, res, next) => {
    const { _id: owner } = req.user;
    const {month = 'all', year = 'all'} = req.query;
    console.log(month, year)
    
    let result = '';

    if( month === 'all' && year === 'all' ) {

       const expense = await Transaction.aggregate([
            { $match: { owner: owner, type: "expense" } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "$category", total: {$sum: "$sum"}} } 
        ]);
        const [income] = await Transaction.aggregate([
            { $match: { owner: owner, type: "income" } },
            { $project: { _id: false, category: true, date: true, sum: true}},
            { $group: {_id: "incomeSum", total: {$sum: "$sum"}} } 
        ]);

        result = {
            expense,
            income: income || 0
        }
    }
    if (month !== 'all' && year === 'all') {
        console.log('variant 1')
        
        const expense = await Transaction.aggregate([
            { $match: { owner: owner, type: "expense", "date.month": +month } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "$category", total: {$sum: "$sum"}} } 
        ]);
        const [income] = await Transaction.aggregate([
            { $match: { owner: owner, type: "income", "date.month": +month } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "incomeSum", total: {$sum: "$sum"}} } 
        ]);

        result = {
            expense,
            income: income || 0
        }
    }
     if (month === 'all' && year !== 'all') {
        console.log('variant 2')
        const expense = await Transaction.aggregate([
            { $match: { owner: owner, type: "expense", "date.year": +year } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "$category", total: {$sum: "$sum"}} } 
        ]);
        const [income] = await Transaction.aggregate([
            { $match: { owner: owner, type: "income", "date.year": +year } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "incomeSum", total: {$sum: "$sum"}} } 
        ]);
        
        result = {
            expense,
            income: income || 0
        }
    }
    if (month !== 'all' && year !== 'all') {
        console.log('variant 3')
        const expense = await Transaction.aggregate([
            { $match: { owner: owner, type: "expense","date.month": +month, "date.year": +year } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "$category", total: {$sum: "$sum"}} } 
        ]);
        const [income] = await Transaction.aggregate([
            { $match: { owner: owner, type: "income", "date.month": +month, "date.year": +year } },
            { $project: { _id: false, category: true, sum: true}},
            { $group: {_id: "incomeSum", total: {$sum: "$sum"}} } 
        ]);
        
        result = {
            expense,
            income: income || 0
        }
    }

    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getStatisticsCategories;
