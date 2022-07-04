import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import Colors from '../constants/Colors'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{url: "https://i.imgur.com/9EEaSaS.png"}} />
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

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

})