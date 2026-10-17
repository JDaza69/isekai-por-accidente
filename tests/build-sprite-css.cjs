// Browser rendering coordinates only; the original transparent PNGs are preserved.
const fs=require('node:fs');const path=require('node:path');
const width=1262,height=1246;
const xs=[3,318,637,955],rows=[[1,324],[328,634],[638,940],[945,1244]];
const names=['lys','kaida','nara','mirel'],expressions=['neutral','happy','shy','serious'];
function rule(selector,x,y,w,h){return `${selector}{background-size:${(width/w*100).toFixed(6)}% ${(height/h*100).toFixed(6)}%;background-position:${(x/(width-w)*100).toFixed(6)}% ${(y/(height-h)*100).toFixed(6)}%;}`;}
const css=['/* Exact atlas windows prevent adjacent expression rows from appearing. */'];
for(let c=0;c<4;c++)for(let r=0;r<4;r++)css.push(rule(`.portrait.char-${names[c]}.expr-${expressions[r]}`,xs[c],rows[r][0],Math.min(304,width-xs[c]),rows[r][1]-rows[r][0]));
const npcRows={player:[[2,608],[630,1228]],brumo:[[2,608],[630,1228]],severin:[[2,608],[630,1228]],tilda:[[2,620],[641,1234]]};
for(const [name,ys] of Object.entries(npcRows))for(let i=0;i<4;i++){const r=Math.floor(i/2),c=i%2;css.push(rule(`.portrait.npc-${name}.expr-${expressions[i]}`,c?640:8,ys[r][0],610,ys[r][1]-ys[r][0]));}
fs.writeFileSync(path.join(__dirname,'../sprites.css'),css.join('\n')+'\n');
