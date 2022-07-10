import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsListItem from "../components/NewsListItem";

const News = () => {
  const newsData = useSelector((state) => state.news.newsData);

  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(newsActions.fetchNewsData());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsListItem
            name={item.name}
            date={item.date}
            title={item.title}
            image={item.image}
            url={item.url}
            />
        )}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
