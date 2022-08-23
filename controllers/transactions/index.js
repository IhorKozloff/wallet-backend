const getAllTransactions = require('./getAllTransactions');
const addTransactions = require('./addTransaction');
const deleteTransaction = require('./deleteTransaction');

module.exports = {
    addTransactions,
    getAllTransactions,
    deleteTransaction
}