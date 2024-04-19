import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    // svgrPlugin(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    open: "http://localhost:4000",
    port: 4000,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
});
