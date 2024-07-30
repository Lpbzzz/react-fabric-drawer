import { Canvas, Circle, PencilBrush, Rect } from 'fabric';

interface EditorProps {
	elementId: string;
	options?: Record<string, any>;
}

class Editor {
	canvas: Canvas;
	constructor(props: EditorProps) {
		const { elementId, options } = props;
		this.canvas = new Canvas(elementId, options);
		this.initCanvas();
	}
	initCanvas() {
		this.canvas.backgroundColor = '#a1a2a3';
		this.canvas.renderAll();
	}

	addRectangle() {
		const rect = new Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 60,
			height: 70,
		});
		this.canvas.add(rect);
	}

	addCircle() {
		const circle = new Circle({
			radius: 50,
			fill: 'green',
			left: 150,
			top: 150,
		});
		this.canvas.add(circle);
	}

	enableDrawingMode() {
		this.canvas.isDrawingMode = true;
		this.canvas.freeDrawingCursor = 'pointer';
		this.canvas.freeDrawingBrush = new PencilBrush(this.canvas);
		this.canvas.freeDrawingBrush.color = 'red';
		this.canvas.freeDrawingBrush.width = 10;
	}

	disableDrawingMode() {
		this.canvas.isDrawingMode = false;
		console.log('Disable Drawing Mode:', this.canvas.isDrawingMode); // 应该为 false
	}

	clearCanvas() {
		this.canvas.clear();
		this.initCanvas(); // 确保清除后背景颜色仍然存在
	}
}

export default Editor;
