import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather, SimpleLineIcons } from '@expo/vector-icons'

export default function Home() {
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
                    <Image source={require()} />
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    view0: {
        backgroundColor: '#cd5c5c',
    },
    view1: {
        height: 100,
        width: 415,
        // borderWidth: 1,
        backgroundColor: '#cd5c5c',
    },
    txt1: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 25,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    txt2: {
        marginTop: -29,
        marginLeft: 65,
        fontSize: 25,
        fontWeight: '600',
        textTransform: 'uppercase'
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
        backgroundColor: '#cd5c5c',
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
        borderWidth: 1,
    }
});