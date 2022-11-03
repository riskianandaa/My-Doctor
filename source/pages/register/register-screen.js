import React from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTextInput, Button } from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined }
        style={styles.flex}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.flex}
          contentContainerStyle={{
            flexGrow: 1
          }}
        >
          <AppTextInput />
          <AppTextInput />
          <AppTextInput />
          <AppTextInput />

         <View style={styles.button}>
          <Button 
            title={'Continue'}
            onPress={() => {
              navigation.navigate('UploadPhoto')
            }}
          />
         </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  flex: {
    flex: 1,
  },

  root: {
    backgroundColor: 'white',    
    flex: 1,
    padding: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})

export default Register
