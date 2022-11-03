import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DoctorActive, DoctorInActive, HospitalsActive, HospitalsInActive, MesssageActive, MesssageInActive } from '../../assets/icons'
import { colors, fonts } from '../../utils'

const TabItems = ({ title, active, onPress, onLongPress }) => {
  const Icons = () => {
    if (title === 'Doctor') {
      return active ? <DoctorActive /> : <DoctorInActive />
    }
    if (title === 'Messages') {
      return active ? <MesssageActive /> : <MesssageInActive /> 
    }
    if (title === 'Hospitals') {
      return active ? <HospitalsActive /> : <HospitalsInActive />
    }
    return <DoctorActive />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} activeOpacity={0.8} >
      <Icons />
      <Text style={styles.titleStyle(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItems

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  titleStyle: (active) => ({
    fontFamily : fonts.primary[600],
    color: active ? colors.text.active : colors.text.inactive,
    fontSize: 10,
    marginTop: 4
  })
})