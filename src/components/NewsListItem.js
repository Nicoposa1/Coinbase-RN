import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import Colors from "../constants/Colors";

const NewsListItem = ({ name, date, title, image, url }) => {
  const handleNewsPress = async (url) => {
    await WebBrowser.openBrowserAsync(url, {
      readerMore: true,
      controlsColor: Colors.cbBlue,
      dismissButtonStyle: "close",
      toolBar: "white",
    });
  };

  return (
    <TouchableHighlight
      onPress={() => handleNewsPress(url)}
      style={styles.listItem}
      underlayColor={"#FBFAFB"}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            {name} <Text style={styles.bulletPoint}>•</Text> {date}{" "}
          </Text>
          <Text selectable style={styles.title}>
            {title}
          </Text>
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableHighlight>
  );
};

export default NewsListItem;

const styles = StyleSheet.create({
  listItem: {
    justifyContent: "center",
    paddingHorizontal: "4%",
    paddingVertical: "4%",
    borderRadius: 8,
  },
  textContainer: {
    width: "75%",
  },
  header: {
    color: "rgb(91,96,109)",
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    height: 67,
    width: 67,
    borderRadius: 8,
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: "#ccc",
  },
  bulletPoint: {
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 17,
    lineHeight: 25,
  },
});
