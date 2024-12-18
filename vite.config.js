import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import copy from "rollup-plugin-copy";


export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  build: {
    lib: {
      entry: [path.resolve(__dirname, "src", "index.js")],
      name: "UCSD",
      formats: ["iife"],
      watch: true,
      fileName: () => "site.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.names === "style.css") return "site.css";
          return assetInfo.names;
        },
      },
      plugins: [
        copy({
          targets: [
            {
              src: path.resolve(__dirname, "public", "resources"),
              dest: path.resolve(__dirname, "dist"),
            },
          ],
          hook: "writeBundle",
        }),
      ],
    },
    outDir: path.resolve(__dirname, "dist"),
  },
});

