import axios from 'axios';

// action types
const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';

// action creators
const gotTransactions = transactions => ({
  type: FETCH_TRANSACTIONS,
  transactions,
});

// thunk
export const fetchTransactions = userId => async dispatch => {
  const { data } = await axios.get(`/api/transactions/${userId}`);
  dispatch(gotTransactions(data));
};

// initial state
const initalState = [];

// reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
}
