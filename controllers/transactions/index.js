const getAllTransactions = require('./getAllTransactions');
const addTransactions = require('./addTransaction');
const deleteTransaction = require('./deleteTransaction');
const getStatisticsCategories = require('./getStatisticsCategories');

module.exports = {
    addTransactions,
    getAllTransactions,
    deleteTransaction,
    getStatisticsCategories
}