import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import Colors from '../constants/Colors'
import React, { useEffect } from 'react'
import CBButton from '../components/CBButton'
import watchlist from "../store/reducers/watchlist"
import { useSelector, useDispatch } from 'react-redux'
import * as watchlistActions from '../store/actions/watchlist'
import WatchlistItem from '../components/WatchlistItem'

const Home = () => {

  const dispatch = useDispatch()

  const loadData = () => {
    try{
      dispatch(watchlistActions.fetchCoinData())
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: "center"}} >
        <Image style={styles.image} source={{url: "https://i.imgur.com/9EEaSaS.png"}} />
        <Text style={styles.title} >Welcom to Coinbase!</Text>
        <Text style={styles.subtitle} >Make your first investment today</Text>
        <CBButton title={"Get Started"} />
        <WatchlistItem 
          id={1}
          symbol={"BTC"}
          name={"Bitcoin"}
          percentChange={20}
          price={24000}
          drag={() => console.log('drag')}
          isActive={false}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    width: "100%",
    height: 75,
    padding: 16,
    justifyContent: "space-between",
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