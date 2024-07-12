import React, { useCallback, useRef, useState } from 'react';

interface UsePreventClickWhenDragProps {
	onClick: (params: any, ev?: React.MouseEvent | any) => any;
	triggerDistance?: number;
}

const usePreventClickWhenDrag = (props: UsePreventClickWhenDragProps) => {
	const { onClick, triggerDistance } = props;
	const distance = triggerDistance || 5;
	const [dragging, setDragging] = useState(false);
	const startX = useRef(0);
	const startY = useRef(0);

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		setDragging(false);
		startX.current = e.clientX;
		startY.current = e.clientY;
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (
				Math.abs(e.clientX - startX.current) > distance ||
				Math.abs(e.clientY - startY.current) > distance
			) {
				setDragging(true);
			}
		},
		[distance],
	);

	const handleMouseUp = useCallback(
		(params: any, ev: React.MouseEvent) => {
			if (!dragging) {
				if (ev.target === ev.currentTarget) {
					onClick(params, ev);
				}
			}
			setDragging(false);
		},
		[dragging, onClick],
	);

	return {
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
	};
};

export default usePreventClickWhenDrag;
