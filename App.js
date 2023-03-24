import React from "react";

import { ThemeProvider } from "styled-components/native";
import ResturantScreen from "./src/component/features/resturant/screen/resturant.screen";
import { theme } from "./src/infrastruture/theme";
import {
  useFonts as farsanFont,
  Farsan_400Regular,
} from "@expo-google-fonts/farsan";
import { useFonts as latoFont, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as ralewayFont,
  Raleway_500Medium,
} from "@expo-google-fonts/raleway";

export default function App() {
  const [farsanLoaded] = farsanFont({
    Farsan_400Regular,
  });

  const [latoLoaded] = latoFont({
    Lato_400Regular,
  });
  const [ralewayLoaded] = ralewayFont({
    Raleway_500Medium,
  });

  if (!farsanLoaded || !latoLoaded || !ralewayLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantScreen />
      </ThemeProvider>
    </>
  );
}
