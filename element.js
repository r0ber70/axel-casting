import ctx from "./index.js";

const colors = [ [255, 255, 255], [255, 255, 0], [255, 100, 0], [255, 0, 0], [100, 0, 0], [40, 40, 40], [20, 20, 20], [10, 10, 10], [5, 5, 5], [0, 0, 0] ];
const frameTime = 90;

class Particle {
	constructor(p) {
		this.x = p[0];
		this.y = p[1];
		this.oldX = p[0];
		this.oldY = p[1];
		this.t = 0;
		
		colors.forEach((c, i) => {
        		setTimeout(() => { this.process() }, i*frameTime);
        		setTimeout(() => { this.draw(c) }, i*frameTime+.1);
		});
		
	}
	
	process() {
		this.oldX = this.x;
		this.oldY = this.y;
		this.y -= (6 - this.t) * .5;
		this.x += Math.floor(Math.random() * (1 - 0 + 1));
	}
	
	draw(c) {
		ctx.fg(0, 0, 0);
        	ctx.bg(0, 0, 0);	
		ctx.point(this.oldX, this.oldY);
		ctx.fg(c[0], c[1], c[2]);
        	ctx.bg(c[0], c[1], c[2]);
		ctx.point(this.x, this.y);
		this.t += 1;
	}
}

export default class Fire {

	constructor(p) {
		this.p = p;
		this.points = [];
        	this.process();     	
	}

	process() {
		this.points.forEach((p) => {
			p.process();
		});	
		if (this.points.length < 4) {
			const particle = new Particle(this.p);
			this.points.push(particle);
		}		
	}

 }


