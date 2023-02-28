import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/App";

import "@rainbow-me/rainbowkit/styles.css";
import "./ui/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
