const Sequelize = require('sequelize');
const db = require('../db');

const Account = db.define('account', {
  balance: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: '5000.00',
  },
});

module.exports = Account;
