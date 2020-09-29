import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Primera App Juntos!</Text>
      <Button style={styles.btn} title="Comenzamos!" />
      <StatusBar style="auto" />
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
  btn: {
    marginTop: 20,
    width: "95%",
    borderRadius: 10,
  },
  title: {
    textAlign: "auto",
  },
});
