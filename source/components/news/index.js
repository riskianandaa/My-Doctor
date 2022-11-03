import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const NewsComponent = () => {
  return (
    <View style={styles.root}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
        <Text style={styles.createdAt}>Today</Text>
      </View>
      <Image 
        source={{ uri: 'https://picsum.photos/200'}}
        style={styles.image}
      />
    </View>
  )
}

export default NewsComponent

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 16,
    height: 70,
    width: 80,
  },
  title: {
    color: colors.black,
    fontFamily: fonts.primary[500],
    fontSize: 18
  },
  createdAt: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    marginTop: 5
  },
  containerText: {
    flex: 1
  }
})