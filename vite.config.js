import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the built site work on any host / sub-folder (Netlify, Vercel, GitHub Pages, etc.)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
