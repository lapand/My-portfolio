import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MouseTracker from "@/components/MouseTracker";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Fixed from '@/components/Fixed';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Scrollbar from "@/components/Scrollbar";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function Home(): JSX.Element {

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [scrollY, setScrollY] = useState(0);
  const sections = [
    {
      sectionName: "Accueil",
      videoUri: "test.mp4",
    },
    {
      sectionName: "Projets",
      projects: [
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
    },
    {
      sectionName: "Contact",
    }
  ];
  const [actualSection, setActualSection] = useState(sections[0]);
  const [selectedProjectVideoUri, setSelectedProjectVideoUri] = useState(sections[1].projects[0].videoUri);
  const [selectedProject, setSelectedProject] = useState(sections[1].projects[0]);

  if(scrollY <= windowHeight / 2 && actualSection.sectionName !== sections[0].sectionName){
    setActualSection(sections[0]);
  }
  if(scrollY > windowHeight / 2 && scrollY <= 1.5 * windowHeight && actualSection.sectionName !== sections[1].sectionName){
    setActualSection(sections[1]);
  }
  if(scrollY > 1.5 * windowHeight && actualSection.sectionName !== sections[2].sectionName){
    setActualSection(sections[2]);
  }
  let isBookAtSection2 = false;
  if(scrollY >= windowHeight / 2){
    isBookAtSection2 = true;
  }
  if(scrollY < windowHeight / 2){
    isBookAtSection2 = false;
  }

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

  function handleSelectProject(projectNb: number){
    if(projectNb < sections[1].projects.length){
      setSelectedProjectVideoUri(sections[1].projects[projectNb].videoUri);
      setSelectedProject(sections[1].projects[projectNb]);
    }
  }

  return (
    <>
      <Head>
        <title>Andoni Laporte, web developer</title>
        <meta name="description" content="Portfolio, présentation de mes projets web et mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <main className={styles.main}>
          {/* <Scrollbar> */}
          <div className={styles.engrenagesCtn}>
            <Image 
              src="/engrenages.png" 
              alt="engrenages" 
              className={styles.engrenages}
              width={100}
              height={100}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className={styles.backgroundReveal}>
            <div className={styles.light}></div>
          </div>
          <Element id="section1">
            <Section1 />
          </Element>
          <Element id="section2">
            <Section2 
              handleSelectProject={handleSelectProject} 
              projectTitle={selectedProject.title}
              projectContent={selectedProject.content}
            />
          </Element>
          <Element id="section3">
            <Section3 />
          </Element>
          {/* <MouseTracker/> */}
          {/* <div className={ styles.flamme }></div> */}
          <Fixed 
            sections={sections}
            actualSection={actualSection}
            selectedProjectVideoUri={selectedProjectVideoUri}
            isBookAtSection2={isBookAtSection2}
          />
          {/* </Scrollbar> */}
        </main>
      
    </>
  );
}