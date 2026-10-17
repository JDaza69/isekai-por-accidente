addScene('c3-1',3,'Equipaje para una misión discreta','forest',['lys','kaida'],`
V|El Bosque de las Horas comenzaba donde terminaban los carros. Los árboles tenían hojas verdes y doradas a la vez; algunas caían hacia arriba, como si todavía no hubieran decidido qué estación era.
P|Si veo un conejo con reloj, rechazo cualquier bebida que diga «bébeme». Tengo límites y acabo de estrenarlos.
L:happy|La corriente del Telar altera pequeñas secuencias. Una hoja vuelve a su rama, una sombra llega antes que su dueño. Normalmente es inofensivo.
K|Normalmente. Por eso iremos juntos y marcaremos el camino de regreso.
V|Nara había distribuido las provisiones con gran precisión: comida, cuerda, remedios y un paquete que definió como «emergencia estética». Nadie quiso preguntar más.
[nombre-equipo]N:happy|La comunidad del error inicia su primera expedición. Si encontramos un anillo, que nadie lo compre sin comprobar la talla.
[!nombre-equipo]N:happy|Todo equipo necesita un nombre. «Cuatro personas y un presupuesto limitado» quizá sea demasiado largo para las camisetas.
V|Llegasteis a un cruce con tres caminos. El mapa señalaba dos. El tercero tenía un cartel recién pintado: «Atajo heroico. Totalmente seguro. Sin consecuencias».
P|Quien escribió eso jamás ha visto una película. O las ha visto todas y es el villano.
L:serious|La ruina está al norte. El atajo nos acercaría, pero no estaba aquí ayer. Podemos estudiar las señales antes de elegir.
`,[
 ['Seguir el mapa de Lys y comprobar las marcas.',{bonds:{lys:3},trust:2,flags:['sendero-seguro']},`V|Lys midió la inclinación del sol y comparó las marcas de los árboles. Descubrió que el cartel apuntaba hacia un bucle: habríais vuelto al cruce al cabo de una hora.
P|Una trampa para protagonistas impacientes. Me siento personalmente identificado.
L:happy|Entonces estamos aprendiendo. Eso es más interesante que ser infalible.
V|Guardó tu lápiz en su estuche después de usarlo. Cuando se lo señalaste, se puso roja y preguntó si podía conservarlo hasta terminar el mapa.`],
 ['Pedir a Kaida que explore contigo.',{bonds:{kaida:3},trust:1,flags:['sendero-guardia']},`V|Avanzasteis unos metros atados a una cuerda. Kaida detectó huellas que se repetían exactamente: el camino doblaba el espacio sobre sí mismo.
K|Nos retiramos. No vale la pena un atajo que decide por nosotros cuándo acaba.
P|Sabias palabras para una ruta y para una suscripción gratuita.
V|Regresasteis al grupo. Kaida no soltó la cuerda de tu cintura hasta comprobar que el suelo seguía siendo el mismo.`],
 ['Investigar quién vende un atajo tan sospechoso.',{bonds:{nara:2},chaos:1,flags:['cartel']},`N:serious|La pintura viene de la Fundación Aurora. Reconozco el barniz: lo compraron junto con los faroles.
P|Un villano que reutiliza proveedores. Eficiencia administrativa; estoy empezando a temerle.
V|Nara retiró el cartel para que ningún viajero cayera en el bucle. En el reverso había una tarifa de instalación con impuestos incluidos.
N:happy|Me tranquiliza saber que hasta las conspiraciones odian los gastos imprevistos.`]
],'c3-2');

addScene('c3-2',3,'El guardián necesita merendar','forest',['kaida','nara'],`
V|El arco de la ruina estaba custodiado por un dragón del tamaño de una casa pequeña. Tenía escamas musgosas, una expresión solemne y migas en los bigotes.
B|Quien pretenda cruzar deberá responder a mi enigma. ¿Qué crece al compartirse, desaparece al comprarse y... espera, esa no era la versión actual?
P|¿La confianza? ¿Una contraseña de plataforma de vídeo? Necesito saber si esto es de opción múltiple.
V|El dragón sacó una tarjeta de debajo de una pata. Al moverla, el suelo vibró. Kaida levantó el escudo por reflejo.
B|Soy Brumo, guardián de este paso. Hace tres días que mi enigma se reescribe solo. Ayer la respuesta era «destornillador» y me negué por dignidad.
N:happy|Respeto a un profesional que defiende la calidad de su trabajo.
L:serious|Alguien está modificando los mecanismos de la ruina. Su instrucción original quizá siga bajo la nueva.
V|En la piedra leíste GUARDIÁN HOSTIL. Debajo, apenas visible, había otra inscripción: GUARDIÁN HAMBRIENTO. El Telar había transformado una necesidad en una orden de combate.
K|Puedo contenerlo si pierde el control. Pero no tiene por qué acabar en una pelea.
P|Salvar el mundo empieza a parecerse bastante a revisar si todo el mundo ha comido.
`,[
 ['Ofrecerle comida y pedir permiso para revisar la inscripción.',{trust:3,bonds:{nara:1,kaida:1},flags:['brumo-amigo']},`V|Brumo aceptó un bollo con cuidado de no llevarse también tu mano. Mientras masticaba, te permitió comparar las dos capas de escritura.
P|Tu contrato dice vigilar. Alguien añadió «atacar a cualquiera que no parezca suficientemente heroico». Es una cláusula de vestuario abusiva.
B|¡Lo sabía! Nadie podía explicar qué botas contaban como heroicas.
V|Eliminaste la orden añadida. Durante tus tres segundos inmóvil, Brumo te protegió del viento con un ala. Acababais de ganar un aliado bastante grande.`],
 ['Darle a Kaida espacio para una demostración no letal.',{bonds:{kaida:3},chaos:1,flags:['brumo-duelo']},`K|Un toque en cada escudo. Sin fuego ni zarpas. Si gano, nos escuchas.
V|Brumo aceptó y golpeó el suelo. Tú hiciste firme una losa suelta; Kaida rebotó sobre ella y tocó la placa del pecho del dragón antes de caer de pie.
B|Buen estilo. Mal respeto por el dramatismo de la presentación.
P|A mí también me interrumpió el discurso. Es consistente.
V|El dragón dejó que revisaras su instrucción. El combate terminó como empiezan muchas amistades: compartiendo merienda después de una discusión absurda.`],
 ['Resolver el enigma diciendo «el presupuesto».',{bonds:{nara:2},chaos:2,flags:['brumo-enigma']},`P|Crece cuando se comparte el gasto y desaparece cuando se compra cualquier cosa. El presupuesto. Matemáticamente impecable.
V|Brumo miró su tarjeta, luego a Nara, que asintió con la solemnidad de una perita contable.
B|No era la respuesta prevista, pero es la mejor que he oído desde «destornillador». Podéis pasar si quitáis esa molesta orden de mi pedestal.
V|Corregiste la inscripción y Brumo se dejó caer entre los helechos. Había llevado tres días fingiendo ser un jefe final cuando solo quería dormir.`]
],'c3-3',{magic:true});

addScene('c3-3',3,'La frase que nadie debía leer','forest',['lys'],`
V|Dentro de la ruina no había tesoros. Había un mapa del continente suspendido sobre un estanque y miles de hilos luminosos que unían ciudades, caminos y pequeños puntos en movimiento.
L|No muestra el futuro. Muestra posibilidades. Mi maestra decía que el Telar era un jardín de senderos, no una jaula.
P|Alguien ha sustituido al jardinero por un diseñador de laberintos con problemas de control.
V|Lys encontró una placa detrás de un cristal. La inscripción antigua decía: «Una ruta existe mientras alguien pueda abandonarla». Encima habían grabado: «Una ruta perfecta elimina la duda».
L:serious|Esa segunda frase es de Severin. La usa en sus discursos sobre el reino. Quiere acabar con los errores del destino.
P|Yo soy un error del destino con zapatos mojados. Empiezo a sentir un interés personal.
V|Al acercar tu sello, el mapa dibujó tu silueta rodeada de cuatro figuras. Una leyenda incompleta decía «Ancla compatible». No había nombres de parejas: había nombres de piezas.
L:shy|Así que nuestros encuentros... alguien los calculó.
P|Calculó los caminos. No que me hicieras reír. Ni que me importara que estuvieras bien. Eso no lo he visto escrito aquí.
V|Lys sostuvo el lápiz que le habías prestado. Su mano dejó de temblar lo suficiente para copiar la inscripción original.
`,[
 ['Guardar las dos versiones como prueba.',{bonds:{lys:2},trust:3,clues:['La regla original del Telar garantiza poder abandonar una ruta. Severin la sustituyó por una instrucción que elimina la duda.'],flags:['regla-original']},`V|Copiasteis cada símbolo, incluida la firma diminuta del autor. El ojo y la rueda aparecían junto al nombre de Severin.
L|Con esto podemos demostrar que no es un accidente. Necesitaremos una forma de mostrarlo sin que borren el registro.
P|Dos copias, sitios distintos. He visto suficientes películas como para no guardar toda la evidencia en un solo sobre dramático.
V|Lys te entregó una copia. La otra la cosió dentro de la cubierta de su cuaderno.`],
 ['Preguntarle a Lys qué quiere ella, al margen del mapa.',{bonds:{lys:3},trust:2,flags:['lys-deseo']},`L:shy|Quiero viajar sin sentir que estoy traicionando a mi maestra. Murió antes de terminar su atlas, y yo confundí honrarla con no hacer nada distinto.
P|Quizá podrías añadir tus propios caminos. Incluido alguno que lleve a una cafetería mediocre con buena compañía.
V|Lys sonrió y dibujó una pequeña taza en un margen vacío. No era una prueba del misterio; era algo más difícil de clasificar.
L|Me gustaría que estuvieras en alguno de esos caminos.`],
 ['Probar si puedes borrar la conexión con tu sello.',{chaos:2,flags:['sello-resiste']},`V|Tocaste tu propia silueta. La instrucción no cambió. El poder rechazó la orden con una punzada y un mensaje escueto: «No tienes autoridad sobre una vida».
P|Al menos una parte de este sistema entiende los límites mejor que su administrador.
L:serious|No vuelvas a probarlo así. Si el sello es un ancla, arrancarlo podría derribar lo que mantiene conectado.
V|Retiraste la mano. Aprender a detenerte resultó menos emocionante que descubrir un poder, pero bastante más importante.`]
],'c3-4');

addScene('c3-4',3,'Una tarde que no estaba en el mapa','forest',['lys','kaida'],`
V|El regreso tuvo que esperar: la marea mágica cerró el sendero hasta el atardecer. Brumo confirmó que no era una trampa y se ofreció a avisar cuando el paso volviera a abrirse.
P|Un descanso obligatorio impuesto por un dragón. Hay departamentos de recursos humanos menos eficientes.
V|Kaida levantó un campamento junto al río. Nara buscó un sitio seco para encender el fuego. Lys se quedó mirando la ruina, todavía incómoda con lo que habíais descubierto.
L|Si conocemos el plan, quizá podamos tomar decisiones que no esperaba.
K|O podemos hacer algo sensato porque nos parece sensato. No pienso torcerme un tobillo solo para llevarle la contraria al destino.
P|Era mi segunda estrategia, después de cenar. Agradezco el descarte.
V|Por primera vez desde tu llegada, nadie necesitaba que salvaras nada durante unos minutos. La quietud resultó extraña, como una pantalla sin una misión señalada.
N:happy|Puedes pasar la tarde investigando, entrenando o siendo agradable. Esta última habilidad suele dar mejor recompensa de lo que parece.
V|Miraste a tus compañeras. Cada una había encontrado una forma distinta de disimular el cansancio. Tenías tiempo para acercarte a una de ellas sin ningún pretexto heroico.
`,[
 ['Acompañar a Lys a dibujar junto al río.',{bonds:{lys:1}},null,'c3-lys'],
 ['Compartir la guardia con Kaida.',{bonds:{kaida:1}},null,'c3-kaida'],
 ['Ayudar a Nara con la cena.',{bonds:{nara:1}},null,'c3-nara']
],'c3-5',{prompt:'¿Con quién compartes la tarde?'});

addScene('c3-lys',3,'El margen en blanco','forest',['lys'],`
V|Lys dibujaba el río sobre una hoja nueva. No había escalas ni leyendas: solo agua, hojas y una silueta torpe que parecía ser tú intentando no caerte.
P|Veo que captaste mi lado heroico. Es el que mira hacia el suelo para comprobar dónde pisa.
L:happy|No quería hacer un mapa. A veces olvido que puedo dibujar algo sin que tenga que ser útil.
V|Te sentaste a su lado. Ella explicó cómo había aprendido a medir distancias con las estrellas y cómo había terminado encerrada entre cartas que describían lugares donde nunca había estado.
L|Es ridículo. Sé calcular un viaje de mil kilómetros y me asusta no saber qué decir en el primer desayuno fuera de casa.
P|Puedes empezar por «buenos días». Si falla, yo me caigo de una silla y cambio el tema. Tengo experiencia.
L:shy|¿Estás ofreciendo acompañarme o un servicio de distracción?
P|Ambos. El segundo viene incluido en el primero, aunque preferiría que no lo pusieras en el contrato.
V|Lys dibujó una segunda silueta junto a la primera. Las manos casi se tocaban. Casi, porque su lápiz se detuvo esperando una respuesta que no podía deducir de un mapa.
`,[
 ['Pedirle permiso para tomarle la mano.',{bonds:{lys:3},trust:1,flags:['mano-lys']},`L:shy|Sí. Puedes.
V|Su mano estaba tibia, manchada de tinta en el índice. La sostuvo sin la torpeza que había mostrado al hablar. Te sorprendió lo poco que necesitaba aquel momento una frase brillante.
P|Creo que por una vez puedo quedarme callado.
L:happy|No demasiado. Me gustan tus comentarios absurdos cuando no esconden lo que quieres decir.`],
 ['Dibujar una aventura juntos en el margen.',{bonds:{lys:2},flags:['dibujo-lys']},`V|Añadiste un dragón sonriente, dos tazas y un héroe con unas piernas anatómicamente discutibles.
L:happy|Vas a necesitar clases de proporción.
P|Mi talento está en el concepto. La ejecución pertenece a otra temporada.
V|Lys guardó el dibujo en el cuaderno. No lo corrigió.`],
 ['Hablar de la Tierra y de lo que extrañas.',{bonds:{lys:2},trust:2,flags:['tierra-lys']},`P|Echo de menos cosas pequeñas. El olor de mi calle cuando llueve. Una canción tonta. Poder avisar de que llegué bien.
L|Podemos dejar un espacio para eso. Empezar otra vida no exige fingir que la anterior no importaba.
V|Lys anotó el nombre de tu ciudad en el borde del mapa. No sabía dónde quedaba, pero decidió que merecía aparecer.
P|Gracias. Es la primera vez que alguien ha dibujado casa desde que llegué.`]
],'c3-5');

addScene('c3-kaida',3,'La guardia también mira las flores','forest',['kaida'],`
V|Kaida había elegido un saliente desde el que podía ver el campamento. Parecía una decisión táctica hasta que descubriste la pequeña pradera de flores que quedaba a su espalda.
P|Buena visibilidad, dos rutas de escape y una densidad excelente de margaritas. Posición de manual.
K:shy|No estoy aquí por las flores. Bueno. No solo por las flores.
V|Te hizo sitio en la roca y te mostró cómo reconocer las huellas de los animales del bosque. Hablaba con más suavidad cuando no había nadie a quien dar órdenes.
K|De pequeña quería criar aves mensajeras. Luego crecí, todos esperaron que siguiera a mi padre y resultó más fácil hacerlo que explicar que no estaba segura.
P|Puedes ser capitana y criar aves. Aunque no recomiendo una paloma como segundo al mando. He visto cómo administran las plazas.
K:happy|Un cuervo sería mejor. Al menos sabe cuándo devolver un objeto robado.
V|Una ráfaga te echó el pelo sobre los ojos. Kaida lo apartó con dos dedos, se dio cuenta de lo que había hecho y retiró la mano como si acabara de tocar una trampa.
K:shy|No veía tu cara. Era... poco práctico para conversar.
`,[
 ['Decirle que te gusta conocerla fuera de la guardia.',{bonds:{kaida:3},trust:1,flags:['kaida-persona']},`P|La capitana me cae bien. La persona que elige un puesto de vigilancia por sus flores me interesa todavía más.
K:shy|No sé muy bien cómo responder a eso sin sonar como un parte oficial.
P|Puedes empezar por quedarte un rato. Lo demás no tiene plazo de entrega.
V|Kaida apoyó el hombro contra el tuyo. Desde allí, el campamento seguía completamente a salvo.`],
 ['Enseñarle un ejercicio de descanso de tu mundo.',{bonds:{kaida:2},trust:2,flags:['respirar']},`P|Respira despacio. Mira cinco cosas que no necesiten ser arregladas. Yo cuento, aunque mi peinado lo discuta.
V|Kaida enumeró el río, una nube, las flores, una pluma y tu ridícula expresión concentrada. Al llegar a la quinta ya estaba riendo.
K:happy|No sabía que mi entrenamiento necesitara una técnica para dejar de entrenar.
V|Durante unos minutos, dejó la espada apoyada contra una piedra.`],
 ['Proponer una cita futura en un jardín.',{bonds:{kaida:3},flags:['cita-jardin']},`P|Cuando resolvamos esto, jardín. Sin guardias, sin crisis y con algo de comer. Te invito yo.
K:shy|¿Es una recompensa por la misión?
P|Es una cita, si quieres que lo sea. Estoy probando la técnica revolucionaria de decirlo claramente.
K:happy|Entonces sí. Y procura llegar puntual: sé rastrearte.`]
],'c3-5');

addScene('c3-nara',3,'La receta que no estaba a la venta','forest',['nara'],`
V|Nara cortaba verduras con una habilidad que sugería años de trabajo. Había apartado los ingredientes más caros y elegido una olla vieja con el asa reparada.
P|Esperaba alguna especia secreta de valor incalculable.
N|Sal, paciencia y no fingir que lo quemado es una técnica exótica. Mi madre tenía una posada. Yo heredé la olla y la costumbre de echar a los clientes desagradables con mucha educación.
V|Te enseñó a sujetar el cuchillo. Su mano cubrió la tuya un instante para corregir el ángulo, y luego siguió hablando como si no hubiera notado tu silencio.
N:happy|Tranquilo, héroe. Si esto fuera un intento de seducción, te habría dado una tarea más favorecedora que pelar cebollas.
P|Llorar juntos crea vínculos. Es ciencia culinaria.
N:shy|Viajo mucho. Cambio de negocio antes de que la gente espere demasiado. Funciona. Hasta que una noche quieres contar algo y no sabes a quién escribir.
V|La sinceridad quedó suspendida entre el vapor. Nara giró una moneda con los dedos por costumbre y la dejó quieta cuando vio que seguías escuchando.
P|No hace falta que conviertas esto en un chiste si no quieres.
`,[
 ['Ofrecerle compañía, sin pedir que se quede por ti.',{bonds:{nara:3},trust:2,flags:['nara-libre']},`P|Puedes viajar y tener a alguien a quien volver a escribir. No voy a convertir una invitación en una cadena.
N:shy|Eso hace que me apetezca quedarme. Es una estrategia comercial muy desconcertante.
V|Nara probó el caldo y te dio la cuchara. Había un cuidado silencioso en aquel gesto, algo que no estaba calculando para obtener nada.
P|Mi plan maestro consiste en no quemar la cena. Voy con ventaja porque tú vigilas.`],
 ['Preguntarle por su madre y su primera posada.',{bonds:{nara:3},flags:['receta']},`N|Se llamaba Casa Vesper. La gente decía que mi madre cobraba caro. Luego pasaban una semana pidiendo «solo una noche más».
V|Te habló de viajeros, de cuentas mal hechas y de un cartel que siempre caía cuando llovía. Recordar dejó de dolerle tanto mientras lo compartía.
P|Tu olla tiene más historia que muchas espadas legendarias.
N:happy|Y alimenta mejor. Te concedo permiso para usar esa frase en mi epitafio, dentro de muchísimo tiempo.`],
 ['Flirtear: «¿También das clases particulares de cocina?»',{bonds:{nara:2},chaos:1,flags:['cita-cocina']},`N:happy|Depende. ¿El alumno sigue instrucciones o improvisa monólogos mientras se quema la sopa?
P|Tengo una curva de aprendizaje prometedora y un delantal con antecedentes.
V|Nara se acercó para quitarte una hoja del cabello. Lo hizo despacio, disfrutando de que esta vez fueras tú quien no encontraba una respuesta inmediata.
N:shy|Primera clase: cuando quieras invitarme a algo, no hace falta esconderlo dentro de una oferta.`]
],'c3-5');

addScene('c3-5',3,'La emboscada de los figurantes','forest',['kaida','lys'],`
V|La marea terminó al caer la tarde. También llegaron seis armaduras vacías con el emblema de Aurora. No tenían ojos, pero todas giraron hacia el sello de tu muñeca.
A|Ancla localizada. Traslado preventivo. Resistencia no contemplada en el argumento.
P|Pues que contemplen una revisión. Mi contrato no incluye secuestros al atardecer.
K:serious|Lys, detrás de la roca. Nara, cuerda al flanco. {name}, necesito saber qué puedes tocar sin quedarte expuesto.
V|Las armaduras pisaban exactamente al mismo ritmo. Cada golpe terminaba con la misma pausa. Eran instrucciones repetidas, no guerreros tomando decisiones.
L|Si cambiamos el intervalo de una, las demás podrían perder la sincronía. El cristal de control está en el pecho.
P|Entonces no estamos peleando contra una patrulla. Estamos corrigiendo un mal bucle.
V|Una armadura arrojó una red. Kaida la cortó antes de que te alcanzara. En el suelo aparecieron rutas luminosas que intentaban separaros hacia distintos senderos.
K|No sigáis las luces. ¡Seguid nuestras voces!
V|El poder acudió a tus dedos. Esta vez sabías que, después de usarlo, tus compañeras tendrían que cubrir tus tres segundos.
`,[
 ['Confiar en Kaida y desincronizar el cristal.',{bonds:{kaida:2,lys:1},trust:2,flags:['armaduras-control']},`V|Kaida abrió una brecha con el escudo. Tocaste el cristal y cambiaste INTERVALO IGUAL por INTERVALO VARIABLE. La patrulla tropezó con sus propios movimientos.
P|¡Uno, dos, tres! Fantástico. Acabo de derrotar un ejército introduciendo retrasos.
V|Lys cerró las rutas falsas mientras Nara ataba las armaduras entre sí. Cuando el último casco cayó al suelo, el bosque recuperó sus ruidos.
K:happy|Eso es trabajar en equipo. Puedes ponerle un nombre ridículo después de respirar.`],
 ['Pedir ayuda a Brumo.',{trust:1,bonds:{nara:1},flags:['brumo-rescate']},`P|¡Brumo! ¡Hay gente sin merienda comportándose fatal!
V|El dragón apareció entre los árboles con la solemnidad de una montaña ofendida. Sopló una nube de hojas que cubrió los cristales y aplastó tres armaduras con una pata.
B|Respetad el horario de visitas. Y rellenad una hoja de reclamaciones.
V|Aprovechasteis la confusión para cortar la señal. Nara recogió un casco como recuerdo y propuso venderlo como maceta.`],
 ['Convertir el terreno en una pista resbaladiza.',{chaos:2,bonds:{nara:2},flags:['armaduras-hielo']},`V|Cambiaste RUGOSO por LISO en un tramo de piedra. Las armaduras patinaron en formación perfecta, unidas por la desgracia y por una falta evidente de flexibilidad táctica.
P|Patinaje sincronizado. Les doy un ocho por esfuerzo y un dos por intención.
V|También tú empezaste a deslizarte cuando terminó el bloqueo. Kaida te atrapó del cuello de la capa antes de que besaras un árbol.
K:serious|Mañana practicamos pensar dónde vas a caer.`]
],'c3-6',{magic:true});

addScene('c3-6',3,'Una invitación con sello dorado','city',['nara','lys'],`
V|Brisalia os recibió con preparativos de fiesta. Sobre cada calle colgaban faroles de cristal. Ahora sabíais que su brillo no era tan inocente como parecía.
N|Necesitamos entrar al palacio y localizar la sala que alimenta la red. Por suerte, alguien ha cometido el error de invitarnos.
V|Sacó cuatro tarjetas y una quinta que acababa de aparecer con un pequeño destello. El baile de apertura del Festival de las Rutas se celebraría al día siguiente.
L:serious|Severin sabe que hemos encontrado la ruina. Esto puede ser una trampa.
P|Por supuesto. Una trampa con código de vestimenta. Las más caras.
M|Yo también iré. He solicitado una intervención presencial y el departamento ha respondido «pendiente». Pienso interpretar el silencio de forma creativa.
V|La voz de Mirel salió de tu sello. Sonaba cansada, pero más decidida. Al fondo escuchaste una montaña de papeles caer.
N:happy|Perfecto. Tengo trajes. Y un plan. La combinación es peligrosa, lo sé.
V|Lys miró tu invitación. En la línea de acompañante no había un nombre: solo un espacio en blanco. Esta vez nadie había rellenado el futuro por vosotros.
P|Bien. Mañana investigamos la conspiración. Hoy necesito aprender a bailar sin activar un protocolo de evacuación.
`,[
 ['Pedir a Lys que te ayude a estudiar el protocolo.',{bonds:{lys:2},trust:1,flags:['baile-lys']},`L:shy|Puedo explicarte los pasos. En teoría. Los libros no suelen pisarte cuando se equivocan.
P|Soy una edición interactiva. Mucho más costosa de mantener.
V|Lys extendió una guía sobre la mesa. Pronto los dos estabais contando tiempos con los dedos y riendo cada vez que el dibujo parecía describir una maniobra militar.`],
 ['Pedir a Kaida un entrenamiento acelerado.',{bonds:{kaida:2},flags:['baile-kaida']},`K:happy|Mantén el centro, escucha la música y no uses la fuerza. Igual que un duelo, pero con más contacto visual.
P|La tercera instrucción es más difícil de lo que parecía en el folleto.
V|Kaida te tomó de la mano para marcar el primer paso. Esta vez no lo justificó como una medida de seguridad.`],
 ['Dejar que Nara organice la presentación.',{bonds:{nara:2},chaos:1,flags:['baile-nara']},`N:happy|Tengo un traje que te hará parecer responsable. El efecto dura hasta que hablas, así que aprovecharemos los primeros segundos.
P|Mi reputación depende de un tejido. Me parece justo: la anterior la destruyeron unas zapatillas.
V|Nara apoyó una cinta contra tu hombro para tomar medidas. Se acercó lo suficiente para que te olvidaras de protestar por el precio.`]
],'c4-1');

addScene('c4-1',4,'Tres minutos de elegancia','palace',['nara','kaida'],`
V|El palacio flotaba sobre Brisalia sujeto a columnas de luz. Había música, balcones abiertos y tanta gente fingiendo no mirar a los demás que la sala parecía un concurso de disimulo.
P|Si aparece una escalera larguísima, me niego a bajar de forma dramática. Ya he gastado mi caída de la temporada.
N:happy|Respira. La mitad de esta gente tampoco sabe qué está haciendo. Solo tiene ropa más cara.
K|Y la otra mitad está trabajando. Mira los guardias, no los invitados: las puertas que vigilan nos dirán qué zonas importan.
V|Un sirviente te entregó una pulsera de cristal. Lys leyó la inscripción antes de que te la colocaras y frunció el ceño.
L:serious|«Invitado vinculado». No parece un simple pase de acceso.
M|No lo es. Conecta cada pulsera al registro de encuentros. Necesitamos usarla para entrar, pero puedo impedir que recoja vuestras respuestas.
V|Mirel apareció detrás de ti con una copa de zumo y el halo convertido en un pequeño adorno del cabello. Parecía orgullosa de su discreción hasta que una estrella de papel salió de su bolso.
P|Tu cobertura de invitada normal está teniendo una fuga de divinidad.
M:shy|Es la primera vez que asisto a una fiesta sin revisar los permisos. Dame cinco minutos para aprender.
`,[
 ['Ayudar a Mirel a sentirse parte del grupo.',{bonds:{mirel:3},trust:1,flags:['mirel-baile']},`P|Aquí eres Mirel. Puedes beber, conversar y evitar a quien hable demasiado de su cargo. Es una técnica social universal.
M:happy|Entonces deberé evitarme a mí misma durante un rato.
V|Le ofreciste el brazo para cruzar la sala. Su sonrisa cambió cuando comprendió que no estabas pidiendo un favor administrativo.
N:happy|Qué bonito. Si alguien pregunta, somos un grupo perfectamente normal con un porcentaje irrelevante de diosas.`],
 ['Estudiar las salidas con Kaida.',{bonds:{kaida:2},trust:2,flags:['salidas']},`V|Kaida señaló dos escaleras de servicio, un pasillo vigilado y una puerta que los guardias procuraban no mirar.
K|Esa última importa. Cuando alguien intenta parecer desinteresado en un punto concreto, suele estar protegiéndolo.
P|Como yo frente a la mesa de postres. Entendido.
V|Acordasteis una señal sencilla para reunir al grupo. Por una vez no contenía referencias cinematográficas.`],
 ['Entrar como si el palacio te debiera dinero.',{bonds:{nara:2},chaos:2,flags:['entrada-baile']},`V|Nara te enderezó la chaqueta y te dio un consejo: caminar despacio, asentir una vez y no explicar nada que nadie hubiera preguntado.
P|Buenas noches. Todo marcha según lo previsto.
V|Tres invitados asintieron, un sirviente te ofreció otra copa y alguien empezó a disculparse por un retraso que desconocías.
N:happy|Impresionante. Has desbloqueado autoridad sin contenido. Es muy común aquí.`]
],'c4-2');

addScene('c4-2',4,'El hombre que odiaba las sorpresas','palace',['mirel','lys'],`
V|Severin no llevaba una capa negra ni acariciaba ningún animal sospechoso. Era un hombre de mediana edad, bien vestido, con una voz tranquila y una sonrisa ensayada para inspirar confianza.
S|Nuestro visitante de otro mundo. Has demostrado un talento extraordinario. Espero que Auralia esté resultando acogedora.
P|Buena comida, arquitectura móvil y algún intento de secuestro. Una valoración compleja de resumir en estrellas.
S|Las armaduras actuaron por un exceso de celo. Quería protegerte. Tu poder es una pieza esencial de un proyecto que evitará miles de tragedias.
L:serious|¿El mismo proyecto que decide dónde entran las personas y con quién se encuentran?
S|La libertad produce errores. Amigos que no llegan a conocerse. Parejas que se pierden por un retraso. Gente que muere en la calle equivocada. Yo puedo reducir ese sufrimiento.
V|Durante un instante pensaste en el camión. Severin lo notó y suavizó aún más la voz, como quien ha encontrado una puerta abierta.
S|No hace falta obligar a nadie a sentir. Basta con ordenar las circunstancias hasta que solo quede un camino razonable.
M:serious|Eso sigue siendo quitarles los otros caminos.
V|La música cambió. Severin te ofreció una pequeña llave dorada y señaló el balcón superior. Quería hablar contigo sin tu equipo.
`,[
 ['Pedir que explique el proyecto delante de todas.',{trust:3,bonds:{mirel:1,lys:1},flags:['severin-publico']},`P|Si el proyecto es tan beneficioso, entenderlo juntos debería ser una ventaja.
S|La información técnica puede resultar inquietante fuera de contexto.
L:serious|Entonces aporte contexto. Soy archivista, no decoración de su salón.
V|La sonrisa de Severin perdió medio grado de calidez. Guardó la llave y prometió una demostración durante el festival, con demasiada rapidez.`],
 ['Aceptar la llave, pero avisar a Kaida con la señal.',{bonds:{kaida:2,nara:1},trust:1,flags:['llave']},`P|Me interesan los detalles. Aunque debo advertirle que suelo hacer preguntas incómodas cuando tengo hambre.
V|Tomaste la llave y repetiste la señal convenida. Kaida siguió tu movimiento desde el otro lado de la sala. Nara desapareció entre los invitados.
S|El palacio superior te mostrará lo que podríamos construir.
V|No prometiste subir. A veces aceptar una llave solo significa que ahora tienes una llave.`],
 ['Preguntar si también vende seguros contra giros de guion.',{chaos:2,bonds:{nara:1},flags:['severin-broma']},`P|¿El plan incluye una garantía? Porque «eliminar el sufrimiento controlando el destino» suele empeorar mucho a partir del segundo acto.
S|El humor evita decisiones difíciles.
P|A veces. Otras evita que una idea peligrosa parezca profunda solo porque alguien la dice despacio.
V|Mirel escondió una sonrisa detrás de su copa. Severin se despidió con educación y una mirada que ya no pretendía ser amable.`]
],'c4-3');

addScene('c4-3',4,'La pieza que exige dos personas','palace',['lys','kaida'],`
V|La orquesta comenzó una danza tradicional. Nara explicó que el corredor de archivos abriría al terminar la pieza, cuando los guardias cambiasen de puesto.
N|Tenemos unos minutos que llenar y una sala entera mirando al héroe recién llegado. Bailar evita preguntas. O genera otras más divertidas.
P|Mi especialidad es contar hasta tres y esperar a recuperar las piernas. Quizá este mundo me estaba preparando para esto.
L:shy|Yo... he repasado los pasos. Por si necesitabas ayuda. No porque estuviera esperando una invitación concreta.
K:shy|Y yo necesito comprobar que recuerdas mantener el centro. Por motivos estrictamente... No. Olvídalo. Me apetecería bailar.
V|Nara se rio por lo bajo. Mirel miraba a las parejas con la atención de alguien que había leído todas las normas y aún no sabía dónde poner las manos.
P|Podemos organizar varias piezas. Esto no tiene que convertirse en un torneo con eliminatorias.
L:happy|Buena aclaración. No pienso redactar un reglamento para eso.
V|La música esperaba menos que vosotros. Tendiste la mano, dispuesto a elegir el primer baile de tu segunda vida.
`,[
 ['Invitar a Lys y dejar que encuentre su propio ritmo.',{bonds:{lys:2}},null,'c4-lys'],
 ['Invitar a Kaida sin llamarlo entrenamiento.',{bonds:{kaida:2}},null,'c4-kaida'],
 ['Acercarte a quienes esperan junto al balcón.',{},null,'c4-balcon']
],'c4-4',{prompt:'¿Con quién comienza la música?'});

addScene('c4-lys',4,'Una distancia de medio paso','palace',['lys'],`
V|Lys puso su mano en la tuya con una concentración casi académica. Contó el primer compás por lo bajo y el segundo contra tu hombro.
P|Si seguimos contando, al final de la canción habremos presentado la declaración de impuestos.
L:happy|Estoy intentando no pisarte. Puedes colaborar dejando de hacerme reír en los giros.
V|No bailabais especialmente bien. Eso dejó de importar cuando Lys olvidó vigilar el suelo. La sala giraba despacio alrededor de una conversación que no necesitaba mucho volumen.
L:shy|Antes me preocupaba que todo estuviera preparado. Pero nadie escribió lo que me pasa ahora. No puede ser tan... desordenado si lo calculó alguien.
P|Mis pies son una garantía de espontaneidad.
V|Ella se acercó medio paso. Era una pregunta silenciosa, y tú agradeciste que esta vez el destino tuviera la cortesía de esperar fuera.
`,[
 ['Acercarte también y decirle que estás aquí por elección.',{bonds:{lys:3},flags:['baile-cercano-lys']},`P|El camino pudo traerme. Quedarme en este baile lo he elegido yo.
L:shy|Entonces me gustaría que durara otra canción.
V|Lys apoyó la frente un instante cerca de tu hombro. Fue un gesto pequeño, lleno de una confianza que ninguna pulsera había podido fabricar.`],
 ['Girar con ella y bromear sobre vuestra coordinación.',{bonds:{lys:2},chaos:1},`P|Parecemos profesionales si nadie mira por debajo de las rodillas.
L:happy|Entonces habrá que mantener una conversación fascinante para distraerlos.
V|El giro salió torcido, pero la risa fue perfecta. Lys decidió que no todas las cosas bonitas necesitaban salir bien.`],
 ['Preguntarle por la inscripción original del Telar.',{bonds:{lys:1},trust:2},`L|Una ruta existe mientras puedas abandonarla. Creo que también se aplica a esto: una invitación vale porque puedes rechazarla.
P|Y aceptar merece significar algo. Te entiendo.
V|Lys apretó suavemente tus dedos. A veces una conversación técnica encontraba la forma de parecerse a una declaración.`]
],'c4-4');

addScene('c4-kaida',4,'La capitana baja la guardia','palace',['kaida'],`
V|Kaida esperaba un comentario sobre táctica. Al no recibirlo, te miró con sorpresa y colocó una mano firme sobre tu hombro.
K:shy|Gracias por no convertirlo en un ejercicio. Me estaba preparando una excusa y empezaba a cansarme de oírla.
P|Puedo ofrecer una excusa peor si te ayuda. «Necesitamos medir el suelo de la sala».
K:happy|Horrible. Aceptada como último recurso.
V|Bailaba con seguridad, pero se ponía nerviosa cuando la mirabas demasiado tiempo. Había aprendido a sostener una línea de defensa antes que una mirada interesada.
K|Cuando acabe esto, no quiero otra ceremonia. Quiero ese día libre del que hablamos. Aunque no sepa qué hacer durante él.
P|Podemos fracasar en descansar juntos. Me parece un proyecto ambicioso y bien financiado.
V|El viento del balcón movió su cabello. Kaida se rio y dejó de comprobar las puertas durante toda una vuelta.
`,[
 ['Confirmar que tu invitación al jardín sigue en pie.',{bonds:{kaida:3},flags:['jardin-prometido']},`P|Jardín, comida y una tarde sin informes. Conmigo, si te apetece.
K:shy|Me apetece. Mucho. No pienso redactarlo con un lenguaje más profesional.
V|La siguiente vuelta fue más lenta. Por una vez, Kaida no estaba esperando a que alguien necesitara que corriera.`],
 ['Decirle que puede apoyarse en ti.',{bonds:{kaida:2},trust:2},`P|No siempre voy a saber qué hacer. Pero puedo quedarme mientras lo averiguamos.
K|Eso es más fiable que prometer resolverlo todo.
V|Kaida apoyó un poco más de peso en tu mano. No era una prueba de fuerza: era una forma de decir que te había creído.`],
 ['Proponer una maniobra de baile demasiado ambiciosa.',{bonds:{kaida:2},chaos:2},`V|Intentaste un giro de película. Kaida te sostuvo antes de que la gravedad pudiera participar y acabaste inclinado sobre su brazo, mirando el techo.
P|Perfecto. Exactamente como lo había imaginado, salvo la distribución de papeles.
K:happy|Quédate quieto. Quiero memorizar tu expresión para cuando presumas de esto.`]
],'c4-4');

addScene('c4-balcon',4,'Dos formas de esconder los nervios','palace',['nara','mirel'],`
V|Nara fingía estudiar el valor de las lámparas. Mirel fingía entender cómo se elegía una pareja de baile. Las dos eran menos convincentes de lo habitual.
P|Tengo un hueco en mi agenda entre no caerme y encontrar una conspiración. Me gustaría compartirlo.
N:happy|Una oferta tan específica merece una negociación.
M:shy|Yo nunca he bailado de verdad. Solo autoricé una vez una danza ceremonial que terminó en una reclamación por daños.
P|Mi experiencia tampoco inspira confianza, pero juntos podemos disminuir las expectativas.
V|Nara te miró de arriba abajo, quizá para comprobar que el traje seguía bien, quizá por una razón menos profesional. Mirel se alisó las mangas sin necesidad.
N|Puedes preguntar con claridad. Esta noche ya tiene suficientes dobles intenciones.
`,[
 ['Bailar con Nara, sin fingir que es parte del plan.',{bonds:{nara:4},flags:['baile-cercano-nara']},`V|Nara dejó que la condujeras durante tres pasos y tomó el control en el cuarto, sonriendo cuando comprendiste que lo había preparado.
N:shy|Esta vez no estoy actuando para nadie. Quería que lo supieras.
P|Entonces procuraré que el momento tenga una buena relación calidad-caída.
V|Ella rio cerca de tu oído. El resto de la sala perdió bastante importancia.`],
 ['Enseñar a Mirel tus tres únicos pasos.',{bonds:{mirel:4},flags:['baile-cercano-mirel']},`M:shy|Uno, dos, tres. ¿Y luego?
P|Repetimos con tanta confianza que parezca una elección artística.
V|Mirel se equivocó, te pisó y empezó a disculparse. Cuando le dijiste que tú habías hecho exactamente lo mismo antes, soltó una risa que hizo brillar todas las pulseras de la sala.
M:happy|Creo que quiero cometer más errores pequeños.`],
 ['Quedarte conversando con ambas y compartir los postres.',{bonds:{nara:2,mirel:2},trust:2,flags:['balcon-amigas']},`V|Dividisteis un plato de tartaletas mientras Nara inventaba biografías absurdas para los invitados y Mirel intentaba no confirmar cuáles eran ciertas.
P|Ese señor parece alguien que traicionaría al reino por un aparcamiento reservado.
M:happy|No puedo comentar expedientes abiertos.
V|Decidisteis que aquello también contaba como una buena forma de pasar una canción.`]
],'c4-4');

addScene('c4-4',4,'El archivo de los finales perfectos','palace',['lys','nara'],`
V|La puerta de servicio se abrió cuando la orquesta empezó otra pieza. Nara distrajo al guardia preguntándole por una factura imposible; Lys te acompañó al archivo.
[llave]V|La llave que te había dado Severin abrió la cerradura. Quizá esperaba que encontraras algo concreto. Eso hizo que buscarais con todavía más cuidado.
[!llave]V|Nara había dejado una ganzúa detrás de un jarrón. La nota decía: «La elegancia también abre puertas, pero esto es más rápido».
V|Dentro había registros de cientos de ciudadanos. Cada ficha describía encuentros propuestos, ocupaciones recomendadas y rutas descartadas por «riesgo de decepción».
L:serious|Está reduciendo vidas enteras a resultados. Aquí hay una persona a la que impidieron partir para que otra no se sintiera abandonada.
P|Eso no elimina el dolor. Solo elige a quién no le permite explicarse.
V|En tu expediente, la casilla DON estaba escrita sobre otra palabra borrada. La hoja original indicaba «comprensión». Alguien había añadido «edición» con la firma de Severin.
L|Necesita tu poder para fijar el Telar. Él puede mover caminos, pero no cambiar su regla fundamental. Tú sí, si aceptas su autoridad.
V|Un registro describía la secuencia final: tercera campana, convergencia de cuatro vínculos, ancla en el trono. La promesa de una vida perfecta era el cebo.
P|Me ha convertido en una llave con problemas de autoestima. Me gustaría presentar una reclamación especialmente extensa.
`,[
 ['Copiar el registro del poder alterado.',{trust:3,bonds:{lys:1},clues:['Severin cambió el don de comprensión por un permiso de edición. Necesita que el protagonista acepte el trono para fijar el Telar.'],flags:['don-alterado']},`V|Lys copió el documento completo mientras tú vigilabas el corredor. Esta vez no bastaba con un símbolo: guardasteis fechas, órdenes y responsables.
L|El permiso no le permite obligarte a usarlo. Si logramos cortar la red antes de la tercera campana, tendrá que enfrentarse a una decisión que no controla.
P|La mía. Voy a procurar que sea una de las buenas.
V|Guardaste la copia junto a las otras pruebas. El misterio empezaba a tener una forma que podíais demostrar.`],
 ['Buscar cómo liberar a los ciudadanos registrados.',{trust:3,bonds:{lys:2},flags:['liberar-registros']},`V|Encontraste una instrucción de salida de emergencia. Cada ciudadano conservaba una firma propia, una especie de llave personal que el nuevo sistema estaba ignorando.
P|No han perdido el derecho a irse. Solo les han escondido la puerta.
L:happy|Podemos volver a hacerla visible. Si una persona retira su firma, la red deja de contarla como parte del plan.
V|Lys marcó los paneles que habría que abrir durante el festival. Ya no buscabais solo detener a Severin: teníais una forma de devolver opciones.`],
 ['Dejar una nota sarcástica en tu expediente.',{chaos:3,bonds:{nara:1},flags:['nota-expediente']},`P|«El sujeto rechaza el trono por incompatibilidad con sus horarios y porque las sillas sin respaldo le causan problemas».
L:serious|Eso le avisará de que estuvimos aquí.
P|Ya nos invitó a su trampa. Me parece correcto enviar una confirmación de asistencia.
V|Lys terminó de copiar las rutas de acceso y os marchasteis. No aprobó la nota, pero la frase sobre el respaldo le hizo reír durante tres pasillos.`]
],'c4-5');

addScene('c4-5',4,'El balcón equivocado','palace',['mirel','kaida'],`
V|El pasillo del archivo desembocó en el mismo balcón tres veces. La cuarta, todas las puertas se cerraron. El Telar acababa de decidir que la fiesta había terminado para vosotros.
K:serious|Tenemos gente en la sala principal. Si la red se descontrola, las escaleras pueden abrir sobre el vacío.
M|Puedo sostenerlas durante unos minutos, pero necesito que alguien corte el cristal del corredor. Mi autorización está siendo revocada.
V|El halo de Mirel parpadeó. Se apoyó en la baranda, sorprendida por el peso real de su propio cuerpo. Kaida la sujetó sin preguntar.
P|Severin está desconectándote.
M:serious|Está intentando que vuelva al departamento. Técnicamente es mi supervisor en esta operación. Técnicamente me importa cada vez menos.
V|Al otro lado del balcón, un cristal latía sobre una columna. Podías alcanzarlo saltando, desviar la pasarela hacia él o buscar el cable de control bajo el suelo.
K|Elige algo que podamos cubrir. Ningún salto de fe sin cuerda. Me da igual cuántas películas lo recomienden.
P|Muy bien. Rebajamos el nivel de épica y aumentamos las probabilidades de cenar.
`,[
 ['Coordinar una pasarela mientras Kaida protege a Mirel.',{trust:3,bonds:{kaida:1,mirel:2},flags:['balcon-equipo']},`V|Cambiaste la orientación de una losa suelta y construiste un paso corto. Lys comprobó el apoyo; Nara aseguró la cuerda; Kaida sostuvo a Mirel mientras cruzabas.
P|¡Uno, dos, tres! Ahora desconectamos la lámpara más cara del reino.
V|El cristal perdió la señal. Las puertas regresaron a sus sitios y el halo de Mirel dejó de parpadear, aunque ella seguía temblando.
M:shy|Gracias por no tratarme como si fuera indestructible. Me cuesta recordarlo yo misma.`],
 ['Buscar el cable de control con Lys.',{bonds:{lys:2,mirel:1},trust:2,flags:['cable']},`L:serious|La energía no viene de la columna; vuelve a ella. Si cortamos el retorno, el mecanismo entra en reposo.
V|Levantasteis una baldosa y encontrasteis una cinta de cobre. Corregiste CONDUCTORA por AISLANTE y los cierres se apagaron uno tras otro.
P|La ingeniería ha derrotado al salto espectacular. Lo lamentarán los fabricantes de capas.
V|Kaida soltó el aire que estaba conteniendo. Mirel os miró como si acabara de descubrir que se podía pedir ayuda sin perder autoridad.`],
 ['Intentar el salto heroico, con la cuerda puesta.',{chaos:3,bonds:{kaida:1,mirel:1},flags:['salto']},`V|Saltaste. Durante un glorioso segundo te sentiste parte de una escena legendaria. Después recordaste que el bloqueo llegaría justo al tocar el cristal.
P|¡La planificación tiene una pequeña laguna!
V|Kaida y Nara tiraron de la cuerda mientras Lys desactivaba la señal que habías dejado expuesta. Volviste al balcón girando lentamente como un jamón caro.
K:serious|Mañana hablaremos de la diferencia entre valentía y logística deficiente.
M:happy|Después de que yo termine de reírme. Lo siento. Es un reflejo nuevo.`]
],'c4-6',{magic:true});

addScene('c4-6',4,'Lo que una fiesta no puede decidir','tavern',['nara','mirel'],`
V|Regresasteis a la posada por una ruta que Nara garantizó libre de magia, vigilancia y precios turísticos. Solo os cobró aceptar que había sido una buena noche de baile.
P|Hemos entrado a una conspiración, robado documentos y escapado por un balcón. En mi mundo eso contaría como una cita difícil de superar.
M:shy|Mañana se activa la red del festival. Severin intentará atraerte al trono. Puede ofrecerte una vida donde nada salga mal, incluida cualquier relación que desees.
N:serious|Si alguien te promete mi respuesta antes de preguntarme, puedes asumir que la promesa no vale nada.
V|Lys dejó sobre la mesa las copias del archivo. Kaida comprobó una última vez las cerraduras y se sentó. Todas parecían más cansadas y, de alguna forma, más cercanas.
P|No quiero que lo que pase entre nosotros venga garantizado por una máquina. Aunque eso implique meter la pata por mi cuenta.
L:happy|Llevas una ventaja considerable en esa parte.
V|La broma alivió la mesa. Después llegó un silencio distinto: no incómodo, sino lleno de cosas que empezaban a significar más de lo previsto.
M|Mañana podemos salvar los caminos. Esta noche podemos decidir cómo queremos tratarnos mientras lo intentamos.
`,[
 ['Hablar con honestidad de que te atrae más de una compañera.',{trust:3,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['honesto']},`P|Me importáis de formas que aún estoy entendiendo. No quiero prometer exclusividad a varias personas ni ocultarlo para evitar una conversación difícil.
N|Bien. Eso se habla. Cada una tendrá su respuesta y su tiempo; no lo conviertas en una competición.
M:shy|Ni en una decisión que haya que tomar esta noche.
V|Asentiste. La conversación no resolvió el futuro. Le dio algo más valioso: espacio para que todas pudieran elegirlo.`],
 ['Decir que quieres conocer a alguien con calma.',{trust:2,bonds:{lys:1,kaida:1},flags:['paso-a-paso']},`P|Me gustaría que una relación naciera de lo que vamos viviendo. Sin correr para alcanzar la escena final.
L:shy|Eso suena bien. Tengo preguntas que necesitan más de una noche.
K|Y citas pendientes que no deberían confundirse con una promesa de por vida.
V|Nara levantó su vaso por los acuerdos claros. Mirel preguntó si ir despacio también podía ser emocionante y obtuvo cuatro respuestas afirmativas.`],
 ['Proponer que primero sobrevivas al festival.',{chaos:1,trust:1,flags:['primero-festival']},`P|Mi prioridad es que mañana nadie acabe atrapado en una profecía, un trono o un puesto de comida demasiado caro. Después hablaré de mis sentimientos con más vocabulario.
N:happy|Aceptamos la prórroga. No una desaparición misteriosa cuando toque conversar.
P|Trato. En este mundo las puertas ya desaparecen bastante sin mi ayuda.
V|La cena terminó tarde. Por primera vez, Mirel se quedó a dormir en una habitación de la posada en lugar de volver a su escritorio.`]
],'c5-1');
