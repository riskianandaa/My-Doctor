import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AddPhoto } from '../../assets/icons';
import { ImgProfile } from '../../assets/images';
import Button from '../../components/button';
import ButtonTextLink from '../../components/button-with-text';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const UploadPhoto = () => {
  return ( 
    <SafeAreaView style={styles.root} >
      <View style={styles.containerProfile}>
        <Image source={ImgProfile} style={styles.image} />
        <AddPhoto style={styles.icons} />
        <Text style={styles.name} >Shayna Melinda</Text>
        <Text style={styles.skill} >Product Designer</Text>
      </View>
      <Button 
        title={'Upload and Continue'}
      />
      <ButtonTextLink align={'center'} />
    </SafeAreaView>
  );
}

export default UploadPhoto;

const styles = StyleSheet.create({
  containerProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 140,
    width: 140
  },  
  icons: {
    resizeMode: 'contain',
    position: 'absolute',
    right: 26,
    top: Dimensions.get('window').height / 2.6,
    height: 24,
    width: 24
  },  
  name: {
    color: colors.black,
    fontFamily: fonts.primary[400],
    fontSize: 26,
    marginTop: 12
  }, 
  root: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  },
  skill: {
    color: colors.grey,
    fontSize: 18
  }
})