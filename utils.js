import token from './secrets';
import axios from 'axios';

export const getColor = (open, latestPrice) => {
  if (open === latestPrice) {
    return 'grey-text';
  } else if (open < latestPrice) {
    return 'green-text';
  } else {
    return 'red-text';
  }
};

export const fetchPrices = async stock => {
  const { data } = await axios.get(
    `https://cloud.iexapis.com/v1/stock/${
      stock.symbol
    }/quote?displayPercent=true&token=${token.token}`
  );
  stock.latestPrice = data.latestPrice;
  stock.closePrice = data.close;
};
