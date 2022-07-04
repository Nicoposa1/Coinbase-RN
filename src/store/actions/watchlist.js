import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import cmpData from "../../data/CoinMarketCapData";

export const SET_WATCHLIST_DATA = "SET_WATCHLIST_DATA";

export const fetchCoinData = () => {
  return async (dispatch) => {
    const coins = ["BTC", "ETH", "BNB", "XRP", "SHIB", "DOGE"];
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
        const coinId = cmpDetails?.id ?? 0;
        const coinName = cmpDetails?.name ?? "N/A";

        // coinData.push(
        //   new coin({
        //     coinId: coinId,
        //     coinName: coinName,
        //     coin: coin,
        //     coinPrice: coinDetails.PRICE,
        //     coinDetail: coinDetails.CHANGEPCT24HOUR,
        //   })
        // );
        coinData.push({
          coinId: coinId,
          coinName: coinName,
          coin: coin,
          coinPrice: coinDetails.PRICE,
          coinDetail: coinDetails.CHANGEPCT24HOUR,
        });
      });
      console.log(
        // "🚀 ~ file: Watchlist.js ~ line 17 ~ return ~ coinData",
        coinData
      );
      // console.log("🚀 ~ file: Watchlist.js ~ line 15 ~ return ~ cryptoResponseData", cryptoResponseData)
    } catch (error) {
      console.log(error);
    }
  };
};
