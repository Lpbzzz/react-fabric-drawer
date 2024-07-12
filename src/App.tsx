import usePreventClickWhenDrag from './hooks/usePreventClickWhenDrag';
import React from 'react';

const Component = () => {
  const handleClickA = (params: any, ev: React.MouseEvent) => {
    console.log('___', 'ev', ev.target, ev.currentTarget);
    if (ev.target !== ev.currentTarget) {
      console.log('Clicked A', params);
    }
  };

  const handleClickB = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Prevent event from bubbling up
    ev.preventDefault();
    ev.cancelable = false;
    console.log('Clicked B');
  };

  const { handleMouseDown, handleMouseMove, handleMouseUp } =
    usePreventClickWhenDrag({
      onClick: handleClickA,
      triggerDistance: 5,
    });

  return (
    <div
      className="a"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={(ev) => handleMouseUp({}, ev)}
      style={{ border: '1px solid #ccc', padding: 10 }}
    >
      <div
        className="b"
        onClick={handleClickB}
        style={{ border: '1px solid #bbb', padding: 10 }}
      >
        bbb
      </div>
      <div className="c" style={{ border: '1px solid #aaa', padding: 10 }}>
        cccccc
      </div>
    </div>
  );
};

export default Component;
