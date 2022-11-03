import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconStar } from '../../assets/icons'
import { colors, fonts } from '../../utils'

const TopRatingsDoctors = () => {
  return (
    <View style={styles.root}>
      <Image 
        source={{ uri: 'https://picsum.photos/200'}}
        style={styles.image}
      />
      <View style={styles.itemText}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.profesi}>Pediatrician</Text>
      </View>
      <View style={styles.itemStar}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  )
}

export default TopRatingsDoctors

const styles = StyleSheet.create({
  root: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  image: {
    resizeMode: 'contain',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  itemText: {
    flex: 1,
    marginLeft: 16
  },
  itemStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.black
  },
  profesi: {
    fontSize: 14,
    color: colors.grey,
    fontFamily: fonts.primary[400],
  }
})