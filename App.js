import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text styles={styles.title}>Primera App Juntos! Agregado por Hans</Text>
=======
      <Text styles={styles.title}>Primera App Juntos!</Text>
      <Image source="/descarga.jpg" style={styles.img} />
>>>>>>> 6116eeb3388acf645a5e4f32efa6399ad2b67efc
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
  img: {
    width: 80,
    height: 80,
  },
});
