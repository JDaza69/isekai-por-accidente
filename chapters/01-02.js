addScene('c1-1',1,'La prioridad era llegar a casa','earth',[],`
V|A tus veinticuatro años, habías aprendido tres cosas: las ofertas siempre tenían letra pequeña, el arroz se quemaba si lo mirabas con suficiente confianza y llegar tarde era un talento transferible.
P|Si corro, llego a la tienda antes de que cierre. Si no corro, conservo la dignidad. Una decisión difícil para alguien que lleva zapatillas de pato.
V|El semáforo se puso verde. Un camión de reparto dobló la esquina demasiado deprisa. Alcanzaste a leer «Entregas a otros mundos» antes de que todo se volviera blanco.
P|Eso tiene que ser publicidad engañosa.
V|No hubo sangre ni dolor. Solo un sonido de notificación, el olor a papel recién impreso y la incómoda certeza de que acababas de dejar ropa en la lavadora.
A|Bienvenido al Departamento de Segundas Oportunidades. Su muerte es importante para nosotros. Permanezca a la espera mientras revisamos su caso.
P|He muerto y sigo en atención al cliente. Es una crítica social bastante agresiva.
V|Ante ti aparecieron tres puertas. Una decía «Reencarnaciones», otra «Objetos perdidos» y la tercera «Salida». La tercera estaba dibujada sobre una pared.
P|Bien. Antes de aceptar otro contrato sin leerlo, voy a establecer unas prioridades.
`,[
 ['Pedir una explicación y un vaso de agua.',{trust:1,flags:['pregunta-primero']},`P|Me gustaría saber qué ha pasado. Y beber agua. Si mi cuerpo es ahora una idea, que sea una idea hidratada.
V|Un pequeño vaso apareció entre tus manos. El agua estaba tibia. El universo podía conceder una segunda vida, pero tenía dificultades con lo del hielo.
A|Su solicitud de información ha sido registrada. Tiempo estimado de respuesta: depende de la diosa.
P|Eso no es una unidad de tiempo, pero agradezco la honestidad.`],
 ['Preguntar si este es el tutorial del isekai.',{chaos:1,flags:['conoce-genero']},`P|Conozco este argumento. Ahora me dan una espada legendaria y descubro que mi estadística menos útil rompe el sistema.
A|No podemos confirmar ni desmentir la existencia de estadísticas inútiles.
P|Entonces quiero poner todos mis puntos en negociar el alquiler.
V|La máquina de turnos emitió un pitido ofendido, como si hubieras encontrado una opción que no estaba preparada para procesar.`],
 ['Buscar al conductor para reclamar el equipaje.',{chaos:2},`P|Si el viaje estaba incluido, también deberían estarlo mis auriculares.
V|Abriste Objetos perdidos. Dentro había una espada, siete coronas, un calcetín y una nota: «El conductor está de baja por exceso de protagonistas».
P|No reclamaré daños morales. Me conformo con el calcetín que falta.
A|Su sensatez ha sido evaluada. Resultado: no concluyente.`]
],'c1-2');

addScene('c1-2',1,'La ventanilla número siete','palace',['mirel'],`
V|La pared se abrió como una cortina. Detrás había un escritorio lleno de estrellas de papel y una mujer adulta de cabello claro que intentaba sujetar un halo con una pinza.
M:serious|Nombre, procedencia y motivo de fallecimiento. Si responde «argumento», tendré que usar otro formulario.
P|{name}. Tierra. Mala coordinación entre urbanismo y transporte pesado.
M:happy|Mirel. Diosa de los umbrales, funcionaria de segunda categoría y, desde hace once horas, sustituta de mi sustituta.
V|Te ofreció una silla. Ella siguió de pie. Tenía una taza fría, una montaña de expedientes y esa sonrisa que se usa cuando nadie ha preguntado todavía si necesitas descansar.
M|Existe un mundo llamado Auralia. Necesita ayuda con ciertas irregularidades mágicas. Puedes aceptar una segunda vida allí o quedarte aquí mientras buscamos otra posibilidad.
P|¿La segunda vida incluye vivienda o estamos usando «fantasía» en su sentido más cruel?
M:shy|Tenemos alojamiento provisional. Y un don heroico. En tu expediente figura «compatibilidad excepcional», aunque no recuerdo haberlo escrito.
V|En la esquina del documento viste una firma borrosa y un sello con una fecha que todavía no había ocurrido. Mirel lo tapó con un movimiento nervioso.
M|Antes de decidir, puedes preguntar lo que quieras. Lo prefiero a otro héroe que lea solo la palabra «excepcional».
`,[
 ['Preguntar por la fecha extraña del expediente.',{bonds:{mirel:2},trust:2,clues:['El expediente de llegada fue autorizado con una fecha futura. Mirel no reconoce la firma.'],flags:['expediente']},`P|Esta firma parece hecha antes de que yo llegara y después de mañana. Mi calendario necesita asistencia técnica.
M:serious|No debería ser posible. Los destinos se registran; no se encargan por adelantado.
V|Mirel hizo una copia y te la entregó doblada. Sus dedos rozaron los tuyos, pero estaba demasiado preocupada por el sello para notarlo.
M|Guárdala. Si alguien pregunta, estamos realizando una auditoría. Es una palabra muy aburrida y por eso abre muchas puertas.`],
 ['Ofrecerle tu silla y escucharla.',{bonds:{mirel:3},trust:1,flags:['silla']},`P|Primero siéntate tú. Yo acabo de estar muerto; en términos de descanso voy por delante.
M:shy|Los visitantes no suelen fijarse en eso. Generalmente preguntan cuándo recibirán su harén.
P|Yo iba a preguntar por una almohada. Podemos empezar con expectativas razonables.
V|Mirel soltó una risa pequeña, cansada y auténtica. Por primera vez apartó el expediente para mirarte como a una persona.`],
 ['Pedir poder ilimitado y una capa que ondee sola.',{chaos:2,bonds:{mirel:1},flags:['capa']},`P|Algo discreto. Poder infinito, inmunidad a impuestos y una capa con su propio ventilador.
M:happy|Puedo ofrecerte dos de esas cosas si aceptas que «infinito» significa «pendiente de revisión» y «inmunidad» significa «no».
P|Excelente negociación. Ya me siento estafado con cariño.
V|Mirel dibujó una capa junto a tu nombre. Debajo escribió: «Supervisar durante las primeras cuarenta y ocho horas».`]
],'c1-3');

addScene('c1-3',1,'Poder administrativo absoluto','palace',['mirel'],`
V|Mirel te condujo a un círculo dorado. Sobre el suelo flotaban palabras que describían las cosas: COLUMNA FIRME, VENTANA CERRADA, CAFÉ FRÍO.
M|Tu don debía permitirte entender cualquier lengua. Pero alguien ha adjuntado un permiso de edición. Puedes cambiar una propiedad de lo que tocas, si comprendes de verdad qué estás cambiando.
P|¿Soy el botón de corregir del universo?
M:serious|Con límites. No puedes editar la voluntad de otra persona, crear vida ni devolver a los muertos. Cada cambio te deja inmóvil durante tres segundos. Úsalo con cuidado.
V|Tocaste la taza. La palabra FRÍO se convirtió en CALIENTE. El café empezó a humear; tus piernas se quedaron bloqueadas y casi caíste sobre el escritorio.
M:shy|Te tengo. Y esa es la razón por la que los tutoriales suelen utilizar piedras.
P|Acabo de desbloquear microondas y vergüenza ajena en la misma habilidad.
V|Mirel soltó tu brazo solo cuando recuperaste el equilibrio. En su sello brilló por un instante un símbolo: un ojo dentro de una rueda.
M|Busca a Lys, archivista de Brisalia. Ella estudia unos caminos que cambian de sitio. Me reuniré contigo cuando termine el informe. No intentes salvar el mundo antes de cenar.
P|Parece una recomendación demasiado específica. Me gusta y me preocupa.
`,[
 ['Practicar con una piedra y memorizar los tres segundos.',{trust:2,bonds:{mirel:1},flags:['entrenamiento']},`V|Cambiaste PESADA por LIGERA en una piedra de muestra. Contaste tres segundos en voz alta y dejaste que el bloqueo terminara antes de moverla.
M:happy|Eso. Un héroe que escucha instrucciones. Voy a enmarcar este momento.
P|No lo difundas. Arruinaría mi reputación de protagonista impulsivo.
V|La piedra levitó suavemente. Era un poder enorme, pero por primera vez sentiste que podía aprenderse en lugar de presumirse.`],
 ['Calentarle el café y prometer que volverás.',{bonds:{mirel:3},flags:['cafe']},`P|Antes de irme: café caliente, silla ocupada y una pausa de cinco minutos. Esa es mi primera misión.
M:shy|¿La promesa incluye regresar vivo?
P|Incluye quejarme personalmente si el alojamiento provisional tiene goteras.
V|Mirel se rio. Cuando el portal se encendió, seguía sosteniendo la taza con ambas manos, como si fuera un regalo más raro que cualquier milagro.`],
 ['Probar una entrada heroica con viento propio.',{chaos:2,flags:['entrada-heroica']},`P|Solo voy a corregir la propiedad AIRE QUIETO. Un poquito. Para la presentación.
V|Una ráfaga levantó los formularios, te envolvió la capa en la cabeza y dispersó la mitad de los expedientes por el portal.
M:serious|Enhorabuena. Has inventado la burocracia meteorológica.
P|Todo gran poder conlleva una gran factura de limpieza.
V|Mirel abrió una puerta bajo tus pies. Su sonrisa prometía venganza administrativa.`]
],'c1-4');

addScene('c1-4',1,'La elfa, el héroe y la fuente','city',['lys'],`
V|Auralia te recibió con islas flotantes, tejados color lavanda y una fuente cuya profundidad descubriste con la dignidad de un saco de patatas.
L:serious|¡No te muevas! Los libros primero. Tú pareces bastante impermeable.
V|Una elfa adulta de cabello verde se arrodilló junto al borde. Rescató tres volúmenes, te tendió la mano y entonces vio el sello de Mirel en tu muñeca.
L:shy|Ah. Tú debes de ser mi... asignado. Quería decir el investigador asignado. La solicitud era de ayuda profesional.
P|Tranquila. En mi currículum pone que sé caer en lugares de trabajo.
L|Soy Lys Auralia. Estudio los caminos antiguos. Esta mañana una calle desapareció y dejó a un panadero entrando por la ventana del alcalde.
P|Quizá solo haya descubierto un modelo de reparto más eficiente.
V|Lys trató de mantener una expresión severa, pero se le escapó una sonrisa. Extendió un mapa lleno de correcciones realizadas a mano.
L|Los puentes, los senderos y las puertas obedecen a una red mágica llamada el Telar. Algo está reescribiéndola. Necesito encontrar la causa antes de que desaparezca un barrio.
V|A tu alrededor empezó a reunirse gente. Alguien comentó que las presentaciones en una fuente eran una antigua tradición de compromiso. Lys cerró el mapa con demasiada rapidez.
`,[
 ['Aclarar el malentendido y ayudar con los libros.',{bonds:{lys:3},trust:1,flags:['fuente-clara']},`P|Confirmo que estamos mojados por razones estrictamente profesionales. Primero los libros, después los rumores.
L:happy|Gracias. Mis vecinos pueden convertir una devolución de biblioteca en una boda de tres días.
V|Escurriste tu manga lejos de las páginas. Lys te mostró cómo sujetar un libro húmedo sin romper el lomo y acabaste obedeciendo como un aprendiz aplicado.
P|Mi primer entrenamiento isekai es conservación de patrimonio. No lo vi venir, pero respeto el giro.`],
 ['Bromear con que te tomas muy en serio las primeras citas.',{bonds:{lys:1},chaos:2,flags:['rumor-novios']},`P|Normalmente invito a un café. Esta vez he traído el agua y me ha faltado organizar lo demás.
L:shy|¡No es una cita! Aunque... el café sí podría ser una forma de entrar en calor. Por razones médicas.
V|Un comerciante aplaudió. Otro empezó a ofrecer descuentos para bodas. Lys señaló el mapa como si fuera un documento que pudiera absolverla.
P|Entendido. Primera reunión clínica con posible repostería.`],
 ['Preguntar por la calle desaparecida.',{bonds:{lys:2},trust:2,flags:['mapa']},`P|¿Desapareció la calle o cambió la conexión entre sus extremos? Mi poder tiene una letra pequeña bastante parecida.
L:serious|La segunda opción. La puerta del horno terminó en el balcón del ayuntamiento. Nadie resultó herido, por suerte.
V|Lys te mostró una línea roja sobre el mapa. No era un borrón: alguien había hecho una corrección precisa, deliberada.
L|Has llegado haciendo un estruendo, pero sabes formular preguntas. Eso compensa bastante.`]
],'c1-5');

addScene('c1-5',1,'El caballero de las tres pausas','city',['lys','kaida'],`
V|Un puente cercano crujió. Sus piedras se separaron despacio y una carreta quedó suspendida sobre el vacío. El caballo parecía tan indignado como aterrorizado.
K:serious|¡Todos atrás! Lys, despeja la plaza. Tú, el de las zapatillas ridículas: no te quedes mirando.
P|Son anatómicas. La humillación viene de serie.
V|La mujer que daba órdenes tenía cuernos pequeños, una armadura marcada por el uso y una espada que estaba utilizando para anclar una cuerda entre los adoquines.
L|Kaida, capitana de la guardia. Kaida, {name}. Tiene un don que podría sostener el puente, pero queda inmóvil después de usarlo.
K|Entonces necesito una señal. No actuaré a ciegas alrededor de alguien cuyo cuerpo decide hacer una pausa en mitad de un rescate.
V|Viste las palabras NUDO FLOJO en una cuerda y PIEDRA FRÁGIL sobre el arco. Podías corregir una de ellas. Kaida te miró, esperando una decisión clara.
P|Puedo asegurar el apoyo. Tú haces lo difícil mientras yo me convierto en mobiliario durante tres segundos.
K:happy|He trabajado con muebles menos colaborativos. Cuenta en voz alta.
V|El caballo relinchó. El tiempo se acababa y la plaza esperaba a que un desconocido recién salido de una fuente resultara ser algo útil.
`,[
 ['Coordinarte con Kaida y reforzar el nudo.',{bonds:{kaida:3},trust:2,flags:['rescate-coordinado']},`P|¡Ahora! Uno... dos... ¡tres!
V|La cuerda se tensó. Kaida cruzó de un salto, liberó al conductor y guio al caballo hasta tierra firme antes de que cediera el último tablón.
K:happy|Buena señal. Buen control. Pésimo calzado, pero eso ya lo sabíamos.
V|Te dio un golpe amistoso en el hombro. Tu orgullo resistió mejor que tus rodillas.
L:happy|El puente sigue roto, pero la gente está a salvo. Esa es la clase de prioridad que quería escuchar.`],
 ['Reparar el arco con una frase dramática.',{bonds:{kaida:1},chaos:2,flags:['puente-dramatico']},`P|¡No pasarás! Me refiero a ti, gravedad. La gente puede pasar tranquilamente.
V|El arco volvió a unirse con un destello. Tus piernas se bloquearon justo cuando una rueda se soltaba de la carreta y rodaba hacia ti.
K:serious|¡Agáchate! ...Claro. No puedes.
V|Kaida desvió la rueda con el escudo y te sujetó por la cintura. De cerca, su expresión era menos heroica y más «voy a cobrarte este susto».
K|Buen resultado. Método discutible. La próxima vez, una señal.`],
 ['Pedir a Lys que calcule el punto de apoyo.',{bonds:{lys:2,kaida:1},trust:2,flags:['rescate-mapa']},`L:serious|La tercera piedra desde el borde. Si recupera su firmeza, redistribuirá el peso sin arrastrar la carreta.
P|Confío en tus matemáticas mucho más que en mi primera intuición, que consistía en gritar.
V|Corregiste la piedra. Kaida aprovechó la estabilidad para evacuar el puente, y Lys mantuvo la cuerda con las manos temblando.
K:happy|Bien. Un equipo antes de ser una leyenda. Eso me sirve.
V|Cuando todo terminó, Lys siguió sosteniéndote la manga un segundo más de lo necesario.`]
],'c1-6');

addScene('c1-6',1,'Una oferta imposible de rechazar','tavern',['nara','kaida'],`
V|La posada del Grifo Despeinado olía a pan, madera caliente y problemas razonablemente asequibles. Tras el mostrador, una kitsune adulta contaba monedas con una mano y saludaba con la otra.
N:happy|El héroe de la fuente. El salvador del puente. El enemigo natural de los pantalones secos. Soy Nara. Te he reservado una habitación.
P|¿Cómo sabes todo eso?
N|Información local. Y acabas de dejar un rastro de agua desde la puerta. Mi trabajo exige observar detalles sutiles.
K|Nara administra las habitaciones del gremio. También vende objetos que suelen ser legales cuando termina de explicar para qué sirven.
N:serious|Qué descripción tan cruel. Casi todos eran legales antes de la explicación.
V|Lys dejó sus libros sobre una mesa y fue a buscar toallas. Nara examinó tu sello sin tocarte. Durante un instante dejó de sonreír.
N|Ese símbolo aparece en un cargamento de cristales que llegó ayer. El destinatario no quiso recibo. En mi experiencia, quien teme al papel suele tener motivos interesantes.
P|Acabo de llegar, tengo un poder absurdo y ya debo investigar un envío sospechoso. Mi agenda se ha organizado sola.
V|Nara te ofreció tres cosas: la llave de tu cuarto, una sopa caliente y un contrato con demasiados adornos florales.
`,[
 ['Leer el contrato con Nara antes de firmar.',{bonds:{nara:3},trust:1,flags:['lee-contrato']},`P|A ver: cama, desayuno y «participación ocasional en promociones». Define ocasional.
N:happy|Una foto sosteniendo un bollo. Nada humillante. Bueno, depende de cómo lo sostengas.
V|Tachaste una cláusula que te convertía en patrocinador vitalicio de la posada. Nara aprobó la corrección con una sonrisa satisfecha.
N|Me gustan los clientes que negocian. Si dicen sí a todo, no sé cuándo creerles.`],
 ['Invitar a las tres a cenar con la recompensa del rescate.',{bonds:{lys:1,kaida:1,nara:1},trust:1,flags:['primera-cena']},`P|Hoy me habéis ayudado a no morir dos veces. La sopa corre por mi cuenta, si mi cuenta existe.
K:happy|El gremio paga el rescate. Y acepta que una parte se convierta en cena.
N:shy|Un hombre que invita sin pedir nada a cambio. Tendré que actualizar mi lista de señales sospechosas.
V|Lys volvió con las toallas. Cuatro cuencos llenaron la mesa, y el ruido de la posada dejó de parecerte ajeno.`],
 ['Firmar como «héroe legendario provisional».',{chaos:2,bonds:{nara:1},flags:['contrato-heroe']},`N:happy|Perfecto. «Provisional» es una palabra preciosa: permite cobrar una renovación.
P|Espera. ¿He desbloqueado una suscripción al alojamiento?
K|Sí. Puedes derrotar la cláusula con una técnica ancestral llamada leer.
V|Nara te devolvió el contrato antes de guardarlo y dejó que lo corrigieras. Se estaba riendo de ti, pero no parecía dispuesta a aprovecharse de que no conocieras el mundo.`]
],'c2-1');

addScene('c2-1',2,'El problema de las dos llaves','tavern',['lys','nara'],`
V|La mañana llegó con un golpe en tu puerta y la voz de Lys diciendo que había un error. En el pasillo, Nara sostenía dos llaves idénticas y una sonrisa que no ayudaba.
L:shy|Mi habitación es la de al lado. La puerta ha cambiado de sitio durante la noche. He entrado aquí por accidente. Estabas dormido y yo... no quería despertarte.
P|El urbanismo mágico tiene un interés preocupante en mi vida sentimental.
N:happy|El pasillo estaba estable cuando me acosté. Si ha decidido emparejar huéspedes, pienso cobrarle una comisión.
V|Lys llevaba tus botas en las manos: había tropezado con ellas al entrar. Tú tenías el pelo en una configuración que desafiaba la geometría. Nadie parecía especialmente preparado para una escena romántica.
L:serious|Hay una línea nueva sobre el marco. La conexión se alteró a las tres y siete de la madrugada. La misma hora aparece en el registro del puente.
P|Eso ya es más inquietante que mis calcetines. Y demuestra intención.
N|También demuestra que alguien sabe qué habitaciones están ocupadas. Voy a revisar los registros de reservas.
V|Una camarera pasó con una bandeja. Miró las llaves, las botas, tus caras y decidió que no cobraba lo suficiente para preguntar.
P|Podemos investigar esto con calma, antes de que el pasillo anuncie nuestro compromiso.
`,[
 ['Revisar la marca del marco junto a Lys.',{bonds:{lys:3},trust:1,flags:['marco']},`V|Lys copió la línea sobre una hoja. La tinta mágica reaccionó a tu sello y dibujó un ojo encerrado en una rueda.
L:serious|El mismo emblema de los cargamentos. No es el Telar fallando al azar: alguien está usando una instrucción externa.
P|Entonces tenemos una pista y un problema de alojamiento. Un día laboral completo antes del desayuno.
V|Ella te apartó un mechón de la frente para que vieras mejor el dibujo. Después retiró la mano y se concentró exageradamente en su pluma.`],
 ['Tranquilizar a Lys y devolverle su intimidad.',{bonds:{lys:3},trust:2,flags:['respeto-puerta']},`P|No has hecho nada malo. Cerramos tu cuarto, revisamos las cerraduras y todos conservamos nuestro derecho a peinarnos sin público.
L:shy|Gracias. Temía que pensaras que había... organizado esto.
P|Si fuera una cita planeada, espero que hubieras exigido una versión mejor peinada de mí.
N:happy|El estándar es bajo, pero negociable. Os traeré desayuno mientras resolvéis la diplomacia capilar.`],
 ['Pedir a Nara una indemnización en bollos.',{bonds:{nara:2},chaos:1,flags:['bollos']},`P|No quiero reclamar por daños románticos. Con dos bollos y un café podemos evitar los tribunales.
N:happy|Uno y medio. El medio es por haberme hecho reír antes de cuadrar las cuentas.
L|Estoy intentando reunir pruebas y vosotros estáis tasando mi vergüenza en repostería.
V|Nara repartió el bollo extra entre los tres. La risa no resolvió el misterio, pero dejó que Lys volviera a respirar con normalidad.`]
],'c2-2');

addScene('c2-2',2,'Examen de ingreso al gremio','city',['kaida','nara'],`
V|Kaida te esperaba en el patio del gremio junto a tres muñecos de entrenamiento. Uno tenía un bigote pintado. Nara aseguraba que mejoraba la inmersión.
K|Tu poder puede salvar gente. También puede convertir un escalón en una catapulta. Antes de investigar los cristales, necesito saber que puedes usarlo sin lanzar ciudadanos.
P|Era una idea para el transporte público, pero acepto el veto.
K:serious|Regla uno: anuncia el cambio. Regla dos: alguien cubre tus tres segundos. Regla tres: si no entiendes una cosa, no la edites.
V|Colocó una espada de madera sobre la mesa. Cuando la levantaste, las palabras FILO ROMO aparecieron ante tus ojos. Las dejaste como estaban.
K:happy|Bien. No todo lo que puedes cambiar necesita que lo cambies.
N|Qué pena. Yo había apostado a que el muñeco acabaría pidiendo un abogado.
V|El ejercicio consistía en recuperar una campana mientras Kaida te cerraba el paso. No podías tocarla ni modificar su equipo; solo usar el suelo y los objetos del patio.
P|¿Si corro mucho puedo llamarlo técnica secreta de evasión?
K|Puedes llamarlo como quieras. Yo lo llamaré martes.
`,[
 ['Pedir a Kaida que marque el ritmo del entrenamiento.',{bonds:{kaida:3},trust:2,flags:['ritmo']},`V|Practicasteis con una baldosa que se volvía ligeramente más alta. Cambio, pausa, movimiento. Kaida corrigió tu postura con paciencia inesperada.
K|No mires la campana. Mira dónde estaré dentro de tres segundos.
P|¿En mi contra? Me parece una predicción bastante segura.
V|La tercera vez alcanzaste el objetivo. Kaida sonrió antes de recordar que estaba intentando parecer exigente.`],
 ['Usar un reflejo para distraerla sin tocarla.',{bonds:{kaida:2,nara:1},chaos:1,flags:['espejo']},`V|Volviste reflectante una bandeja y proyectaste un destello sobre el muñeco bigotudo. Kaida miró solo una fracción de segundo, suficiente para que rodearas la mesa.
K:happy|Creativo. Previsible si repites el truco, pero creativo.
N|Voy a vender bandejas tácticas. «Para cocinar y cuestionar la cadena de mando».
P|Si esto termina en una película, quiero que mi doble sepa correr mejor que yo.`],
 ['Intentar un grito de poder de veinte segundos.',{chaos:3,bonds:{kaida:1}},`P|¡Mi fuerza procede de todas las temporadas que he visto sin saltarme el opening!
V|Kaida caminó tranquilamente hasta la campana, la tocó y regresó antes de que acabaras de inhalar para la segunda frase.
K|El enemigo no tiene obligación de respetar tu transformación.
N:happy|Fue emocionante. Vendí dos entradas durante el grito.
V|Repetisteis el ejercicio sin discurso. Esa vez, al menos, terminasteis los dos riendo.`]
],'c2-3');

addScene('c2-3',2,'El libro mayor de Nara','tavern',['nara'],`
V|La oficina de Nara era pequeña, ordenada y llena de cajones con nombres engañosos. El que decía «golosinas» contenía facturas; el de «impuestos» tenía caramelos.
N|La gente curiosa merece una lección. La gente responsable merece azúcar.
P|Es el primer sistema fiscal que estoy dispuesto a defender.
V|Nara extendió el registro de los cristales. Habían sido comprados por la Fundación Aurora, dirigida por el consejero Severin. El transporte figuraba como material para el festival.
N:serious|El problema está aquí. El peso declarado es la mitad del real. No transportaban faroles; llevaban núcleos para alimentar una máquina grande.
P|¿Por qué no lo denunciaste ayer?
N|Porque mi firma está en la recepción. Revisé los sellos, pero no abrí las cajas. Si me equivoco, cierro mi negocio. Si acierto, alguien poderoso sabe dónde vivo.
V|Por primera vez desde que la conocías, dejó la moneda que hacía bailar entre los dedos. Sin el pequeño truco, parecía mucho más fácil ver lo nerviosa que estaba.
P|Podemos averiguar qué pasó sin convertirte en la culpable por adelantado.
N:shy|Dilo otra vez cuando no esté resultando encantadora. Es cuando más cuesta creerlo.
`,[
 ['Prometer investigar con ella, sin hacer promesas imposibles.',{bonds:{nara:3},trust:2,flags:['nara-confia']},`P|No puedo garantizarte que salga perfecto. Sí puedo garantizarte que te escucharé antes de sacar conclusiones.
N:shy|Eso suena extrañamente útil. La mayoría empieza prometiendo una luna y termina debiendo el alquiler.
V|Te mostró un recibo escondido bajo el escritorio. Había guardado pruebas por si necesitaba defenderse, aunque le daba miedo usarlas.
N|De acuerdo, socio. Compartimos el riesgo. Y si nos arrestan, tú haces los chistes.`],
 ['Buscar la diferencia de peso en los recibos.',{bonds:{nara:2},trust:2,clues:['Los cristales del festival pesan el doble de lo declarado. La Fundación Aurora los compró para alimentar una máquina.'],flags:['recibos']},`V|Comparasteis fechas, cantidades y números de carro. La diferencia se repetía en seis entregas. Alguien estaba financiando una instalación bajo el palacio del cielo.
P|He renacido con un poder legendario para descubrir que el arma definitiva es una hoja de cálculo.
N:happy|La contabilidad siempre fue magia peligrosa. Solo que requiere menos capa.
V|Nara hizo dos copias. Una para tu diario y otra para una caja que no estaba rotulada.`],
 ['Proponer una infiltración con nombres falsos.',{bonds:{nara:2},chaos:2,flags:['alias']},`P|Yo seré Don Sospechoso. Nadie sospecha de alguien que lo admite en la presentación.
N:happy|Y yo la señora Completamente Legal. Un matrimonio comercial destinado al desastre.
V|Ensayasteis la entrada hasta que Nara tuvo que apoyarse en la mesa de la risa. Después guardó el libro mayor y preparó disfraces mucho menos llamativos.
N|Me viene bien reírme. Pero cuando estemos dentro, sigue mi señal.`]
],'c2-4');

addScene('c2-4',2,'Una investigación con delantal','tavern',['lys','nara'],`
V|El almacén de la Fundación compartía patio con la cocina de la posada. Nara propuso entrar como proveedores y te entregó un delantal con volantes que no dejaba espacio para negociar.
P|Este no es mi arco de infiltración. Es mi arco de cafetería temática.
N:happy|Tu poder no puede modificar la voluntad de un guardia. Una bandeja de tartaletas, en cambio, tiene precedentes históricos.
L:shy|El delantal te queda... práctico. Tiene bolsillos. Muchos bolsillos. Esa era mi observación.
V|Mientras Lys entregaba la comida, encontraste una caja abierta. Dentro había un cristal y una hoja de instrucciones: «Reorientación afectiva. Sujetos compatibles. Activación durante la tercera campana».
P|¿Afectiva? ¿Están usando el festival para hacer que la gente sienta algo?
L:serious|La magia no puede crear amor. Pero puede empujar encuentros, cerrar caminos y hacer que parezcan inevitables. Eso basta para manipular una vida.
V|Un guardia se aproximó. Solo tenías tiempo de llevarte una cosa o preparar una distracción. Nara apoyó la bandeja en tu mano para darte una excusa.
N|Recuerda: somos personas trabajando. Nada asusta más a un guardia que tener que ayudar.
P|Por fin, una estrategia en la que mi historial laboral cuenta como entrenamiento militar.
`,[
 ['Copiar la orden de activación.',{trust:2,bonds:{lys:1,nara:1},clues:['La orden del almacén habla de reorientación afectiva y fija la activación para la tercera campana del festival.'],flags:['orden']},`V|Lys puso una hoja fina sobre el documento y calcó las letras con una pluma encantada. Tú ofreciste al guardia la última tartaleta y una explicación innecesariamente larga de sus ingredientes.
P|La canela tiene notas de canela, con un final claramente acanelado.
N:happy|Maravillosa descripción. Lo ascenderé a supervisor de obviedades.
V|Salisteis del almacén con la prueba oculta entre servilletas y la dignidad envuelta por separado.`],
 ['Robar un cristal para que Lys lo analice.',{bonds:{lys:3},flags:['cristal'],trust:1},`V|Cambiaste PESADO por LIGERO, esperaste tus tres segundos detrás de una estantería y ocultaste el cristal bajo la bandeja vacía.
L:serious|Esto permitirá estudiar la red sin conectarnos al Telar. Buen hallazgo.
P|Que conste que es una incautación heroica provisional, no un robo. Me gustaría conservar mi vocabulario limpio.
N|Te redactaré un recibo retroactivo. Nuestra especialidad son las soluciones que empiezan por «técnicamente».`],
 ['Provocar una batalla de harina como distracción.',{chaos:3,bonds:{nara:2},flags:['harina']},`V|Una corriente de aire volcó un saco. El guardia estornudó, Nara se perdió en una nube blanca y Lys salió sosteniendo la bandeja como un escudo.
P|Operación fantasma culinario: éxito visual, fracaso respiratorio.
N:happy|Estamos cubiertos de harina y nadie nos persigue. He tenido citas mucho peores.
L:shy|¿Esto cuenta como una cita? Necesito saber qué sección del diario utilizar.`]
],'c2-5');

addScene('c2-5',2,'Cuando la capitana se quita la armadura','tavern',['kaida'],`
V|Encontraste a Kaida en la terraza, ajustando una correa rota. Su armadura descansaba en una silla. Sin ella, la capitana parecía menos una institución y más alguien que llevaba todo el día sin sentarse.
K|Lys me contó lo del almacén. Buen trabajo. La próxima vez, avísame antes de entrar en una propiedad vigilada.
P|¿Para organizarnos mejor?
K:happy|Para reservar la fianza. Y sí, también para organizarnos mejor.
V|Te sentaste a su lado. Abajo, Brisalia encendía sus faroles. Kaida comprobaba cada esquina con la mirada incluso cuando intentaba descansar.
P|¿Siempre tienes que estar pendiente de todo?
K|Mi padre dirigía esta guardia. Yo heredé su puesto, su espada y una colección de personas que empiezan cada frase con «él lo habría hecho así».
V|Apretó demasiado la correa. El cuero volvió a romperse. Durante unos segundos ninguno dijo nada. Después Kaida soltó una risa seca y dejó la pieza sobre la mesa.
K|Puedo detener un carro desbocado. No sé cómo dejar de intentar merecer una silla vacía.
P|Creo que para eso no sirve una espada. Por muy espectacular que sea.
`,[
 ['Escucharla sin intentar arreglarle la vida.',{bonds:{kaida:3},trust:2,flags:['kaida-escuchada']},`P|No conocí a tu padre. Hoy conocí a la capitana que se aseguró de que un caballo también saliera del puente. A esa persona sí puedo decirle que lo hizo bien.
K:shy|No esperaba que te fijaras en el caballo.
V|Kaida miró la plaza, pero dejó de vigilarla por un momento. Su hombro rozó el tuyo y ninguno se apartó enseguida.
K|Quédate un rato. Solo hasta que deje de pensar en la próxima alarma.`],
 ['Reparar la correa y preguntarle qué haría en un día libre.',{bonds:{kaida:3},flags:['dia-libre']},`V|Tocaste el cuero, corregiste la rotura y esperaste tus tres segundos. Kaida aprovechó el bloqueo para dejarte una taza al alcance.
K:shy|Me gustan los jardines. Nunca lo digo porque la gente espera que prefiera volcanes o competiciones de fuerza.
P|Podemos buscar un jardín con una piedra muy pesada, para mantener el equilibrio de tu imagen pública.
V|Ella rio de verdad. La correa quedó sobre la silla, reparada y olvidada por primera vez esa noche.`],
 ['Retarla a una competición de historias vergonzosas.',{bonds:{kaida:2},chaos:1,flags:['historias-kaida']},`P|Una vez saludé a un maniquí durante una entrevista de trabajo. Me pareció el empleado más receptivo de la tienda.
K:happy|En mi primera guardia detuve al alcalde porque llevaba el sello al revés. Estuvimos diez minutos discutiendo hasta que giré la cabeza.
V|Intercambiasteis derrotas pequeñas hasta que el silencio dejó de pesar. Ganaste la competición por volumen, algo de lo que decidiste no sentirte orgulloso.
K|Gracias. Necesitaba recordar que sobrevivir a un mal día también cuenta como experiencia.`]
],'c2-6');

addScene('c2-6',2,'Las instrucciones del corazón','tavern',['lys','nara'],`
V|Al reunir las notas, Lys descubrió una conexión: los cristales recibían órdenes desde una ruina situada en el Bosque de las Horas. Allí nacía una de las primeras ramas del Telar.
L|Las alteraciones parecen empujar a ciertas personas hacia encuentros concretos. Tu llegada coincide con el inicio de la secuencia.
P|O sea que el universo podría estar montando una comedia romántica sin pagar derechos a sus protagonistas.
N:serious|Una cosa es que las puertas nos hagan coincidir. Otra que decidan qué tenemos que sentir. Yo prefiero conservar ambas manos sobre mi propio contrato.
V|Kaida dejó su espada sobre la mesa. Mirel apareció en un pequeño reflejo de la jarra, con un montón de papeles detrás y el cabello algo despeinado.
M|He encontrado tu permiso de edición. Lleva la autorización de Severin, pero él no debería tener acceso a mi departamento. Voy a revisar el archivo central.
P|Nosotros iremos a la ruina. Si el destino insiste en organizarme citas, al menos quiero conocer su política de cancelación.
L:happy|Llevaremos cuerda, comida y papel. En ese orden de importancia práctica, aunque no de preferencia personal.
N|Yo llevaré ganzúas. Y un vestido. Nunca sabes si una expedición acabará en un evento formal.
V|Fuera comenzó a llover. Por primera vez desde tu llegada, tenías una cama, un plan y personas que esperaban verte regresar.
`,[
 ['Proponer que nadie se quede fuera de las decisiones.',{trust:3,bonds:{lys:1,kaida:1,nara:1,mirel:1},flags:['equipo']},`P|Si algo de esto afecta a nuestras vidas, lo hablamos entre todos. Ni el consejero ni yo vamos a elegir por los demás.
N:happy|Voy a citar esa frase cuando quieras organizar los turnos de cocina.
L|Y yo cuando intentes tocar un artefacto sin leer su inscripción.
V|Kaida asintió. Mirel levantó su taza desde el reflejo. El acuerdo era pequeño, pero era vuestro.`],
 ['Prometer protegerlas personalmente.',{bonds:{kaida:2,lys:1},chaos:1,flags:['promete-proteger']},`P|Tengo un poder absurdo. Servirá para algo mejor que calentar café. Si hay peligro, me pongo delante.
K:serious|A veces delante. A veces detrás de mi escudo. Proteger también significa dejar que alguien te cubra.
V|Asentiste. La promesa se volvió menos espectacular y bastante más útil cuando añadiste que seguirías las señales.
L:shy|Entonces procura volver. Aún no te he enseñado la parte bonita del mapa.`],
 ['Bautizar al equipo como «La comunidad del error».',{chaos:2,bonds:{nara:2,mirel:1},flags:['nombre-equipo']},`P|Necesitamos un nombre épico, fácil de recordar y jurídicamente defendible. La comunidad del error.
N:happy|Merchandising inmediato. Voy a diseñar unas tazas.
M:happy|Por favor, que no lleven el sello del departamento. La última vez hubo una investigación.
V|Lys fingió desaprobar el nombre, pero lo escribió en la primera página del cuaderno. Kaida pidió que, al menos, no lo gritarais al cargar.`]
],'c3-1');
