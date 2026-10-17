# Contexto recuperado para continuar el juego

Recuperación: **17 de octubre de 2026**. Fuente: conversación de desarrollo del 13 de octubre de 2026 y archivos locales conservados. El chat original se titulaba **«Que tipo de proyecto de IA de nivel intermedio o avanzado puedes crear?»**. Se recuperaron sus instrucciones aunque la lectura normal del chat fallaba por su tamaño.

Este documento resume decisiones del proyecto. No reproduce el registro interno completo del chat.

## Lo solicitado por el creador

- Un juego de elecciones A/B/C, con una historia que cambie según las respuestas y varios finales.
- Presentación de novela visual de anime: personajes y escenarios 2D, caja de diálogo y distintas expresiones.
- El concepto inicial de detectives se sustituyó por **isekai de fantasía**, sin terror.
- Protagonista hombre, gracioso y poderoso, que empieza su nueva vida después de un atropello.
- Comedia romántica, malentendidos, acción y chistes con referencias a películas y anime.
- Romance con varias compañeras, planteamiento de harem y tono ecchi ligero. La propuesta de implementación utiliza personajes adultos y situaciones sugerentes no explícitas.
- Estética anime tierna; muchas razas de fantasía, como elfos y dracónidos. Evitar tratar el racismo.
- Partidas largas, por capítulos, con mucha historia.
- Crear los bocetos y el arte del proyecto. La implementación conserva diseños originales y prompts de generación.
- Jugar en PC. Se implementó una aplicación web local, sin requerir conexión a una IA durante la partida.

## Últimas correcciones recibidas

1. **«Que sean más jóvenes y más diferentes en apariencia y los lugares con no mucho detalle»**.
   - Se generó `assets/characters-young.png` y se definieron edades adultas de 21 a 24 años para las cuatro compañeras.
   - Se diferenciaron colores, peinados, siluetas y vestuario.
   - Se generó `assets/worlds-simple.png` con escenarios de formas más claras y menos detalle.
2. **«recuerda que habram personajes secundarios igual con sus propios bocetos aparte»**.
   - Se crearon láminas separadas para Leo, Brumo, Severin y Tilda en `assets/characters/`.
   - Se añadieron fichas y expresiones a la galería y al diario.

## Concepto desarrollado

**Isekai por accidente: el héroe del malentendido**, ambientado en Auralia.

Leo llega a un mundo de fantasía después de un atropello fuera de cámara. Mirel, una diosa atrapada en la burocracia del destino, interviene en su llegada. El protagonista puede modificar propiedades de objetos, con una limitación que lo deja inmóvil tres segundos y obliga a cooperar con el grupo.

El misterio conservado del concepto inicial gira alrededor del **Telar**, una red mágica que manipula encuentros y destinos. La investigación reúne pistas y enfrenta la idea de un futuro impuesto con la posibilidad de elegir. Severin y la Fundación Aurora forman parte del conflicto.

## Capítulos escritos

1. Un camión y dos formularios.
2. Una habitación y demasiadas teorías.
3. El bosque no acepta devoluciones.
4. El baile de los casi novios.
5. El festival de las malas ideas.
6. La diosa fuera de horario.
7. Antes de que caiga el cielo.
8. El final no venía escrito.

## Rutas y finales

- Lys: **El mapa de los días pequeños**.
- Kaida: **Una espada y dos tazas**.
- Nara: **El negocio de quedarse**.
- Mirel: **Domingos sin eternidad**.
- Relación compartida: **Una constelación elegida**.
- Camino libre: **Pan recién hecho, mundo a salvo**.
- Final cómico: **Su majestad el problema**.

Las rutas románticas requieren 8 puntos de afinidad con la compañera elegida. La compartida requiere 6 con cada una, 11 de confianza, 4 pistas y la bandera de honestidad correspondiente. Los requisitos exactos se definen en las elecciones del capítulo 8; el estado y la validación están en `core.js`.

## Estado comprobado al recuperar

- Se conservaron los 27 archivos del proyecto original, incluidos ocho PNG, todos los capítulos y los scripts de prueba.
- La suite volvió a pasar: ocho comprobaciones, siete finales alcanzables y 1.000 recorridos pseudoaleatorios sin rutas bloqueadas.
- Estadísticas generadas: 61 escenas principales, 147 ramas, 54 puntos de decisión, 1.207 líneas y 22.323 palabras entre todas las escenas.
- El historial terminaba durante la revisión de retratos, menús y guardados. No se encontró una entrega final posterior en ese historial.
- Se añadieron README, documentación técnica, configuración Git y comprobación automática para conservar y continuar el proyecto en GitHub.
- Los guardados personales residen en el navegador; no se extrajeron ni se publicaron. `tests/qa-save.json` procede de una simulación automática.

## Siguiente trabajo recomendado

1. Revisar visualmente los retratos y todas sus expresiones, especialmente sus recortes en diferentes tamaños de ventana.
2. Jugar un capítulo completo y comprobar manualmente guardado, carga, importación/exportación y música.
3. Revisar el guion para ajustar ritmo, humor, referencias, personalidad y profundidad romántica a las preferencias del creador.
4. Recibir comentarios del creador sobre la versión recuperada antes de ampliar o reescribir capítulos.

Estas tareas son una propuesta de continuación; no deben confundirse con solicitudes ya ejecutadas ni con fallos confirmados.
