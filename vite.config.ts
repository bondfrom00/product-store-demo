<<<<<<< HEAD
import path from "path";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
=======
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
>>>>>>> first commit

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  base: "/product-store-demo",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
=======
    babel({ presets: [reactCompilerPreset()] })
  ],
})
>>>>>>> first commit
