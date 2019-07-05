import React from 'react';

const TransactionListView = props => {
  const { type, symbol, shares, price } = props;
  return (
    <div className="row">
      <div className="col">{type.toUpperCase()}</div>
      <div className="col">{symbol}</div>
      <div className="col">{shares} shares</div>
      <div className="col">@ ${price}</div>
    </div>
  );
};

export default TransactionListView;
