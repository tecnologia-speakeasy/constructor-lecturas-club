import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 800;

// Esqueleto. Aquí entra la ficha (tipo, género, tamaño, nivel) y sale el PDF.
// Orden previsto: validar ficha → elegir ejemplos del canon → Claude (texto) →
// validar contra el esquema → OpenAI (ilustraciones) → maquetar HTML+CSS → PDF.
export async function POST() {
  return NextResponse.json({ error: "Todavía sin implementar" }, { status: 501 });
}
