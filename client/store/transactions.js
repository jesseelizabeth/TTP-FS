import axios from 'axios';

// action types
const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
const BUY_STOCK = 'BUY_STOCK';

// action creators
const gotTransactions = transactions => ({
  type: FETCH_TRANSACTIONS,
  transactions,
});

const boughtStock = stock => ({
  type: BUY_STOCK,
  stock,
});

// thunk
export const fetchTransactions = () => async dispatch => {
  const { data } = await axios.get('/api/transactions');
  dispatch(gotTransactions(data));
};

export const buyStock = transaction => async dispatch => {
  const { data } = await axios.post('/api/transactions', transaction);
  dispatch(boughtStock(data));
};

// initial state
const initalState = [];

// reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return action.transactions;
    case BUY_STOCK:
      return [...state, action.transaction];
    default:
      return state;
  }
}
