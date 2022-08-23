const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactions');
const { ctrlWrapper } = require('../helpers');

router.get('/all', ctrlWrapper(ctrl.getAllTransactions));

router.post('/add', ctrlWrapper(ctrl.addTransactions));

router.delete('/:id', ctrlWrapper(ctrl.deleteTransaction));



module.exports = router;