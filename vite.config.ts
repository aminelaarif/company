import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "node:path"; // Ensure correct import

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0", // More compatible for local development
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []), // Ensures it's only used in dev
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Simplified path
    },
  },
  build: {
    outDir: "dist", // Ensure output goes to dist/
    sourcemap: mode === "development", // Source maps in dev
  },
}));
