import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screen/Home'
import A1screen from "./source/screen/v1"
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name = "Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name = "AV1" component={A1screen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}