import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import Colors from '../constants/Colors'
import React from 'react'
import CBButton from '../components/CBButton'

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: "center"}} >
        <Image style={styles.image} source={{url: "https://i.imgur.com/9EEaSaS.png"}} />
        <Text style={styles.title} >Welcom to Coinbase!</Text>
        <Text style={styles.subtitle} >Make your first investment today</Text>
        <CBButton title={"Get Started"} />
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
  title: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 8,
    letterSpacing: .5,
  },
  subtitle: {
    fontSize: 17,
    marginBottom:24,
    color: Colors.secondarySubtitle
  }

})