# Isekai por accidente

### El héroe del malentendido

Una novela visual original en español para PC: un atropello fuera de cámara, una diosa con demasiado papeleo y un poder absurdo que llega a las manos equivocadas. En Auralia, las decisiones cambian las relaciones, las pistas y el final de la aventura.

Fantasía, comedia romántica, acción por decisiones y estética anime 2D. Historia escrita y ramificada; no necesita una IA conectada para jugar.

## Jugar en PC

1. Descarga el proyecto con **Code → Download ZIP** o clona el repositorio.
2. Extrae el ZIP completo, conservando las carpetas `assets/` y `chapters/`.
3. Abre **`index.html`** en un navegador moderno, como Chrome, Edge o Firefox.

No necesita instalación, cuenta, clave API ni conexión a internet. El navegador guarda la partida localmente. Si tu navegador restringe el guardado al abrir archivos, utiliza el servidor local.

### Servidor local opcional

Con **Node.js 22 o superior** instalado:

```sh
git clone https://github.com/JDaza69/isekai-por-accidente.git
cd isekai-por-accidente
npm start
```

Abre **http://127.0.0.1:4173**. Para detenerlo, pulsa `Ctrl+C` en la terminal. No hace falta ejecutar `npm install`: el proyecto no tiene dependencias externas.

> Los guardados pertenecen al navegador y a la dirección utilizada. Antes de cambiar de navegador, carpeta o forma de apertura, usa **Guardar/Cargar → Exportar partida** y después **Importar archivo**.

## Qué incluye

- **8 capítulos**, 61 escenas principales y 147 escenas de ramificación.
- **54 puntos de decisión**, con tres opciones A/B/C; una partida recorre solo una parte de las ramas.
- **7 finales**: cuatro románticos, uno compartido, uno libre y uno cómico.
- **22.323 palabras** en el conjunto de escenas y ramificaciones; cada ruta probada contiene aproximadamente 12.000–13.000 palabras.
- Ocho personajes ilustrados, con cuatro expresiones cada uno.
- Fondos de ciudad, taberna, bosque y palacio, con versiones simplificadas.
- Afinidades, confianza del grupo, pistas y consecuencias de decisiones anteriores.
- Autoguardado, tres ranuras manuales y exportación/importación en JSON.
- Diario, historial, selector de capítulos desbloqueados y galerías de personajes y finales.
- Música sintetizada localmente, lectura automática y ajustes de texto, volumen y movimiento.

## Controles

| Acción | Control |
| --- | --- |
| Completar o avanzar diálogo | Clic en el diálogo, Espacio o Enter |
| Elegir una respuesta | A/B/C o 1/2/3 |
| Abrir menú / cerrar una ventana | Esc |
| Pantalla completa | F o el botón de pantalla completa |
| Historial | H |
| Diario | J |
| Guardar | S |
| Avance automático | Botón Auto; se detiene ante decisiones |

## Elenco

| Personaje | Papel |
| --- | --- |
| **Leo**, 24 años | Protagonista humano; nombre personalizable, humor y un poder que modifica objetos con una limitación de tres segundos. |
| **Lys Auralia**, 21 años | Elfa archivista; cabello verde corto y gafas. |
| **Kaida Valbrasa**, 23 años | Capitana dracónida; atlética, cuernos y coleta roja. |
| **Nara Vesper**, 22 años | Mercader kitsune; cabello naranja, orejas de zorro y boina. |
| **Mirel**, 24 años | Diosa y funcionaria del destino; trenza azul plateada y halo. |
| **Brumo** | Dragón adulto y guardián ancestral con debilidad por el pan. |
| **Severin**, 42 años | Consejero y director de la Fundación Aurora. |
| **Tilda Remache**, 26 años | Inventora enana y organizadora del festival. |

Todos los personajes románticos son adultos. El tono incluye coqueteo, insinuaciones leves y malentendidos amorosos, sin escenas sexuales explícitas. La acción es de fantasía y se resuelve mediante decisiones.

## Desarrollo

HTML, CSS y JavaScript sin framework ni compilación. Los archivos se cargan con etiquetas `script` para permitir también la apertura directa desde disco.

```text
index.html                  Pantallas y estructura de la interfaz
styles.css                  Diseño, escenarios y retratos
sprites.css                 Ventanas de recorte de los atlas
story.js                    Elenco, capítulos, finales y formato de escenas
chapters/                   Guion completo, agrupado de dos en dos capítulos
core.js                     Estado, decisiones, requisitos y validación de partidas
game.js                     Interfaz, guardado, galerías y música
server.cjs                  Servidor HTTP opcional, limitado a 127.0.0.1
assets/                     PNG originales, revisiones y prompts del arte
tests/                      Pruebas, informe y partida sintética para QA
docs/CONTEXTO_RECUPERADO.md   Decisiones recuperadas y punto para continuar
docs/DESARROLLO.md           Guía técnica y comprobaciones
```

### Verificar el juego

```sh
npm test
```

La suite verifica las escenas, la conectividad de la historia, los siete finales, 1.000 recorridos con decisiones pseudoaleatorias, los guardados, las importaciones inválidas y las referencias a recursos locales. Genera `tests/report.json` y `tests/qa-save.json`; este último es una partida de prueba, no una partida personal.

```sh
npm run sprites
```

Regenera `sprites.css` a partir de las coordenadas de los atlas actuales. Si cambias las dimensiones o la disposición del arte, revisa antes `tests/build-sprite-css.cjs`.

## Continuar el proyecto

Empieza por [el contexto recuperado](docs/CONTEXTO_RECUPERADO.md) y [la guía de desarrollo](docs/DESARROLLO.md). Incluyen los requisitos creativos originales, las últimas correcciones y lo que queda por comprobar. Esta recuperación conserva el guion y las ilustraciones existentes; no representa una revisión editorial completa de toda la novela.

## Créditos y recursos

Guion, programación y diseño desarrollados para este proyecto con asistencia de IA. Ilustraciones generadas con ImageGen; las versiones originales, revisadas y sus prompts se conservan en `assets/`. Música sintetizada mediante Web Audio. Los personajes y el mundo son originales; el protagonista utiliza guiños y bromas sobre cine y anime.

El repositorio contiene los recursos necesarios para jugar. No incluye credenciales, historial técnico del chat ni guardados personales del navegador.
