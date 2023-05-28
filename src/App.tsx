import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/defaultTheme";
import { RastreioContextProvider } from "./contexts/RastreioContext";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <RastreioContextProvider>
          <Router />
        </RastreioContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
