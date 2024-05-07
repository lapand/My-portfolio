import React from "react";
import Head from "next/head";
import styles from "@/styles/Main.module.css";
import { Element } from 'react-scroll';
import Header from '@/components/Header';
import Home from '@/components/Home';
import ProjectSection from '@/components/ProjectSection';
import Skills from "@/components/Skills";
import About from '@/components/About';
import Contact from '@/components/Contact';

type MainProps = Record<string, any>;

const Main: React.FC<MainProps> = () => {

  return (
    <>
      <Head>
        <title>Andoni Laporte, web developer</title>
        <meta name="description" content="Portfolio, présentation de mes projets web et mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/labyrinthe.ico" />
      </Head>

      <main className={styles.main}>

        <Header />
        <Element name="Home" id="Home">
          <Home />
        </Element>
        <Element name="ProjectSection" id="ProjectSection">
          <ProjectSection />
        </Element>
        <Element name="Skills" id="Skills">
          <Skills />
        </Element>
        <Element name="About" id="About">
          <About />
        </Element>
        <Element name="Contact" id="Contact">
          <Contact />
        </Element>

      </main>
      
    </>
  );
}

export default Main;