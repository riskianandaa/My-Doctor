import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconChevronLeft } from '../../assets/icons'
import { colors, fonts } from '../../utils'
import { DummyUser } from '../../assets'

const HeaderNavigation = ({ onPress, type }) => {
  return (
    <View style={styles.root} >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
      >
        <IconChevronLeft />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>
          Title
        </Text>
        {
          type === 'chat user' &&
          <Text style={styles.name}>
            Dokter anak
          </Text>
        }
      </View>
      <Image
        source={DummyUser}
        style={styles.profile}
      />
    </View>
  )
}

export default HeaderNavigation

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    margin: -20,
    padding: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.white,
    fontSize: 22
  },
  name: {
    fontSize: 16,
    color: colors.grey
  },
  profile: {
    resizeMode: 'contain',
    borderRadius: 30,
    height: 60,
    width: 60
  }
})