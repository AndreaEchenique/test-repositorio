import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button, Icon } from "react-native-elements";
import Registro from "../screens/Registro";

export default function InfoUser({ route, props }) {
  const { test } = route.params;
  const { ap } = route.params;
  const { dir } = route.params;
  const { correo } = route.params;
  const { tlf } = route.params;

  return (
    <View style={styles.formContainer}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.imageAvatar}
        source={require("../img/descarga.jpg")}
      />
      <Text style={styles.text}>{JSON.stringify(test)}</Text>
      <Text style={styles.text}>{JSON.stringify(ap)}</Text>
      <Text style={styles.text}>{JSON.stringify(dir)}</Text>
      <Text style={styles.text}>{JSON.stringify(correo)}</Text>
      <Text style={styles.text}>{JSON.stringify(tlf)}</Text>
      <Button
        title="Guardar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  imageAvatar: {
    width: 50,
    height: 50,
  },
  text: {
    paddingBottom: 15,
    color: "#17013F",
    fontSize: 18,
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
  },
  btn: {
    backgroundColor: "#5A02FF",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
  },
});
