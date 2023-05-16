import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

export default function Home() {
    return (
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
                <Image style={styles.img1} source={require('../../assets/icon.png')} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    view1: {
        height: 100,
        width: 415,
        borderWidth: 1,
        backgroundColor: 'brown',
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
        textTransform: 'uppercase',
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
    }
});