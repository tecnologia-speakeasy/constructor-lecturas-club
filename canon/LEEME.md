# canon

Las lecturas de referencia, una por archivo, en el mismo contrato JSON que consume la plantilla.
Son los ejemplos que se le pasan a Claude y, a la vez, los casos de prueba.

No se escriben a mano: salen de extraer los PDFs reales de `lecturas/referencias/` con el
extractor de ese proyecto, y luego se revisan.

Cada archivo lleva su ficha de pedido (tipo, género, tamaño, nivel, tema gramatical) junto al
resultado, para que el ejemplo enseñe la correspondencia pedido → lectura y no solo el estilo.

Campo `estado`:

- `canon` — revisado y aprobado, se puede usar como ejemplo.
- `candidato` — generado por el constructor y aprobado, pendiente de revisión final.
- `rechazado` — se guarda con el motivo; alimenta los antipatrones del style spec.
