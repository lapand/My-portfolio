import Link from "next/link";
import styles from "@/styles/Menu.module.css";

export default function Menu (): JSX.Element {
    return(
        <div className={styles.menu}>
            <li>
              <Link 
                  className={styles.navLink} 
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
                  className={styles.navLink} 
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
                className={styles.navLink} 
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
                className={styles.navLink} 
                to="Contact" 
                smooth={true} 
                duration={800} 
                onClick={() => scrollToSection("Contact")}
              >
                Contact
              </Link>
            </li>
        </div>        
    );
}