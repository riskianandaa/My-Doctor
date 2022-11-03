import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeProfileComponent, NewsComponent, TabMenuComponent, TopRatingsDoctors } from '../../components';
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';
import { DoctorCategoryJson } from '../../assets/json/dummy';

const Doctor = ({navigation}) => {
  return (
    <ScrollView 
      style={{ flex: 1, backgroundColor: colors.secondary }} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1}}
    >
      <View style={styles.content}>
        <HomeProfileComponent onPress={() => navigation.navigate('Profile')} />

        <Text style={styles.heading} >Mau konsultasi dengan siapa hari ini?</Text>

        {/* menu component */}
       <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerMenu}
          >
            {
              DoctorCategoryJson.data.map((item, index) => {
                return <TabMenuComponent key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctorScreen')} />
              })
            }
          </ScrollView>
       </View>

        {/* ratings */}
        <View style={styles.containerRatings}>
          <Text style={styles.heading} >Top Rated Doctors</Text>
          <TopRatingsDoctors />
          <TopRatingsDoctors />
          <TopRatingsDoctors />
        </View>

        <View style={styles.containerNews}>
          <Text style={styles.heading} >Good News</Text>
          <NewsComponent />
          <NewsComponent />
          <NewsComponent />
        </View>
      </View>
    </ScrollView>

  );
}

export default Doctor;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  root: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    color: colors.black,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    paddingHorizontal: 20
  },
  containerMenu: {
    paddingHorizontal: 20,
  },
  containerRatings: {
    marginTop: 20,
  },
  containerNews: {
  }
})