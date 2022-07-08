import cmpData from "../../data/CoinMarketCapData";

export const SET_TOPMOVERS_DATA = "SET_TOPMOVERS_DATA";

export const fetchTopMoversData = () => {
  return async (dispatch) => {
    try {
      const cbResponse = await fetch("https://api.pro.coinbase.com/products");
      const cbResponseData = await cbResponse.json();

      let availableCoins = [];

      const filteredData = cbResponseData.filter(
        (coin) => coin.quote_currency === "USD"
      );

      filteredData.forEach((coin) => {
        availableCoins.push(coin.base_currency);
      });

      const cryptoResponse = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&relaxedValidation=true&fsyms=${availableCoins.join()}`
      );
      const cryptoResponseData = await cryptoResponse.json();

      let dataAsArray = Object.values(cryptoResponseData.RAW);

      dataAsArray.sort((a, b) =>
        Math.abs(a.USD.CHANGEPCT24HOUR) < Math.abs(b.USD.CHANGEPCT24HOUR)
          ? 1
          : -1
      );

      const coinData = [];

      for (const data of dataAsArray) {
        const cryptoData = data;

        const cmpDetails = cmpData.data.find(
          (cmpCoin) => cryptoData.USD.FROMSYMBOL === cmpCoin.symbol
        );

        const coinID = cmpDetails?.id ?? 0;
        const coinName = cmpDetails?.name ?? "N/A";

        coinData.push({
          id: coinID,
          name: coinName,
          symbol: cryptoData.USD.FROMSYMBOL,
          price: cryptoData.USD.PRICE,
          percentChange: cryptoData.USD.CHANGEPCT24HOUR,
        });

        if (coinData.length === 6) {
          break;
        }
      }

      dispatch({
        type: SET_TOPMOVERS_DATA,
        coinData: coinData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
