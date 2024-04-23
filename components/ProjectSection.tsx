import styles from '@/styles/ProjectSection.module.css';
import SectionSeparator from './SectionSeparator';
import { useState } from 'react';
import Image from 'next/image';
import Project from './Project';

// type ProjectProps = {
//   id: string;
// }

export default function ProjectSection(){

  const projects = [
    {
      title: "Amaia Carrere",
      videoUri: "amaia-website2.mp4",
      content: `Site vitrine d'une illustratrice et dessinatrice de bande-dessinées.`
    },
    {
      title: "Board Game Companion",
      videoUri: "bgc3.mp4",
      content: "Application mobile de ludothèque permettant de répertorier ses jeux de société et les parties faites entre amis."
    },
    {
      title: "Gestionnaire de planning",
      videoUri: "amaia-website.mp4",
      content: "Application web pour la création et gestion de planning mensuel du personnel hospitalier."
    },
  ]

  // const [reveal, setReveal] = useState(false);

  // function handleMouseMove(event) {
  //   setReveal(true);
  //   const bg = document.querySelector('.background');
  //   if(bg){
  //     const rect = bg.getBoundingClientRect();
  //     const mouseX = event.clientX - rect.left;
  //     const mouseY = event.clientY - rect.top;
  //     const bgWidth = rect.width;
  //     const bgHeight = rect.height;
  //     bg.style.maskPosition = `${mouseX}px ${mouseY}px`;}
  // }

  // function handleMouseLeave() {
  //   setReveal(false);
  // }

    return(
        <div className={styles.projectViewport}>
          <SectionSeparator sectionName="Projets" />
          <div className={styles.projectContainer}>
            <div className={styles.leftSide}>
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
            <div className={styles.rightSide}>
              <video 
                src="/bgc-video.mp4"
                className={styles.video} 
                autoPlay={true} 
                muted={true} 
                loop={true}
              >
                <source src="/bgc-video.mp4" type="video/mp4" />
                Votre navigateur ne permet pas de lire cette vidéo.
              </video>
            </div>
          </div>
          <hr className={`${styles.bottomSeparator} bc-beige`}/>
        </div>
    );
}