import { Link, scroller } from 'react-scroll';
import styles from "@/styles/Header.module.css";
import Menu from './Menu';
import ToggleSwitch from './ToggleSwitch';
import Image from 'next/image';

const Header: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return(
      <header className={styles.header}>
        <div className={ styles.logoContainer }>
          <Link
            to="Home" 
            smooth={true} 
            duration={800} 
            onClick={() => scrollToSection("Home")}
          >
            <Image 
              src="/andoni-logo.png"
              alt="logo"
              width={500}
              height={500}
              style={{
                width: "auto",
                height:"100%",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
        <div className={styles.controlPanel}>
          <ToggleSwitch />
          <Menu />
        </div>
      </header>
  );
}

export default Header;