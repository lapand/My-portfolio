import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Main.module.css";
import { useEffect, useState } from "react";
import Header from '@/components/Header';
import Home from '@/components/Home';
import ProjectSection from '@/components/ProjectSection';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Skills from "@/components/Skills";

export default function Main(): JSX.Element {

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {

    // Enregistre les dimensions de la fenêtre du navigateur et surveille ses modifs
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Enregistre les modifs de position de la scrollbar
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage des listeners lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Andoni Laporte, web developer</title>
        <meta name="description" content="Portfolio, présentation de mes projets web et mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Header />
        <Element id="Home">
          <Home />
        </Element>
        <Element id="ProjectSection">
          <ProjectSection />
        </Element>
        <Element id="Skills">
          <Skills />
        </Element>
        <Element id="About">
          <About />
        </Element>
        <Element id="Contact">
          <Contact />
        </Element>

      </main>
      
    </>
  );
}