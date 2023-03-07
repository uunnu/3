import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Pressable onPress={() => alert('onPress')} onLongPress={() => alert('onLongPress')}>
                    <Text>My First App!</Text>
                </Pressable>
                <Pressable onPress={() => alert('onPressImage')} onLongPress={() => alert('onLongPressImage')}>
                    <Image style={{ height: 200, width: 200 }} source={require("./assets/favicon.png")}></Image>
                </Pressable>
                <View>
                    <Pressable> <View></View></Pressable>
                    <Pressable> <View></View></Pressable>
                    <Pressable> <View></View></Pressable>
                    <Pressable> <View></View></Pressable>
                    
                </View>
                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
});



