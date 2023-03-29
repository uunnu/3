import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function App({ navigation }) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Pressable onPress={() => { navigation.navigate("Home") }}>
        <View>
          <Text>NewPage</Text>
        </View>
      </Pressable>
    </View>)
}