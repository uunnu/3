import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view1}>
                <Text style={styles.txt1}>For User</Text>
                <View>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
    },
    view1: {

    },
    txt1: {

    }
});