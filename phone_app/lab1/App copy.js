import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.view1}>

      <Text style={styles.text1}>Өдрийн мэнд</Text>


    </View>

  )
}

const styles = StyleSheet.create({
  view1:{
    flex: 10,
    marginTop:10,
  },
  text1:{ 
    fontSize: 30,
    
  },

}) 