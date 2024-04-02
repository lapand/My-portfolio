import styles from '@/styles/Section2.module.css';
import { useState } from 'react';

// type Section2Props = {
//   id: string;
// }

export default function Section2(){

  const [reveal, setReveal] = useState(false);

  function handleMouseMove(event) {
    setReveal(true);
    const bg = document.querySelector('.background');
    if(bg){
      const rect = bg.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const bgWidth = rect.width;
      const bgHeight = rect.height;
      bg.style.maskPosition = `${mouseX}px ${mouseY}px`;}
  }

  function handleMouseLeave() {
    setReveal(false);
  }
  
    return(
        <div 
          className={styles.grid} 
        >
        {/* <div 
          className={`${styles.grid} ${reveal ? 'reveal' : ''}`} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        > */}
          {/* <div className={styles.background}></div> */}
          <div className={ styles.title }>
            Section 2
          </div>
          <div className={styles.content}>Hello world 2</div>
        </div>
    );
}