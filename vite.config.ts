import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  css: { transformer: "lightningcss" },
  // Workers runtime modules (cloudflare:workers, cloudflare:email) are provided by Cloudflare at runtime.
  build: { rollupOptions: { external: [/^cloudflare:/] } },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Bundled server entry is src/server.ts (www redirect, /admin, SSR error wrapper).
      server: { entry: "server" },
      importProtection: { behavior: "error", client: { files: ["**/server/**"], specifiers: ["server-only"] } },
    }),
    // Build output targets Cloudflare Workers (.output/, deployed with `npx wrangler deploy`).
    command === "build" && nitro({ preset: "cloudflare-module" }),
    viteReact(),
  ],
}));
