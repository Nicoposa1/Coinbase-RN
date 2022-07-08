import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Animated,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const TopMoversListItem = ({ id, symbol, price, percentChange }) => {
  const animatedValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };
  return (
    <TouchableHighlight
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      underlayColor={"#FAFBFE"}
      style={{ width: 143, marginRight: 17 }}
    >
      <Animated.View style={[styles.listItem, animatedStyle]}>
        <Image
          style={styles.logo}
          source={{
            uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.ticketText}>{symbol}</Text>
          <Text style={styles.priceText}>
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View>
          <Text
            style={[
              {
                color:
                  percentChange > 0 ? Colors.positiveGreen : Colors.negativeRed,
              },
              styles.changeText,
            ]}
          >
            {percentChange > 0 ? "+" : ""}
            {percentChange.toFixed(2)}%
          </Text>
        </View>
      </Animated.View>
    </TouchableHighlight>
  );
};

export default TopMoversListItem;

const styles = StyleSheet.create({
  listItem: {
    width: 143,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.border,
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
  },
  ticketText: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 5,
  },
  priceText: {
    fontSize: 15,
    color: Colors.secondarySubtitle,
  },
  changeText: {
    fontSize: 26,
    marginTop: 2,
  },
});
