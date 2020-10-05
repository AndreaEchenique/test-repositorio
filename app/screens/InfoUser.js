import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Registro from "../screens/Registro";

export default function InfoUser(props) {
  const {
    userInfo: { name, ap, direction, email, phone },
    toastRef,
  } = props;

  return (
    <View style={styles.viewUserInfo}>
      <Text style={styles.displayName}>{name ? name : "Nombre"}</Text>
      <Text>{ap ? ap : "Apellido"}</Text>
      <Text>{direction ? direction : "Apellido"}</Text>
      <Text>{email ? email : "Correo"}</Text>
      <Text>{phone ? phone : "Teléfono"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
