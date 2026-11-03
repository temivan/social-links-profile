import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/social-links-profile/",
  plugins: [react(), tailwindcss()],
});
