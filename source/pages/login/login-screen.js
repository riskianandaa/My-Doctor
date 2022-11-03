import React from 'react'
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import { IMGLOGO } from '../../assets'
import { AppTextInput, Button } from '../../components'
import ButtonTextLink from '../../components/button-with-text'

const Login = ({navigation}) => {
  return (
    <SafeAreaView 
      style={styles.root}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        style={{
            flex: 1
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
              flexGrow: 1,
          }}
        >
          <IMGLOGO />
          
          <Text numberOfLines={2} style={styles.textLogin}>
            Masuk dan mulai berkonsultasi
          </Text>

          <AppTextInput containerStyle={{marginTop: 20}}/>

          <AppTextInput />

          <ButtonTextLink containerStyle={{ marginTop: 20 }} />

         <View style={styles.containerBottomSticky}>
            <Button 
              title={'Sign In'}
              onPress={() => {navigation.replace('MainApp')}}
              // containerStyle={styles.buttonSignIn}
            />
            <ButtonTextLink align={'center'} containerStyle={styles.buttonText} /> 
         </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  textLogin: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Nunito-SemiBold',
    maxWidth: 180,
    marginTop: 60,
  },
  buttonSignIn: {
    marginTop: 20
  },
  buttonText: {
    marginTop: 20
  },
  containerBottomSticky: {
    flex: 1,
    justifyContent: 'flex-end'
  }

})

export default Login
