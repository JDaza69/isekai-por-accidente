# Guía de desarrollo

## Arquitectura

`story.js` crea `globalThis.STORY` y la función `addScene`. Los cuatro archivos de `chapters/` registran escenas y ramas. `core.js` expone `GameCore`, cuyas operaciones validan partidas y aplican efectos sin mutar el estado anterior. `game.js` conecta este modelo con el DOM, el almacenamiento local y Web Audio.

El orden de las etiquetas `script` de `index.html` importa. No convertirlas en módulos ni introducir peticiones de recursos remotos sin comprobar que se mantiene la apertura directa desde disco.

## Editar la historia

Cada escena declara ID, capítulo, título, fondo, elenco, diálogo, elecciones y destino. `addScene` crea los nodos de respuesta asociados a cada elección.

- Códigos de voz: `L` Lys, `K` Kaida, `N` Nara, `M` Mirel, `P` protagonista, `V` narrador, `A` anuncio, `B` Brumo, `S` Severin, `T` Tilda.
- Expresiones: `neutral`, `happy`, `shy`, `serious`.
- Una línea usa la forma `P:happy|Texto del diálogo`.
- Las condiciones `[bandera]` y `[!bandera]` muestran líneas según decisiones previas.
- Efectos: afinidades, confianza, caos, banderas y pistas.
- Requisitos: afinidad mínima, confianza, cantidad de pistas, afinidades de todo el grupo y banderas necesarias.

Conservar tres opciones por decisión y al menos una salida disponible. No reutilizar IDs de escenas. Después de cambiar destinos, requisitos o efectos, ejecutar `npm test`.

## Arte

Los PNG originales se conservan completos. El juego utiliza atlas y recortes CSS, sin generar imágenes durante la partida.

- `characters.png` y `worlds.png`: primera versión.
- `characters-young.png` y `worlds-simple.png`: revisión solicitada y usada por la interfaz.
- `characters/leo.png`, `brumo.png`, `severin.png`, `tilda.png`: láminas individuales 2×2.
- `assets/PROMPTS.md`, `assets/REVISION.md` y `assets/characters/PROMPTS.md`: procedencia y prompts.

`tests/build-sprite-css.cjs` presupone dimensiones de 1262×1246 píxeles y ventanas concretas de recorte. Modificar ese script al reemplazar los atlas. `npm run sprites` escribe `sprites.css`.

## Pruebas

```sh
npm test
```

No requieren librerías ni acceso a internet. El informe se guarda en `tests/report.json`. La partida de QA en `tests/qa-save.json` es generada, llega al capítulo 7 e incluye puntos de control de una ruta simulada.

La prueba de 1.000 recorridos usa una semilla fija y sesgos de selección para llegar a los finales. No equivale a enumerar todas las combinaciones posibles ni a una prueba visual en un navegador.

La automatización de GitHub ejecuta esta misma suite con Node.js 22 y permisos de lectura del repositorio. No despliega el juego.

## Revisión manual

- Abrir la portada, crear una partida y llegar a una elección A/B/C.
- Ver las ocho fichas y las cuatro expresiones de cada personaje.
- Revisar que no aparezcan celdas contiguas del atlas en un retrato.
- Guardar y cargar una ranura; exportar e importar una partida.
- Comprobar autoguardado y selector de capítulos en el mismo origen del navegador.
- Probar música, volumen, texto instantáneo, auto, pantalla completa y teclado.
- Revisar la portada y el diálogo en distintos tamaños de ventana de PC.

## Guardados

Los datos se almacenan en `localStorage`. Exportar la partida antes de cambiar de origen o limpiar los datos del navegador. Mantener compatibilidad con la versión de guardado o definir una migración explícita si se modifican sus campos.

No añadir partidas personales, secretos, archivos `.env` ni registros del chat al repositorio.
