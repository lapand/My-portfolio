import { Link, scroller } from 'react-scroll';
import styles from "@/styles/Menu.module.css";
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

const sectionNames: string[] = ["Home", "ProjectSection", "Skills", "About", "Contact"];

const Menu: React.FC = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuHovering, setIsMenuHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { t } = useTranslation();
    const menuArray: string[] = t('menu', { returnObjects: true }) as string[];

    const liJSX = menuArray.map((item, index) => {
      return(
        <li key={item}>
          <Link 
            className={`${styles.navLink} font-size1`} 
            to={sectionNames[index]} 
            smooth={true} 
            duration={800} 
            onClick={() => scrollToSection(sectionNames[index])}
          >
            {item}
          </Link>
        </li>
      );
    })

    const scrollToSection = (sectionId: string) => {
      scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
      });
    };

    const handleClick = () => {
      setIsMenuVisible(isMenuVisible => !isMenuVisible);
      setIsClicked(isClicked => !isClicked);
    }

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
          {liJSX}
        </ul>
      </div>
    );
}

export default Menu;