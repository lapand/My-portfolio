import styles from '@/styles/Section2.module.css';
import { useState } from 'react';

// type Section2Props = {
//   id: string;
// }

export default function Section2({ handleSelectProject, projectTitle, projectContent }){

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
          <div className={styles.content}>
            <h2 className={ styles.projectTitle }>{projectTitle}</h2>
            <p>{projectContent}</p>
          </div>
          <div className={styles.swipeBtnCtn}>
            <button className={styles.swipeBtn} onClick={() => handleSelectProject(0)}></button>
            <button className={styles.swipeBtn} onClick={() => handleSelectProject(1)}></button>
            <button className={styles.swipeBtn} onClick={() => handleSelectProject(2)}></button>
          </div>
        </div>
    );
}