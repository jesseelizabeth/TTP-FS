import React from 'react';

const StockListView = props => {
  const { type, symbol, shares, price, currentValue } = props;
  return type ? (
    <div>
      <h4>
        {type.toUpperCase()} ({symbol}) - {shares} shares @ ${price}
      </h4>
    </div>
  ) : (
    <div>
      <h4>
        {symbol} - {shares} shares - ${currentValue.toFixed(2)}
      </h4>
    </div>
  );
};

export default StockListView;
