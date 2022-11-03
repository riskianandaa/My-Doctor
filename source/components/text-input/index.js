import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const AppTextInput = ({containerStyle}) => {
  return(
    <View style={styles.containertextInput(containerStyle)}>
      <Text style={styles.label}>Username</Text>
      <TextInput 
        style={styles.root}
        placeholder='Masukkan username anda'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    padding: 10,
    marginTop: 8
  },

  containertextInput: (containerStyle) => ({
    ...containerStyle,
    marginBottom: 20
  }),

  label: {
    fontSize: 18,
    color: '#7D8797'
  }
})

export default AppTextInput
