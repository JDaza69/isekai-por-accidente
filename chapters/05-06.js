addScene('c5-1',5,'Bienvenidos al festival del destino','city',['nara','lys'],`
V|El festival comenzó con cintas de colores, puestos de comida y un presentador que llevaba un sombrero demasiado grande para el cargo. Los faroles de Aurora brillaban sobre cada cruce.
P|Un día soleado, gente feliz y una conspiración bajo los adoquines. La variedad turística de este lugar es impresionante.
N|Tenemos hasta la tercera campana para localizar los nodos, abrir las salidas y reunir pruebas suficientes. También tengo un puesto contratado. No pienso dejar que un villano arruine mi inversión.
L|Los nodos se activarán por zonas. Si seguimos el orden correcto, podremos entrar en la red sin alertar a todos los cristales a la vez.
V|Mirel llevaba el mapa de permisos; Kaida coordinaba a la guardia sin mencionar todavía a Severin. Acusarlo sin pruebas podría dejaros encerrados antes de llegar al palacio.
T|¡Concurso de parejas aventureras! ¡Premio: acceso a la torre de observación y una cesta de productos locales! ¡Se admiten equipos que todavía estén discutiendo qué son!
P|El universo está siendo sospechosamente específico otra vez.
N:happy|La torre tiene un nodo. Si ganamos, entramos con público y testigos. Si perdemos, al menos tendremos una experiencia humillante que recordar.
L:shy|No es obligatorio ser pareja. El reglamento dice «dos personas que colaboren». He revisado esa línea tres veces.
V|Tilda, la organizadora, os ofreció una ficha de inscripción con dos espacios. La multitud empezó a animaros sin disponer de información suficiente, como suele ocurrir.
`,[
 ['Inscribirte con Lys en la prueba de acertijos.',{bonds:{lys:3},flags:['festival-lys']},`P|Nuestra ventaja es que una persona del equipo sabe leer instrucciones y la otra distrae al público cuando se equivoca.
L:happy|Una distribución de funciones extrañamente precisa.
V|Tilda os dio una cinta para unir las muñecas durante la prueba. Lys preguntó si podía apretarla menos; después dejó de quejarse cuando te acercaste para leer el acertijo juntos.
P|Prometo no utilizar «la fuerza de la amistad» como respuesta salvo emergencia.`],
 ['Inscribirte con Nara en la prueba de coordinación.',{bonds:{nara:3},flags:['festival-nara']},`N:happy|Seguirás mis pasos, yo fingiré que no me gusta mandar y ambos mentiremos con mucha elegancia.
P|Parece un plan consistente con nuestra experiencia previa.
V|Tilda os ató las muñecas con una cinta. Nara se acercó para ajustar el nudo y habló cerca de tu oído.
N:shy|Si te pongo nervioso, mira mis ojos. Son bastante más útiles para saber cuándo avanzar.`],
 ['Pedir a Kaida que gane contigo la prueba de equilibrio.',{bonds:{kaida:3},flags:['festival-kaida']},`K:happy|No voy a cargarte a hombros. Te aviso antes de que lo llames táctica.
P|Nunca se me habría ocurrido. Ahora me parece una pérdida terrible de potencial.
V|Kaida te dio la mano para subir a la plataforma. El público aplaudió, ella se sonrojó y luego os hizo avanzar como si dirigiera una unidad de dos personas muy mal disimuladas.
K:shy|Mira al frente. Si me haces reír, nos caemos los dos.`]
],'c5-2');

addScene('c5-2',5,'La prueba que nadie explicó bien','city',['lys','nara'],`
V|La final consistía en llevar un huevo de madera a través de un circuito. Solo había tres reglas: no soltarlo, no utilizar magia sobre los rivales y no discutir tanto que acabara el horario del festival.
P|La tercera regla tiene historia. Puedo sentirlo.
T|¡Preparados! ¡Recordad que la confianza vale más que la velocidad!
N|Lo dice porque la plataforma de llegada todavía no está montada.
V|Al sonar el silbato, un mecanismo impulsó unas ráfagas de aire para dificultar el paso. La tuya fue demasiado fuerte: el Telar había amplificado el juego y empezó a arrastrar las cintas de los participantes.
L:serious|¡Esto no es parte de la prueba! El cristal está enviando una instrucción de convergencia. Quiere juntarnos bajo la torre.
V|Una cinta te enredó con tu compañera. Quedasteis tan cerca que durante un segundo olvidasteis el peligro y os preocupó algo completamente distinto.
P|Normalmente intento conversar un poco antes de convertirme en un nudo humano.
K|¡Después coqueteáis! Ahora necesito que nadie caiga de la plataforma.
V|La multitud seguía riendo, convencida de que era una actuación. Podías estabilizar el circuito, pedir que lo detuvieran o usar su impulso para llegar al nodo.
`,[
 ['Estabilizar las plataformas antes de continuar.',{trust:3,bonds:{kaida:1,lys:1},flags:['festival-seguro']},`V|Hiciste firmes los apoyos mientras Kaida sujetaba a los participantes. Lys ordenó apagar el mecanismo y Tilda, al ver sus caras, obedeció sin discutir.
P|Declaro una pausa técnica por exceso de romance involuntario.
V|La multitud aplaudió todavía más. Nara decidió cobrar aquella improvisación como un número de entretenimiento en el próximo contrato.
T|Acceso a la torre para vuestro equipo. Y gracias. Creo que acabo de evitar una cantidad considerable de reclamaciones.`],
 ['Pedir ayuda al público y explicar el fallo.',{trust:3,bonds:{nara:1,mirel:1},flags:['festival-testigos']},`P|Necesitamos manos para sostener las cuerdas. El juego se ha roto. Nadie intente imitarme: mi formación es lamentable.
V|Los espectadores dejaron de reír y se organizaron. Una panadera dirigió las cuerdas mejor que muchos oficiales, y un músico mantuvo el ritmo para que todos tiraran a la vez.
M:happy|La red no había previsto tantas personas actuando por su cuenta.
V|El cristal perdió la sincronía. Tilda os abrió la torre y prometió contar lo ocurrido si alguien intentaba negarlo.`],
 ['Usar el impulso para alcanzar la torre.',{chaos:3,bonds:{nara:2},flags:['festival-vuelo']},`P|Esto es un problema de física y una oportunidad comercial para las redes de seguridad.
V|Volviste ligera una tabla y aprovechaste el viento para deslizarte hasta el balcón. Nara te lanzó una cuerda mientras Kaida evacuaba la plataforma.
P|¡Estoy volando! Con una interpretación generosa del verbo y una preocupación creciente por el aterrizaje.
V|Llegaste abrazado a una columna. El público te ovacionó. Tus compañeras reservaron sus comentarios para cuando pudieras escuchar una frase completa sin jadear.`]
],'c5-3',{magic:true});

addScene('c5-3',5,'El registro de las respuestas borradas','city',['mirel','lys'],`
V|El interior de la torre estaba vacío salvo por un pedestal y un montón de tiras de papel que salían de una ranura. Cada tira llevaba un nombre y una respuesta descartada.
M:serious|El nodo registra cuando alguien rechaza el camino sugerido. Después altera el entorno para volver a ofrecerlo como si fuera una oportunidad nueva.
P|Eso es insistencia con presupuesto público.
L|Aquí hay un «no» repetido diecisiete veces. La persona quiso irse de la ciudad, pero cada carretera terminó llevándola al mismo puente.
V|Mirel abrió una tapa del pedestal. Dentro conservaba una versión completa del registro, con fechas y la orden que obligaba a descartar las negativas.
M|Mi departamento firmó la instalación. Yo tramité una parte. No vi estas instrucciones porque se añadieron después, pero mi sello está aquí.
P|Que alguien use tu firma no significa que hayas elegido lo que hizo después. Ahora podemos decidir qué hacemos con la prueba.
V|La primera campana sonó sobre la ciudad. Las tiras empezaron a arder de una en una. El nodo estaba borrando su historial antes de activarse.
L:serious|Nos quedan segundos. Podemos copiar el registro o detener la eliminación manualmente, pero necesitamos actuar ya.
`,[
 ['Salvar una copia completa del registro.',{trust:3,bonds:{mirel:2},clues:['El nodo del festival eliminaba respuestas negativas de los ciudadanos y repetía los encuentros hasta obtener la aceptación.'],flags:['negativas']},`V|Mirel volcó el registro en su sello mientras tú enfriabas la cámara para frenar la destrucción. Lys leyó en voz alta la orden principal para que también quedara en su cuaderno.
M:serious|Ya está. No voy a esconder mi firma. La usaré para demostrar cómo la aprovecharon.
P|Entonces guardamos la prueba y buscamos la manera de ayudar a quienes dijeron que no.
V|Mirel asintió. La culpa seguía allí, pero ahora tenía una dirección útil.`],
 ['Abrir la salida de emergencia para los ciudadanos.',{trust:4,bonds:{lys:2,mirel:1},flags:['salidas-abiertas']},`V|Lys activó el mecanismo que habíais encontrado en el archivo. Por toda la ciudad aparecieron pequeñas puertas de luz marcadas con una palabra: SALIR.
P|La interfaz más revolucionaria del reino. Un botón que hace lo que pone.
V|Decenas de firmas desaparecieron de la red. Algunas personas se marcharon, otras se quedaron después de comprobar que podían elegir.
M:happy|Eso es lo que debería haber protegido desde el principio.`],
 ['Atascar la máquina con todas las reclamaciones.',{chaos:3,bonds:{nara:1,mirel:1},flags:['reclamaciones']},`P|Si quiere ignorar respuestas, le daremos un volumen administrativamente significativo.
V|Nara sacó del bolso una carpeta de reclamaciones de proveedores. Mirel multiplicó los formularios vacíos y la ranura quedó bloqueada bajo un torrente de papel.
M:happy|No es una solución permanente, pero reconozco su belleza profesional.
V|El nodo entró en reposo. Entre el humo y las facturas, recuperasteis el mapa de conexiones antes de salir.`]
],'c5-4');

addScene('c5-4',5,'La tregua de los puestos de comida','city',['nara','mirel'],`
V|Con el primer nodo desactivado, la red necesitaba recalibrarse. Teníais una pausa breve. Nara insistió en emplearla como personas normales antes de volver a jugaros la vida.
N|Comed. Nadie pronuncia una buena frase heroica con el estómago vacío. Solo ruidos que arruinan el momento.
P|Me siento profundamente observado.
V|Lys eligió una brocheta dulce y luego estudió el mecanismo que la hacía girar. Kaida compró cuatro y fingió que dos eran para repartir. Mirel miraba un algodón de azúcar como si fuera un fenómeno físico ofensivo.
M:shy|¿Por qué ocupa tanto y pesa tan poco? ¿Es una promesa política?
N:happy|Es azúcar. A veces una cosa absurda no necesita una conspiración detrás.
V|Te tocó ayudar en el pequeño puesto de Nara. El delantal regresó, esta vez con un lazo que ella ajustó desde atrás. Su cercanía convirtió una tarea sencilla en un examen de compostura.
P|Me gustaría dejar constancia de que el uniforme reduce mi capacidad de respuesta verbal.
N:shy|Perfecto. Quizá venda más si no explicas las tartaletas.
V|Un fotógrafo os ofreció un retrato mágico de grupo. La placa conservaría el instante tal como fuera, sin correcciones del Telar.
`,[
 ['Pedir una foto de todos, tal como estáis.',{trust:2,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['foto']},`V|Kaida se colocó demasiado rígida, Lys sostuvo el algodón de Mirel, Nara te ajustó el lazo una última vez y tú decidiste que la solemnidad había durado suficiente.
P|Sonreíd como si acabáramos de descubrir que los impuestos también reencarnan.
V|La placa capturó cuatro risas y tu expresión de satisfacción. Por primera vez tu segunda vida tenía una fotografía que no era parte de un expediente.
M:shy|Quiero una copia. Para mi escritorio. O para cuando tenga un lugar que sea solo mío.`],
 ['Comprar un recuerdo para quien te acompañó en el concurso.',{trust:1,flags:['recuerdo']},`V|Elegiste una pequeña estrella de madera. No tenía magia, utilidad práctica ni una profecía asociada, tres cualidades que empezabas a valorar.
[festival-lys]L:shy|La pondré en mi lápiz. Así recordaré que un mapa también puede llevar a una tarde bonita.
[festival-nara]N:shy|No pienso venderla. Si alguien pregunta, es parte del inventario sentimental y no admite regateo.
[festival-kaida]K:shy|Cabe en el bolsillo de la armadura. No es que necesite justificarlo. Me gusta. Gracias.
V|El regalo no cambió ninguna ley del universo. Eso era precisamente lo que lo hacía importante.`],
 ['Hacer de camarero y dejar que ellas descansen.',{bonds:{nara:2,kaida:1,mirel:1},trust:2,flags:['camarero']},`P|Hoy el héroe sirve mesas. Acepto propinas, elogios moderados y consejos para no derramar bebidas.
V|Kaida intentó ayudarte hasta que la sentaste con una brocheta. Mirel te observó trabajar con una fascinación inesperada, como si nunca hubiera visto a alguien hacer algo útil sin un mandato.
N:happy|Cuidado. Si sigues así, voy a ofrecerte un contrato digno.
P|La verdadera fantasía de este mundo acaba de revelarse.`]
],'c5-5');

addScene('c5-5',5,'La segunda campana','city',['kaida','mirel'],`
V|La segunda campana sonó demasiado pronto. Los faroles se inclinaron hacia el palacio y las calles comenzaron a formar círculos. Una carroza del desfile quedó suspendida sobre la plaza.
S|Ciudadanos de Brisalia. Se ha producido una interferencia. Mantengan la calma y sigan las rutas iluminadas. La Fundación Aurora garantiza su seguridad.
P|Cada vez que dice «garantiza», aparece algo flotando que no debería.
K:serious|Las rutas terminan bajo la carroza. Hay que sacar a la gente antes de que caiga. Mi guardia no recibe las órdenes: los cristales están bloqueando la señal.
M|Puedo transmitir tu voz por los faroles, pero Severin verá exactamente dónde estamos.
N|Ya ha enviado seis armaduras y nos ha encerrado en un balcón. Me parece que la discreción ha tenido su oportunidad.
V|Lys descubrió un patrón: las personas que seguían el camino iluminado avanzaban hacia el centro; quienes se detenían confundían al sistema y ganaban unos segundos.
P|Entonces necesitamos que la gente elija algo diferente. No porque yo se lo imponga, sino porque entienda qué está pasando.
K|Habla claro. Yo abriré un paso por la calle del mercado. Después nos ocupamos de esa carroza.
V|Mirel puso su mano sobre tu sello. Tu voz adquirió el eco de todas las campanas de Brisalia. Era una responsabilidad bastante mayor que anunciar una oferta de tartaletas.
`,[
 ['Explicar el riesgo y dar instrucciones concretas.',{trust:4,bonds:{kaida:2,mirel:1},flags:['evacuacion']},`P|No sigáis las luces. La capitana Kaida abre una salida por el mercado. Ayudad a quien no pueda moverse. Detenerse a pensar no es desobedecer al destino: es protegeros.
V|La plaza empezó a vaciarse. Kaida y sus guardias sostuvieron el corredor mientras Lys deshacía los bucles y Nara repartía cuerdas entre los comerciantes.
P|Y, por favor, que nadie se quede grabando la carroza. La anécdota mejora mucho si podéis contarla mañana.
V|Algunos rieron incluso mientras corrían. La risa ayudó a que el miedo no lo ocupara todo.`],
 ['Convocar al público con un discurso heroico y humor.',{trust:2,chaos:1,bonds:{nara:1,kaida:1},flags:['discurso']},`P|Habitantes de Brisalia: he viajado entre mundos, sobrevivido a un puente y trabajado con delantal. Creo que eso me autoriza a decir que esta fiesta necesita una salida mejor.
V|La voz de Kaida cortó tus adornos con instrucciones claras. Le cediste el espacio y añadiste indicaciones para que los grupos no se separaran.
K:happy|Mucho discurso. Buen momento para saber cuándo parar.
V|La plaza se vació entre carreras y alguna ovación improvisada. Nara prometió no imprimir tu discurso en una taza, una promesa de credibilidad limitada.`],
 ['Concentrarte en sostener la carroza mientras ellas evacúan.',{bonds:{kaida:2,lys:1},trust:2,flags:['carroza']},`V|Tocaste el soporte de la carroza y cambiaste PESADO por LIGERO. El bloqueo te inmovilizó en mitad de la calle, pero evitó que toneladas de madera cayeran sobre la plaza.
P|¡Tres segundos! Esta vez agradecería que fueran los tres segundos habituales y no una metáfora dramática.
V|Kaida se colocó frente a ti. Lys guio a la gente, Nara despejó las salidas y Mirel sostuvo la señal hasta que todos estuvieron fuera.
K|Ya está. Ahora respira. No tienes que aguantar el cielo tú solo.`]
],'c5-6',{magic:true});

addScene('c5-6',5,'Lo que cuesta una desobediencia','tavern',['mirel','kaida'],`
V|La posada se convirtió en refugio. Tilda atendía a los visitantes, Nara repartía agua y Lys copiaba las rutas seguras en cualquier papel disponible.
P|Buen momento para anunciar que los baños están al fondo y que ninguna puerta conduce intencionadamente a otra dimensión.
V|La broma no obtuvo respuesta de Mirel. Estaba sentada junto a la ventana, mirando un aviso luminoso sobre su muñeca. Su halo apenas conservaba brillo.
M:serious|Me han retirado el acceso. Severin presentó una orden de suspensión por interferir en una operación autorizada. No puedo abrir el camino al palacio.
K|Entonces subiremos por otra parte.
M|No es solo eso. Si no regreso al departamento antes de la tercera campana, dejaré de tener un lugar al que volver. Mi vida entera cabe en un cargo que acaba de desaparecer.
V|Mirel intentó sonreír. No le salió. De pronto parecía una joven asustada en un mundo al que había enviado a otros sin preguntarse cómo se sentía llegar.
P|Una vez me dijeron que había una segunda oportunidad. La persona que lo dijo se merece una también.
V|Lys levantó la mirada. Nara dejó una taza junto a Mirel y Kaida se apartó para darle espacio. Nadie podía decidir por ella, pero no tenía que enfrentarse sola a la decisión.
`,[
 ['Quedarte con Mirel y escuchar lo que teme perder.',{bonds:{mirel:3},trust:2,flags:['mirel-apoyo']},`M:shy|No sé quién soy si no resuelvo solicitudes. No tengo una casa. Nunca elegí una comida favorita. Siempre pensé que habría tiempo después del trabajo.
P|Podemos empezar por algo pequeño. Una cama esta noche. Una comida mañana. Lo demás no necesita estar decidido para que puedas quedarte.
V|Mirel se aferró a la taza. Cuando consiguió beber, fue porque sus manos ya no temblaban tanto.
M|Me gustaría intentarlo.`],
 ['Pedir al grupo que busque una solución juntos.',{trust:3,bonds:{mirel:2,lys:1},flags:['mirel-equipo']},`L|Los caminos antiguos no dependen de permisos actuales. Hay una escalera de servicio en la primera versión del atlas.
N|Y aquí hay una habitación libre. Con una tarifa especial para diosas que necesitan descansar.
K|Yo puedo ayudarte a conseguir documentos del gremio. El trabajo no es tu única forma de existir.
V|Mirel escuchó las ofertas sin saber qué contestar. Terminó diciendo gracias, una sola vez, con una voz que explicó lo demás.`],
 ['Bromear con fundar un sindicato de protagonistas y diosas.',{bonds:{mirel:2},chaos:2,flags:['sindicato']},`P|Primera demanda: vacaciones. Segunda: ningún despido puede ir acompañado de una cuenta atrás luminosa. Es pésima comunicación corporativa.
M:happy|Tercera: las tazas deben poder calentarse sin intervención heroica.
V|La risa llegó entre lágrimas pequeñas. No borró el miedo, pero le dio a Mirel una forma de hablar sin sentirse derrotada.
P|Podemos redactar el manifiesto después de salvar el mundo. Tengo experiencia reciente con formularios hostiles.`]
],'c6-1');

addScene('c6-1',6,'Un expediente que pesaba demasiado','tavern',['mirel'],`
V|Mirel pidió hablar contigo antes de buscar la escalera antigua. Te recibió en una habitación sencilla, con el cabello recogido y el halo apagado sobre la mesa como una lámpara sin aceite.
M:serious|Hay algo que debí contarte antes. Tu llegada no fue un encargo de asesinato. El accidente de tu mundo ya había ocurrido cuando apareciste en el registro. Pero Severin te eligió entre otras almas que buscaban una segunda oportunidad.
P|Porque era compatible con el permiso de edición.
M|Sí. Yo aprobé el traslado. Pensé que te ofrecíamos ayuda y que tú podrías ayudar a Auralia. No sabía que estaba diseñando tus encuentros para convertirte en un ancla.
V|Dejó ante ti el formulario original. Tu nombre estaba acompañado de una nota: «Alta propensión a crear vínculos mediante el humor. Riesgo de apego: aprovechable».
P|Qué manera tan desagradable de describir que intento caerle bien a la gente.
M:shy|No te pido que me perdones deprisa. Quería que conocieras la parte que me corresponde, aunque cambie lo que piensas de mí.
V|Habías llegado buscando una explicación del mundo. Ahora una persona te ofrecía una explicación de su error sin esconderse detrás de él.
P|Necesito saber si queda algo más que debamos conocer antes de subir.
M|Una cosa. Tu poder no depende de Severin. Depende de tu comprensión. Si renuncias al permiso de administrador, conservarás la capacidad de editar objetos pequeños. Él mintió al decir que se quedaría con todo.
`,[
 ['Guardar el formulario y agradecer su honestidad.',{bonds:{mirel:3},trust:3,clues:['Mirel confirma que el accidente ocurrió antes de la selección. El poder puede conservarse a pequeña escala al renunciar al permiso de administrador.'],flags:['verdad-mirel']},`P|Estoy enfadado con lo que hicieron. También veo que estás ayudándome a descubrirlo, incluso cuando te deja mal. Las dos cosas caben en la misma conversación.
M:shy|Temía que solo pudieras quedarte con una.
V|Guardaste el formulario junto a las pruebas. Mirel retiró la mano despacio, como si acabara de soltar un peso que llevaba demasiado tiempo sujetando sola.
P|Vamos a usar la verdad para abrir una salida. No otra celda.`],
 ['Decir que necesitas tiempo, pero seguirás trabajando con ella.',{trust:3,bonds:{mirel:1},flags:['mirel-tiempo']},`P|Te creo. Y aun así necesito un rato para ordenar lo que siento. No quiero darte una respuesta bonita solo para que dejemos de estar incómodos.
M|Es justo. Gracias por decirlo sin fingir que todo está resuelto.
V|Acordasteis seguir compartiendo información y dejar la conversación personal abierta. La confianza no creció de golpe, pero dejó de depender de una omisión.
P|Primero detenemos el plan. Después encontraremos tiempo para esto.`],
 ['Asegurarle que su decisión actual importa más que su cargo.',{bonds:{mirel:3},trust:2,flags:['mirel-persona']},`P|Cuando podías volver a tu escritorio y fingir que no era asunto tuyo, te quedaste. Eso lo elegiste tú.
M:shy|No quería que te convirtieran en una herramienta. Ni a ti ni a las demás.
V|Te miró por fin sin consultar el formulario. Su expresión seguía siendo insegura, pero ya no buscaba una instrucción que le dijera qué debía sentir.
P|Entonces subiremos como personas. El departamento puede esperar su turno.`]
],'c6-2');

addScene('c6-2',6,'Un desayuno fuera del reglamento','tavern',['mirel','nara'],`
V|Antes de partir, Nara insistió en que Mirel comiera. La diosa eligió pan, luego cambió de opinión, después pidió permiso para escoger también fruta.
N:happy|No existe una cantidad reglamentaria de desayuno. Sí una cantidad que te dará dolor de barriga, pero esa la descubrirás como todo el mundo.
M:shy|Siempre había bandejas preparadas. Nunca pensé en quién elegía lo que llevaban.
P|Hoy puedes empezar una rebelión con mermelada. Me parece un buen tamaño de revolución.
V|Mirel probó una tostada y dejó un pequeño rastro de dulce junto a la boca. Nara señaló discretamente la servilleta; tú tardaste un segundo de más en encontrar una frase normal.
M:shy|¿Tengo algo en la cara?
P|Una prueba contundente de que las tostadas son más peligrosas de cerca.
N:happy|Qué explicación tan transparente. Voy a fingir que necesito revisar la cocina durante unos minutos.
V|Cuando Nara se marchó, el ruido de la posada quedó al otro lado de una burbuja tranquila. Mirel apartó la tostada y se rio de su propia torpeza.
M|Si salimos de esto, me gustaría tener un día que no sea importante para nadie más. Un día pequeño. ¿Eso tiene sentido?
`,[
 ['Invitarla a pasar un domingo contigo.',{bonds:{mirel:4},flags:['domingo']},`P|Mercado, comida y un paseo sin objetivos. Podemos perdernos un poco. De forma voluntaria, para variar.
M:shy|¿Me lo estás proponiendo como guía de adaptación o como...?
P|Como una cita, si quieres. Si prefieres empezar por un paseo, también me alegrará.
M:happy|Quiero la cita. Y quizá necesite preguntar qué se hace en una, pero intentaré que eso sea parte de la diversión.`],
 ['Preguntarle qué le gustaría hacer por sí misma.',{bonds:{mirel:3},trust:2,flags:['mirel-libertad']},`M|Aprender a cocinar algo que no salga de una bandeja. Comprar una planta. Descubrir si me gusta leer por placer o si solo me gusta corregir documentos.
P|Podemos probar las tres cosas. Si la planta sobrevive a la cocina, tendremos un buen comienzo.
V|Mirel anotó sus deseos en el reverso de una orden de suspensión. Las palabras ocuparon poco espacio y, sin embargo, parecieron cambiar el documento entero.`],
 ['Inventar un reglamento absurdo para días libres.',{bonds:{mirel:2},chaos:2},`P|Artículo uno: queda prohibido optimizar la felicidad. Artículo dos: se permite pedir otro bollo. Artículo tres: las siestas no requieren informe.
M:happy|Solicito una enmienda. Los abrazos podrán concederse sin formulario previo, siempre que se pregunten primero.
P|Aprobada por unanimidad. ¿Quieres uno?
V|Mirel asintió. El abrazo duró lo suficiente para que ambas bromas dejaran de ser solo bromas.`]
],'c6-3');

addScene('c6-3',6,'La escalera que olvidaron borrar','forest',['lys','kaida'],`
V|La escalera antigua comenzaba detrás del arco de Brumo y subía hacia una isla apenas visible entre las nubes. No tenía barandilla continua, un detalle que tu cuerpo consideró importante desde el primer peldaño.
P|En mi mundo habría una inspección, tres carteles y alguien explicando que el presupuesto no permite reparar la baranda.
B|Aquí tenemos un cartel. Se lo llevó el viento.
K:serious|Cuerdas entre todos. Nadie avanza más allá de donde pueda ver. Si una losa cambia, esperamos la señal de Lys.
V|Lys comparaba el atlas de su maestra con las piedras reales. Algunas no coincidían; otras seguían una ruta que el libro marcaba como imposible.
L|Tengo que corregirlo. He pasado años tratando este mapa como si no pudiera equivocarse, pero el mundo cambió y ella no tuvo tiempo de verlo.
P|Añadir algo tuyo no borra lo que te enseñó.
V|Lys abrió el cuaderno por una página limpia. Dibujó una línea nueva, firme, sin pedir disculpas al papel. Nara se encargó de atar las provisiones a una cuerda aparte.
M|La escalera llega a un acceso de mantenimiento. Severin no lo cerró porque su versión del mapa da por hecho que ya no existe.
P|Magnífico. Vamos a derrotar el control absoluto mediante documentación desactualizada.
`,[
 ['Ayudar a Lys a trazar la nueva ruta.',{bonds:{lys:3},trust:2,flags:['atlas-nuevo']},`V|Sostuviste la hoja contra el viento mientras Lys medía los intervalos. Añadió tres apoyos que no aparecían en ningún registro y marcó un descanso seguro.
L:happy|Es la primera página que no intento terminar por alguien más.
P|Entonces necesita una firma. Y quizá un dibujo de nuestras caras aterrorizadas para la edición ilustrada.
V|Lys firmó su nombre. Debajo escribió: «Camino descubierto en buena compañía».`],
 ['Cubrir la retaguardia con Kaida.',{bonds:{kaida:3},trust:1,flags:['retaguardia']},`V|Kaida comprobó los nudos y te enseñó a anclar la cuerda sin bloquear a los demás. Cuando te temblaron las manos, no hizo ninguna broma.
K|La valentía no exige que dejes de tener miedo. Exige que no ocultes cuándo necesitas apoyo.
P|En ese caso mi valentía está solicitando apoyo de manera bastante visible.
V|Ella apoyó su mano sobre la tuya hasta que el nudo quedó firme. Seguisteis avanzando al mismo ritmo.`],
 ['Aligerar las mochilas y animar al grupo.',{bonds:{nara:2,mirel:1},chaos:1,flags:['mochilas']},`V|Editaste el peso de cada mochila por turnos, esperando a recuperar el movimiento entre una y otra. Nara te ofreció caramelos como pago inmediato.
P|No acepto dinero por ayudar a mis amigas. El azúcar está en una categoría ética diferente.
M:happy|Lo registraré como compensación emocional con sabor a limón.
V|La subida no se volvió fácil, pero sí un poco menos pesada. A veces un gran poder resultaba útil precisamente por no hacer nada espectacular.`]
],'c6-4');

addScene('c6-4',6,'La puerta de las cinco firmas','palace',['mirel','lys'],`
V|El acceso de mantenimiento era una puerta sin cerradura. Tenía cinco espacios luminosos y una inscripción sencilla: «Declara por qué has venido».
P|Si esto es otra entrevista de trabajo, quiero saber el salario antes de hablar de mis debilidades.
L:serious|Es anterior al sistema de Severin. Cada persona debe expresar una intención propia. La puerta no exige que sean iguales.
K|He venido a proteger a mi ciudad y a quienes me acompañan.
N|Yo quiero que ningún contrato esconda la vida entera de alguien. También me gustaría que mi posada siguiera teniendo una calle delante.
L|Quiero que los mapas vuelvan a mostrar opciones. Y aprender a elegir las mías.
M:shy|Yo he venido porque quiero quedarme. Por primera vez no tengo una orden que lo justifique.
V|Cuatro espacios brillaron. El quinto esperaba tu voz. No parecía interesado en tus estadísticas ni en el número de adversarios derrotados.
P|Vale. Una pregunta seria. Intentaré no esconder toda la respuesta dentro de un chiste.
`,[
 ['«Quiero que podamos elegir, incluso si elegimos distinto».',{trust:4,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['eleccion']},`V|La quinta firma se encendió sin ruido. La puerta se abrió lo suficiente para dejar pasar la luz, como si hubiera estado esperando una frase que nadie decía desde hacía mucho tiempo.
M:happy|Esa era la función original de los umbrales. Permitir que una vida continuara, no decidir hacia dónde.
P|Entonces hagamos que vuelva a estar de moda.
V|Cruzasteis juntos, cada uno llevando una razón distinta que no necesitaba imponerse sobre las demás.`],
 ['«Quiero proteger el hogar que estoy empezando a encontrar».',{trust:3,bonds:{kaida:1,nara:1},flags:['hogar']},`V|La puerta mostró durante un instante la posada, la fuente y la mesa compartida. Ninguna imagen era grandiosa. Todas te importaban.
N:shy|Pues habrá que cuidar ese hogar. Tiene clientes exigentes y un nombre pésimo para el equipo de mantenimiento.
P|Acepto las críticas si incluyen desayuno.
V|La puerta se abrió. Kaida tocó tu hombro al pasar, un gesto breve que parecía prometer lo mismo.`],
 ['«Quiero dejar de ser una pieza del plan de otro».',{trust:2,chaos:1,flags:['independencia']},`V|El sello de tu muñeca brilló con fuerza y luego se calmó. La puerta reconoció la intención sin pedirte que la volvieras más amable.
L|Eso también es una razón válida. No tienes que querer salvarlo todo para merecer tu propia vida.
P|Menos mal. Mi segunda razón era disponer de una semana sin secuestros.
V|El umbral se abrió. Entrasteis en una parte del palacio que Severin había olvidado que podía decir que sí.`]
],'c6-5');

addScene('c6-5',6,'Cinco minutos sin profecía','palace',['nara','kaida'],`
V|La galería de mantenimiento llevaba a una sala de descanso con bancos, mantas y un antiguo conducto de agua caliente. El polvo sugería que nadie la usaba desde hacía años.
N|Una civilización que inventó islas flotantes también entendía la necesidad de sentarse. Me reconcilia con su arquitectura.
V|Os lavasteis el polvo de las manos y cambiasteis las capas mojadas por mantas. Un biombo separaba el rincón de aseo; Nara colocó un cartel improvisado para que el protagonista no cometiera un error estadísticamente previsible.
P|Agradezco la prevención. Mi sentido de la orientación no debe convertirse en un incidente diplomático.
K:shy|Tu camisa está del revés. No te lo dije en la escalera porque ya tenías suficientes problemas.
V|Intentaste corregirla bajo la manta y acabaste atrapado con un brazo fuera. Lys quiso ayudarte, Nara se rio y Mirel preguntó si esto era una costumbre de tu mundo.
P|Sí. Se llama conservar un mínimo de misterio mientras pierdes toda autoridad.
V|Cuando recuperaste el control del cuello de la camisa, las cuatro seguían sonriendo. La amenaza del cielo no había desaparecido; por eso aquellos minutos resultaban tan necesarios.
N:shy|Cuando todo acabe, me gustaría tener más tardes así. Con menos polvo y mejores condiciones para el coqueteo, si puede ser.
`,[
 ['Admitir que también disfrutas estar con ellas.',{trust:2,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['tardes']},`P|La aventura tiene un catálogo de problemas importante. La compañía está compensando mucho más de lo que esperaba.
L:shy|Puedes decirlo sin mencionar el catálogo.
P|Me gusta estar con vosotras. Incluso cuando me estáis viendo perder una pelea contra una camisa.
V|La sencillez de la frase dejó más silencio que cualquiera de tus bromas. Era un silencio agradable.`],
 ['Prometer organizar una excursión sin misión secreta.',{trust:2,bonds:{kaida:2,lys:1},flags:['excursion']},`P|Bosque, comida y un destino que no incluya ruinas peligrosas. Si encontramos una profecía, la dejamos para otro grupo.
K:happy|Apoyo la propuesta. Llevaré una manta que nadie tenga que usar como escudo.
L|Y yo un cuaderno sin escalas. Quiero dibujar cosas que no necesiten resolverse.
V|Nara se ofreció a preparar la comida y Mirel pidió aprender. El plan era pequeño, concreto y posible.`],
 ['Retarlas a adivinar la próxima referencia cinematográfica.',{chaos:2,bonds:{nara:2,mirel:1}},`P|Estamos bajo un palacio volador, enfrentándonos a un hombre que quiere controlar el destino. ¿Qué diría ahora un héroe de mi mundo?
N:happy|«Tengo un mal presentimiento».
K|«Manteneos juntos».
M:happy|«¿Esto incluye horas extra?»
V|Decidiste que Mirel ganaba. La risa terminó justo cuando el suelo empezó a vibrar con la preparación de la tercera campana.`]
],'c6-6');

addScene('c6-6',6,'La red aprende a tener miedo','palace',['lys','mirel'],`
V|En la galería superior, el Telar ocupaba toda una sala. Hilos de luz recorrían el suelo y ascendían hasta un trono suspendido dentro de tres anillos giratorios.
L:serious|No está completo. Necesita tu firma para convertir sus sugerencias en una regla permanente.
M|Pero puede usar la energía acumulada para cerrar los caminos antes de que te decidas. La tercera campana no sellará el plan; sellará la ciudad dentro de su campo.
P|Nos ha invitado a una negociación después de bloquear las salidas. Qué considerado.
V|Encontrasteis un panel antiguo bajo las nuevas conexiones. El modo de apertura repartía el control entre las firmas de los ciudadanos. El modo actual lo concentraba en una sola persona.
N|Si recuperamos la apertura, cada uno podrá retirar su firma. Pero alguien tiene que mantener quietos los anillos mientras haces el cambio.
K|Yo puedo sostener la primera línea. Brumo puede llegar desde abajo si le damos una señal. Necesitaremos que la ciudad nos escuche.
V|Mirel tocó el panel. Aún conservaba un permiso pequeño: leer la estructura original. Era suficiente para mostrarte dónde estaba la regla que había que cambiar.
M:serious|Al renunciar al control central perderás la autoridad de administrador. No tu vida ni tus recuerdos. Quedará un don más limitado. Tienes derecho a conocer el precio antes de elegir.
P|Poder infinito o una vida que no necesite mandar sobre las demás. Me parece una comparación bastante reveladora.
`,[
 ['Preparar la restauración con el grupo.',{trust:3,bonds:{mirel:1,lys:1},flags:['plan-restaurar']},`V|Repartisteis tareas por escrito. Lys leería los hilos, Nara abriría el panel, Kaida cubriría el avance y Mirel mantendría la instrucción original visible.
P|Yo tocaré la regla y contaré hasta tres. Nuestro plan final depende de una habilidad que domina la mayoría de los niños, lo cual mejora mucho mis posibilidades.
K:happy|Y de no improvisar en el último segundo.
V|Aceptaste esa parte con la solemnidad que merecía.`],
 ['Buscar primero cómo avisar a toda la ciudad.',{trust:3,bonds:{nara:1,kaida:1},flags:['plan-publico']},`V|Nara encontró la conexión de los faroles. Podríais transmitir pruebas o instrucciones desde el mismo lugar donde Severin pensaba anunciar su victoria.
P|Le hemos alquilado el escenario sin avisar. Me parece una venganza proporcionada.
L|Si la gente entiende lo que ocurre, la apertura tendrá sentido. No basta con devolverles una puerta que nadie sabe que existe.
V|Mirel memorizó la frecuencia. El plan ya incluía las voces de quienes vivían debajo del palacio.`],
 ['Estudiar el trono para descubrir su punto débil.',{chaos:1,trust:1,flags:['trono-estudiado']},`V|El trono no era una fuente de poder. Era una interfaz que convertía a su ocupante en responsable de todas las instrucciones. Su aparente omnipotencia ocultaba una condena al trabajo perpetuo.
P|Un sillón ergonómico para convertirse en becario del universo. Debí reconocer el patrón.
M:serious|Severin cree que podrá gestionar cada decisión. No entiende cuántas vidas intenta sostener con una sola voluntad.
V|Anotaste el mecanismo de liberación. Incluso si alguien se sentaba allí, aún podría renunciar.`]
],'c7-1');
