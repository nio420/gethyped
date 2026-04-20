import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  extends: {
    colors: {
      "agency-bg": "#F9F6F0",
      "agency-black": "#0D0D0D",
      "agency-pink": "#F8C3FD",
      "agency-blue": "#0D67FF",
      "agency-green": "#00E89B",
    },
  },
});
