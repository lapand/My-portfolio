import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MouseTracker from "@/components/MouseTracker";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Définir une fonction pour gérer le clic sur un lien du menu
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800, // durée de la transition en millisecondes
      delay: 0, // délai avant le début de la transition en millisecondes
      smooth: 'easeInOutQuart' // type de transition
    });
  };

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const animationTime = 200;

  useEffect(() => {

    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage du listener lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // On utilise authorName dans une balise <pre> permettant d'insérer du texte pré-formatté.
  // Modifier l'indentation et les espaces blancs modifiera donc le rendu visuel sur le site.

  const authorName : string = 
  `Andoni
          Laporte`;

  // Déclenche l'animation de déplacement de traits vers l'extérieur du livre
  // Prend un paramètre HTMLElement qui sera la cible du déplacement
  const triggerAnimation = (node: HTMLElement) => {
    if(node && node.textContent !== ' '){
      const lastCharRect = node.getBoundingClientRect();
      const lastCharX = lastCharRect.left + lastCharRect.width - 10;
      const lastCharY = lastCharRect.top + 5;

      const shootingStarElement = document.querySelector(`.${styles.shootingStar}`) as HTMLElement;
      if(shootingStarElement){
        let options = {
          duration: animationTime,
          easing: 'linear',
        };

        // Position de départ de la shootingStar en % par rapport à la taille actuelle de l'écran de l'user
        const initialX = 38;
        const initialY = 52;
        const initialXPx = windowWidth * (initialX / 100);
        const initialYPx = windowHeight * (initialY / 100);
        const deltaX = lastCharX - initialXPx;
        const deltaY = lastCharY - initialYPx;
        const radians = Math.atan2(deltaY, deltaX);
        const degrees = radians * (180 / Math.PI);

        shootingStarElement.style.setProperty('transform', `rotate(${degrees}deg)`);

        let keyframes = [
          { left: initialXPx + 'px', top: initialYPx + 'px' },
          { offset: 0.01, opacity: 1 },
          { offset: 0.5, opacity: 1 },
          { offset: 0.7, opacity: 1, width: '50px' },
          { left: lastCharX + 'px', top: lastCharY + 'px', width: '0px', opacity: 1 }
        ];
        // Lancer l'animation
        shootingStarElement.animate(keyframes, options);
      }
    }
  };

  const typingAuthorName = useTypingEffect(
    authorName,
    animationTime,
    [
      {word: 'AndoniLaporte', color: '#E1601B'},
      {word: 'createWebDeveloper', color: '#00B3C2'},
      {word: 'selfTaught', color: '#00B3C2'},
      {word: 'laCapsuleBootCamp', color: '#00B3C2'},
      {word: '// 2022', color: '#4EA949'},
      {word: '// 2023', color: '#4EA949'},
      {word: '// 2024', color: '#4EA949'},
      {word: 'front:', color: '#B100C2'},
      {word: 'back:', color: '#B100C2'},
      {word: 'HTML/CSS', color: '#DED226'},
      {word: 'Javascript vanilla', color: '#DED226'},
      {word: 'Typescript', color: '#DED226'},
      {word: 'React/Next.js', color: '#DED226'},
      {word: 'Node.js/Express', color: '#DED226'},
      {word: 'MongoDB', color: '#DED226'},
    ],
    triggerAnimation,
  );

    const [urlVideo, setUrlVideo] = useState("test.mp4");
    scrollY < windowHeight && urlVideo !== "test.mp4" && setUrlVideo("test.mp4");
    scrollY > windowHeight && urlVideo !== "amaia-website.mp4" && setUrlVideo("amaia-website.mp4");
    console.log(urlVideo)
  return (
    <>
      <Head>
        <title>Andoni Laporte, web developer</title>
        <meta name="description" content="Portfolio, présentation de mes projets web et mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=MonteCarlo&family=Nanum+Brush+Script&family=Nanum+Pen+Script&family=Passions+Conflict&family=Square+Peg&display=swap" rel="stylesheet" />       
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.fixed}>
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
            src="/openbook6.webp"
            alt="openbook"
            width={1200}
            height={0}
            className={styles.openbook}
          />
          <video key={urlVideo} className={styles.video} autoPlay={true} muted={true} loop={true}>
              <source src={urlVideo} type="video/mp4"/>
              Votre navigateur ne permet pas de lire cette vidéo.
          </video>
          <div className={ styles.shootingStar }></div>
        </div>

        <Element id="section1">
          <Section1 />
        </Element>
        <Element id="section2">
          <Section2 />
        </Element>
        <Element id="section3">
          <Section3 />
        </Element>
        {/* <MouseTracker/> */}
        {/* <div className={ styles.flamme }></div> */}
      </main>
    </>
  );
}