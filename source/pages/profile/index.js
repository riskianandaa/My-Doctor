import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../utils'
import { ListChat, ProfilePicture } from '../../components'

const Profile = () => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.root}
    >
      <View>
        <ProfilePicture />
      </View>
      <ListChat name={'Edit Profile'} desc={'Last updated yesterday'} type='next' icon={'edit-profile'} />
      <ListChat name={'Edit Profile'} desc={'Last updated yesterday'} type='next' icon={'language'} />
      <ListChat name={'Edit Profile'} desc={'Last updated yesterday'} type='next' icon={'ratings'} />
      <ListChat name={'Edit Profile'} desc={'Last updated yesterday'} type='next' icon={'help'} />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  }
})