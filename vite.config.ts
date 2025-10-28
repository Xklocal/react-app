import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Node 内置模块，用于处理路径
import UnoCSS from "unocss/vite"; // 引入 UnoCSS 插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    UnoCSS(),
  ],
  resolve: {
    // 配置路径别名 用于@引用
    alias: {
      "@": path.resolve(__dirname, "./src"), // 让 @ 指向 src 目录
    },
  },
});
