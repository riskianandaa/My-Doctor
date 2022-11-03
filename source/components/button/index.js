import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BtnIcon from './button-icon'

const Button = ({title, type, containerStyle, onPress, disable}) => {
  if(type === 'btn-icon') {
    return <BtnIcon disable={disable} />
  }
  return(
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.root(type, containerStyle)}
    >
      <Text style={styles.title(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  root: (type, containerStyle) => ({
    ...containerStyle,
    borderRadius: 16,
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    padding: 12,
  }),
  
  title: type => ({
    color: type === 'secondary' ? 'black' : 'white',
    fontSize: 18,
    textAlign: 'center'
  })
})

export default Button
