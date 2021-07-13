import React from "react";
import { Provider, inject, observer } from "mobx-react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ColorSwitch from "Modulus/ColorSwitcher/colorSwitcher";
import theme from "./theme";
import store from "./entities/setUpStore";
import Path from "./Route/route";
import ReactGA from "react-ga";

function WrapThemeProvider(props) {
  const { color } = props;
  return (
    <ThemeProvider theme={theme(color.selectedTheme)}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

const WrapThemeProviderWrapper = inject("color")(observer(WrapThemeProvider));

function initializeAnalytics() {
  const trackingId = "UA-177748145-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.pageview("/");
}

function App() {
  initializeAnalytics();
  return (
    <Provider {...store}>
      <WrapThemeProviderWrapper>
        <Path />
        <ColorSwitch />
      </WrapThemeProviderWrapper>
    </Provider>
  );
}

export default App;
