import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatInput, ChatItem, HeaderNavigation } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts } from '../../utils'

const ChatingUser = ({ navigation }) => {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.root}
    >
      <HeaderNavigation onPress={() => navigation.goBack()} type='chat user' />
      <View style={styles.containerChat}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <ChatInput />
    </SafeAreaView>
  )
}

export default ChatingUser

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1
  },
  containerChat: {
    marginTop: 20,
    flex: 1,
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 10 
  }
})