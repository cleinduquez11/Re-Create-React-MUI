import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./Components/theme.jsx";
import { ThemeProvider } from "@emotion/react";
import Layout from "./Components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  </React.StrictMode>
);
