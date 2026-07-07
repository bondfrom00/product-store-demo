import path from "path";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
<<<<<<< HEAD
  base: "/product-store-demo",
=======
  base: "/https://github.com/bondfrom00/product-store-demo/",
>>>>>>> adding git workflow
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
