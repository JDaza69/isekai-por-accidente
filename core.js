(function(root){
  'use strict';
  const keys=['lys','kaida','nara','mirel'];
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  function create(name='Leo'){return {version:1,name:String(name).trim().slice(0,22)||'Leo',node:'c1-1',line:0,bonds:{lys:0,kaida:0,nara:0,mirel:0},trust:0,chaos:0,flags:{},clues:[],history:[],decisions:[],started:Date.now(),playSeconds:0};}
  function eligible(state,req){
    if(!req)return true;
    if(req.bond && state.bonds[req.bond]<req.min)return false;
    if(req.trust && state.trust<req.trust)return false;
    if(req.clues && state.clues.length<req.clues)return false;
    if(req.allBonds && keys.some(k=>state.bonds[k]<req.allBonds))return false;
    if(req.flags && req.flags.some(k=>!state.flags[k]))return false;
    return true;
  }
  function apply(state,effects={}){
    const s=structuredClone(state);
    for(const k of keys)s.bonds[k]=clamp(s.bonds[k]+(effects.bonds?.[k]||0),0,100);
    s.trust=clamp(s.trust+(effects.trust||0),0,100);
    s.chaos=clamp(s.chaos+(effects.chaos||0),0,100);
    for(const flag of effects.flags||[])s.flags[flag]=true;
    for(const clue of effects.clues||[])if(!s.clues.includes(clue))s.clues.push(clue);
    return s;
  }
  function choose(state,node,index){
    const c=node.choices?.[index];
    if(!c||!eligible(state,c.requirement))throw new Error('Decisión no disponible.');
    const s=apply(state,c.effects);
    s.decisions.push({node:node.id,index,label:c.label});
    s.node=c.next;s.line=0;return s;
  }
  function visibleLines(node,state){return node.lines.filter(l=>!l.when||(l.when.not?!state.flags[l.when.flag]:!!state.flags[l.when.flag]));}
  function validate(input,story){
    if(!input||input.version!==1||typeof input.name!=='string'||input.name.length>22||!story.nodes[input.node])throw new Error('Esta partida no es compatible con el juego.');
    if(!Number.isInteger(input.line)||input.line<0||input.line>story.nodes[input.node].lines.length)throw new Error('La posición del diálogo no es válida.');
    if(!input.bonds||keys.some(k=>!Number.isFinite(input.bonds[k])||input.bonds[k]<0||input.bonds[k]>100))throw new Error('Afinidades de partida inválidas.');
    for(const k of ['trust','chaos'])if(!Number.isFinite(input[k])||input[k]<0||input[k]>100)throw new Error('Datos de partida inválidos.');
    if(!input.flags||typeof input.flags!=='object'||Array.isArray(input.flags)||Object.keys(input.flags).length>300||Object.entries(input.flags).some(([k,v])=>!/^[-a-z0-9_]+$/i.test(k)||v!==true))throw new Error('Banderas de partida inválidas.');
    if(!Array.isArray(input.clues)||input.clues.length>100||input.clues.some(c=>typeof c!=='string'||c.length>2000))throw new Error('Diario de partida inválido.');
    if(!Array.isArray(input.history)||input.history.length>1500||input.history.some(h=>!h||typeof h.speaker!=='string'||typeof h.text!=='string'||h.text.length>10000))throw new Error('Historial inválido.');
    if(!Array.isArray(input.decisions)||input.decisions.length>1000||input.decisions.some(d=>!d||typeof d.node!=='string'||typeof d.label!=='string'||!Number.isInteger(d.index)))throw new Error('Decisiones inválidas.');
    const s=create(input.name);
    for(const k of ['node','line','bonds','trust','chaos','flags','clues','history','decisions'])s[k]=structuredClone(input[k]);
    s.started=Number.isFinite(input.started)?input.started:Date.now();
    s.playSeconds=Number.isFinite(input.playSeconds)?clamp(input.playSeconds,0,1e8):0;
    return s;
  }
  const api={create,apply,choose,eligible,visibleLines,validate,keys};
  root.GameCore=api;
  if(typeof module!=='undefined')module.exports=api;
})(globalThis);
