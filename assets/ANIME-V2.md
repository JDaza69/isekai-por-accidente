# Protagonistas · revisión anime

Lámina activa: `characters-anime-v2.png`, 1262 × 1246 píxeles, PNG con transparencia. Generada el 20 de octubre de 2026 con la herramienta integrada ImageGen, usando `characters-young.png` como referencia de identidad.

Lys (21), Kaida (23), Nara (22) y Mirel (24) conservan sus edades adultas, colores, peinados y vestuario. Se revisaron los rostros y el acabado anime. Cada personaje mantiene cuatro expresiones: neutral, alegría, timidez y seriedad. Las expresiones adicionales siguen pendientes para una próxima etapa.

La portada, las escenas y la galería usan esta versión. Los recortes se definen en `tests/build-sprite-css.cjs`; las láminas anteriores se conservan como referencia.

## Prompt utilizado

```text
RADICAL ART STYLE REDESIGN of the attached character reference for a 2D ANIME VISUAL NOVEL. The previous attempt looked too much like the painted reference. This time substantially change the rendering and face designs. Treat the reference as a character identity sheet ONLY, not as a layout or rendering style to imitate.

Style: bright appealing modern hand-drawn anime key animation, very clean bold contour lines, SOLID FLAT COLORS, single sharp-edged shadow per color region, no gradients on clothes or hair, no painterly shading, no texture. Much bigger sparkling anime eyes, simple tiny noses and mouths, fresh rounder but unmistakably adult faces; slim adult shoulders and torso proportions. All four women are adults 21–24. Not chibi. Reduce costume detail by 80%. Hair drawn in a few large clean shapes. Give them a lively youthful adult cast appearance. This is a new simplified ANIME redesign, not a repaint.

COMPOSITION IS CRITICAL: one square transparent sprite atlas, 4 equal columns x 4 equal rows. SIXTEEN SEPARATE head-to-waist portraits. Scale every portrait down to fit entirely INSIDE its square with a generous TRANSPARENT moat on all sides (10% cell padding). All horns, fox ears, halo, arms and waist ends fully visible. Strong evenly spaced horizontal and vertical transparent gutters. NO shapes touch another cell. No background, borders or text.
Column1 Lys: young adult elf21, mint green short bob and small side braid, white flower, gold round glasses, green eyes, pointed ears, peach skin, ivory high collar blouse, teal cape, book.
Column2 Kaida: young adult dragonkin23, tan skin, red high ponytail, small ivory horns, amber eyes, burgundy scarf, black sleeveless tunic and simple silver shoulder armor.
Column3 Nara: young adult fox woman22, brown skin, short orange hair, fox ears, gold eyes, purple beret, plum jacket, white blouse and purple bow.
Column4 Mirel: young adult goddess24, pale skin, silver-blue hair in a side braid, blue eyes, thin floating golden diamond halo, white/navy high-collar mage robe, small gold star earrings.
Row1: neutral friendly, open eyes and slight smile.
Row2: happy laughing, broad open mouth smile.
Row3: shy blushing, averted eyes and timid small smile.
Row4: visibly SERIOUS / DETERMINED, angled brows, open focused eyes and straight unsmiling mouth. Do not smile in row4.
Keep hairstyle, costume, proportions and head size consistent within each column. Natural fully clothed poses. True transparent alpha, no checkerboard.
```
