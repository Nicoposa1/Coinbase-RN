import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import cmpData from "../../data/CoinMarketCapData";
import { WatchlistState } from "../reducers/watchlist";

export const SET_WATCHLIST_DATA = "SET_WATCHLIST_DATA";

export const fetchCoinData = () => {
  return async (dispatch) => {
    const coins = ["BTC", "ETH", "SOL", "BNB", "DOT", "AVAX"];

    try {
      const cryptoResponse = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&relaxedValidation=true&fsyms=${coins.join()}`
      );
      const cryptoResponseData = await cryptoResponse.json();

      const coinData = [];

      coins.forEach((coin) => {
        const coinDetails = cryptoResponseData.RAW[coin].USD;
        const cmpDetails = cmpData.data.find(
          (cmp) => coinDetails.FROMSYMBOL === cmp.symbol
        );
        const coinID = cmpDetails.id;
        const coinName = cmpDetails?.name ?? "N/A";
        
        coinData.push({
          id: coinID,
          coinName: coinName,
          coin: coin,
          coinPrice: coinDetails.PRICE,
          coinDetail: coinDetails.CHANGEPCT24HOUR,
        });
      });

      dispatch({
        type: SET_WATCHLIST_DATA,
        coinData: coinData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCoinData = (newData) => {
  return async (dispatch) => {
    dispatch({
      type: SET_WATCHLIST_DATA,
      coinData: newData,
    });
  };
};
