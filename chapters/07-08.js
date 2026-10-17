addScene('c7-1',7,'Todo lo que trajimos hasta aquí','palace',['lys','nara'],`
V|Antes de acercaros al núcleo, extendisteis las pruebas sobre un banco de piedra. Algunas eran documentos completos; otras, recuerdos y marcas copiadas con prisas. Ninguna bastaba por sí sola para explicar todas las decisiones de Severin.
L|Tenemos que distinguir lo que sabemos de lo que suponemos. Que una coincidencia nos haya acercado no convierte cada sentimiento en una falsificación.
P|Ni mi llegada en una invitación a utilizarme. Las dos cosas pueden ser verdad a la vez.
N:serious|Quiero que quede claro que yo elegí venderos cenas demasiado caras por voluntad propia. Mi reputación profesional lo exige.
V|La broma consiguió una sonrisa, pero el cansancio seguía ahí. Habíais cruzado caminos que cambiaban, aprendido un poder peligroso y empezado a confiar en personas a las que un extraño había puesto en vuestra ruta.
[foto]V|Nara dejó el retrato del festival entre los papeles. Nadie había pedido a la cámara una sonrisa concreta. Cada cara recordaba una decisión distinta.
[!foto]V|Lys dibujó cinco pequeños puntos en una esquina de la hoja. No los unió todavía. Esta vez quería que la conexión se pareciera a lo que vosotros decidierais.
M|La red puede repetir encuentros. No puede explicar por qué alguien te ofrece su silla cuando no hay nadie mirando.
[silla]M:shy|Lo recuerdo muy bien.
K|Entonces dejamos de discutir si nuestra vida empezó donde otro quería. Decidamos cómo continúa.
`,[
 ['Revisar las pruebas con Lys, sin saltar a conclusiones.',{bonds:{lys:2},trust:3,flags:['pruebas-ordenadas']},`V|Separasteis órdenes, firmas y observaciones. Lys descartó dos hipótesis atractivas que no podíais demostrar y dejó un argumento sencillo que sí resistía las preguntas.
P|Menos monólogo de detective, más hechos comprobables. Mi sombrero imaginario lo lamenta, pero lo entiendo.
L:happy|Puedes llevar el sombrero si no hace que dejes de escuchar.
V|Guardó la última copia en tu diario. Las pruebas ya tenían un orden que otra persona podría seguir.`],
 ['Agradecer a cada una algo concreto que haya elegido hacer.',{trust:3,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['gratitud']},`P|Lys me dio una explicación. Kaida me enseñó a no morir por segunda vez. Nara me ofreció un lugar. Mirel volvió cuando podría haber cerrado mi expediente.
N:shy|Así dicho, parece que te estamos saliendo bastante rentables.
V|Nadie convirtió tus palabras en una deuda. Las aceptaron como un reconocimiento y luego te recordaron que tú también habías estado allí cuando lo necesitaron.
K:happy|Ahora intenta no arruinar el momento con una entrada heroica sin cuerda.`],
 ['Aceptar que no podrás comprenderlo todo antes de actuar.',{trust:2,chaos:1,flags:['incertidumbre']},`P|No tengo una explicación perfecta de lo que siento ni una estrategia infalible. Sí sé que el plan de Severin quita opciones a gente que no aceptó participar.
M|Es suficiente para empezar. La certeza absoluta no debería ser el precio de una decisión.
V|Lys cerró el cuaderno. Nara guardó las monedas. Kaida ajustó su escudo. Vuestras dudas no habían desaparecido; habían dejado de impedir que os movierais.`]
],'c7-2');

addScene('c7-2',7,'Los personajes que no eran de relleno','palace',['kaida','nara'],`
V|Un golpe suave sacudió el balcón de servicio. Brumo apareció bajo la baranda, con Tilda sentada entre sus alas y una caja de herramientas atada al lomo.
T|El acceso de abajo está evacuado. La guardia sostiene las calles. Yo traje las herramientas porque los héroes rara vez recuerdan una llave del tamaño correcto.
P|Agradezco el apoyo y la crítica, especialmente porque es justa.
B|Y yo traje comida. Si el mundo va a cambiar de reglas, prefiero no presenciarlo en ayunas.
V|Tilda, una joven enana de brazos firmes y delantal amarillo, examinó los conectores del Telar. El festival no era solo una fiesta para ella: cada mecanismo había pasado por sus manos.
T:serious|Me vendieron estos cristales como reguladores de viento. Cuando pedí planos, me dijeron que no eran asunto mío. La próxima vez pensaré peor de una respuesta así.
N|Guarda las facturas. Tenemos un consejero que necesita muchas explicaciones y una tolerancia limitada a los recibos.
B|Yo llevo siglos vigilando una puerta. También tardé demasiado en preguntar por qué estaba atacando a gente que solo quería pasar.
V|Los miraste. La historia no pertenecía únicamente al extraño de otro mundo y a sus compañeras. Había vidas enteras alrededor del conflicto, cada una con sus errores, sus ganas y sus propias razones para ayudar.
`,[
 ['Pedir a Tilda que documente los cambios en los cristales.',{trust:3,clues:['Tilda conserva los planos de los reguladores del festival: Aurora añadió controles de rutas que no figuraban en el pedido original.'],flags:['tilda-prueba']},`T:serious|Aquí está el plano original. Este conector debía mover aire, no personas. El módulo añadido lleva el sello del despacho de Severin.
V|Tilda copió el número de pieza y firmó su declaración. No parecía impresionada por el palacio; estaba enfadada porque habían utilizado su trabajo para hacer daño.
P|Tu informe tiene más fuerza que mi próximo discurso. Lo digo con cierta tristeza profesional.
T:happy|Entonces tú distraes y yo arreglo. Es una división de tareas excelente.`],
 ['Pedir a Brumo que proteja el paso de evacuación.',{trust:3,flags:['brumo-paso']},`B|Eso sí es una instrucción de guardián. Mantener un camino abierto. Empezaba a olvidar que podía significar algo así.
V|El dragón se acomodó bajo la escalera rota y extendió un ala como plataforma. Los guardias de Kaida comenzaron a organizar la retirada por allí.
P|Primer puente con merienda incluida. El turismo va a cambiar para siempre.
B|Cobro en bollos. Dos por viaje. Uno si hay una buena historia.`],
 ['Delegar las herramientas y ofrecer ayuda donde falte.',{trust:4,flags:['secundarios']},`P|No sé reparar ese panel. Tilda sí. No puedo sostener la escalera. Brumo sí. Mi plan consiste en dejar de estorbar a los especialistas.
T:happy|Al fin un héroe con un poder útil.
V|Organizasteis materiales, señales y relevos. La tarea dejó de depender de cinco personas agotadas y empezó a parecerse al trabajo de una ciudad.
N:happy|Me gusta esta versión de tu leyenda. Tiene menos poses y mejores resultados.`]
],'c7-3');

addScene('c7-3',7,'La oferta de una vida sin errores','palace',['mirel','lys'],`
V|Severin os esperaba junto al trono. No parecía sorprendido de veros. Sí parecía molesto al descubrir que Tilda había abierto un panel que él consideraba inaccesible.
S|Podríamos haber evitado todo este esfuerzo. Solo intento construir un mundo donde la gente no se pierda por accidente.
P|Yo también preferiría que los accidentes dejaran de decidir vidas. La parte que discutimos es que tú quieras decidir todas las demás cosas.
S|Tu mundo te dejó morir en una calle. Aquí puedes tener poder, un hogar y personas que te quieran. ¿Por qué rechazarías una oportunidad de asegurar que nada vuelva a salir mal?
L:serious|Porque no puedes garantizar una relación sin quitarle a alguien la posibilidad de marcharse.
V|Severin miró a Lys como si su objeción fuera una avería. Después activó el trono. Sobre el cristal aparecieron escenas tentadoras: días felices, romances sin discusiones, una ciudad que siempre aplaudía.
S|No tendrías que dudar nunca de lo que sienten por ti.
M:serious|Solo tendrías que dudar de si alguna vez les permitiste sentir otra cosa.
V|Durante un segundo quisiste que la oferta fuera verdadera. Una vida sin miedo a perder a nadie tenía una fuerza que ninguna broma podía borrar. Reconocerlo te ayudó a entender por qué era peligrosa.
P|A veces una trampa no parece horrible. Parece exactamente lo que te gustaría no tener que temer.
`,[
 ['Reconocer la tentación y rechazar sus condiciones.',{trust:4,bonds:{lys:1,mirel:1},flags:['rechaza-garantia']},`P|Quiero que me quieran. También quiero que esa respuesta sea suya. Si tengo que fabricar la segunda parte para conseguir la primera, no habré conseguido lo que buscaba.
V|Las imágenes del trono vacilaron. Severin había previsto rechazo moral, pero no una respuesta que admitiera el deseo sin obedecerlo.
S|Prefieres sufrir.
P|Prefiero vivir con personas, no administrar sus finales.`],
 ['Preguntar qué pérdida lo llevó a intentar controlar el mundo.',{trust:3,flags:['severin-pasado']},`S|Mi hermano partió por un camino que yo le recomendé. Una tormenta destruyó el puente. Llevo años preguntándome qué habría pasado si hubiera elegido por él de otra manera.
P|Lo siento. Pero convertir a todo el mundo en una decisión tuya no hará que aquella decisión deje de doler.
V|Severin apartó la mirada. Por primera vez su plan dejó ver el miedo que lo sostenía. Comprenderlo no hizo aceptables sus métodos, pero sí más humanos.
M|Podemos detener esto sin pedirte que finjas que nunca lo perdiste.`],
 ['Señalar el costo oculto de su supuesto paraíso.',{trust:2,chaos:1,flags:['precio-trono']},`P|El trono me convertiría en responsable de cada decisión. Me vendes poder absoluto con jornada completa, guardias nocturnas y cero vacaciones.
N:happy|He leído contratos abusivos con mejor presentación.
V|Tilda soltó una carcajada desde el panel. Severin perdió la paciencia, y la luz del Telar se volvió demasiado blanca.
S|Si no entiendes lo que te ofrezco, tendré que mostrarte lo que está en juego.`]
],'c7-4');

addScene('c7-4',7,'Lo que elegimos sostener','palace',['kaida','nara'],`
V|Las columnas de luz se inclinaron. El palacio descendió unos metros y el suelo vibró bajo vuestros pies. Severin estaba consumiendo la energía de sustentación para acelerar el cierre.
K:serious|Está poniendo a toda la ciudad debajo de su apuesta. Tilda, separa el circuito de vuelo. Brumo, necesito que sostengas el acceso.
T|Puedo cortar la conexión, pero primero alguien tiene que asegurar los anillos. Si chocan entre sí, perderemos el núcleo.
N|Hay cuatro mecanismos en los balcones. Dos están cerrados, uno está al descubierto y el último necesita el permiso de Mirel.
M|El permiso grande ya no existe. El pequeño aún puede servir si alguien me cubre.
V|Lys abrió su nuevo mapa. Ninguna ruta llevaba directamente al centro. Tendríais que cooperar mientras el suelo intentaba separar al equipo.
P|Esta es la parte en la que digo que tengo un plan. Por suerte, ya lo escribimos y no depende de que improvisemos una amistad explosiva.
K:happy|Excelente. Me gustan los planes que recuerdan su propio contenido.
V|Nara te tendió la cuerda. Mirel respiró hondo. Lys te miró por encima del cuaderno y sonrió con una mezcla de miedo y decisión.
`,[
 ['Seguir las señales del equipo y asegurar los anillos.',{trust:4,bonds:{kaida:1,lys:1},flags:['anillos-seguros']},`V|Kaida cubrió el primer mecanismo; Nara abrió el segundo; Lys calculó el intervalo para que Mirel cruzara al cuarto. Tú reforzaste la unión del tercero y contaste tus segundos.
P|Uno, dos, tres. Nunca pensé que mi habilidad final fuera respetar un turno.
V|Los anillos dejaron de acercarse. El palacio seguía descendiendo, pero Tilda ya podía separar el circuito sin destruirlo.
K|Buen trabajo. Ahora tenemos una oportunidad real, no solo una frase bonita.`],
 ['Ayudar a Mirel a mantener su último permiso.',{bonds:{mirel:3},trust:2,flags:['permiso-sostenido']},`V|Mirel sostuvo el sello con ambas manos. Su luz temblaba. Le recordaste que no estaba intentando demostrar que merecía un cargo: estaba haciendo una tarea concreta con gente que la apoyaba.
M:serious|Puedo abrirlo. Tres segundos. Exactamente como tú.
P|Entonces cuento contigo. Y cuento para ti.
V|Al terminar, el cuarto mecanismo se abrió. Mirel cayó contra tu hombro, agotada, mientras Kaida aseguraba el paso a vuestro alrededor.`],
 ['Improvisar una cuerda móvil entre los balcones.',{chaos:3,bonds:{nara:3},flags:['tirolina']},`N:happy|No me digas que estás pensando en una tirolina.
P|Estoy pensando en un sistema de transporte por cable con un nombre heroico pendiente.
V|Nara lanzó el gancho. Aligerasteis los cierres y cruzasteis de un lado a otro entre protestas de Kaida y un grito especialmente poco digno al aterrizar.
T|Funciona. Odio admitirlo, pero funciona.
V|Los mecanismos quedaron asegurados. Añadiste «revisar el frenado» a la lista de mejoras que harías si sobrevivías.`]
],'c7-5',{magic:true});

addScene('c7-5',7,'Una respuesta de cada una','palace',['lys','mirel'],`
V|Tilda necesitaba unos minutos para estabilizar el palacio. Os refugiásteis tras una columna donde el ruido de los anillos se parecía a una lluvia lejana.
L:shy|Cuando salgamos de aquí, quiero hacer mi propio atlas. No sé si venderá mucho. Quiero hacerlo igualmente.
K|Yo voy a formar relevos. Mi ciudad necesita una guardia, no una persona que nunca duerme.
N|Quiero un lugar al que regresar sin sentir que quedarme me convierte en una deuda. Quizá conserve la posada. Quizá compre una caravana. Esta vez lo elegiré con calma.
M|Yo quiero empezar. Todavía no sé con qué. Descubrirlo está resultando menos aterrador cuando lo digo en voz alta.
V|Todas te miraron. El Telar seguía ofreciendo un futuro terminado a pocos metros. Frente a ti había cuatro futuros incompletos, ninguno hecho para encajar sin esfuerzo en el tuyo.
P|Creo que el error de Severin fue pensar que una buena historia no podía tener conversaciones difíciles.
N:happy|O personajes que cambiaran de opinión. Lo habría llevado fatal con mis proveedores.
V|Reísteis, pero la pregunta seguía allí: qué estabas dispuesto a prometer ahora que sabías que no podrías controlar la respuesta.
`,[
 ['Hablar con franqueza de afectos y de una posible relación compartida.',{trust:3,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['honesto','conversacion-compartida']},`P|Siento cosas por más de una. Si alguna vez queremos explorar algo compartido, tendría que ser con acuerdos claros, sin dar por hecho que todas queréis lo mismo.
K|Y con tiempo individual, límites y espacio para cambiar de idea.
N|Nada de títulos de propiedad ni colecciones de novias. Cada vínculo merece su propia conversación.
M:shy|Me gustaría poder hablarlo después, sin una campana contando los minutos.
V|Lys asintió. No era un compromiso cerrado. Era permiso para una conversación que no ocultara nada a nadie.`],
 ['Prometer que pedirás una cita con claridad cuando termine todo.',{trust:3,flags:['cita-clara']},`P|Quiero invitar a alguien porque me importa, y escuchar su respuesta sin convertirla en un premio por salvar el reino.
L:shy|Eso facilita bastante decir que sí cuando una quiere decirlo.
N:happy|Y decir que no sin temer una crisis diplomática. Aprobado.
V|La promesa dejó espacio para varias sonrisas distintas. No necesitabas resolverlo allí para saber que valía la pena llegar al momento de preguntarlo.`],
 ['Decir que también quieres aprender a vivir por tu cuenta.',{trust:3,bonds:{nara:1,mirel:1},flags:['vida-propia']},`P|Me importáis. Y quizá todavía necesite descubrir quién soy aquí antes de construir una relación. No quiero enamorarme por miedo a quedarme solo.
M|Eso también puede ser una forma de empezar bien.
K:happy|Seguirás teniendo gente que te invite a cenar. No todo afecto necesita la misma etiqueta.
V|El alivio no vino de una promesa romántica, sino de comprobar que pertenecer al grupo no dependía de elegir una.`]
],'c7-6');

addScene('c7-6',7,'El último paso del héroe provisional','palace',['kaida','lys'],`
V|Tilda levantó una mano: el circuito de sustentación estaba separado. Brumo rugió desde la base, confirmando que el paso de evacuación seguía abierto.
T:happy|El palacio no caerá hoy. Si alguien quiere volver a usarlo para una conspiración, primero necesitará mi autorización y un presupuesto firmado.
P|Me gustaría que todas las amenazas al mundo tuvieran que pasar por ti.
V|Severin intentó cerrar la sala, pero los ciudadanos que habían retirado sus firmas dejaron huecos en la red. La ciudad ya no obedecía como una sola máquina.
[salidas-abiertas]L:happy|Las salidas que abrimos en el festival están funcionando. Cada firma retirada afloja otro hilo.
[!salidas-abiertas]L|Tilda está abriendo las salidas de emergencia desde abajo. No será inmediato, pero la gente empieza a encontrar opciones.
[brumo-amigo]B|¡El camino sigue abierto! ¡Y alguien me debe una cantidad histórica de bollos!
[!brumo-amigo]B|¡Mantened el paso! Por fin un trabajo que no exige recitar enigmas defectuosos.
K|Cuando cruces, cubriremos tus tres segundos. Después tendrás que elegir qué hacer con el núcleo.
V|Miraste tu sello. Ya no te parecía una prueba de que eras especial. Era una herramienta que habías aprendido a utilizar con ayuda de otras personas.
P|Vamos. Que nadie diga que dejamos una buena cena esperando por culpa del destino.
`,[
 ['Cruzar con el equipo, siguiendo el plan.',{trust:3,bonds:{kaida:1,lys:1},flags:['final-equipo']},`V|Lys señaló el intervalo, Kaida abrió el paso y Nara te sostuvo la cuerda. Mirel caminó junto a ti hasta el borde del núcleo.
M|A partir de aquí, la firma es tuya. La ayuda sigue siendo nuestra.
P|Es una combinación bastante mejor que poder infinito y soledad.
V|Entraste en el círculo. Por primera vez, el Telar esperó una respuesta que no sabía predecir.`],
 ['Pedir que transmitan lo que ocurra a la ciudad.',{trust:3,bonds:{mirel:1,nara:1},flags:['final-testigos']},`P|Nada de un héroe entrando en una sala y saliendo con una explicación imposible de comprobar. Que la gente vea lo que estamos haciendo.
V|Mirel conectó los faroles. Tilda abrió el canal del festival y las voces de la plaza llegaron como un murmullo cálido.
N:happy|Buen momento para recordar que las amenazas grandiosas también quedan grabadas.
V|Severin apretó los labios. Había construido un escenario para su victoria y ahora tenía público para una decisión ajena.`],
 ['Dar una última arenga breve y entrar.',{chaos:1,trust:2,bonds:{nara:1}},`P|No tengo una frase perfecta. Tengo miedo, tengo hambre y tengo muy buena compañía. Eso tendrá que bastar.
K:happy|Por una vez has acertado con la longitud del discurso.
V|Nara chocó su mano con la tuya. Lys sonrió. Mirel levantó el mentón como alguien que ya no esperaba permiso para estar allí.
V|Cruzaste el umbral con el eco de sus pasos detrás. La escena final tenía menos soledad de la que prometían las leyendas.`]
],'c8-1');

addScene('c8-1',8,'El trono también era una pregunta','palace',['mirel'],`
V|El núcleo se abrió como una página en blanco. Ante ti aparecieron tres órdenes: RESTAURAR, TRANSFERIR, CENTRALIZAR. Severin extendió la mano hacia la última.
S|Aún puedes aceptar. No eres una víctima si eliges el poder. Puedes dirigirlo mejor que yo, si eso te tranquiliza.
P|La oferta de «serás un jefe absoluto más simpático» tiene un historial narrativo espantoso.
V|Mirel leyó las opciones contigo. Restaurar devolvía el control a cada firma. Transferir permitía mostrar el registro antes de restaurarlo. Centralizar te convertía en administrador del destino.
M:serious|No puedo elegir por ti. Puedo decirte que el trono nunca descansa. Cada duda del mundo acaba en su ocupante.
V|Imaginaste órdenes, responsabilidades y vidas enteras esperando tu respuesta. También imaginaste la posada, un cuaderno de mapas, un jardín y un domingo sin nada extraordinario.
P|He pasado toda la aventura intentando aprender a elegir bien. Sería irónico terminar evitando que los demás pudieran hacerlo.
S|La duda volverá. Las pérdidas volverán. No podrás salvar a todo el mundo.
P|Lo sé. Y aun así tendrán derecho a una vida que no esté escrita para tranquilizarme a mí.
V|El sello aguardó. Esta elección cambiaría la estructura del Telar y la forma en que recordarías tu segunda oportunidad.
`,[
 ['Restaurar la libertad de los caminos.',{trust:3,flags:['restauracion']},`P|Ninguna ruta será obligatoria. Cada persona conservará su propia firma.
V|El núcleo desplegó el texto original. Tu permiso de administrador empezó a desprenderse del sello como tinta disuelta en agua.
M:happy|Ahora hay que sostener el cambio hasta que las firmas recuperen el control. Estamos contigo.`, 'c8-2'],
 ['Mostrar las pruebas a la ciudad antes de restaurar.',{trust:3,flags:['pruebas-publicas']},`V|Conectaste el registro a los faroles. Las firmas, los planos y las órdenes aparecieron sobre la plaza, acompañadas por la explicación de Lys.
P|No hace falta creer en mi leyenda. Mirad los documentos. Preguntad a quienes dijeron que no.
V|Severin intentó interrumpir el canal. Tilda sostuvo el panel con una llave, una cuerda y una expresión poco dispuesta a discutir.`, 'c8-2',{clues:4,hint:'Reúne al menos 4 pruebas en el diario.'}],
 ['Aceptar el trono: «Yo puedo encargarme de todo».',{chaos:5,flags:['trono']},`P|Si alguien tiene que administrar esto, quizá pueda hacerlo con más sentido común.
V|Te sentaste. Un millón de solicitudes apareció delante de tu cara. La primera preguntaba si una paloma debía girar a la izquierda.
M:serious|Hay una opción de renuncia. Voy a dejarla señalada por si la necesitas pronto.
N|Yo empezaré a calcular cuántos bollos necesitas para sobrevivir a tu primer turno.`, 'c8-emperor']
],'c8-2',{prompt:'¿Qué haces con el poder del Telar?'});

addScene('c8-2',8,'Tres segundos que eran de todos','palace',['kaida','mirel'],`
V|La tercera campana comenzó a sonar. El núcleo lanzó una última defensa: si perdía su autoridad central, intentaría cerrar todas las rutas antes de entregar el control.
K:serious|¡Sostendremos los anillos! Lys, dime dónde. Nara, con Tilda. Mirel, no pierdas de vista el texto.
V|No era un monstruo al que pudieras golpear. Era una instrucción que confundía seguridad con inmovilidad. La palabra OBLIGATORIA brillaba sobre todos los caminos.
M|Cámbiala por ELEGIBLE. Después renuncia a la autoridad que impediría al sistema aceptar otras firmas. Hazlo en ese orden.
P|Elegible. Una palabra pequeña para un problema absurdamente grande.
V|Severin intentó tocar el sello. Kaida se interpuso con el escudo y lo apartó sin herirlo. Por primera vez sus órdenes no encontraron a nadie dispuesto a obedecer.
K|Se acabó. Puedes ayudarnos a abrir la red o esperar a que terminemos.
V|Tocaste el núcleo. La corrección se extendió en un círculo de luz. Tus piernas se bloquearon. El mundo tenía tres segundos para demostrar que podía sostenerte sin un héroe todopoderoso.
P|Uno...
V|El primer anillo se inclinó. Lys gritó una señal y Kaida lo aseguró. Abajo, los ciudadanos empezaron a retirar o renovar sus propias firmas.
`,[
 ['Confiar en que cada una cumpla su parte.',{trust:4,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['confianza-final']},`P|Dos...
V|Nara y Tilda abrieron el retorno. Mirel mantuvo el texto original ante tus ojos. Brumo sostuvo el acceso mientras una fila de guardias entregaba las órdenes de apertura.
P|Tres.
V|Renunciaste al permiso. El sello se volvió cálido, pequeño y tuyo. Miles de caminos reaparecieron sobre la ciudad, sin una flecha que obligara a seguir ninguno.
M:happy|Lo has hecho. Lo hemos hecho.`],
 ['Guiar al grupo contando con la voz de la ciudad.',{trust:3,bonds:{nara:1,mirel:1},flags:['ciudad-final']},`P|Dos... Si podéis oírme, buscad vuestra firma. Elegid si queréis seguir donde estáis o abrir otro camino.
V|La respuesta llegó como un temblor de luz. Cada decisión pequeña quitó peso al núcleo. Ninguna necesitaba coincidir con la de al lado.
P|Tres. Y ahora me retiro del puesto de gerente universal.
V|Soltaste la autoridad. La ciudad se sostuvo entre miles de voluntades distintas, ruidosas y perfectamente incompatibles con un único final.`],
 ['Lanzar una última broma para no perder la calma.',{chaos:2,trust:2,bonds:{kaida:1,nara:1},flags:['broma-final']},`P|Dos... Si esto funciona, exigiré que el modo de empleo del universo tenga dibujos.
V|Nara rio mientras tiraba del cable; Kaida protestó sin dejar de sostener el anillo. Mirel te repitió la palabra que necesitabas, y Lys mantuvo la secuencia abierta.
P|Tres. Guardar cambios. Cerrar sin suscripción.
V|El poder ilimitado desapareció. El suelo siguió bajo tus pies. Tu equipo seguía a tu lado. La escena perdió espectacularidad y ganó un futuro.`]
],'c8-3',{magic:true});

addScene('c8-3',8,'El mundo después del aplauso','city',['nara','kaida'],`
V|El palacio dejó de descender. Sus columnas se estabilizaron sobre la ciudad y las calles recuperaron sus conexiones. Un panadero anunció que, por fin, su horno daba a su propia cocina.
P|Me alegra que la victoria tenga indicadores verificables.
V|Kaida puso a Severin bajo custodia del consejo de la ciudad y entregó los registros para que los revisaran. Nadie necesitó una ejecución dramática para reconocer que había perdido el control.
[pruebas-publicas]V|Los vecinos habían visto las órdenes en los faroles. Tilda y Lys organizaron copias para que el asunto no desapareciera cuando terminara el festival.
[!pruebas-publicas]V|Lys y Tilda entregaron las copias que conservabais. Quedaban preguntas que investigar, y el consejo abrió el archivo a quienes habían sido afectados.
[severin-pasado]S|No quería volver a perder a nadie.
[severin-pasado]P|Entonces empieza por dejar de convertir a las personas en cosas que crees poder conservar.
V|Brumo recibió una cesta de bollos y un permiso permanente para descansar cerca del bosque. Tilda exigió revisar cada cristal antes de que volvieran a encenderlo.
N:happy|El festival termina mañana. He decidido ampliar el horario de la posada. Celebrar una libertad recién recuperada suele dar hambre.
V|Intentaste calentar una taza con tu poder. Funcionó, aunque ahora el sello solo respondía a cosas pequeñas. El café no preguntó por tus estadísticas antes de resultar agradable.
P|Sigo teniendo microondas. La pérdida de omnipotencia ha sido gestionada con criterios razonables.
K:happy|Y sigues debiendo un día sin incidentes. Empieza por llegar vivo a la cena.
`,[
 ['Celebrar con quienes ayudaron desde el principio.',{trust:2,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['celebracion']},`V|La mesa de la posada se alargó con tablones. Los guardias comieron con comerciantes, Brumo asomó la cabeza por una ventana y Tilda contó la batalla desde el punto de vista de una llave inglesa.
P|Mi versión tenía más frases épicas. La suya tiene mejor ritmo y menos mentiras.
V|Mirel rio sin mirar ningún reloj. Lys dejó el cuaderno cerrado. Nara se sentó para cenar y Kaida permitió que otra persona vigilara la puerta.`],
 ['Ayudar a reparar lo que dejó la batalla.',{trust:3,bonds:{kaida:1,nara:1},flags:['reconstruccion']},`V|Tu poder pequeño resultó perfecto para bisagras, escalones y grietas. Tilda repartió tareas con una autoridad que ningún trono habría podido mejorar.
P|He pasado de elegido legendario a mantenimiento general. Mi evolución profesional es sorprendentemente sana.
V|Nara te llevó comida, Lys registró las reparaciones y Kaida te relevó antes de que terminaras agotado. El día acabó con menos aplausos y muchas más puertas funcionando.`],
 ['Tomarte un rato para recordar tu primera vida.',{trust:2,bonds:{mirel:1,lys:1},flags:['recuerdo-tierra']},`V|Subiste al puente reparado y miraste las luces. Pensaste en tu ciudad, en las personas a quienes no habías podido despedir y en las cosas pequeñas que seguías extrañando.
P|No voy a fingir que todo lo de antes dejó de importar porque aquí haya magia.
V|Lys y Mirel se sentaron a tu lado sin pedirte que estuvieras feliz de una forma concreta. La segunda oportunidad no borraba la primera vida; te permitía seguir llevándola contigo.`]
],'c8-4');

addScene('c8-4',8,'Mañana no hay una misión principal','tavern',['lys','kaida'],`
V|Pasaron varias semanas. El mundo no se volvió perfecto. Hubo discusiones, puertas atascadas por razones normales y un día entero en que nadie consiguió ponerse de acuerdo sobre dónde cenar.
P|La libertad produce mucho debate sobre la guarnición. Severin omitió esa parte en sus discursos.
V|Lys terminó las primeras páginas de su atlas. Kaida formó un segundo turno de guardia. Nara empezó a ahorrar para una caravana sin renunciar a la posada. Mirel consiguió documentos, una habitación propia y una planta excesivamente regada.
M:happy|Ahora sé que las plantas necesitan cuidados, pero no supervisión constante. Estoy aplicando el aprendizaje en varias áreas.
V|Tú trabajabas a veces con el gremio y a veces arreglando cosas. La gente reconocía tu nombre, pero ya no esperaba que cada gesto fuera el primer paso de una leyenda.
L:shy|Mañana voy a visitar un pueblo que no figura en ningún atlas reciente. Me gustaría tener compañía.
K:shy|Y mi día libre por fin existe. El jardín abre temprano. Lo comento por si alguien todavía recuerda una conversación.
V|Al otro lado del salón, Nara te hizo una señal desde el mostrador. Mirel te mostró dos entradas para una feria del mercado. No eran recompensas automáticas. Eran invitaciones que podías aceptar con honestidad.
P|Esta vez el futuro no tiene una flecha. Me gusta más así.
`,[
 ['Empezar una relación con Lys.',{},null,'epilogue-lys',{bond:'lys',min:8,hint:'Necesitas 8 puntos de afinidad con Lys.'}],
 ['Aceptar la cita de Kaida y construir algo juntos.',{},null,'epilogue-kaida',{bond:'kaida',min:8,hint:'Necesitas 8 puntos de afinidad con Kaida.'}],
 ['Pensar en otras invitaciones y otros caminos.',{},null,'c8-otros']
],'c8-otros',{prompt:'¿Qué futuro quieres empezar?'});

addScene('c8-otros',8,'Hay más de una forma de quedarse','tavern',['nara','mirel'],`
V|Nara dejó dos tazas sobre el mostrador. Mirel se sentó en el taburete de al lado y trató de disimular que llevaba varios minutos ensayando una invitación.
N:shy|No tienes que quedarte por gratitud. Me gustaría que lo hicieras porque te gusta estar aquí. Conmigo, si esa parte también te interesa.
M:shy|Y yo quería saber si el domingo que imaginamos podría ser este domingo. He aprendido a consultar un calendario sin intentar controlarlo.
P|Me estáis haciendo la parte más difícil de toda la aventura. Y una vez peleé contra una camisa.
V|Se rieron. No necesitabas ofrecer la misma respuesta a ambas para tratarlas con cuidado. Podías elegir una relación, abrir una conversación distinta o construir una vida sin pareja.
N|Habla claro. Si hay algo bueno en haber roto una máquina del destino, es no tener que adivinar lo que otra persona da por hecho.
`,[
 ['Decirle a Nara que quieres compartir el camino con ella.',{},null,'epilogue-nara',{bond:'nara',min:8,hint:'Necesitas 8 puntos de afinidad con Nara.'}],
 ['Invitar a Mirel a vuestro primer domingo juntos.',{},null,'epilogue-mirel',{bond:'mirel',min:8,hint:'Necesitas 8 puntos de afinidad con Mirel.'}],
 ['Explorar una vida propia o una relación compartida.',{},null,'c8-libre']
],'c8-libre',{prompt:'¿A quién quieres responder?'});

addScene('c8-libre',8,'Una vida que no cabe en una casilla','tavern',['lys','nara'],`
V|La conversación continuó durante varias tardes. Elegir un futuro no era marcar una casilla y dejar de hablar. Era explicar qué querías, preguntar qué querían los demás y aceptar que las respuestas podían tener matices.
P|En mi mundo llamábamos a esto comunicación. Tenía unas críticas excelentes y una tasa de uso sorprendentemente baja.
N:happy|Aquí también. Deberíamos vender un manual que solo dijera «pregunta y escucha» en letras enormes.
[honesto]V|Habíais hablado con honestidad de lo que sentíais. La posibilidad de una relación compartida existía, pero necesitaba confianza suficiente entre todas las personas implicadas.
[!honesto]V|Todavía había conversaciones que no habías tenido. Algunas posibilidades necesitaban más confianza y claridad de la que habías construido durante la aventura.
L|También puedes elegir vivir por tu cuenta. No te convierte en alguien que haya fallado una ruta.
K|El grupo seguirá aquí. Las amistades no son el premio de consolación de una relación romántica.
V|Pensaste en mapas, jardines, caminos, domingos y una idea de panadería con un nombre tan terrible que quizá fuera perfecto.
`,[
 ['Construir una relación compartida, por acuerdo de todas.',{},null,'epilogue-constellation',{allBonds:6,trust:11,clues:4,flags:['honesto'],hint:'Requiere 6 de afinidad con cada una, 11 de confianza, 4 pistas y una conversación honesta.'}],
 ['Abrir una panadería y descubrir mi propia vida.',{},null,'epilogue-bakery'],
 ['Volver a pensar en las invitaciones individuales.',{},null,'c8-4']
],'epilogue-bakery',{prompt:'Esta elección sí es completamente tuya.'});

addScene('epilogue-lys',8,'El mapa de los días pequeños','forest',['lys'],`
V|La primera excursión con Lys salió mal de una manera completamente normal: olvidasteis una cuchara, llovió antes de llegar y el camino más corto estaba ocupado por unas cabras sin intención de negociar.
P|Sin conspiración, sin portales, sin profecías. Solo logística mediocre. Estoy orgulloso de nosotros.
L:happy|He dibujado una ruta alternativa. Lleva a una casa de té y añade media hora al viaje.
P|Una mejora objetiva. Tu atlas debería recomendar descansos en lugar de distancias.
V|Lys apoyó el cuaderno sobre una roca. En la primera página aparecía su nombre. En la dedicatoria, una frase breve: «Para quien me recordó que un camino puede elegirse».
L:shy|No significa que tengas que acompañarme a todos. Me gusta pensar que vendrás a algunos porque quieres.
P|Quiero. Y quiero invitarte a otras cosas que no quepan en un mapa. Una cena, una película que tendré que resumir fatal, una tarde entera sin plan.
V|Lys se acercó. Te pidió que dejaras de hablar durante un momento, con una sonrisa que volvía la petición especialmente fácil de obedecer.
L:shy|¿Puedo besarte?
P|Sí. Creo que por una vez no tengo una respuesta más complicada.
V|El beso fue breve, cálido y algo torpe. Después los dos os reísteis, no porque hubiera salido mal, sino porque ya no hacía falta fingir que no estabais nerviosos.
V|Meses después abristeis una pequeña cartografía con té. Cada mapa incluía rutas alternativas y un símbolo para lugares donde merecía la pena sentarse. En los días libres salíais juntos a comprobar si seguían siendo ciertos.
L:happy|He dejado un rincón en blanco.
P|¿No sabes qué hay ahí?
L:shy|Todavía no. Quiero descubrirlo contigo.
V|Miraste el espacio vacío. Por primera vez, no te pareció algo que hubiera que corregir.
`,null,null,{ending:'lys'});

addScene('epilogue-kaida',8,'Una espada y dos tazas','city',['kaida'],`
V|Kaida llegó al jardín cinco minutos antes. Tú llegaste seis minutos antes y fingiste que habías necesitado estudiar la puerta. Los dos llevabais comida de sobra.
K:happy|Estamos preparados para una cita o para resistir un asedio de tamaño moderado.
P|La diferencia la determinará cuánto tarde en encontrar algo inteligente que decir.
V|Paseasteis sin escolta. Kaida conocía los nombres de flores que jamás habías visto y se detenía a observarlas con una atención que antes reservaba a las rutas de evacuación.
K|Creía que descansar era dejar a los demás solos. Ahora sé que también era impedirles aprender a hacerse cargo.
P|Tu relevo está funcionando. Nadie ha venido corriendo a buscarte. Es una estadística romántica excelente.
V|Ella te tomó de la mano. No como en una escalera peligrosa ni para corregir una postura. Esta vez el gesto no necesitaba una explicación útil.
K:shy|Me gustas cuando haces bromas. También cuando sabes quedarte callado. Me gustaría averiguar cómo eres en todos los momentos de en medio.
P|Incluyen un número considerable de desayunos. Lo aviso para que el acuerdo sea transparente.
V|Kaida se inclinó y te besó la mejilla. Después esperó tu mirada antes de acercarse otra vez. El segundo beso ya no dejó ninguna duda sobre la naturaleza de aquella salida.
V|Los meses siguientes tuvieron guardias, discusiones sobre horarios y tardes que hubo que reprogramar. Ninguna de esas cosas convirtió la relación en un fracaso. Aprendisteis a pedir tiempo y a reservarlo de verdad.
K:happy|Mañana entrenamos. Has vuelto a perder el equilibrio al girar.
P|Me distrae la instructora. Quiero presentar una objeción formal.
K:shy|Denegada. Pero te concedo una revancha y otra taza de té.
V|En el balcón había dos sillas. Por primera vez ninguna estaba esperando a alguien que solo sabía marcharse a trabajar.
`,null,null,{ending:'kaida'});

addScene('epilogue-nara',8,'El negocio de quedarse','city',['nara'],`
V|La caravana de Nara tenía una rueda nueva, otra que protestaba y un cartel que había pintado ella misma. La posada quedaba a cargo de un equipo en el que, por fin, se permitía confiar.
N:happy|Primera norma del viaje: no compras un objeto maldito porque «parece importante para la trama».
P|Acepto con la condición de que tampoco me vendas una suscripción a la ventana.
V|Nara te entregó una llave. No era un contrato de trabajo ni una maniobra para que te sintieras en deuda. Era una invitación a compartir un espacio que había elegido cuidar.
N:shy|No sé cuánto tiempo estaremos en cada lugar. Ni si siempre nos gustará el mismo destino. Me interesa que podamos hablarlo sin que uno tenga que desaparecer.
P|Si quiero salir a caminar, te lo diré. Si tengo miedo, intentaré decirlo también. Y si quemo la cena, presentaré una versión menos elegante de los hechos.
V|Ella te miró en silencio, como si estuviera comprobando que no ibas a cubrir aquella promesa con otro chiste. Después sonrió con una franqueza que ya no utilizaba para vender nada.
N:shy|Me gustas, {name}. Sin oferta especial y sin fecha de caducidad inventada para que decidas deprisa.
P|Tú también me gustas. Y agradezco que esta vez el contrato quepa en una frase.
V|Nara te tomó por las solapas, esperó tu gesto de acuerdo y te besó. Cuando se apartó, parecía satisfecha de haberte dejado sin una respuesta inmediata.
N:happy|Voy a anotar esta técnica. Es muy eficaz para reducir tus discursos.
V|Viajasteis por pueblos que Lys añadió a su atlas. Volvíais a Brisalia para cenar con el grupo. Nara dejó de contar las salidas de cada habitación y empezó a fijarse en las ventanas por las que entraba el sol.
P|¿Seguimos mañana o nos quedamos otro día?
N:shy|Otro día. Quiero enseñarte un lugar que me gusta.
V|No era una promesa de permanecer siempre en el mismo sitio. Era una forma nueva de quedarse.
`,null,null,{ending:'nara'});

addScene('epilogue-mirel',8,'Domingos sin eternidad','city',['mirel'],`
V|Mirel llegó al mercado con una lista. Al verte, la dobló y la guardó sin consultarla. Explicó que había escrito temas de conversación por nervios y que prefería descubrir lo que pasaba.
P|Podemos conservarla para emergencias. Si nos quedamos callados, fingiré que es una elección estética.
M:happy|Incluí «preguntar por sus gustos» y «no convertir la cita en una entrevista». No estaba segura del orden.
V|Comprasteis fruta, discutisteis amistosamente sobre una planta y perdisteis veinte minutos viendo cómo un artesano fabricaba pequeños pájaros de madera.
M:shy|Antes habría pensado que perder tiempo era hacerlo mal. Hoy creo que es la primera vez que un día se parece a algo que elegí.
P|A mí me está pareciendo una buena elección.
V|Te ofreció la mano. Su halo tenía un brillo suave, más pequeño que antes. Ya no indicaba autoridad sobre ningún departamento; era una parte de ella que podía llevar sin tener que explicar su utilidad.
M|Me gustas. Y quería decírtelo antes de reunir tanta información que dejara de atreverme.
P|Me gustas tú. Incluida la parte que escribe listas para una cita y luego tiene el valor de guardarlas.
V|Mirel se puso de puntillas para besarte la mejilla y terminó riendo contra tu hombro. Después preguntó si podía intentarlo otra vez, esta vez en los labios. Tu respuesta no necesitó un formulario.
V|Consiguió un trabajo ayudando a viajeros recién llegados, con horarios, compañeros y vacaciones. Las primeras semanas le costó marcharse a la hora acordada. Aprendió que dejar una tarea para mañana no equivalía a abandonar a una persona.
M:happy|He elegido mi comida favorita. De momento. Me reservo el derecho a revisarla.
P|Una cláusula excelente. Estoy dispuesto a acompañarte durante las investigaciones.
V|Sobre su mesa había una planta algo menos regada, una foto del grupo y un sello nuevo. Decía «Aprobado por ganas». Lo usaba muy poco, para no convertirlo en una obligación.
`,null,null,{ending:'mirel'});

addScene('epilogue-constellation',8,'Una constelación elegida','tavern',['lys','nara'],`
V|No ocurrió como un premio al final de la aventura. Ocurrió en conversaciones largas, algunas fáciles y otras incómodas, durante semanas en las que nadie tuvo que dar una respuesta por miedo a perder al grupo.
L:shy|Quiero tiempo a solas contigo. Y seguir teniendo mi trabajo, mis viajes y mis amistades. No quiero que mi vida se convierta en esperar un turno.
K|Yo necesito acuerdos claros y permiso para revisarlos. No pienso medir el cariño como si compitiéramos en un torneo.
N:happy|Yo necesito que se digan las cosas antes de que un malentendido compre una casa y se instale entre nosotros.
M:shy|Y yo quiero aprender sin sentir que debo aceptar cualquier cosa para pertenecer. A veces necesitaré ir más despacio.
P|Os escucho. También tengo cosas que aprender. No quiero ser el centro que ordena vuestras vidas. Quiero compartir partes de ellas porque todas lo elegimos.
V|Había suficiente confianza para que ninguna promesa tuviera que ocultar otra. La historia del Telar os había enseñado a reconocer la diferencia entre elegir estar juntos y diseñar una vida sin salida.
N:happy|Bien. El calendario lo hago yo. Nadie, absolutamente nadie, llamará a esto «gestionar un harén» cuando me pida cambiar una reserva.
P|Acepto la moción. Propongo «organización avanzada de meriendas con implicaciones sentimentales».
K:happy|Rechazada por longitud.
V|Hubo citas de dos, cenas compartidas, viajes en grupos distintos y días en que alguien prefirió estar solo. Lys y Nara discutieron sobre un presupuesto; Kaida y Mirel aprendieron juntas a tener tardes libres. Sus relaciones entre ellas importaban por sí mismas.
V|Tú aprendiste a preguntar sin convertir la pregunta en una trampa. A recibir un no sin tratarlo como una derrota. A recordar que el cariño se demostraba en cosas pequeñas cuando no había nadie aplaudiendo.
M:happy|Este domingo estoy libre. El lunes no: he quedado con Tilda para aprender a reparar una lámpara.
P|Fantástico. Por fin alguien más puede resolver el problema de iluminación de la cocina.
L:happy|Y el sábado iremos a dibujar. Si prometes no llamar dragón a todas las cabras.
V|No había una imagen única que resumiera aquella vida. Había muchas, distintas y cambiantes, unidas porque las personas que aparecían en ellas seguían eligiendo compartirlas.
P|Creo que este es el final donde la vida continúa haciendo preguntas.
N:shy|Entonces procura escuchar las respuestas, héroe.
`,null,null,{ending:'constellation'});

addScene('epilogue-bakery',8,'Pan recién hecho, mundo a salvo','tavern',['nara','lys'],`
V|La idea comenzó como una broma y sobrevivió a una noche de sueño, dos conversaciones sensatas y una prueba de masa que pudo haberse utilizado para reparar una muralla.
P|Se llamará Reencarnapán.
N:serious|No.
L:serious|Por favor, no.
K|Podemos organizar una intervención.
M:happy|Yo ya he diseñado un sello. Lo siento. Me hizo gracia.
V|La panadería abrió junto al puente reparado. Tu poder calentaba el horno con precisión y ayudaba con pequeñas reparaciones. La receta, en cambio, tuviste que aprenderla sin atajos mágicos.
P|He descubierto una limitación inesperada: la masa no respeta mi condición de protagonista.
N:happy|La masa tiene criterio.
V|Conservaste tu habitación mientras arreglabas el pequeño piso de arriba. Elegir vivir por tu cuenta no te aisló. Te dio un lugar desde el que invitar a otros, pedir ayuda y empezar a reconocer tus propios gustos.
V|Lys pasaba a dibujar viajeros. Kaida traía a sus relevos después de entrenar. Nara te discutía las cuentas. Mirel aprendió a preparar bollos que no requerían corregir ninguna ley natural.
T:happy|La próxima vez que quieras montar un horno, avisa antes de decidir que «parece bastante estable».
B|¿Los guardianes del reino tienen descuento?
P|En bollos, sí. En comerse el mostrador, no.
V|Había aventuras los jueves, descanso los lunes y un futuro que no exigía elegir pareja para considerarse completo. A veces extrañabas tu otra vida. A veces te sorprendía cuánto te gustaba esta.
V|Una mañana abriste la puerta y el olor a pan salió a una calle que llevaba exactamente a donde debía. Ningún portal, ninguna cuenta atrás, ninguna voz explicando tu misión.
P|Buenos días. ¿Lo de siempre?
V|Por primera vez, una vida corriente te pareció un final extraordinario.
`,null,null,{ending:'bakery'});

addScene('c8-emperor',8,'Su majestad el problema','palace',['mirel','nara'],`
V|El primer día en el trono autorizaste cuatro millones de cosas. La mayoría eran decisiones que jamás habían necesitado que nadie las autorizara: una hoja que caía, una puerta que se abría, una conversación que empezaba.
P|Creo que el cargo tiene un pequeño problema de delegación.
M:serious|El pequeño problema eres tú sentado en el mecanismo que la impide.
V|Decidiste no obligar a nadie a quedarse en ninguna relación y restauraste las salidas de la ciudad. Eso evitó lo peor, pero el trono seguía enviándote cada cambio físico que el Telar había registrado.
N|Buena noticia: nadie está atrapado en una vida diseñada por ti. Mala noticia: hay un caracol esperando permiso para cruzar una hoja y empieza a impacientarse.
V|Severin observó una mañana completa de solicitudes y se negó a aceptar tu oferta de compartir el turno. Su sueño de control total parecía menos atractivo con ejemplos concretos.
P|He descubierto que el poder absoluto consiste en que todo el mundo te pregunte cosas mientras intentas comer.
V|Al cabo de tres meses, tus compañeras organizaron el rescate administrativo. Lys encontró la instrucción de salida, Kaida te obligó a descansar, Nara revisó la letra pequeña y Mirel señaló la opción que había dejado marcada desde el principio.
M:happy|RENUNCIAR. Está al lado de «Aceptar todas las cookies del destino».
P|Voy a elegir esa. Con toda la sabiduría que he adquirido autorizando estornudos.
V|El Telar devolvió a cada persona su firma. Saliste del trono con un poder pequeño, un dolor de espalda y una nueva humildad que tus amigas prometieron recordarte en cada sobremesa.
N:happy|He reservado una habitación. Incluye cama, desayuno y la prohibición de aceptar cargos universales sin consultar.
P|Esta vez voy a leer el contrato entero.
V|No fue tu decisión más brillante. Pero incluso un final ridículo podía contener una segunda oportunidad, especialmente cuando había personas dispuestas a ayudarte a levantarte de la silla equivocada.
`,null,null,{ending:'emperor'});
