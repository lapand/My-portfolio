import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import styles from "@/styles/Header.module.css";
import { useEffect, useState, useRef } from "react";
import Menu from './Menu';
import ToggleSwitch from './ToggleSwitch';

type HeaderProps = any;

export default function Header({}: HeaderProps): JSX.Element{

  return(
      <div className={styles.header}>
        <h1 className={ styles.authorName }>Andoni<br/>Laporte</h1>
        <div className={styles.controlPanel}>
          <ToggleSwitch width="auto"/>
          <Menu />
        </div>
      </div>
  );
}