import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyUser } from '../../assets'
import { colors, fonts } from '../../utils'

const ProfilePicture = () => {
  return (
    <View style={styles.root} >
      <View style={styles.borderProfile}>
        <Image 
          source={DummyUser}
          style={styles.profile}
        />
      </View>
      <Text style={styles.name}>Shayna Melinda</Text>
      <Text style={styles.profession}>Product Designer</Text>
    </View>
  )
}

export default ProfilePicture

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  borderProfile: {
    height: 130,
    width: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey
  },
  profile: {
    height: 110,
    width: 110,
    borderRadius: 105
  },
  name: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 18
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.grey
  }
})