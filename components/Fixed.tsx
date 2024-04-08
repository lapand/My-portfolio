import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Image from "next/image";
import styles from "@/styles/Fixed.module.css";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useEffect, useState, useRef } from "react";
import triggerFlyingLetters from '@/modules/triggerFlyingLetters';

type Section = {
  [key: string]: any;
}
type FixedProps = {
  sections: Section[];
  actualSection: Section;
}

export default function Fixed({sections, actualSection, selectedProjectVideoUri, isBookAtSection2}: FixedProps): JSX.Element{
  
  const shootingStarRef = useRef(null);
  // console.log(shootingStarRef.current)
  // videoKey force le re-render de la vidéo lorsqu'elle change
  const [currentVideoUri, setCurrentVideoUri] = useState("test.mp4");
  if(actualSection.sectionName === sections[0].sectionName && currentVideoUri !== "test.mp4"){
    setCurrentVideoUri("test.mp4");
  }
  if(actualSection.sectionName === sections[1].sectionName && !sections[1].projects.map(project => project.videoUri).includes(currentVideoUri)){
    setCurrentVideoUri(selectedProjectVideoUri);
  }
  if(actualSection.sectionName === sections[1].sectionName && currentVideoUri !== selectedProjectVideoUri){
    setCurrentVideoUri(selectedProjectVideoUri);
  }
  // let indexOfCurrentProject = null;
  // if(sections[1].videoUris.includes(currentVideoUri)){
  //   indexOfCurrentProject = sections[1].videoUris.indexOf(currentVideoUri);
  // }

  // Définir une fonction pour gérer le clic sur un lien du menu
  const scrollToSection = (sectionId: string) => {
      scroller.scrollTo(sectionId, {
      duration: 800, // durée de la transition en millisecondes
      delay: 0, // délai avant le début de la transition en millisecondes
      smooth: 'easeInOutQuart' // type de transition
      });
  };

  // On utilise authorName dans une balise <pre> permettant d'insérer du texte pré-formatté.
  // Modifier l'indentation et les espaces blancs modifiera donc le rendu visuel sur le site.
  const authorName : string = 
  `Andoni
      Laporte`;

  const typingAuthorName = useTypingEffect(
      authorName,
      200,
      [
        {word: 'A', color: '#E1601B'},
        {word: 'L', color: '#E1601B'},
      ],
      shootingStarRef,
    );
      
  return(
      <div className={styles.fixed}>
        <div className={ styles.shootingStar } ref={shootingStarRef}></div>
        <div className={styles.sticky}>
          <div className={ styles.authorName }>
            <pre className={ styles.identite }>
              {typingAuthorName}
            </pre>
          </div>
          <div className={styles.menu}>
              <li>
                <Link 
                    className={styles.navLink} 
                    to="section1" 
                    smooth={true} 
                    duration={800} 
                    onClick={() => scrollToSection("section1")}
                  >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                    className={styles.navLink} 
                    to="section2" 
                    smooth={true} 
                    duration={800} 
                    onClick={() => scrollToSection("section2")}
                  >
                  Projets
                </Link>
              </li>
              <li>
                <Link 
                  className={styles.navLink} 
                  to="section3" 
                  smooth={true} 
                  duration={800} 
                  onClick={() => scrollToSection("section3")}
                >
                  A propos
                </Link>
              </li>
          </div>
          <Image 
            src="/openbook8.webp"
            alt="openbook"
            width={1000}
            height={500}
            style={{
              width: '52%',
              height: 'auto',
            }}
            className={`${styles.openbook} ${isBookAtSection2 && styles.translation} `}
          />
          <video 
            src={currentVideoUri} 
            className={`${styles.video} ${isBookAtSection2 && styles.translation} `} 
            autoPlay={true} 
            muted={true} 
            loop={true}
          >
              <source src={currentVideoUri} type="video/mp4" />
              Votre navigateur ne permet pas de lire cette vidéo.
          </video>
          
        </div>
      </div>
  );
}