import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { HeaderNavigation, ListChat } from '../../components'
import { IconDokter } from '../../assets/icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChooseDoctorScreen = ({navigation}) => {
  const [data] = useState([
    {
      id: 1,
      profile: 'https://picsum.photos/200',
      name: 'Alexander Janie',
      desc: 'Wanita'
    }
  ])
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.root}
    >
      <HeaderNavigation onPress={() => navigation.goBack()} />
      <View style={styles.containerChat}>
        {
          data.map(item => (
            <ListChat 
              key={item.id}
              profile={item.profile}
              name={item.name} 
              desc={item.desc}
              type='next'
              onPress={() => navigation.navigate('ChatingUser')}
            />
          ))
        }
      </View>
    </SafeAreaView>
  )
}

// async function fetchNotificationList() {
//   const container = []

//   for (let i = 0; i < 10; i++) {
//       const item = {
//           date: 'Senin, 14 April 2022',
//           headline: 'Reminder Pengumpulan Timesheet Bulan Februari',
//           isRead: i % 2 == 0,
//           type: i % 2 == 0 ? 'approval' : 'broadcast'
//       }

//       container.push(item)
//   }

//   setData(container)
//   setTimeout(() => {
//       setIsLoading(false)
//   }, 500)
// }

export default ChooseDoctorScreen

const styles = StyleSheet.create({
  root: {
    padding: 20
  },
  containerChat: {
    marginTop: 20
  }
}) 