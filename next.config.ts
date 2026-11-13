import type { NextConfig } from "next";

// Archivos que necesita la ruta que arma el PDF (se leen del disco en tiempo de ejecución).
const ARCHIVOS_PDF = [
  "./plantilla/estilos.css",
  "./plantilla/mobiliario.js",
  "./plantilla/fuentes/**/*",
  "./plantilla/assets/**/*",
  "./node_modules/pagedjs/dist/paged.polyfill.min.js",
  "./node_modules/playwright-core/**/*",
  "./node_modules/@sparticuz/chromium/bin/**/*",
];

const nextConfig: NextConfig = {
  serverExternalPackages: ["playwright", "playwright-core", "@sparticuz/chromium", "sharp"],
  outputFileTracingIncludes: {
    "/api/generar": ARCHIVOS_PDF,
  },
  // Límite de 250 MB por función: fuera el canon, la documentación y las herramientas locales.
  outputFileTracingExcludes: {
    "/*": [
      "./canon/**/*",
      "./docs/**/*",
      "./scripts/**/*",
      "./node_modules/playwright/**/*",
      "./node_modules/@img/sharp-wasm32/**/*",
    ],
  },
};

export default nextConfig;
