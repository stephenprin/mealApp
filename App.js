import React from "react";

import { ThemeProvider } from "styled-components/native";
import ResturantScreen from "./src/component/features/resturant/screen/resturant.screen";
import { theme } from "./src/infrastruture/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantScreen />
      </ThemeProvider>
    </>
  );
}
