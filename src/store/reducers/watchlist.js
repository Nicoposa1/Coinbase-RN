import { SET_WATCHLIST_DATA } from '../actions/watchlist'

const initialState = {
  watchlist: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_WATCHLIST_DATA:
      return {
        ...state, 
        watchlist: action.payload,
      }
    default:
      return state
  }
}
