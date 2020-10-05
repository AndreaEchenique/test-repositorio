import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function InfoUser() {
  return (
    <View>
      <Text style={styles.displayName}>{name ? name : "Anonimo"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
    alignContent: "center",
  },
});
