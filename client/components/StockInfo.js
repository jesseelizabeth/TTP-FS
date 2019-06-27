import React from 'react';

const StockInfo = props => {
  const { companyName, symbol, latestPrice, high, low } = props;
  return (
    <div>
      <h1>
        {companyName}, {symbol}
      </h1>
      <h2>${latestPrice}</h2>
      <p>
        high: ${high} | low: ${low}
      </p>
    </div>
  );
};

export default StockInfo;
