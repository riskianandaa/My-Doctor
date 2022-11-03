import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import Button from '../button'

const ChatInput = () => {
  return (
    <View style={styles.root}>
      <TextInput 
        placeholder='Tulis pesanmu disini'
        style={styles.input}
      />
      <View style={{ width: 10 }} />
      <Button title={'send'} type='btn-icon' containerStyle={styles.btnIcon} disable={false} />
    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    backgroundColor: colors.disable,
    padding: 10,
    borderRadius: 12,
    flex: 1,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.black
  },
  btnIcon: {
  }
})