const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
require('../story.js');
for(const file of ['01-02','03-04','05-06','07-08'])require('../chapters/'+file+'.js');
const C=require('../core.js'),S=global.STORY,nodes=Object.values(S.nodes);
const cases=[];
function test(name,fn){fn();cases.push(name);console.log('OK '+name);}
const validActors=new Set([...Object.keys(S.characters),...Object.keys(S.npcs),'narrator','anuncio']);
test('Every scene has dialogue, valid actors, three choices or an exit',()=>{
  for(const n of nodes){assert(n.lines.length>0,n.id);for(const l of n.lines){assert(validActors.has(l.speaker),n.id+': '+l.speaker);assert(['neutral','happy','shy','serious'].includes(l.expression));assert(l.text.length>0);}
    assert(n.choices||n.next||n.ending,n.id);if(n.choices){assert.equal(n.choices.length,3,n.id);assert(n.choices.some(c=>!c.requirement),'No unconditional exit: '+n.id);for(const c of n.choices)assert(S.nodes[c.next],n.id+' -> '+c.next);}
    if(n.next)assert(S.nodes[n.next],n.id+' -> '+n.next);if(n.ending)assert(S.endings[n.ending]);
  }
});
test('All authored scenes are reachable and all paths have an ending',()=>{
  const seen=new Set(),queue=[S.start];while(queue.length){const id=queue.shift();if(seen.has(id))continue;seen.add(id);const n=S.nodes[id];queue.push(...(n.choices?n.choices.map(c=>c.next):n.next?[n.next]:[]));}
  assert.equal(seen.size,nodes.length,'Unreachable: '+nodes.filter(n=>!seen.has(n.id)).map(n=>n.id).join(','));
  let reaching=new Set(nodes.filter(n=>n.ending).map(n=>n.id)),previous=0;while(previous!==reaching.size){previous=reaching.size;for(const n of nodes)if((n.choices?n.choices.map(c=>c.next):[n.next]).some(id=>reaching.has(id)))reaching.add(n.id);}
  assert.equal(reaching.size,nodes.length);
});
function run(target,random){let s=C.create('Prueba');let words=0,lines=0;const checkpoints={};for(let steps=0;steps<300;steps++){
  const n=S.nodes[s.node];const chapter=S.chapters.find(ch=>ch.start===n.id);if(chapter)checkpoints[chapter.id]=structuredClone(s);
  const visible=C.visibleLines(n,s);lines+=visible.length;words+=visible.reduce((sum,l)=>sum+l.text.split(/\s+/).length,0);
  if(n.ending)return {ending:n.ending,state:s,words,lines,checkpoints};
  if(!n.choices){s.node=n.next;s.line=0;continue;}
  const options=n.choices.map((c,i)=>({c,i})).filter(({c})=>C.eligible(s,c.requirement));assert(options.length,n.id);
  let index;
  if(n.id==='c8-1')index=target==='emperor'?2:0;
  else if(n.id==='c8-4')index=target==='lys'&&C.eligible(s,n.choices[0].requirement)?0:target==='kaida'&&C.eligible(s,n.choices[1].requirement)?1:2;
  else if(n.id==='c8-otros')index=target==='nara'&&C.eligible(s,n.choices[0].requirement)?0:target==='mirel'&&C.eligible(s,n.choices[1].requirement)?1:2;
  else if(n.id==='c8-libre')index=target==='constellation'&&C.eligible(s,n.choices[0].requirement)?0:1;
  else if(random)index=options[Math.floor(random()*options.length)].i;
  else {
    const score=({c})=>{const e=c.effects;let value=(e.trust||0)*.4+(e.clues?.length||0)*12+(e.flags?.includes('honesto')?7:0);
      for(const k of C.keys)value+=(e.bonds?.[k]||0)*(target===k?12:target==='constellation'?(s.bonds[k]<6?8:1):.2);
      if(target==='lys'&&c.next==='c3-lys')value+=20;if(target==='kaida'&&c.next==='c3-kaida')value+=20;if(target==='nara'&&c.next==='c3-nara')value+=20;
      if(target==='lys'&&c.next==='c4-lys')value+=20;if(target==='kaida'&&c.next==='c4-kaida')value+=20;if(['nara','mirel'].includes(target)&&c.next==='c4-balcon')value+=20;
      return value;};
    index=options.sort((a,b)=>score(b)-score(a))[0].i;
  }
  assert(C.eligible(s,n.choices[index].requirement),n.id+' unavailable '+index);s=C.choose(s,n,index);C.validate(s,S);
}throw new Error('Loop without ending');}
const routes={};
test('All seven endings are attainable from a fresh game',()=>{for(const ending of Object.keys(S.endings)){const result=run(ending);assert.equal(result.ending,ending,JSON.stringify(result.state));routes[ending]=result;}});
test('1000 deterministic randomized playthroughs reach a legal ending',()=>{let seed=1837;const rng=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};for(let i=0;i<1000;i++){const r=run(Object.keys(S.endings)[i%7],rng);assert(S.endings[r.ending]);}});
test('Saving and loading preserves decisions, bonds, flags and clues',()=>{for(const r of Object.values(routes)){const restored=C.validate(JSON.parse(JSON.stringify(r.state)),S);assert.deepEqual(restored,r.state);}});
test('Malformed or incompatible imports are rejected',()=>{for(const bad of [null,{}, {...C.create(),node:'missing'}, {...C.create(),line:-1},{...C.create(),bonds:{lys:Infinity}}, {...C.create(),flags:[]},{...C.create(),history:[{speaker:1,text:'x'}]}])assert.throws(()=>C.validate(bad,S));});
test('Locked choices cannot be selected and effects do not mutate old saves',()=>{const s=C.create();assert.throws(()=>C.choose(s,S.nodes['c8-libre'],0));const copy=JSON.stringify(s);const next=C.choose(s,S.nodes['c1-2'],0);assert.equal(JSON.stringify(s),copy);assert(next.bonds.mirel>s.bonds.mirel);assert.equal(next.clues.length,1);});
test('All local HTML, CSS and character image references exist',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8'),css=fs.readFileSync(path.join(root,'styles.css'),'utf8');
  for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g))if(!/^[a-z]+:/i.test(match[1]))assert(fs.existsSync(path.join(root,match[1])),match[1]);
  for(const match of css.matchAll(/url\(['"]?([^)'" ]+)/g))assert(fs.existsSync(path.join(root,match[1])),match[1]);
  for(const c of Object.values(S.npcs))assert(fs.existsSync(path.join(root,'assets/characters/'+c.image+'.png')));
});
const stats={chapters:S.chapters.length,scenes:nodes.filter(n=>!n.branch).length,branchScenes:nodes.filter(n=>n.branch).length,decisions:nodes.filter(n=>n.choices).length,endings:Object.keys(S.endings).length,dialogueLines:nodes.reduce((s,n)=>s+n.lines.length,0),totalWords:nodes.reduce((s,n)=>s+n.lines.reduce((a,l)=>a+l.text.split(/\s+/).length,0),0),routes:Object.fromEntries(Object.entries(routes).map(([k,r])=>[k,{words:r.words,lines:r.lines,decisions:r.state.decisions.length}])),tests:cases};
fs.writeFileSync(path.join(__dirname,'report.json'),JSON.stringify(stats,null,2));
const fixture=routes.constellation;fs.writeFileSync(path.join(__dirname,'qa-save.json'),JSON.stringify({format:'isekai-accidente',version:1,state:fixture.checkpoints[7],profile:{endings:[],checkpoints:fixture.checkpoints}},null,2));
console.log(JSON.stringify(stats,null,2));
