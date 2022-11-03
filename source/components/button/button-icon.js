import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { IconSend, IconSendDisable } from '../../assets/icons'

const BtnIcon = ({ disable }) => {
  return (
    <View style={styles.root(disable)}>
      {disable && <IconSendDisable />}
      {!disable && <IconSend />}
    </View>
  )
}

export default BtnIcon

const styles = StyleSheet.create({
  root: disable => ({
    backgroundColor: disable ? colors.disable : colors.blue,
    padding: 14,
    borderRadius: 12
  })
})