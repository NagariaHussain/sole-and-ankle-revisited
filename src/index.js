import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";

const BREAKPOINTS = {
  phoneMax: "37.5rem",
  tabletMax: "59.375rem",
  laptopMax: "81.25rem",
};

const QUERIES = {
  phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax})`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax})`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax})`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ queries: QUERIES }}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
