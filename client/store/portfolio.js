import axios from 'axios';

// action types
const LOADING_PORTFOLIO = 'LOADING_PORTFOLIO';
const GET_STOCKS = 'GET_STOCKS';

// action creators
const loadingPortfolio = () => ({
  type: LOADING_PORTFOLIO,
});

const gotStocks = stocks => ({
  type: GET_STOCKS,
  stocks,
});

// thunk
export const fetchPortfolio = () => async dispatch => {
  dispatch(loadingPortfolio());
  const { data } = await axios.get('/api/portfolio');
  dispatch(gotStocks(data));
};

// initial state
const initalState = {
  stocks: [],
  loading: false,
};

// reducer
export default function(state = initalState, action) {
  switch (action.type) {
    case LOADING_PORTFOLIO:
      return { ...state, loading: true };
    case GET_STOCKS:
      return { ...state, stocks: action.stocks, loading: false };
    default:
      return state;
  }
}
