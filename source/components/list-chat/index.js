import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconChevronRight, IconEditProfile, IconHelp, IconRating, IconTranslate } from '../../assets/icons'

const ListChat = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if(icon === 'edit-profile'){
      return <IconEditProfile />
    } else if(icon === 'language'){
      return <IconTranslate />
    } else if(icon === 'ratings'){
      return <IconRating />
    } else if(icon === 'help'){
      return <IconHelp />
    }
  }

  return (
    <TouchableOpacity style={styles.root} activeOpacity={0.8} onPress={onPress}>
      {
        icon ? <Icon /> 
        : 
        <Image 
          source={{ uri: profile }}
          style={styles.image}
        />
      }
      <View style={styles.info}>
        <Text>{name}</Text>
        <Text>{desc}</Text>
      </View>
      <View>
        {
          type === 'next' && <IconChevronRight />
        }
      </View>
    </TouchableOpacity>
  )
}

export default ListChat
 
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    justifyContent: 'space-between'
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  info: {
    marginLeft: 8,
    flex: 1
  }
})