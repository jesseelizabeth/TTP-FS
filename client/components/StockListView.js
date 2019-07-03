import React from 'react';

const StockListView = props => {
  const { type, symbol, shares, price, currentValue, color } = props;
  return type ? (
    <tr>
      <td>{type.toUpperCase()}</td>
      <td>{symbol}</td>
      <td>{shares} shares</td>
      <td>@ ${price}</td>
    </tr>
  ) : (
    <tr>
      <td className={color}>{symbol}</td>
      <td>{shares} shares</td>
      <td className={color}>${currentValue.toFixed(2)}</td>
    </tr>
  );
};

export default StockListView;
