(function(){
  'use strict';
  const S=STORY,C=GameCore,$=id=>document.getElementById(id);
  const NS='isekai-accidente-v1:';
  const memory=new Map();let storageWarned=false;
  function read(key,fallback){try{const v=localStorage.getItem(NS+key);return v?(JSON.parse(v)??fallback):fallback;}catch{return memory.has(key)?memory.get(key):fallback;}}
  function write(key,value){memory.set(key,value);try{localStorage.setItem(NS+key,JSON.stringify(value));}catch{if(!storageWarned){storageWarned=true;toast('El guardado del navegador no está disponible. Exporta tu partida para conservarla.');}}}
  const defaults={speed:22,volume:.18,music:false,font:17,motion:!matchMedia('(prefers-reduced-motion: reduce)').matches};
  const rawSettings=read('settings',{}),settings={...defaults};
  for(const k of ['speed','volume','font'])if(typeof rawSettings[k]==='number'&&Number.isFinite(rawSettings[k]))settings[k]=rawSettings[k];
  settings.speed=Math.max(0,Math.min(50,settings.speed));settings.volume=Math.max(0,Math.min(.5,settings.volume));settings.font=Math.max(15,Math.min(23,settings.font));
  for(const k of ['music','motion'])if(typeof rawSettings[k]==='boolean')settings[k]=rawSettings[k];
  const storedProfile=read('profile',{}),profile={endings:[],checkpoints:{}};
  if(Array.isArray(storedProfile.endings))profile.endings=storedProfile.endings.filter(k=>S.endings[k]);
  if(storedProfile.checkpoints&&typeof storedProfile.checkpoints==='object')for(const ch of S.chapters){try{const saved=C.validate(storedProfile.checkpoints[ch.id],S);if(saved.node===ch.start)profile.checkpoints[ch.id]=saved;}catch{}}
  let state=null,mode='title',typing=null,typedFull='',typedCount=0,auto=false,autoTimer=null,toastTimer=null,currentNode=null,lastScene='',saveTick=Date.now();
  const modal=$('modal');
  function escape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function text(s){return s.replaceAll('{name}',state?.name||'Leo');}
  function actor(key){return S.characters[key]||S.npcs[key];}
  function spriteClass(key){return S.npcs[key]?'npc npc-'+key:'char-'+key;}
  function speakerName(key){return key==='player'?(state?.name||'Leo'):key==='narrator'?'Auralia':key==='anuncio'?'Sistema de segundas oportunidades':actor(key)?.name||key;}
  function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('show');toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3400);}
  function applySettings(){document.body.classList.toggle('reduce-motion',!settings.motion);$('dialogue-box').style.fontSize=settings.font+'px';$('sound-btn').textContent=settings.music?'♫':'♪';$('sound-btn').setAttribute('aria-label',settings.music?'Silenciar música':'Activar música');$('sound-btn').title=settings.music?'Silenciar música':'Activar música';Audio.setVolume(settings.volume);write('settings',settings);}
  function stopTimers(){clearInterval(typing);typing=null;clearTimeout(autoTimer);autoTimer=null;}
  function setMode(next){mode=next;for(const id of ['title','game','ending'])$(id+'-screen').hidden=id!==next;document.body.classList.toggle('playing',next==='game');if(next!=='game'){stopTimers();auto=false;updateAuto();}$('continue-game').disabled=!validSave('auto');}
  function validSave(slot){try{const v=read('save-'+slot,null);return v?C.validate(v.state,S):null;}catch{return null;}}
  function save(slot='auto',notify=false){if(!state)return;write('save-'+slot,{state,at:Date.now()});if(notify)toast('Partida guardada en la ranura '+slot+'.');}
  function checkpoint(){const chapter=S.chapters.find(c=>c.start===state.node);if(chapter&&state.line===0){profile.checkpoints[chapter.id]=structuredClone(state);write('profile',profile);}}
  function go(nodeId){if(!S.nodes[nodeId])throw new Error('Escena no encontrada: '+nodeId);state.node=nodeId;state.line=0;checkpoint();render();save();}
  function resume(saved){stopTimers();state=C.validate(saved,S);lastScene='';setMode('game');checkpoint();render();save();if(settings.music)Audio.start();}
  function start(name){state=C.create(name);lastScene='';setMode('game');checkpoint();render();save();if(settings.music)Audio.start();}
  function updateBonds(){ $('bond-panel').innerHTML=C.keys.map(k=>'<div class="bond-pill" title="'+S.characters[k].name+': '+state.bonds[k]+' puntos de afinidad"><span>'+S.characters[k].symbol+' '+S.characters[k].name+'</span><b>'+state.bonds[k]+'</b></div>').join(''); }
  function setBackdrop(bg){$('backdrop').className='backdrop bg-'+bg;}
  function updateStage(node,line){
    let cast=[...node.cast];
    if(line&&actor(line.speaker)&&!cast.includes(line.speaker)){cast=cast.length>=2?[cast[0],line.speaker]:[...cast,line.speaker];}
    const desired=cast.slice(0,2),stage=$('stage');
    for(const child of [...stage.children])if(!desired.includes(child.dataset.actor))child.remove();
    for(const k of desired){let portrait=[...stage.children].find(el=>el.dataset.actor===k);if(!portrait){portrait=document.createElement('div');portrait.dataset.actor=k;stage.append(portrait);}portrait.className='portrait '+spriteClass(k)+' expr-'+(line?.speaker===k?line.expression:'neutral')+' '+(line?.speaker===k?'speaking':line&&actor(line.speaker)?'inactive':'');}
  }
  function displayText(full){
    clearInterval(typing);typing=null;typedFull=full;typedCount=0;
    $('advance-hint').style.opacity='0';
    if(!settings.speed||!settings.motion){$('dialogue-text').textContent=full;typedCount=full.length;finishText();return;}
    $('dialogue-text').textContent='';
    typing=setInterval(()=>{typedCount+=2;$('dialogue-text').textContent=full.slice(0,typedCount);if(typedCount>=full.length){clearInterval(typing);typing=null;finishText();}},settings.speed*2);
  }
  function finishText(){ $('advance-hint').style.opacity='1';scheduleAuto(); }
  function scheduleAuto(){clearTimeout(autoTimer);if(auto&&mode==='game'&&!modal.open&&!typing&&$('choice-panel').hidden){autoTimer=setTimeout(advance,Math.max(1700,typedFull.length*27));}}
  function render(){
    stopTimers();if(mode!=='game')return;
    const node=S.nodes[state.node];currentNode=node;
    $('chapter-label').textContent='CAPÍTULO '+String(node.chapter).padStart(2,'0')+' · '+S.chapters[node.chapter-1].title.toUpperCase();
    $('chapter-number').textContent='CAPÍTULO '+String(node.chapter).padStart(2,'0')+' / 08';$('scene-title').textContent=node.title;
    const places={city:'Brisalia · ciudad de los puentes',tavern:'Posada del Grifo Despeinado',forest:'Bosque de las Horas',palace:'Palacio del Cielo',earth:'La Tierra · un martes cualquiera'};
    $('scene-location').textContent=places[node.bg];
    setBackdrop(node.bg);updateBonds();
    const lines=C.visibleLines(node,state);state.line=Math.min(state.line,lines.length);
    const isNew=lastScene!==node.id;lastScene=node.id;
    $('progress-label').textContent='✦ '+Math.min(state.line+1,lines.length)+' / '+lines.length+' · '+(node.branch?'TU DECISIÓN':'HISTORIA');
    if(state.line>=lines.length){
      if(node.choices){showChoices(node);return;}
      if(node.ending){showEnding(node.ending);return;}
      if(node.next){go(node.next);return;}
      throw new Error('Escena sin salida: '+node.id);
    }
    $('choice-panel').hidden=true;$('dialogue-area').hidden=false;
    const line=lines[state.line];updateStage(node,line);
    $('speaker').textContent=speakerName(line.speaker);$('speaker').style.background=actor(line.speaker)?.color||'#413550';
    const key=node.id+':'+state.line;
    if(state.history.at(-1)?.key!==key){state.history.push({key,speaker:speakerName(line.speaker),text:text(line.text)});if(state.history.length>1200)state.history.shift();}
    if(isNew&&node.magic&&settings.motion){$('backdrop').classList.remove('flash');void $('backdrop').offsetWidth;$('backdrop').classList.add('flash');Audio.chime();}
    displayText(text(line.text));save();
  }
  function showChoices(node){
    $('dialogue-area').hidden=false;$('dialogue-text').textContent='Tu siguiente decisión puede cambiar el rumbo de esta historia.';$('speaker').textContent=state.name;$('speaker').style.background='#413550';$('advance-hint').style.opacity='0';
    $('choice-prompt').textContent=node.prompt||'¿Qué vas a hacer?';$('choices').replaceChildren();
    node.choices.forEach((choice,index)=>{
      const button=document.createElement('button');button.className='choice';const allowed=C.eligible(state,choice.requirement);button.disabled=!allowed;
      button.innerHTML='<strong>'+String.fromCharCode(65+index)+'</strong><span>'+escape(text(choice.label))+(!allowed?'<small>'+escape(choice.requirement?.hint||'Necesitas más confianza o pruebas.')+'</small>':'')+'</span>';
      button.addEventListener('click',()=>pick(index));$('choices').append(button);
    });
    $('choice-panel').hidden=false;updateStage(node);save();
  }
  function pick(index){
    if(mode!=='game'||modal.open||$('choice-panel').hidden)return;
    const choice=currentNode.choices?.[index];if(!choice||!C.eligible(state,choice.requirement))return;
    const before=state;state=C.choose(state,currentNode,index);
    state.history.push({speaker:'Decisión '+String.fromCharCode(65+index),text:text(choice.label)});
    const changes=[];for(const k of C.keys){const diff=state.bonds[k]-before.bonds[k];if(diff)changes.push(S.characters[k].name+' '+(diff>0?'+':'')+diff+' ♡');}
    if(state.clues.length>before.clues.length)changes.push('Nueva pista en el diario');
    if(changes.length)toast(changes.join(' · '));Audio.tap();checkpoint();render();save();
  }
  function advance(){
    if(mode!=='game'||modal.open||!$('choice-panel').hidden)return;
    if(typing){clearInterval(typing);typing=null;typedCount=typedFull.length;$('dialogue-text').textContent=typedFull;finishText();return;}
    clearTimeout(autoTimer);state.line++;render();
  }
  function showEnding(id){
    const e=S.endings[id];if(!e)throw new Error('Final inexistente');
    if(!profile.endings.includes(id)){profile.endings.push(id);write('profile',profile);}
    setMode('ending');$('chapter-label').textContent='TU HISTORIA EN AURALIA';
    $('ending-symbol').textContent=e.symbol;$('ending-category').textContent=e.category;$('ending-title').textContent=e.title;$('ending-description').textContent=text(e.description);
    $('ending-bonds').textContent=C.keys.map(k=>S.characters[k].name+' '+state.bonds[k]+' ♡').join(' · ');save();Audio.chime();
  }
  function openModal(title,html,kicker='TU OTRA VIDA'){
    clearTimeout(autoTimer);$('modal-title').textContent=title;$('modal-kicker').textContent=kicker;$('modal-body').innerHTML=html;
    if(!modal.open)modal.showModal();modal.scrollTop=0;
  }
  function closeModal(){modal.close();scheduleAuto();}
  function title(){save();setMode('title');setBackdrop('city');$('chapter-label').textContent='UNA SEGUNDA VIDA. DEMASIADAS PRIMERAS CITAS.';}
  function newGame(){
    openModal('Tu segunda oportunidad','<p class="modal-intro">Un mundo nuevo merece una presentación. Eres un joven adulto de 24 años con sentido del humor, mala suerte vial y un talento inesperado.</p><form id="name-form"><label class="field-label" for="player-name">¿Cómo te llamas?</label><input id="player-name" name="name" type="text" maxlength="22" value="Leo" autocomplete="off" required><p class="small-note">Las opciones A, B y C cambian tus relaciones y abren caminos. Puedes guardar en cualquier momento. Una nueva historia sustituye el autoguardado; tus ranuras manuales y finales se conservan.</p><div class="form-actions"><button class="primary" type="submit">Cruzar al otro mundo <span>→</span></button></div></form>','EL PRIMER PASO ES TUYO');
    $('name-form').onsubmit=ev=>{ev.preventDefault();const name=$('player-name').value.trim()||'Leo';closeModal();start(name);};
    setTimeout(()=>$('player-name')?.select(),50);
  }
  function gallery(){
    openModal('Los caminos que elegiste','<p class="modal-intro">'+profile.endings.length+' de 7 finales descubiertos. Cada relación tiene su propio desenlace. Las pistas ayudan a desbloquear una última posibilidad.</p><div class="gallery-grid">'+Object.entries(S.endings).map(([id,e])=>{const unlocked=profile.endings.includes(id);return '<article class="ending-tile '+(unlocked?'':'locked')+'"><span class="symbol">'+(unlocked?e.symbol:'◇')+'</span><h3>'+(unlocked?escape(e.title):'Un futuro por descubrir')+'</h3><p>'+escape(unlocked?e.description:e.hint)+'</p><small>'+(unlocked?escape(e.category):'FINAL SIN DESCUBRIR')+'</small></article>';}).join('')+'</div>','GALERÍA DE FINALES');
  }
  function chapters(){
    openModal('Volver a un capítulo','<p class="modal-intro">Se desbloquean conforme avanzas. Volver restaura las decisiones y afinidades que tenías al comenzar ese capítulo y reemplaza el autoguardado.</p><div class="chapter-list">'+S.chapters.map(ch=>{const unlocked=!!profile.checkpoints[ch.id];return '<button class="chapter-item" data-chapter="'+ch.id+'" '+(unlocked?'':'disabled')+'><div><span>CAPÍTULO '+String(ch.id).padStart(2,'0')+'</span><b>'+escape(ch.title)+'</b><small>'+escape(ch.subtitle)+'</small></div><span>'+(unlocked?'↗':'◇')+'</span></button>';}).join('')+'</div>','TUS RECUERDOS');
    document.querySelectorAll('[data-chapter]').forEach(b=>b.onclick=()=>{const checkpoint=profile.checkpoints[b.dataset.chapter];if(checkpoint){closeModal();resume(checkpoint);toast('Capítulo restaurado con sus decisiones originales.');}});
  }
  function journal(){
    if(!state)return;
    const bonds=C.keys.map(k=>{const c=S.characters[k],value=state.bonds[k];return '<article class="journal-person"><div class="portrait char-'+k+' expr-neutral"></div><div><h3>'+c.symbol+' '+escape(c.full)+'</h3><p>'+escape(c.role)+'</p><p>'+escape(c.age)+' · '+value+' ♡</p><div class="bond-track"><span style="width:'+Math.min(100,value/30*100)+'%"></span></div></div></article>';}).join('');
    openModal('Diario de otra vida','<div class="journal-bonds">'+bonds+'</div><button class="small-button" id="journal-cast">Ver protagonistas y secundarios</button><p class="journal-stats">Confianza del equipo: '+state.trust+' · Ideas cuestionables: '+state.chaos+'<br>'+state.decisions.length+' decisiones tomadas · '+Math.floor(state.playSeconds/60)+' minutos de aventura<br>Las rutas románticas requieren al menos 8 puntos con la compañera elegida. La ruta compartida exige 6 con cada una, 11 de confianza, 4 pistas y hablar de tus intenciones.</p><h3>Las pruebas del Telar</h3>'+(state.clues.length?state.clues.map(c=>'<p class="clue">'+escape(c)+'</p>').join(''):'<p class="modal-intro">Todavía no has reunido pruebas. Investiga documentos, observa las marcas y pregunta antes de sacar conclusiones.</p>'),'PERSONAS, PROMESAS Y PISTAS');
    $('journal-cast').onclick=castGallery;
  }
  function history(){if(!state)return;openModal('Lo que nos dijimos',state.history.slice(-160).map(h=>'<div class="history-entry"><b>'+escape(h.speaker)+'</b><p>'+escape(h.text)+'</p></div>').join('')||'<p class="modal-intro">Aquí aparecerán las conversaciones.</p>','HISTORIAL · ÚLTIMAS 160 ENTRADAS');modal.scrollTop=modal.scrollHeight;}
  function saves(action='load'){
    const slots=['auto','1','2','3'];
    openModal(action==='save'?'Guardar este momento':'Retomar una aventura','<p class="modal-intro">El autoguardado sigue tu avance. Las ranuras manuales conservan los momentos que tú elijas.</p><div class="save-list">'+slots.map(slot=>{
      const saved=validSave(slot),meta=read('save-'+slot,null),node=saved?S.nodes[saved.node]:null;
      const details=saved?'Capítulo '+node.chapter+' · '+escape(saved.name)+'<small>'+escape(node.title)+' · '+new Date(meta.at).toLocaleString('es')+'</small>':'Sin partida guardada';
      return '<div class="save-item"><div><b>'+(slot==='auto'?'Autoguardado':'Ranura '+slot)+'</b><small>'+details+'</small></div><div class="slot-actions">'+(action==='save'&&slot!=='auto'?'<button class="small-button" data-save="'+slot+'">'+(saved?'Reemplazar':'Guardar')+'</button>':'')+'<button class="small-button" data-load="'+slot+'" '+(saved?'':'disabled')+'>Cargar</button></div></div>';
    }).join('')+'</div><div class="save-tools"><button class="small-button" id="export-save" '+(state||validSave('auto')?'':'disabled')+'>Exportar partida</button><button class="small-button" id="import-save">Importar archivo</button><input type="file" id="save-file" accept="application/json,.json" hidden></div><p class="small-note">Los guardados pertenecen a este navegador y esta dirección. Si cambias de navegador o de modo de apertura, usa Exportar e Importar.</p>','GUARDADO LOCAL');
    document.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>{const slot=b.dataset.save;if(validSave(slot)){openModal('Reemplazar la ranura '+slot,'<p class="modal-intro">Se guardará tu posición actual sobre la partida anterior de esta ranura.</p><div class="form-actions"><button class="small-button" id="cancel-overwrite">Volver</button><button class="primary" id="confirm-overwrite">Reemplazar</button></div>');$('cancel-overwrite').onclick=()=>saves('save');$('confirm-overwrite').onclick=()=>{save(slot,true);saves('save');};}else{save(slot,true);saves('save');}});
    document.querySelectorAll('[data-load]').forEach(b=>b.onclick=()=>{const saved=validSave(b.dataset.load);if(saved){closeModal();resume(saved);toast('Partida cargada.');}});
    $('export-save').onclick=exportSave;$('import-save').onclick=()=>$('save-file').click();$('save-file').onchange=importSave;
  }
  function exportSave(){
    const saved=state||validSave('auto');if(!saved)return;
    const blob=new Blob([JSON.stringify({format:'isekai-accidente',version:1,state:saved,profile},null,2)],{type:'application/json'});
    const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download='isekai-partida-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Partida exportada. Conserva el archivo JSON.');
  }
  async function importSave(ev){
    const file=ev.target.files[0];if(!file)return;
    try{
      if(file.size>4e6)throw new Error('El archivo es demasiado grande.');
      const data=JSON.parse(await file.text());if(data.format!=='isekai-accidente'||data.version!==1)throw new Error('Este archivo no es una partida del juego.');
      const imported=C.validate(data.state,S);
      if(data.profile&&Array.isArray(data.profile.endings))for(const k of data.profile.endings)if(S.endings[k]&&!profile.endings.includes(k))profile.endings.push(k);
      if(data.profile?.checkpoints&&typeof data.profile.checkpoints==='object')for(const ch of S.chapters){try{const cp=C.validate(data.profile.checkpoints[ch.id],S);if(cp.node===ch.start)profile.checkpoints[ch.id]=cp;}catch{}}
      write('profile',profile);closeModal();resume(imported);toast('Partida importada correctamente.');
    }catch(error){toast(error.message||'No se pudo leer la partida.');}
  }
  function settingsModal(){
    openModal('A tu ritmo','<label class="settings-row"><span>Velocidad del texto<small>0 muestra cada frase al instante.</small></span><input id="text-speed" type="range" min="0" max="50" step="2" value="'+settings.speed+'" aria-label="Velocidad del texto"></label><label class="settings-row"><span>Tamaño del diálogo</span><input id="text-font" type="range" min="15" max="23" value="'+settings.font+'" aria-label="Tamaño del diálogo"></label><label class="settings-row"><span>Música ambiental<small>Melodía original generada en tu PC.</small></span><input id="music-setting" type="checkbox" '+(settings.music?'checked':'')+'></label><label class="settings-row"><span>Volumen</span><input id="music-volume" type="range" min="0" max="0.5" step="0.01" value="'+settings.volume+'" aria-label="Volumen"></label><label class="settings-row"><span>Animaciones y texto progresivo<small>Desactiva para reducir el movimiento.</small></span><input id="motion-setting" type="checkbox" '+(settings.motion?'checked':'')+'></label><p class="small-note">Espacio / Enter: avanzar · A, B, C o 1, 2, 3: elegir · Esc: cerrar ventana · F: pantalla completa · H: historial · J: diario · S: guardar.<br>El modo automático avanza las conversaciones y se detiene ante cada decisión.</p>','AJUSTES');
    $('text-speed').oninput=ev=>{settings.speed=Number(ev.target.value);applySettings();};$('text-font').oninput=ev=>{settings.font=Number(ev.target.value);applySettings();};$('music-volume').oninput=ev=>{settings.volume=Number(ev.target.value);applySettings();};$('motion-setting').onchange=ev=>{settings.motion=ev.target.checked;applySettings();};$('music-setting').onchange=ev=>{settings.music=ev.target.checked;applySettings();settings.music?Audio.start():Audio.stop();};
  }
  function menu(){openModal('Una pausa en la aventura','<div class="chapter-list"><button class="chapter-item" id="resume-menu"><b>Seguir jugando</b><span>→</span></button><button class="chapter-item" id="save-menu"><b>Guardar / exportar partida</b><span>↗</span></button><button class="chapter-item" id="load-menu"><b>Cargar partida</b><span>↗</span></button><button class="chapter-item" id="title-menu"><b>Volver al inicio</b><span>⌂</span></button></div><p class="small-note">Tu posición se guarda automáticamente. Las decisiones anteriores se conservan en las ranuras manuales o al inicio de cada capítulo.</p>');$('resume-menu').onclick=closeModal;$('save-menu').onclick=()=>saves('save');$('load-menu').onclick=()=>saves('load');$('title-menu').onclick=()=>{closeModal();title();};}
  function credits(){openModal('Una segunda vida, hecha para elegir','<p class="modal-intro"><b>Isekai por accidente: el héroe del malentendido</b><br>Novela visual original en español. Ocho capítulos, cuatro rutas románticas, un final compartido, un final libre y un final cómico.</p><p class="modal-intro">Guion, diseño y programación creados para este proyecto con asistencia de IA. Ilustraciones originales generadas con ImageGen. Música sintetizada localmente. Personajes adultos; comedia romántica, coqueteo, situaciones sugerentes leves y acción de fantasía.</p><p class="modal-intro">Los guiños a películas y anime son bromas del protagonista. Los personajes, el mundo y el argumento son originales. El juego funciona sin cuenta, API ni conexión.</p><p class="small-note">Avanza haciendo clic en el diálogo o pulsando Espacio. Elige con A/B/C o 1/2/3. Las pistas se guardan en el diario. Juega en pantalla completa para disfrutar del arte.</p>','CRÉDITOS Y CONTROLES');}
  function updateAuto(){$('auto-btn').classList.toggle('active',auto);$('auto-btn').textContent=auto?'Auto ●':'Auto';}
  function castGallery(){
    const everyone={...S.characters,...S.npcs};
    openModal('Las caras de Auralia','<p class="modal-intro">Ocho personajes originales y cuatro expresiones por personaje. Los secundarios tienen sus propias láminas de diseño.</p><div class="cast-grid">'+Object.entries(everyone).map(([key,c])=>'<button class="cast-card" data-person="'+key+'"><div class="portrait '+spriteClass(key)+' expr-neutral"></div><b>'+escape(key==='player'?(state?.name||'Leo'):c.name)+'</b><small>'+escape(c.role)+'</small></button>').join('')+'</div>','BOCETOS Y PERSONAJES');
    document.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>characterSheet(b.dataset.person));
  }
  function characterSheet(key){
    const c=actor(key);const exprs=['neutral','happy','shy','serious'],labels=['Calma','Alegría','Vergüenza','Decisión'];
    openModal(key==='player'?(state?.name||'Leo'):c.full,'<p class="modal-intro">'+escape(c.role)+' · '+escape(c.age)+'</p>'+(c.bio?'<p class="modal-intro">'+escape(c.bio)+'</p>':'')+'<div class="expression-grid">'+exprs.map((ex,i)=>'<div><div class="portrait '+spriteClass(key)+' expr-'+ex+'"></div><small>'+labels[i]+'</small></div>').join('')+'</div><div class="save-tools"><button class="small-button" id="back-cast">← Todos los personajes</button>'+(c.image?'<a class="small-button" href="assets/characters/'+c.image+'.png" download="boceto-'+c.image+'.png">Descargar lámina</a>':'<a class="small-button" href="assets/characters-anime-v2.png" download="bocetos-protagonistas.png">Descargar lámina del elenco</a>')+'</div>','DISEÑO ORIGINAL · EXPRESIONES');
    $('back-cast').onclick=castGallery;
  }
  async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Puedes usar F11 en el navegador para ampliar el juego.');}}
  const Audio=(()=>{
    let ctx=null,master=null,timer=null,step=0;
    const notes=[60,64,67,72,71,67,64,62,57,60,64,69,67,64,60,59,53,57,60,65,64,60,57,55,55,59,62,67,65,62,59,62];
    function init(){if(ctx)return true;try{ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=settings.volume*.22;master.connect(ctx.destination);return true;}catch{return false;}}
    function note(n,duration=.9,gain=.15){if(!ctx||ctx.state!=='running')return;const t=ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();o.type='triangle';o.frequency.value=440*Math.pow(2,(n-69)/12);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(master);o.start(t);o.stop(t+duration+.02);}
    function tick(){if(!settings.music||document.hidden)return;const offset=mode==='game'&&currentNode?.bg==='palace'?5:0;note(notes[step%notes.length]+offset,1.7,.14);if(step%4===0)note(notes[Math.floor(step%32/8)*8]-12+offset,3,.12);step++;}
    return {start(){if(!init()){toast('Tu navegador no permite iniciar el audio.');return;}ctx.resume().catch(()=>{});if(!timer){tick();timer=setInterval(tick,650);}},stop(){clearInterval(timer);timer=null;if(master&&ctx){master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setTargetAtTime(0,ctx.currentTime,.2);}},setVolume(v){if(master&&ctx){master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setTargetAtTime(settings.music?v*.22:0,ctx.currentTime,.1);}},tap(){if(settings.music)note(79,.12,.05);},chime(){if(settings.music){note(72,.6,.09);setTimeout(()=>note(79,.8,.07),100);}},visibility(){if(!ctx)return;if(document.hidden)ctx.suspend().catch(()=>{});else if(settings.music)ctx.resume().catch(()=>{});}};
  })();
  $('new-game').onclick=newGame;$('continue-game').onclick=()=>{const saved=validSave('auto');if(saved)resume(saved);};$('chapters-btn').onclick=chapters;$('gallery-btn').onclick=gallery;$('credits-btn').onclick=credits;
  const castButton=document.createElement('button');castButton.textContent='Personajes';castButton.id='cast-btn';castButton.onclick=castGallery;document.querySelector('.title-links').insertBefore(castButton,$('credits-btn'));
  $('settings-btn').onclick=settingsModal;$('fullscreen-btn').onclick=fullscreen;$('sound-btn').onclick=()=>{settings.music=!settings.music;applySettings();settings.music?Audio.start():Audio.stop();};
  $('dialogue-box').onclick=advance;$('history-btn').onclick=history;$('journal-btn').onclick=journal;$('save-btn').onclick=()=>saves('save');$('load-btn').onclick=()=>saves('load');$('menu-btn').onclick=menu;$('brand').onclick=()=>mode==='game'?menu():title();
  $('auto-btn').onclick=()=>{auto=!auto;updateAuto();scheduleAuto();};$('close-modal').onclick=closeModal;modal.addEventListener('close',scheduleAuto);
  $('ending-menu').onclick=title;$('ending-gallery').onclick=gallery;
  document.addEventListener('keydown',ev=>{
    if(modal.open||ev.ctrlKey||ev.metaKey||ev.altKey||['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
    const k=ev.key.toLowerCase();if(k==='f'){ev.preventDefault();fullscreen();return;}
    if(mode!=='game')return;
    if(k==='escape'){menu();return;}
    if(k==='h'){history();return;}if(k==='j'){journal();return;}if(k==='s'){saves('save');return;}
    if(!$('choice-panel').hidden){const i=['a','b','c'].indexOf(k),n=['1','2','3'].indexOf(k);if(i>=0||n>=0){ev.preventDefault();pick(Math.max(i,n));}return;}
    if(k===' '||k==='enter'){ev.preventDefault();advance();}
  });
  setInterval(()=>{const now=Date.now();if(mode==='game'&&!document.hidden&&!modal.open&&state)state.playSeconds+=Math.min(5,(now-saveTick)/1000);saveTick=now;},1000);
  window.addEventListener('beforeunload',()=>save());document.addEventListener('visibilitychange',()=>{Audio.visibility();if(document.hidden)save();});
  applySettings();setMode('title');
})();
