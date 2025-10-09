import { useEffect, useState } from 'react';

export function Crosshair() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="crosshair-container" style={{ pointerEvents: 'none' }}>
      {/* Horizontal line */}
      <div
        className="crosshair-line horizontal"
        style={{
          position: 'fixed',
          top: `${position.y}px`,
          left: 0,
          width: '100vw',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderTop: '1px dashed rgba(255, 255, 255, 0.5)',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      
      {/* Vertical line */}
      <div
        className="crosshair-line vertical"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: 0,
          width: '1px',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderLeft: '1px dashed rgba(255, 255, 255, 0.5)',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

