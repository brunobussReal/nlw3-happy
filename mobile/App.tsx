import React from "react";

import { useFonts } from "expo-font";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import Routes from "./src/routes/AppStack";
import { StatusBar } from "react-native";

export default function App() {
  const [loadedFonts] = useFonts({
    //return true when fonts are loaded
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });
  if (!loadedFonts) {
    return null;
  }
  return (
    <>
      <Routes />
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='dark-content'
      />
    </>
  );
}
