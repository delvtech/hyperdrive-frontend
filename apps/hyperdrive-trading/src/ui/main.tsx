import "@rainbow-me/rainbowkit/styles.css";
import { createRoot } from "react-dom/client";
import { App } from "src/ui/App";
import "src/ui/globals.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
