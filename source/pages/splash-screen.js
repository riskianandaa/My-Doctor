import React, { useEffect } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { IMGLOGO } from '../assets'

const SplashScreen = ({navigation}) => {
  useEffect(function onMount() {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 3000)
  }, [])
  return(
    <View style={styles.root}>
      <StatusBar backgroundColor={'white'} barStyle='dark-content' />

      <IMGLOGO />

      <Text style={styles.title}>
        My Doctor
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '800',
  }

})

export default SplashScreen
