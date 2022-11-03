import React, { useEffect } from 'react'
import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImgBg, IMGLOGO } from '../../assets/images'
import Button from '../../components/button'
import { fonts } from '../../utils'

const GetStarted = ({navigation}) => {
  // useEffect(function onFocus() {
  //   StatusBar.setTranslucent(true)
  //   StatusBar.setBarStyle('light-content')
  // }, [])
  
  return(
    <View 
      // edges={['left', 'right']}
      style={styles.root}
    >
      <StatusBar hidden translucent={true} barStyle='light-content' />
      <ImageBackground 
        source={ImgBg}
        style={styles.backgroundImage}
      >
        <View style={styles.padding}>
          <View>
            <IMGLOGO />
            <Text style={styles.desc}>
              Konsultasi dengan dokter jadi lebih mudah & fleksibel
            </Text>
          </View>
          <View style={styles.containerButton}>
            <Button 
              title={'Get Started'}
              onPress={() => {
                navigation.navigate('Register')
              }}
            />
            <View style={{height: 10}} />
            <Button 
              type={'secondary'}
              containerStyle={styles.marginTop}
              title={'Sign In'}
              onPress={() => {
                navigation.navigate('Login')
              }}
            /> 
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  backgroundImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  desc: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 120,
    fontFamily: fonts.primary[600]
  },

  padding: {
    flex: 1,
    padding: 20
  },

  marginTop: {
    marginTop: 12
  },

  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
  }

})

export default GetStarted
