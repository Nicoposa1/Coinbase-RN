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
  const { id, name, symbol, percentChange, drag, isActive, price } = props;
  return (
    <TouchableHighlight
      underlayColor={isActive ? "white" : "#FAFBFE"}
      onLongPress={drag}
      onPress={() => console.log('press')}
    >
      <View
        style={
          isActive ? [styles.activeListItem, styles.listItem] : styles.listItem
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={{
              uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id.toString()}.png`,
            }}
          />
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.ticketText}>{symbol}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.priceText}>
            ${" "}
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
          <Text
            style={[
              {
                color:
                  percentChange > 0 ? Colors.positiveGreen : Colors.negativeRed,
              },
            ]}
          >
            {percentChange > 0 ? "+" : ""}
            {percentChange.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default WatchlistItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    height: 75,
    padding: 16,
    justifyContent: "space-between",
    width: "100%",
  },
  logo: {
    width: 32,
    height: 32,
    borderColor: Colors.border,
    marginRight: 16, 
    borderRadius: 16,
    borderWidth: 0.3,
  },
  activeListItem: {
    backgroundColor: "white",
    opacity: 0.9,
    shadowColor: "black",
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
  nameText: {
    fontSize: 16,
    width: 145,
  },
  ticketText: {
    color: Colors.secondarySubtitle,
    fontSize: 16,
  },
  priceText: {
    fontSize: 17,
    textAlign: "right",
  },
});
