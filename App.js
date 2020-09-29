import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Image } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.title}>Primera App Juntos! Agregado por Hans</Text>
      <Image source={require("./img/descarga.jpg")} style={styles.img} />
      <Button style={styles.btn} title="Comenzamos!!!!" />
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
  img: {
    flexDirection: "row",
    marginLeft: 90,
    marginRight: 90,
    marginTop: 200,
  },
  title: {
    textAlign: "auto",
  },
});
