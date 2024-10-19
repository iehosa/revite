/** @format */

/*

import { defineConfig } from "vite";

export default defineConfig({
  base: "/vitestt/",
  build: {
    assetsDir: "static",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },

  resolve: {
    alias: [{ find: "@lib", replacement: "./lib" }, { find: "@data", replacement: "./data" }, { find: "@components", replacement: "./components" }, { "@": Path2D.resolve(__dirname, "src") }],
  },
});

*/

export default {
  base: "/vitestt/",
  build: {
    cssMinify: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
};
