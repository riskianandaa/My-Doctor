import React, { useState } from 'react'
import { Text, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ListChat from '../../components/list-chat';
import { colors, fonts } from '../../utils';

const Messages = () => {
  const [doctors] = useState([
    {
      id: 0,
      profile: 'https://picsum.photos/200',
      name: 'Alexander Jennie',
      desc: 'Baik bu terimakasih banyak atas waktu'
    },
    {
      id: 1,
      profile: 'https://picsum.photos/200',
      name: 'Alexander Jennie',
      desc: 'Baik bu terimakasih banyak atas waktu'
    },
    {
      id: 2,
      profile: 'https://picsum.photos/200',
      name: 'Alexander Jennie',
      desc: 'Baik bu terimakasih banyak atas waktu'
    },
  ])
  return ( 
    <SafeAreaView 
      edges={['bottom','left','right']}
      style={styles.root}
    >
     <Text style={styles.heading}>Messages</Text>
     <View>
      {
        doctors.map(doctor => {
          return(
            <ListChat 
              key={doctor.id}
              name={doctor.name}
              profile={doctor.profile}
              desc={doctor.desc}
            />
          )
        })
      }
     </View>
    </SafeAreaView>
  );
}

export default Messages;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20
  },
  heading: {
    fontFamily: fonts.primary[600],
    color: colors.black,
    fontSize: 24
  },
})
