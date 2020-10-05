import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import LoginForm from "../screens/LoginForm";
import Registro from "../screens/Registro";
import InfoUser from "../screens/InfoUser";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="prueba"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#5A02FF",
        }}
      >
        <Tab.Screen
          name="loginform"
          component={LoginForm}
          options={{ title: "Login" }}
        />
        <Tab.Screen
          name="registro"
          component={Registro}
          options={{ title: "Registro" }}
        />
        <Tab.Screen
          name="infouser"
          component={InfoUser}
          options={{ title: "Info" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
