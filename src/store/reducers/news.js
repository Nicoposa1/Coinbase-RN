import {SET_NEWS_DATA} from '../actions/news'

const initialState = {
  newsData: [],
}

export default(state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS_DATA:
      return {
        ...state,
        newsData: action.newsData,
      }
    default:
      return state
  }
}
