// Browser rendering coordinates only; the original transparent PNGs are preserved.
const fs=require('node:fs');const path=require('node:path');
const width=1262,height=1246;
// characters-anime-v2.png; NPC sheets keep their original windows below.
const xs=[3,324,642,970],widths=[314,310,322,292],rows=[[0,332],[334,646],[647,951],[953,1246]];
const names=['lys','kaida','nara','mirel'],expressions=['neutral','happy','shy','serious'];
function rule(selector,x,y,w,h){return `${selector}{background-size:${(width/w*100).toFixed(6)}% ${(height/h*100).toFixed(6)}%;background-position:${(x/(width-w)*100).toFixed(6)}% ${(y/(height-h)*100).toFixed(6)}%;}`;}
const css=['/* Exact atlas windows prevent adjacent expression rows from appearing. */'];
const portraitWindows={
  lys:[[3,0,314,332],[3,334,299,312],[3,647,296,304],[3,953,296,293]],
  kaida:[[324,0,310,327],[324,334,310,312],[324,647,310,304],[324,953,310,293]],
  nara:[[642,0,322,317],[642,334,322,312],[642,647,322,304],[642,953,322,293]],
  mirel:[[970,0,292,332],[990,334,272,312],[970,647,292,304],[970,953,292,293]]
};
for(let c=0;c<4;c++)for(let r=0;r<4;r++){
  const window=portraitWindows[names[c]]?.[r]||[xs[c],rows[r][0],widths[c],rows[r][1]-rows[r][0]];
  css.push(rule(`.portrait.char-${names[c]}.expr-${expressions[r]}`,...window));
}
const npcRows={player:[[2,608],[630,1228]],brumo:[[2,608],[630,1228]],severin:[[2,608],[630,1228]],tilda:[[2,620],[641,1234]]};
for(const [name,ys] of Object.entries(npcRows))for(let i=0;i<4;i++){const r=Math.floor(i/2),c=i%2;css.push(rule(`.portrait.npc-${name}.expr-${expressions[i]}`,c?640:8,ys[r][0],610,ys[r][1]-ys[r][0]));}
fs.writeFileSync(path.join(__dirname,'../sprites.css'),css.join('\n')+'\n');
