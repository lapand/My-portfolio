import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styles from "@/styles/Menu.module.css";
import Image from "next/image";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// const liNames = ["Accueil", "Projets", "Compétences", "A propos", "Contact"];

export default function Menu (): JSX.Element {

    const scrollToSection = (sectionId: string) => {
      scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
      });
    };

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuHovering, setIsMenuHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    // const [liHovering, setLiHovering] = useState<Number | null>(null);

    const handleClick = () => {
      setIsMenuVisible(isMenuVisible => !isMenuVisible);
      setIsClicked(isClicked => !isClicked);
    }

    // const handleLiHover = (index) => {
    //   setLiHovering
    // }

    return(
      <div className={styles.menu}>
        <motion.button 
          className={styles.menuIcon} 
          onClick={handleClick}
          onHoverStart={() => setIsMenuHovering(true)}
          onHoverEnd={() => setIsMenuHovering(false)}
          animate={{ rotate: isClicked ? 90 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={`${styles.topIcon} ${styles.iconPart}`}
            animate={{
              translateX: isMenuHovering ? "100%" : "0%",
            }}
            transition={{ duration: .4 }}
          ></motion.div>
          <motion.div 
            className={`${styles.midIcon} ${styles.iconPart}`}
            animate={{
              borderColor: isClicked ? "#D1654F" : "#E0C097",
            }}
            transition={{ duration: .5 }}
          ></motion.div>
          <motion.div 
            className={`${styles.botIcon} ${styles.iconPart}`}
            animate={{
              translateX: isMenuHovering ? "-100%" : "0%",
            }}
            transition={{ duration: .4 }}
          ></motion.div>
        </motion.button>
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
                to="Skills" 
                smooth={true} 
                duration={800} 
                onClick={() => scrollToSection("Skills")}
              >
              Compétences
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