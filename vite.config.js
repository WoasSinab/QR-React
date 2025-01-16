import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/QR-React/",
  optimizeDeps: {
    include: ["qrcode.react"],
  },
});

