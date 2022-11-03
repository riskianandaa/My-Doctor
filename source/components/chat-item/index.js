import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IsMe from './is-me'
import OtherChat from './other'

const ChatItem = ({isMe}) => {
  if (isMe){
    return <IsMe />
  }
  return <OtherChat />
}

export default ChatItem
