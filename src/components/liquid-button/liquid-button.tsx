import React, { useState } from 'react';
import './liquid-button.module.scss';

interface LiquidButtonProps {
  text: string;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ text }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCoords({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <button
      className="liquid-button"
      onMouseMove={handleMouseMove}
      style={{ '--x': coords.x, '--y': coords.y } as React.CSSProperties}
    >
        yolo
      {text}
    </button>
  );
};

export default LiquidButton;
