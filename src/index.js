import React from "react";
import ReactDOM from "react-dom";
import { Provider, inject, observer } from "mobx-react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import client from './common/utility/utils'
import theme from "./theme";
import store from "./entities/setUpStore";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Reducer from "./Store/Reducer/reducer";

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

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...store}>
      <WrapThemeProviderWrapper>
        <App />
      </WrapThemeProviderWrapper>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
