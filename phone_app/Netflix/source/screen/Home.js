import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather, SimpleLineIcons, Entypo } from '@expo/vector-icons'

export default function Home({ navigation }) {
    return (
        <View style={styles.view0}>
            <View style={styles.view1}>
                <View>
                    <Text style={styles.txt1}>FOR</Text>
                </View>
                <View>
                    <Text style={styles.txt2}>uunu</Text>
                </View>
                <View style={styles.icn1}>
                    <MaterialCommunityIcons style={{ fontSize: 30, color: 'white' }} name='broadcast' />
                    <Feather style={{ fontSize: 30, color: 'white' }} name='search' />
                    {/* <MaterialCommunityIcons style={{ fontSize: 30, }} name='face-man-profile' /> */}
                    <Image style={styles.img1} source={require('../../assets/jennie.jpg')} />
                </View>
            </View>
            <ScrollView>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <Text style={styles.txt3}>TV Shows</Text>
                    </View>
                    <View style={styles.view4}>
                        <Text style={styles.txt4}>Movies</Text>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt5}>Categories</Text>
                        <View style={styles.view6}>
                            <SimpleLineIcons style={{ fontSize: 15, color: 'white' }} name='arrow-down' />
                        </View>
                    </View>
                </View>
                <View style={styles.view7}>
                    <View>
                        <Pressable onPress={() => navigation.navigate('Detail')}>
                            <Image style={styles.img2} source={require('../../assets/2.jpg')} />
                        </Pressable>
                        <View style={styles.view13}>
                            <Text style={styles.txt8}> Quirly </Text>
                            <Entypo style={{ fontSize: 20, color: 'pink' }} name='dot-single' />
                            <Text style={styles.txt8}> Feel-Good </Text>
                            <Entypo style={{ fontSize: 20, color: 'pink' }} name='dot-single' />
                            <Text style={styles.txt8}> Youth </Text>
                            <Entypo style={{ fontSize: 20, color: 'pink' }} name='dot-single' />
                            <Text style={styles.txt8}> Gal Pals </Text>
                            <Entypo style={{ fontSize: 20, color: 'pink' }} name='dot-single' />
                            <Text style={styles.txt8}> US </Text>
                        </View>
                        <View style={styles.view8}>
                            <View style={styles.view9}>
                                <View style={styles.view11}>
                                    <Entypo style={{ fontSize: 35 }} name='controller-play' />
                                    <Text style={styles.txt6}>Play</Text>
                                </View>
                            </View>
                            <View style={styles.view10}>
                                <View style={styles.view12}>
                                    <Feather style={{ fontSize: 30, color: 'white' }} name='plus' />
                                    <Text style={styles.txt7}>My List</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.view14}>
                    <Text style={styles.txt9}> Popular on Netflix </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>
                <View>
                    <Text style={styles.txt10}> Trending Now </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Made in Korea </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Only on Netflix </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view16}>
                        <Image style={styles.img4} source={require('../../assets/1.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/3.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/4.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/6.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/7.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/8.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/9.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/10.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/11.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/12.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/13.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/14.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/15.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/16.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/17.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/18.jpg')} />
                        <Image style={styles.img4} source={require('../../assets/19.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Women Who Rule The Screen </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>

                <View>
                    <Text style={styles.txt10}> Released in the Past Year </Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.view15}>
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                        <Image style={styles.img3} source={require('../../assets/jennie.jpg')} />
                    </View>
                </ScrollView>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    view16: {
        height: 350,
        // borderColor: 'white',
        // borderWidth: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },
    img4: {
        height: 350,
        width: 150,
        borderRadius: 5,
        marginRight: 10,
    },
    txt10: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 5,
        marginTop: 35,
    },
    view0: {
        backgroundColor: 'black',
    },
    view1: {
        height: 100,
        width: 415,
        // borderWidth: 1,
        backgroundColor: 'black',
    },
    txt1: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: '600',
        textTransform: 'capitalize',
        color: 'white',
    },
    txt2: {
        marginTop: -29,
        marginLeft: 65,
        fontSize: 25,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: 'white',
    },
    icn1: {
        marginTop: -32,
        marginLeft: 260,
        height: 30,
        width: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    img1: {
        width: 30,
        height: 30,
    },
    view2: {
        width: 350,
        height: 50,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    view3: {
        borderWidth: 0.5,
        padding: 7,
        paddingRight: 17,
        paddingLeft: 17,
        borderRadius: 20,
        borderColor: 'white',
    },
    view4: {
        borderWidth: 0.5,
        padding: 7,
        borderRadius: 20,
        paddingRight: 17,
        paddingLeft: 17,
        borderColor: 'white',
    },
    view5: {
        borderWidth: 0.5,
        padding: 8,
        paddingBottom: 7,
        // paddingTop: 5,
        borderRadius: 20,
        paddingRight: 17,
        paddingLeft: 17,
        borderColor: 'white',
    },
    txt3: {
        fontWeight: 'bold',
        color: 'white',
    },
    txt4: {
        fontWeight: 'bold',
        color: 'white',
    },
    txt5: {
        fontWeight: 'bold',
        color: 'white',
    },
    view6: {
        fontWeight: '100',
        marginLeft: 82,
        marginTop: -17,

    },
    view7: {
        height: 560,
        width: 415,
        //borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img2: {
        height: 520,
        width: 350,
        borderRadius: 15,
    },
    view8: {
        position: 'absolute',
        height: 80,
        width: 350,
        // borderWidth: 1,
        borderColor: 'white',
        marginTop: 440,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    view9: {
        width: 150,
        height: 47,
        // borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view10: {
        width: 150,
        height: 47,
        // borderWidth: 1,
        backgroundColor: 'grey',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view11: {
        height: 47,
        // borderWidth: 1,
        width: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    view12: {
        height: 47,
        // borderWidth: 1,
        width: 95,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    txt6: {
        fontWeight: 'bold',
        fontSize: '16',
    },
    txt7: {
        fontWeight: 'bold',
        fontSize: '16',
        color: 'white',
    },
    view13: {
        position: 'absolute',
        height: 40,
        width: 300,
        // borderWidth: 1,
        borderColor: 'white',
        marginTop: 400,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 26,
    },
    txt8: {
        color: 'white',
        fontWeight: '500',
    },
    view14: {
        marginTop: 10,
    },
    txt9: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 5,
    },
    view15: {
        height: 150,
        // borderColor: 'white',
        // borderWidth: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,

    },
    img3: {
        height: 200,
        width: 100,
        borderRadius: 5,
        marginRight: 10,
    },
});