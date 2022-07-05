import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const WatchlistItem = (props) => {
  const { id, name, symbol, percentChange, drag, isActive } = props;
  return (
    <TouchableHighlight>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default WatchlistItem;

const styles = StyleSheet.create({});
