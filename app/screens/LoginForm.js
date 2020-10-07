import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button, Avatar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm(props) {
  const { toastRef } = props;

  const [name, setName] = useState();
  const [userRegistro, setRegistro] = useState(null);
  const [realoadRegistro, setRealoadRegistro] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const navigation = useNavigation();
  /*AGREGADO POR HANS*/
  const [name2, setName2] = useState();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const onSubmit = () => {
    navigation.navigate("registro", { test: name2 });
  };

  useEffect(() => {
    setRealoadRegistro(false);
  }, [realoadRegistro]);

  return (
    <View style={styles.formContainer}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.imageAvatar}
        source={require("../img/descarga.jpg")}
      />

      <Input
        placeholder="Nombre "
        ref={name}
        containerStyle={styles.inputForm}
        /*AGREGADO POR HANS*/
        onChangeText={(name2) => setName2(name2)}
        value={name2}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry
        containerStyle={styles.inputForm}
        type="number"
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
    </View>
  );
}
function defaultFormValue() {
  return {
    name: "",
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
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#5A02FF",
  },
  iconRight: {
    color: "#c1c1c1",
  },

  imageAvatar: {
    width: 50,
    height: 50,
  },
});
