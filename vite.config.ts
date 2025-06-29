import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// Define path aliases
const pathAliases = {
  "@": resolve(__dirname, "./src/"),
  "@components": resolve(__dirname, "./src/components"),
  "@utils": resolve(__dirname, "./src/utils"),
  "@assets": resolve(__dirname, "./src/assets"),
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/fakun/",
  plugins: [vue()],
  resolve: {
    alias: pathAliases,
  },
});
