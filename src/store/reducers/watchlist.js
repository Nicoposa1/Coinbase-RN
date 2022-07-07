import { SET_WATCHLIST_DATA } from "../actions/watchlist";

const initialState = {
  watchlistData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCHLIST_DATA:
      return {
        watchlistData: action.coinData,
      };
    default:
      return state;
  }
};
