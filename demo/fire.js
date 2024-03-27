import ctx from "../index.js"

ctx.elementStart();
ctx.fg(0,255,0);
ctx.bg(0,255,0);
const cx = ctx.cols/2;
const cy = ctx.rows/2;
for (let i=0; i<20; i++) {
	ctx.point(cx+i, cy+i);
}

ctx.elementRender();
//ctx.cursor.restore();
