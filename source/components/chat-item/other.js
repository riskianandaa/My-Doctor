import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { DummyUser } from '../../assets'

const OtherChat = () => {
  return (
    <View style={styles.root}>
      <Image 
        source={DummyUser}
        style={styles.profile}
      />
      <View>
        <View style={styles.containerChat}>
          <Text style={styles.textChat}>Ibu dokter, apakah memakan tiap hari itu buruk?</Text>
        </View>
        <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  )
}

export default OtherChat

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  containerChat: {
    backgroundColor: colors.cyanDark,
    padding: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    maxWidth: '85%',
  },
  time: {
    marginTop: 8
  },
  textChat: {
    fontFamily: fonts.primary[500],
    color: colors.white
  },
  profile: {
    height: 30, 
    width: 30,
    borderRadius: 15,
    marginRight: 12
  }
})