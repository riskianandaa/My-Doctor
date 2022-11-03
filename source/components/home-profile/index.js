import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DummyUser } from '../../assets/images'
import { colors, fonts } from '../../utils'

const HomeProfileComponent = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.8} onPress={onPress} >
      <Image source={DummyUser} style={styles.image} />
      <View style={styles.containerDescUser}>
        <Text style={styles.name} >Shayna Melinda</Text>
        <Text style={styles.profession} >Product Designer</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HomeProfileComponent

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  image: {
    borderRadius: 45,
    height: 90,
    width: 90
  },
  containerDescUser: {
    marginLeft: 10
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.black
  },
  profession: {
    fontSize: 14,
    color: colors.grey
  }
})