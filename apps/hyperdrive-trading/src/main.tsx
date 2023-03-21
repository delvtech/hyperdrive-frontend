import "@rainbow-me/rainbowkit/styles.css";
import { App } from "base/components/App";
import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import "./globals.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
