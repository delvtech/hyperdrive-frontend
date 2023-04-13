import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // Update the entry point to match the new location of the main.tsx file
    rollupOptions: {
      input: "/src/ui/main.tsx",
    },
  },
});
