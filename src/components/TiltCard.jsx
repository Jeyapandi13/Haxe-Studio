import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard — A reusable 3D tilt wrapper component.
 * Tracks mouse position and applies perspective-based rotation + dynamic glow.
 * Uses requestAnimationFrame for smooth, non-janky updates.
 */
export default function TiltCard({ children, className = '', intensity = 12, glowColor = 'rgba(0, 212, 255, 0.12)', ...props }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '50%' });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    // Cancel any pending rAF to avoid queueing up transforms
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
      setGlowPos({ x: `${x}px`, y: `${y}px` });
    });
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      {...props}
    >
      {/* Magnetic cursor glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 rounded-inherit"
          style={{
            width: '250px',
            height: '250px',
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
            borderRadius: 'inherit',
            left: glowPos.x,
            top: glowPos.y,
            transform: 'translate(-50%, -50%) translateZ(0)',
            opacity: 0.8,
          }}
        />
      )}
      {/* Content rendered above the glow */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
