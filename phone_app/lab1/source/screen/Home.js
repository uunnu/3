import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';


export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.ug}>
          <Text style={styles.ugtxt}>Өдрийн мэнд</Text>
          <Ionicons name="image" style={styles.v0icon1} />
        </View>

        <View style={styles.v0}>
          <View style={styles.v1}>
            <Text style={styles.v0text}>Товч ном</Text>
            <Ionicons name="ice-cream" style={styles.v0icon} />
          </View>
          <View style={styles.v2}>
            <Text style={styles.v0text}>Цахим ном</Text>
            <Ionicons name="egg" style={styles.v0icon} />
          </View>
          <View style={styles.v3}>
            <Text style={styles.v0text}>Аудио ном</Text>
            <Ionicons name="eye" style={styles.v0icon} />
          </View>
          <View style={styles.v4}>
            <Text style={styles.v0text}>Подкаст</Text>
            <Ionicons name="heart" style={styles.v0icon} />
          </View>


        </View>
        <Pressable onPress={() => {
          navigation.navigate("AV1")
        }}>
          <View style={styles.nom}>
            <Text style={styles.nomb0text0}> БОДИТ АМЬДРАЛААС СЭДЭВЛЭВ </Text>
            <Text style={styles.nomb0text1}> Энэ 7 хоногийн онцлох </Text>
            <Image style={styles.nomb0img0} source={require('../../assets/a.jpg')}></Image>
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
    height: 275,
    borderRadius: 20,
    margin: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    // padding: 30,
  },
  v1: {
    height: 100,
    backgroundColor: "aqua",
    width: 150,
    margin: 7,
    borderRadius: 20,
  },
  v2: {
    height: 100,
    backgroundColor: "red",
    width: 150,
    margin: 7,
    borderRadius: 20,
  },
  v3: {
    height: 100,
    backgroundColor: "yellow",
    width: 150,
    margin: 7,
    borderRadius: 20,
  },
  v4: {
    height: 100,
    backgroundColor: "purple",
    width: 150,
    margin: 7,
    borderRadius: 20,
  },
  v0text: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    margin: 12,
  },
  v0icon: {
    fontSize: 30,
    color: "white",
    marginLeft: 10,
  },
  nom: {
    backgroundColor: "white",
    height: 500,
    margin: 15,
    borderRadius: 20,
    // padding: 20,

  },
  nomb0text0: {
    color: "grey",
    textTransform: "uppercase",
    margin: 20,
  },
  nomb0text1: {
    color: "black",
    // textTransform: "uppercase",
    fontSize: 35,
    fontWeight: "700",
    marginLeft: 20,
    marginBottom: 20,

  },
  nomb0img0: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
  },
  ug: {
    height: 90,
    // backgroundColor: 'white',
    paddingTop: 30,
    paddingLeft: 20,
  },
  ugtxt: {
    fontSize: 30,
    fontWeight: '600',
  },
  v0icon1:{
    fontSize: 30,
    color: "blue",
    marginLeft: 300,
    marginTop: -30,
  }
});