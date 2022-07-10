import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import NewsListItem from "./NewsListItem";
import Colors from "../constants/Colors";

const newsList = ({ newsData, isHomeScreen, viewMoreHandler }) => {
  return (
    <View style={{ width: "100%", alignSelf: "flex-start" }}>
      {isHomeScreen && (
        <View style={styles.listHeader}>
          <Text style={styles.newText}>News</Text>
          <TouchableOpacity onPress={viewMoreHandler}>
            <Text style={styles.viewMoreButton}>View More</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={isHomeScreen ? newsData.slice(0, 5) : newsData}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 8 }}
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

export default newsList;

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 10,
    marginHorizontal: "6%",
  },
  newText: {
    fontSize: 20,
    fontWeight: "600",
  },
  viewMoreButton: {
    color: Colors.cbBlue,
    fontSize: 18,
    fontWeight: "600",
  },
});
