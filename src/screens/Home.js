import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import CBButton from "../components/CBButton";

import { useSelector, useDispatch } from "react-redux";
import * as watchlistActions from "../store/actions/watchlist";
import * as topmoversActions from "../store/actions/topmovers";
import * as newsActions from '../store/actions/news';

import TopMoversList from "../components/TopMoversList";
import Watchlist from "../components/Watchlist";
import NewsList from "../components/NewsList"

const Home = () => {
  const watchlistData = useSelector((state) => state.watchlist.watchlistData);
  const topMoversData = useSelector((state) => state.topmovers.topMoversData);
  const newsData = useSelector((state) => state.news.newsData)

  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(watchlistActions.fetchCoinData());
      dispatch(topmoversActions.fetchTopMoversData());
      dispatch(newsActions.fetchNewsData())
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{ uri: "https://i.imgur.com/9EEaSaS.png" }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subTitle}>Make your first investment today</Text>
        <CBButton title="Get Started" />
        <Watchlist coinData={watchlistData} />
        <TopMoversList coinData={topMoversData} />
        <NewsList coinData={newsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 17,
    marginBottom: 24,
    color: Colors.subtitle,
  },
});

export default Home;
