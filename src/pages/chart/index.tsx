import { useEffect, useRef, useState } from 'react';
import useInit from '@/pages/chart/hooks/useInit.tsx';
import { Rect, Circle } from 'fabric';

const Chart = () => {
	const elementRef = useRef<HTMLCanvasElement | null>(null);

	const canvasRef = useInit(elementRef);

	const [list] = useState([
		{
			left: 100,
			top: 100,
			width: 100,
			height: 100,
			fill: 'red',
		},
		{
			left: 200,
			top: 200,
			width: 100,
			height: 100,
			fill: 'blue',
		},
	]);

	useEffect(() => {
		const rects = list.map((item) => {
			return new Rect({
				left: item.left,
				top: item.top,
				width: item.width,
				height: item.height,
				fill: item.fill,
			});
		});
		const circles = list.map((item) => {
			return new Circle({
				radius: 50,
				left: item.left + 20,
				top: item.top + 20,
				fill: item.fill,
				stroke: 'black',
				strokeWidth: 2,
			});
		});
		canvasRef?.current?.add(...rects);
		canvasRef?.current?.add(...circles);
	}, [list]);

	return (
		<div>
			<canvas
				id={'chartFabric'}
				ref={elementRef}
				width="800"
				height="600"
				style={{ border: '1px solid #000' }}
			/>
		</div>
	);
};

export default Chart;
