import React, { useEffect, useRef } from 'react';
import Editor from '../../core';

const FabricCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const editorRef = useRef<Editor | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			editorRef.current = new Editor({ elementId: canvasRef.current.id });
		}

		// 清理函数
		return () => {
			if (editorRef.current) {
				editorRef.current.canvas.dispose();
				editorRef.current = null;
			}
		};
	}, []);

	const handleAddRectangle = () => {
		editorRef.current?.addRectangle();
	};

	const handleAddCircle = () => {
		editorRef.current?.addCircle();
	};

	const handleEnableDrawing = () => {
		editorRef.current?.enableDrawingMode();
	};

	const handleDisableDrawing = () => {
		editorRef.current?.disableDrawingMode();
	};

	const handleClearCanvas = () => {
		editorRef.current?.clearCanvas();
	};

	return (
		<div>
			<canvas
				id="fabricCanvas"
				ref={canvasRef}
				width="800"
				height="600"
				style={{ border: '1px solid #000' }}
			></canvas>
			<div>
				<button onClick={handleAddRectangle}>Add Rectangle</button>
				<button onClick={handleAddCircle}>Add Circle</button>
				<button onClick={handleEnableDrawing}>Enable Drawing</button>
				<button onClick={handleDisableDrawing}>Disable Drawing</button>
				<button onClick={handleClearCanvas}>Clear Canvas</button>
			</div>
		</div>
	);
};

export default FabricCanvas;
