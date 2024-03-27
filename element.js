import ctx from "./index.js";

export default class Element {
	constructor() {
	    	cursor.fg.rgb(255, 0, 0);
        	cursor.bg.rgb(255, 0, 0);
	}

	draw(p) {
		ctx.point(p[0], p[1]);
	}

 }

