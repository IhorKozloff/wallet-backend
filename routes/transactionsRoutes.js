const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/transactions');
const { ctrlWrapper } = require('../helpers');
const { validateBody, isUserAuthorized } = require("../middlewares");
const { joiAddTransactionSchema } = require("../models/transaction")

router.get('/all', isUserAuthorized, ctrlWrapper(ctrl.getAllTransactions));

router.post('/add', isUserAuthorized, validateBody(joiAddTransactionSchema), ctrlWrapper(ctrl.addTransactions));

router.delete('/:id', ctrlWrapper(ctrl.deleteTransaction));



module.exports = router;