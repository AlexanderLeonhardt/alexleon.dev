'use client';

import { useEffect, useRef } from 'react';

const BackgroundParticles = ({
  lineDistance = 100,
  minNumberOfPoints = 2,
  maxNumberOfPoints = 200,
  maxArea = 1920 * 1080,
  speed = 0.1,
  lineSize =  1,
  pointSize = 2,
  lineColor =  { r: 100, g: 100, b: 100, a:1 },
  pointColor = { r: 100, g: 100, b: 100, a:1 },
  canvasStyle = {
    position: 'fixed',
    top:  0,
    left: 0,
    width:  '100%',
    height: '100%',
    zIndex: -1,
  },
}) => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const numberOfPointsRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Calculate number of points based on window dimensions
    const calculateNumberOfPoints = () => {
      const windowArea = window.innerWidth * window.innerHeight;
      const normalizedArea = Math.min(windowArea / maxArea, 1);
      const calculatedNumberOfPoints = Math.round(
        minNumberOfPoints + normalizedArea * (maxNumberOfPoints - minNumberOfPoints)
      );
      return Math.min(calculatedNumberOfPoints, maxNumberOfPoints);
    };

    // Generate initial points
    const generatePoints = () => {
      const pointsArray = [];
      for (let i = 0; i < numberOfPointsRef.current; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const vx = speed * Math.cos(angle);
        const vy = speed * Math.sin(angle);

        pointsArray.push({
          x: Math.random() * (canvas.width - pointSize*4) + pointSize*2,
          y: Math.random() * (canvas.height - pointSize*4) + pointSize*2,
          vx,
          vy,
        });
      }
      pointsRef.current = pointsArray;
    };

    // Update points' positions and draw
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off the edges
        if (point.x - pointSize < 0 || point.x + pointSize > canvas.width) point.vx *= -1;
        if (point.y - pointSize < 0 || point.y + pointSize > canvas.height) point.vy *= -1;
      });

      // Draw points and lines with opacity based on distance
      pointsRef.current.forEach((point1, index1) => {
        pointsRef.current.slice(index1 + 1).forEach((point2) => {
          const dx = point1.x - point2.x;
          const dy = point1.y - point2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate opacity based on distance (closer -> more opaque)
          const opacity = 1 - distance / lineDistance;
          if (opacity > 0) {
            // Draw lines
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.strokeStyle = `rgba(${lineColor.r}, ${lineColor.g}, ${lineColor.b}, ${lineColor.a * opacity})`;
            ctx.lineWidth = lineSize;
            ctx.stroke();

            // Draw points
            ctx.beginPath();
            ctx.arc(point1.x, point1.y, pointSize, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${pointColor.r}, ${pointColor.g}, ${pointColor.b}, ${pointColor.a * opacity})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(point2.x, point2.y, pointSize, 0, 2 * Math.PI);
            ctx.fill();
          }
        });
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Resize canvas and regenerate points on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numberOfPointsRef.current = calculateNumberOfPoints();
      generatePoints();
    };

    // Initializations
    window.addEventListener('resize', handleResize);
    handleResize();
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      // Clean up
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  });

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default BackgroundParticles;