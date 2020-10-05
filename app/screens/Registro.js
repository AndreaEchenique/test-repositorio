import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import InfoUser from "../screens/InfoUser";

export default function Registro({ route, props }) {
  const [userInfo, setUserInfo] = useState(null);
  const [realoadUserInfo, setRealoadUserInfo] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const navigation = useNavigation();
  const { test } = route.params;

  const onSubmit = () => {
    navigation.navigate("infouser");
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  useEffect(() => {
    setRealoadUserInfo(false);
  }, [realoadUserInfo]);

  return (
    <View style={styles.formContainer}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.imageAvatar}
        source={require("../img/descarga.jpg")}
      />

      <Text style={styles.text}> Registro de Usuario</Text>
      <Text style={styles.text}>
        Este es:
        {JSON.stringify(test.name)}
      </Text>
      <Input
        placeholder="Nombre"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "name")}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Apellido"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "ap")}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Dirección"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "direction")}
        rightIcon={
          <Icon
            type="material-community"
            name="domain"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Teléfono"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "phone")}
        rightIcon={
          <Icon
            type="material-community"
            name="phone-outline"
            iconStyle={styles.iconRight}
          />
        }
      />

      <Button
        title="Guardar"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
    </View>
  );
}
function defaultFormValue() {
  return {
    name: "",
    ap: "",
    direction: "",
    email: "",
    phone: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
  },
  btnRegister: {
    backgroundColor: "#5A02FF",
  },
  iconRight: {
    color: "#c1c1c1",
  },
  imageAvatar: {
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: "bold",
    paddingBottom: 5,
    color: "#17013F",
  },
});
