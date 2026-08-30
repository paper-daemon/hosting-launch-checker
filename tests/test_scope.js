const fs=require('fs');
const app=fs.readFileSync('app.js','utf8');
const index=fs.readFileSync('index.html','utf8');
let n=0;
function ok(v,msg){if(!v)throw new Error(msg);n++}
ok(!/\bfetch\s*\(/.test(app),'app must not silently fetch target sites');
ok(!/XMLHttpRequest|WebSocket/.test(app),'app must not perform hidden network diagnostics');
ok(index.includes('対象サイトへアクセスせず'),'public copy must state no target-site access');
ok(index.includes('確認リスト'),'public copy must call output a checklist');
ok(!index.includes('診断結果に関連する'),'public copy must not imply measured diagnostic results');
ok(!/innerHTML/.test(app),'user-facing rendering must not use innerHTML');
ok(app.includes("url.protocol==='https:'||url.protocol==='http:'"),'offer URLs must be limited to http/https');
console.log(`${n} assertions PASS: checklist scope and safe rendering match implementation`);
