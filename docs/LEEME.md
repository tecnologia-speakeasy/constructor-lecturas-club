# docs

- `esquema-contenido.md` — el contrato JSON que devuelve Claude y que recibe la plantilla.
  Se parte del de `lecturas/docs/esquema-contenido.md`, quitando lo que solo sirve para
  rediseñar PDFs viejos (`imagenId`, `imagenesDescartadas`, la marca de contenido verificable)
  y agregando lo que necesita un generador: la ficha de pedido y el vocabulario objetivo.
- `ficha-diseno.md` — las medidas y reglas visuales de la plantilla.
