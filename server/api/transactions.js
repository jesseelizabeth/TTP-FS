const router = require('express').Router();
const { Transaction } = require('../db/models');
module.exports = router;

router.get('/:userId', async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: { userId: req.params.userId },
    });
    res.json(transactions);
  } catch (error) {
    next(error);
  }
});
