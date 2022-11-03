import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { GetStarted, Login, Register, SplashScreen, UploadPhoto, Doctor, Messages, Hospitals, ChooseDoctorScreen, ChatingUser, Profile } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator
      initialRouteName='Doctor'
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomNavigator {...props} />}
    >
      <Tab.Screen 
        name='Doctor'
        component={Doctor}
      />
      <Tab.Screen 
        name='Messages'
        component={Messages}
      />
      <Tab.Screen 
        name='Hospitals'
        component={Hospitals}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  return(
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='SplashScreen'
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      
      <Stack.Screen
        name='GetStarted'
        component={GetStarted}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Register'
        component={Register}
        options={{
        // ...TransitionPresets.SlideFromRightIOS,
          title: 'Daftar Akun'
        }}
      />

      <Stack.Screen 
        name='UploadPhoto'
        component={UploadPhoto}
        options={{
        // ...TransitionPresets.SlideFromRightIOS,
          title: 'Upload Photo'
        }}
      />

      <Stack.Screen 
        name='MainApp'
        component={MainApp}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='ChooseDoctorScreen'
        component={ChooseDoctorScreen}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='ChatingUser'
        component={ChatingUser}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name='Profile'
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center'
        }}
      />

    </Stack.Navigator>
  )
}

export default Router
