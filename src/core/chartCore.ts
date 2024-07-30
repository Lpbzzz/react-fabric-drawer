import { Canvas } from 'fabric';

class ChartCore {
	canvas: Canvas;
	constructor(elementId: string, options?: Record<string, any>) {
		this.canvas = new Canvas(elementId, options);
		this.initCanvas();
	}
	initCanvas() {
		this.canvas.renderAll();
	}
}

export default ChartCore;
