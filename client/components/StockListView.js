import React from 'react';

const StockListView = props => {
  const { type, symbol, shares, price, currentValue, color } = props;
  return type ? (
    <div className="row">
      <div className="col">{type.toUpperCase()}</div>
      <div className="col">{symbol}</div>
      <div className="col">{shares} shares</div>
      <div className="col">@ ${price}</div>
    </div>
  ) : (
    <div className="row">
      <div className={`col ${color}`}>{symbol}</div>
      <div className="col">{shares} shares</div>
      <div className={`col ${color}`}>${currentValue.toFixed(2)}</div>
    </div>
  );
};

export default StockListView;
