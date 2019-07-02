import axios from 'axios';

// action types
const GET_STOCKS = 'GET_STOCKS';

// action creators
const gotStocks = stocks => ({
  type: GET_STOCKS,
  stocks,
});

// thunk
export const fetchPortfolio = () => async dispatch => {
  const { data } = await axios.get('/api/portfolio');
  dispatch(gotStocks(data));
};

// initial state
const initalState = [];

// reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case GET_STOCKS:
      return action.stocks;
    default:
      return state;
  }
}
