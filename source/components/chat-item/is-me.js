import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const IsMe = () => {
  return (
    <View style={styles.root}>
      <View style={styles.containerChat}>
        <Text style={styles.textChat}>Ibu dokter, apakah memakan tiap hari itu buruk?</Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  )
}

export default IsMe
 
const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    alignItems: 'flex-end'
  },
  containerChat: {
    backgroundColor: colors.cyan,
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    maxWidth: '75%',
  },
  time: {
    marginTop: 8
  },
  textChat: {
    fontFamily: fonts.primary[500],
    color: colors.black
  }
})