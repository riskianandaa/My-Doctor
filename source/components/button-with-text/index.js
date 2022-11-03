import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonTextLink = ({align, containerStyle}) => {
  return(
   <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      alert('How are you?')
    }}
    style={styles.root(containerStyle)}
   >
    <Text style={styles.label(align)}>
      Forgot my password
    </Text>
   </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
  label: (align) => ({
    textDecorationLine: 'underline',
    fontSize: 16,
    color: 'grey',
    textAlign: align
  }),

  root: (containerStyle) => ({
    ...containerStyle,
    marginTop: 12
  })
})

export default ButtonTextLink
