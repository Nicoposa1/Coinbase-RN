import { TOP_MOVERS_DATA } from "../actions/topmovers";

const initialState = {
  topmovers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOP_MOVERS_DATA:
      return {
        ...state,
        topmovers: action.coinData,
      };
  }
  return state;
};
