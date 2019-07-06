const router = require('express').Router();
const { Stock, Transaction, User } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const stocksOwned = await Stock.findAll({
      where: { userId: req.user.id },
    });
    res.json(stocksOwned);
  } catch (error) {
    next(error);
  }
});

router.get('/transactions', async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.user.id },
    });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});

router.post('/transactions/buy', async (req, res, next) => {
  try {
    // record transaction
    const transaction = await Transaction.create({
      type: req.body.type,
      symbol: req.body.symbol,
      shares: Number(req.body.shares),
      price: Number(req.body.price),
      userId: req.user.id,
    });

    // update stock to reflect transaction
    const stockToUpdate = await Stock.findOne({
      where: { symbol: transaction.symbol, userId: req.user.id },
    });

    if (stockToUpdate) {
      await stockToUpdate.update({
        shares: Number(stockToUpdate.shares) + Number(transaction.shares),
      });
    } else {
      await Stock.create({
        symbol: transaction.symbol,
        shares: Number(transaction.shares),
        userId: req.user.id,
      });
    }

    // update user balance
    const user = await User.findOne({
      where: { id: req.user.id },
    });

    await user.update({
      balance:
        Number(user.balance) -
        Number(transaction.shares) * Number(transaction.price),
    });

    res.json(transaction);
  } catch (error) {
    next(error);
  }
});

router.post('/transactions/sell', async (req, res, next) => {
  try {
    // record transaction
    const transaction = await Transaction.create({
      type: req.body.type,
      symbol: req.body.symbol,
      shares: Number(req.body.shares),
      price: Number(req.body.price),
      userId: req.user.id,
    });

    // update stock to reflect transaction
    const stockToUpdate = await Stock.findOne({
      where: { symbol: transaction.symbol, userId: req.user.id },
    });

    // sell
    if (stockToUpdate.shares === transaction.shares) {
      await stockToUpdate.destroy();
    } else {
      await stockToUpdate.update({
        shares: Number(stockToUpdate.shares) - Number(transaction.shares),
      });
    }

    // update user balance
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    console.log('USER SELL', user);

    await user.update({
      balance:
        Number(user.balance) +
        Number(transaction.shares) * Number(transaction.price),
    });

    res.json(transaction);
  } catch (error) {
    next(error);
  }
});
