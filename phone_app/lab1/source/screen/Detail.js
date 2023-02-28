import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
        <Pressable>
            <Text>Detail</Text>
        </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})