export const SET_NEWS_DATA = "SET_NEWS_DATA";

export const fetchNewsData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      const responseData = await response.json();

      let newsData = [];
      for (const news of responseData.Data) {
        const formattedDate = new Date(news.published_on * 1000)
          .toString()
          .split(" ")
          .splice(1, 2)
          .join(" ");

        newsData.push({
          name: news.source_info.name,
          date: formattedDate,
          title: news.title,
          image: news.imageurl,
          url: news.url,
        });
        if (newsData.length === 20) {
          break;
        }
      }

      dispatch({
        type: SET_NEWS_DATA,
        newsData:newsData,
      });
    } catch (err) {
      throw err;
    }
  };
};
