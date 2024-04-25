import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styles from "@/styles/Menu.module.css";
import Image from "next/image";
import { useState } from 'react';

export default function Menu (): JSX.Element {

    // Définir une fonction pour gérer le clic sur un lien du menu
    const scrollToSection = (sectionId: string) => {
      scroller.scrollTo(sectionId, {
      duration: 800, // durée de la transition en millisecondes
      delay: 0, // délai avant le début de la transition en millisecondes
      smooth: 'easeInOutQuart' // type de transition
      });
    };

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return(
      <div className={styles.menu}>
        <button className={styles.menuIcon} onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <Image 
            src="/menu.png" 
            alt="menu icon"
            width={20}
            height={20}
            style={{
                width: '100%',
                height: 'auto',
                display: 'block'
            }}
          />
        </button>
        <ul className={`${styles.nav} ${isMenuVisible ? styles.visible : ''}`}>
          <li>
            <Link 
                className={`${styles.navLink} font-size1`} 
                to="Home" 
                smooth={true} 
                duration={800} 
                onClick={() => scrollToSection("Home")}
              >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
                className={`${styles.navLink} font-size1`} 
                to="ProjectSection" 
                smooth={true} 
                duration={800} 
                onClick={() => scrollToSection("ProjectSection")}
              >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              className={`${styles.navLink} font-size1`} 
              to="About" 
              smooth={true} 
              duration={800} 
              onClick={() => scrollToSection("About")}
            >
              A propos
            </Link>
          </li>
          <li>
            <Link 
              className={`${styles.navLink} font-size1`} 
              to="Contact" 
              smooth={true} 
              duration={800} 
              onClick={() => scrollToSection("Contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
}