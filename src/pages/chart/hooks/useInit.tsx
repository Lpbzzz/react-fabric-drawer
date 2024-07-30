import React, { useEffect, useRef } from 'react';
import ChartCore from '@/core/chartCore.ts';
import { Canvas } from 'fabric';

const useInit = (elementRef: React.RefObject<HTMLCanvasElement>) => {
	const canvasRef = useRef<Canvas>();
	useEffect(() => {
		if (elementRef && canvasRef) {
			const canvas = new ChartCore(elementRef?.current?.id ?? '');
			canvas.initCanvas();
			canvasRef.current = canvas.canvas;
		}
		return () => {
			void canvasRef?.current?.dispose?.();
		};
	}, [canvasRef]);
	return canvasRef;
};

export default useInit;
