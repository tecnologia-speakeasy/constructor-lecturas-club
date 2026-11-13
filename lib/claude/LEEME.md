# lib/claude

Generación del texto: armado del prompt, llamada a la API y salida estructurada validada con zod.

Claude devuelve JSON contra el esquema, nunca HTML. Si no valida, se reintenta; el diseño no se toca.
