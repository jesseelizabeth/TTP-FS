import axios from 'axios';

// action types
const LOADING_TRANSACTIONS = 'LOADING_TRANSACTIONS';
const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
const BUY_STOCK = 'BUY_STOCK';

// action creators
const loadingTransactions = () => ({
  type: LOADING_TRANSACTIONS,
});

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
  dispatch(loadingTransactions());
  const { data } = await axios.get('/api/transactions');
  dispatch(gotTransactions(data));
};

export const buyStock = transaction => async dispatch => {
  const { data } = await axios.post('/api/transactions', transaction);
  dispatch(boughtStock(data));
};

// initial state
const initalState = {
  all: [],
  loading: false,
};

// reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case LOADING_TRANSACTIONS:
      return { ...state, loading: true };
    case FETCH_TRANSACTIONS:
      return { ...state, all: action.transactions, loading: false };
    case BUY_STOCK:
      return { ...state, all: [...state.all, action.transaction] };
    default:
      return state;
  }
}
