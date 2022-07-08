import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import TopMoversListItem from "./TopMoversListItem";

const TopMoversList = ({ coinData }) => {
  return (
    <View style={styles.list} >
      <Text style={styles.topMoversText}>Top Movers</Text>
      <FlatList
        data={coinData}
        renderItem={({item}) => {
          return (
            <TopMoversListItem
              id={item.id}
              symbol={item.symbol}
              price={item.price}
              percentChange={item.percentChange}
              name={item.name}
            />
          )
        }}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToOffsets={[...Array(coinData.length)].map((x, i) => 158 * i + 162)}
        contentContainerStyle={styles.topMoversContainer}
        decelerationRate={0}
        snapToAlignment="center"
      />
    </View>
  );
};

export default TopMoversList;

const styles = StyleSheet.create({
  topMoversText: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 32,
    marginLeft: "6%",
  },
  topMoversContainer:{
    height: 160,
    paddingLeft: '6%',
  },
  list: {
    width: "100%",
    alignSelf: 'flex-start',
  }
});
