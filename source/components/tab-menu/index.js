import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { IconDokter, IconObat, IconPsikater } from '../../assets/icons'

const TabMenuComponent = ({ category, onPress}) => {
  const Icon = () => { 
    if (category === 'dokter umum') {
      return <IconDokter style={styles.icon} />
    } else if ( category === 'psikiater') { 
      return <IconPsikater style={styles.icon} />
    } else if (category === 'dokter obat') {
      return <IconObat style={styles.icon} />
    }
  }

  return (
    <TouchableOpacity style={styles.root} onPress={onPress} activeOpacity={0.8}>
      <Icon />
      <View style={styles.containerDesc}>
        <Text style={styles.need} >Saya butuh</Text>
        <Text style={styles.title}>{category}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TabMenuComponent

const styles = StyleSheet.create({
  root: {
    padding: 16,
    backgroundColor: colors.cyan,
    height: 160,
    flex: 1,
    marginTop: 20,
    borderRadius: 16,
    marginEnd: 20
  },
  icon: {
    resizeMode: 'contain',
    height: 30,
    width: 30
  },
  containerDesc: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.primary[600]
  },
  need: {
    fontSize: 14,
    color: colors.grey
  }
})