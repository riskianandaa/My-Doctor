import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { DummyUser } from '../../assets/images';
import ListHospitals from '../../components/list-hospitals';
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';

const screen = Dimensions.get('window')

const Hospitals = () => {
  return ( 
    <SafeAreaView
      edges={['bottom','left','right']}
      style={styles.root}
    >
      <ImageBackground
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.imgBg}
      >
        <View style={styles.descText}> 
          <Text style={styles.nameHospitals}>
            Nearby Hospitals
          </Text>
          <Text style={styles.available}>
            3 Tersedia
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals pic={{ uri: 'https://picsum.photos/200'}} name='Rumah Sakit Citra Bunga Merdeka' address={'Jln. Surya Sejahtera 20'} />
        <ListHospitals pic={{ uri: 'https://picsum.photos/200'}} name='Rumah Sakit Citra Bunga Merdeka' address={'Jln. Surya Sejahtera 20'} />
        <ListHospitals pic={{ uri: 'https://picsum.photos/200'}} name='Rumah Sakit Citra Bunga Merdeka' address={'Jln. Surya Sejahtera 20'} />
      </View>
    </SafeAreaView>
  );
}

export default Hospitals;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  imgBg: {
    height: screen.height / 2.3,
    resizeMode: 'contain'
  },
  descText: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20
  },
  nameHospitals: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 20
  },
  available: {
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  }
})