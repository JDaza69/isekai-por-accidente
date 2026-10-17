(function (root) {
  'use strict';
  const story = root.STORY = {
    version: 1, start: 'c1-1', nodes: {},
    characters: {
      lys: {name:'Lys', full:'Lys Auralia', symbol:'❀', age:'21 años · adulta', role:'Elfa · archivista de los caminos', color:'#4f887c'},
      kaida: {name:'Kaida', full:'Kaida Valbrasa', symbol:'♜', age:'23 años · adulta', role:'Dracónida · capitana de la guardia', color:'#ab625f'},
      nara: {name:'Nara', full:'Nara Vesper', symbol:'♧', age:'22 años · adulta', role:'Kitsune · mercader de oportunidades', color:'#8d629e'},
      mirel: {name:'Mirel', full:'Mirel de la Ventanilla 7', symbol:'✧', age:'24 años · adulta', role:'Diosa · funcionaria del destino', color:'#6e7caa'}
    },
    npcs: {
      player:{name:'Leo',full:'El héroe provisional',symbol:'✦',age:'24 años',role:'Humano · protagonista',color:'#537b7a',image:'leo',bio:'Gracioso, impulsivo y más atento de lo que pretende. Su poder cambia propiedades de objetos, a cambio de quedarse inmóvil durante tres segundos.'},
      brumo:{name:'Brumo',full:'Brumo del Arco Antiguo',symbol:'♧',age:'Dragón adulto · guardián ancestral',role:'Dragón del bosque · guardián',color:'#6c804a',image:'brumo',bio:'Solemne cuando recita enigmas, muy poco solemne cuando huele pan. Quiere volver a proteger un camino en lugar de impedir que alguien lo cruce.'},
      severin:{name:'Severin',full:'Consejero Severin',symbol:'◇',age:'42 años',role:'Humano · director de la Fundación Aurora',color:'#51697a',image:'severin',bio:'Calmado, preciso y convencido de que puede evitar cualquier error. Su idea de un futuro perfecto deja muy poco espacio a lo que desean los demás.'},
      tilda:{name:'Tilda',full:'Tilda Remache',symbol:'⚒',age:'26 años · adulta',role:'Enana · inventora y organizadora',color:'#ad8050',image:'tilda',bio:'Organiza el festival, diseña sus mecanismos y lleva herramientas por si los héroes olvidan las suyas. Defiende su trabajo y a la gente que confía en él.'}
    },
    chapters: [
      {id:1,title:'Un camión y dos formularios',subtitle:'Morir fue fácil. Lo difícil era hacer el trámite.',start:'c1-1'},
      {id:2,title:'Una habitación y demasiadas teorías',subtitle:'La hospitalidad tiene condiciones. Y testigos.',start:'c2-1'},
      {id:3,title:'El bosque no acepta devoluciones',subtitle:'Un mapa, una promesa y un dragón con hambre.',start:'c3-1'},
      {id:4,title:'El baile de los casi novios',subtitle:'Salvar un reino exige aprender a contar hasta tres.',start:'c4-1'},
      {id:5,title:'El festival de las malas ideas',subtitle:'El amor está en el aire. También una catapulta.',start:'c5-1'},
      {id:6,title:'La diosa fuera de horario',subtitle:'Hasta los milagros tienen letra pequeña.',start:'c6-1'},
      {id:7,title:'Antes de que caiga el cielo',subtitle:'Hay cosas que ni un héroe puede decidir por otros.',start:'c7-1'},
      {id:8,title:'El final no venía escrito',subtitle:'Elige una vida que realmente sea tuya.',start:'c8-1'}
    ],
    endings: {
      lys:{title:'El mapa de los días pequeños',category:'FINAL ROMÁNTICO · LYS',symbol:'❀',hint:'Escucha a Lys y acompáñala cuando dude de sus mapas.',description:'Lys y tú abrís una cartografía que también sirve té. Los mapas señalan ruinas, pastelerías y lugares donde merece la pena detenerse. Ella deja un rincón en blanco en cada página: quiere descubrirlo contigo. Tu poder sigue siendo absurdo; lo usas sobre todo para alcanzar las tazas del estante alto.'},
      kaida:{title:'Una espada y dos tazas',category:'FINAL ROMÁNTICO · KAIDA',symbol:'♜',hint:'Confía en Kaida y trata su descanso como algo importante.',description:'La guardia deja de depender de una capitana que nunca duerme. Kaida entrena nuevos equipos y reserva los domingos para vosotros. Aprendes esgrima, pierdes casi siempre y denuncias un sesgo estadístico. Ella te besa la frente, coloca dos tazas en el balcón y te concede la revancha más larga del mundo.'},
      nara:{title:'El negocio de quedarse',category:'FINAL ROMÁNTICO · NARA',symbol:'♧',hint:'Ve más allá de las bromas de Nara y cumple tus acuerdos.',description:'Nara compra una caravana con cuatro ruedas y ninguna salida secreta. Seguís viajando, pero ya no para escapar. En el letrero se lee «Vesper y compañía: curiosidades, soluciones y besos fuera de horario». Ella insiste en que tu puesto no tiene salario. A cambio, todas las rutas terminan en casa.'},
      mirel:{title:'Domingos sin eternidad',category:'FINAL ROMÁNTICO · MIREL',symbol:'✧',hint:'Ayuda a Mirel a elegir una vida fuera del trabajo.',description:'Mirel consigue un contrato con vacaciones y una ventana que sí puede abrirse. Aprende a cocinar, a llegar tarde y a querer algo que no esté en un expediente. Los domingos recorre el mercado de tu mano. Sigue llevando un sello en el bolsillo: «Aprobado por ganas». Lo estampa sobre vuestra primera foto.'},
      constellation:{title:'Una constelación elegida',category:'FINAL ESPECIAL · PROMESAS COMPARTIDAS',symbol:'✦',hint:'Reúne las pruebas, gana la confianza de todas y habla con honestidad de lo que deseas.',description:'Nadie recibe un título de propiedad sobre nadie. Lys, Kaida, Nara, Mirel y tú construís una relación compartida por decisión propia, con tiempo, conversaciones y calendarios sorprendentemente complejos. Hay citas a solas, aventuras juntos y malentendidos que ahora se resuelven hablando. Tu mayor hazaña es aprender a escuchar cuatro respuestas distintas.'},
      bakery:{title:'Pan recién hecho, mundo a salvo',category:'FINAL LIBRE · OTRA FORMA DE SER HÉROE',symbol:'☀',hint:'Elige tu propio camino después de salvar el reino.',description:'Abres una panadería con un cartel terrible: «Reencarnapán». Nadie aprueba el nombre y todo el mundo vuelve por los bollos. Tus amigas tienen una mesa reservada. Hay aventuras los jueves, descanso los lunes y un futuro sin profecías que te obliguen a enamorarte. Por primera vez, una vida normal te parece extraordinaria.'},
      emperor:{title:'Su majestad el problema',category:'FINAL CÓMICO · DEMASIADO PROTAGONISTA',symbol:'♛',hint:'Confunde poder con tener siempre la última palabra.',description:'Te sientas en el trono del destino y el sistema interpreta «yo me encargo de todo» de forma literal. Durante tres meses firmas permisos para lluvia, palomas y finales felices. Tus compañeras te visitan, se ríen y organizan tu rescate administrativo. Renuncias en cuanto descubres que también debes aprobar cada estornudo del reino.'}
    }
  };
  const codes = {L:'lys',K:'kaida',N:'nara',M:'mirel',P:'player',V:'narrator',A:'anuncio',B:'brumo',S:'severin',T:'tilda'};
  function parse(text) {
    return text.trim().split('\n').map(s=>s.trim()).filter(Boolean).map(raw=>{
      let when;
      const conditional=raw.match(/^\[(!?)([a-z0-9_-]+)\]/i);
      if(conditional){when={flag:conditional[2],not:!!conditional[1]};raw=raw.slice(conditional[0].length);}
      const parts=raw.split('|');
      const who=parts.shift().split(':');
      if(!parts.length) throw new Error('Diálogo inválido: '+raw);
      return {speaker:codes[who[0]]||who[0],expression:who[1]||'neutral',text:parts.join('|'),...(when?{when}:{})};
    });
  }
  root.addScene = function (id,chapter,title,bg,cast,body,options,next,extra={}) {
    if(story.nodes[id]) throw new Error('Escena duplicada: '+id);
    const node={id,chapter,title,bg,cast,lines:parse(body),next,...extra};
    if(options) node.choices=options.map((o,index)=>{
      const [label,effects,response,target,requirement]=o;
      const branch=id+'-'+String.fromCharCode(97+index);
      if(response) story.nodes[branch]={id:branch,chapter,title,bg,cast,lines:parse(response),next:target||next,branch:true};
      return {label,effects:effects||{},next:response?branch:target||next,...(requirement?{requirement}:{} )};
    });
    story.nodes[id]=node;
  };
})(globalThis);
