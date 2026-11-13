# Constructor de lecturas — Speak Easy

Recibe una ficha (tipo de lectura, género, tamaño, nivel), escribe la lectura con la API de Claude,
ilustra con OpenAI y entrega un PDF maquetado con el diseño de Speak Easy.

Es el hermano generador de `lecturas`, que hace el camino inverso: aquel toma un PDF viejo y lo
rediseña; este parte de una ficha y construye la lectura desde cero. Comparten el contrato de
contenido, la plantilla y el motor de PDF.

## Estado

Proyecto recién creado: está el stack y la estructura, falta el motor.

## Flujo previsto

1. **Ficha.** La página pide tipo de lectura, género, tamaño y nivel.
2. **Ejemplos.** Se eligen 2 o 3 lecturas del canon parecidas al pedido. No se mandan todas:
   lo que fija el estilo es `prompts/style-spec.md`, destilado una vez a partir del canon.
3. **Texto con Claude.** Devuelve JSON contra el esquema, nunca HTML. Si no valida, se reintenta.
4. **Ilustraciones con OpenAI.** Hoja de personajes primero, para que no cambien entre escenas.
5. **Maquetación.** HTML + CSS → Paged.js → Chromium → PDF.
6. **Feedback.** Lo aprobado pasa a `candidato` en el canon; lo rechazado se guarda con el motivo
   y alimenta los antipatrones del style spec. Así mejora sin fine-tuning.

## Puesta en marcha

```bash
npm install
npx playwright install chromium   # solo en local
cp .env.example .env              # y completar
npm run dev                       # http://localhost:3000
```

## Estructura

| Carpeta | Qué hay |
|---|---|
| `app/` | Página de la ficha y `POST /api/generar` |
| `lib/claude/` | Prompt, llamada a la API y validación de la salida |
| `lib/imagenes/` | Ilustraciones con OpenAI y procesado con sharp |
| `lib/maquetacion/` | JSON → HTML → PDF |
| `plantilla/` | CSS, fuentes y assets del diseño |
| `canon/` | Lecturas de referencia en JSON: ejemplos y casos de prueba |
| `prompts/` | Style spec y prompts, versionados aparte del código |
| `docs/` | Contrato de contenido y ficha de diseño |
| `scripts/` | Herramientas de línea de comandos |

## Qué se porta desde `lecturas`

`plantilla/` completa, `lib/maquetacion/`, `lib/imagenes/`, el esquema de `docs/esquema-contenido.md`
y la configuración de Vercel. Lo que **no** se porta: extracción de PDF (`lib/extraccion.ts`),
verificación de fidelidad (`lib/fidelidad.ts`) y las dependencias `pdfjs-dist` y `diff`, que solo
sirven para rediseñar documentos existentes.

## Primer paso sugerido

Importar el canon desde los PDFs reales de `lecturas/referencias/` antes de escribir nada a mano:
ya son diez lecturas aprobadas y salen directamente en el formato del contrato.
"# constructor-lecturas-club" 
