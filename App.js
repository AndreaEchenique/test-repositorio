import React from "react";
import { YellowBox } from "react-native";

import Navigation from "./app/navigations/Navigation";

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  return <Navigation />;
}
