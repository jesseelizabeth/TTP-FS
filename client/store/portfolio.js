import axios from 'axios';

// action types
const LOADING = 'LOADING';
const GET_STOCKS = 'GET_STOCKS';
const GET_BALANCE = 'GET_BALANCE';
const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
const BUY_STOCK = 'BUY_STOCK';
const SELL_STOCK = 'SELL_STOCK';

// action creators
const loading = () => ({
  type: LOADING,
});

const gotStocks = stocks => ({
  type: GET_STOCKS,
  stocks,
});

const gotBalance = balance => ({
  type: GET_BALANCE,
  balance,
});

const gotTransactions = transactions => ({
  type: FETCH_TRANSACTIONS,
  transactions,
});

const boughtStock = transaction => ({
  type: BUY_STOCK,
  transaction,
});

const soldStock = transaction => ({
  type: SELL_STOCK,
  transaction,
});

// thunk
export const fetchPortfolio = () => async dispatch => {
  dispatch(loading());
  const { data } = await axios.get('/api/portfolio');
  dispatch(gotStocks(data));
};

export const getBalance = () => async dispatch => {
  const { data } = await axios.get('/api/users/balance');
  dispatch(gotBalance(data));
};

export const fetchTransactions = () => async dispatch => {
  dispatch(loading());
  const { data } = await axios.get('/api/portfolio/transactions');
  dispatch(gotTransactions(data));
};

export const buyStock = transaction => async dispatch => {
  const { data } = await axios.post(
    '/api/portfolio/transactions/buy',
    transaction
  );
  dispatch(boughtStock(data));
};

export const sellStock = transaction => async dispatch => {
  const { data } = await axios.post(
    '/api/portfolio/transactions/sell',
    transaction
  );
  dispatch(soldStock(data));
};

// initial state
const initialState = {
  transactions: [],
  stocks: [],
  balance: null,
  loading: false,
};

// reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case GET_STOCKS:
      return { ...state, stocks: action.stocks, loading: false };
    case GET_BALANCE:
      return { ...state, balance: action.balance };
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.transactions, loading: false };
    case BUY_STOCK:
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
        stocks: state.stocks.filter(stock => {
          if (stock.symbol === action.transaction.symbol) {
            stock.shares += action.transaction.shares;
          }
          return state.stocks;
        }),
        balance: (
          Number(state.balance) -
          Number(action.transaction.shares) * Number(action.transaction.price)
        ).toFixed(2),
      };
    case SELL_STOCK:
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
        stocks: state.stocks.filter(stock => {
          if (stock.symbol === action.transaction.symbol) {
            if (stock.shares === action.transaction.shares) {
              return stock.symbol !== action.transaction.symbol;
            }
            stock.shares -= action.transaction.shares;
          }
          return state.stocks;
        }),
        balance: (
          Number(state.balance) +
          Number(action.transaction.shares) * Number(action.transaction.price)
        ).toFixed(2),
      };
    default:
      return state;
  }
}
