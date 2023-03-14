import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.v0}></View>
          <View style={styles.v1}>
            <Text style={styles.v0text}>Tovch nom</Text>
            <Ionicons name="calculator" style={styles.v0icon} />
          </View>
          <View style={styles.v2}>
            <Text style={styles.v0text}>Tovch nom2</Text>
          </View>
          <View style={styles.v3}>
            <Text style={styles.v0text}>Tovch nom3</Text>
          </View>
          <View style={styles.v4}>
            <Text style={styles.v0text}>Tovch nom4</Text>
          </View>
        <View style={styles.v0}></View>
        <Pressable onPress={() =>{
          alert("nom view 0 pressed")
        }}>
        <View style={styles.nom}>
          <Text style={styles.nomb0text0}>sadas sad asdsa asd </Text>
          <Text style={styles.nomb0text1}>ontsloh </Text>
          <Image style={styles.nomb0img0} source={require('./assets/favicon.png')}></Image>
        </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  v0: {
    backgroundColor: "white",
    height: 270,
    borderRadius: 15,
    margin: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    // padding: 30,
  },
  v1:{
    height:100,
    backgroundColor: "yellow",
    width: 150,
    margin:5,
  },
  v2:{
    height:100,
    backgroundColor: "aqua",
    width: 150,
    margin:5,
  },
  v3:{
    height:100,
    backgroundColor: "red",
    width: 150,
    margin:5,
  },
  v4:{
    height:100,
    backgroundColor: "purple",
    width: 150,
    margin:5,
  },
  v0text: {
    fontSize: 40,
    fontWeight: "800",
    color: "white",
    margin: 10,
  },
  v0icon:{
    fontSize:20,
    color: "white",
  },
  nom:{
    backgroundColor:"white",
    height: 500,
    margin: 15,
    borderRadius: 20,
    // padding: 20,

  },
  nomb0text0:{
    color: "grey",
    textTransform: "uppercase",
    margin: 20,

  },
  nomb0text1:{
    color: "black",
    // textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "200",
    marginLeft: 20,
    marginBottom: 20,

  },
  nomb0img0:{
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
});