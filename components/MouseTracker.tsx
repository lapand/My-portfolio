import styles from "@/styles/MouseTracker.module.css";
import React, { useState, useEffect } from 'react';

function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [flameDim, setFlameDim] = useState({ w: 0, h: 0 });

  const handleMouseMove = (event) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  console.log(coords)
  return (
    <div 
        className={styles.flamme}
        style={{
            width: `${flameDim.w}px`,
            height: `${flameDim.h}px`,
            top: `${coords.y - flameDim.h/2}px`,
            left: `${coords.x - flameDim.w/2}px`,
        }}>
    </div>
  );
}

export default MouseTracker;
