import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

const ListHospitals = ({name, address, pic}) => {
  return (
    <View style={styles.root}>
      <Image
        source={pic}
        style={styles.logoHospitals}
      />
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  )
}

export default ListHospitals

const styles = StyleSheet.create({
  logoHospitals: {
    height: 80,
    width: 80,
    borderRadius: 16
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  description: {
    marginLeft: 12,
    flex: 1
  },
  name: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.primary[400]
  },
  address: {
    fontSize: 16,
    color: colors.grey,
    fontFamily: fonts.primary[400]
  }

})