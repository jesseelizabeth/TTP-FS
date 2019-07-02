import React from 'react';

const StockListView = props => {
  const { type, symbol, shares, price } = props;
  return type ? (
    <div>
      <h4>
        {type.toUpperCase()} ({symbol}) - {shares} shares @ ${price}
      </h4>
    </div>
  ) : (
    <div>
      <h4>
        {symbol} {shares}
      </h4>
    </div>
  );
};

export default StockListView;
