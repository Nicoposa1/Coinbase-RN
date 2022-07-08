import { SET_TOPMOVERS_DATA } from "../actions/topmovers";

const initialState = {
  watchlistData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOPMOVERS_DATA:
      return {
        topMoversData: action.coinData,
      };
    default:
      return state;
  }
};
