import React from 'react'
import { } from 'react-native'
import GetStarted from './pages/get-started/get-started'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App