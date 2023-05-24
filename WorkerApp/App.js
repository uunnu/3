import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WorkerStatus from "./WorkerStatus";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Worker App</Text>
      <WorkerStatus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
