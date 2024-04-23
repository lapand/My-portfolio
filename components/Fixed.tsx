import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Image from "next/image";
import styles from "@/styles/Fixed.module.css";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useEffect, useState, useRef } from "react";
import triggerFlyingLetters from '@/modules/triggerFlyingLetters';
import Menu from './Menu';
import ToggleSwitch from './ToggleSwitch';

type FixedProps = any;

export default function Fixed({}: FixedProps): JSX.Element{

  // Définir une fonction pour gérer le clic sur un lien du menu
  const scrollToSection = (sectionId: string) => {
      scroller.scrollTo(sectionId, {
      duration: 800, // durée de la transition en millisecondes
      delay: 0, // délai avant le début de la transition en millisecondes
      smooth: 'easeInOutQuart' // type de transition
      });
  };

  return(
      <div className={styles.header}>
        <h1 className={ styles.authorName }>Andoni<br/>Laporte</h1>
        {/* <ToggleSwitch /> */}
        <div className={styles.menuIcon}>
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
        </div>
        {/* <Menu /> */}
      </div>
  );
}