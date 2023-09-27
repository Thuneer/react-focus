import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "@navikt/ds-css";
import "@altinn/figma-design-tokens/dist/tokens.css";
import "@digdir/design-system-tokens/brand/digdir/tokens.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/Card/Card.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
