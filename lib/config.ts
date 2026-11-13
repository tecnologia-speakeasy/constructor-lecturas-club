// Lectura centralizada de variables de entorno. Sin lógica de negocio.

function requerida(nombre: string): string {
  const valor = process.env[nombre];
  if (!valor) throw new Error(`Falta la variable de entorno ${nombre} (ver .env.example)`);
  return valor;
}

function opcional(nombre: string, porDefecto: string): string {
  return process.env[nombre]?.trim() || porDefecto;
}

export const config = {
  claude: {
    get apiKey() {
      return requerida("ANTHROPIC_API_KEY");
    },
    get modelo() {
      return opcional("CLAUDE_MODELO", "claude-opus-5-5");
    },
    get esfuerzo() {
      return opcional("CLAUDE_ESFUERZO", "medium");
    },
  },
  openai: {
    get apiKey() {
      return requerida("OPENAI_API_KEY");
    },
    get modeloImagen() {
      return opcional("OPENAI_IMAGE_MODEL", "gpt-image-2");
    },
    get calidadImagen() {
      return opcional("OPENAI_IMAGE_QUALITY", "medium");
    },
    get costoImagenUsd() {
      return Number(opcional("OPENAI_COSTO_IMAGEN_USD", "0"));
    },
  },
  get claveAcceso() {
    return requerida("CLAVE_ACCESO");
  },
};
