import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {
  // Définir une fonction pour gérer le clic sur un lien du menu
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800, // durée de la transition en millisecondes
      delay: 0, // délai avant le début de la transition en millisecondes
      smooth: 'easeInOutQuart' // type de transition
    });
  };

  return (
    <div>
      <nav>
        <ul>
          {/* Utilisation des composants de la bibliothèque react-scroll */}
          <li><Link to="section1" smooth={true} duration={800} onClick={() => scrollToSection("section1")}>Section 1</Link></li>
          <li><Link to="section2" smooth={true} duration={800} onClick={() => scrollToSection("section2")}>Section 2</Link></li>
          <li><Link to="section3" smooth={true} duration={800} onClick={() => scrollToSection("section3")}>Section 3</Link></li>
        </ul>
      </nav>
      <Element name="section1" className="element">
        <h2>Section 1</h2>
        <p>Contenu de la section 1...</p>
      </Element>
      <Element name="section2" className="element">
        <h2>Section 2</h2>
        <p>Contenu de la section 2...</p>
      </Element>
      <Element name="section3" className="element">
        <h2>Section 3</h2>
        <p>Contenu de la section 3...</p>
      </Element>
    </div>
  );
}

export default App;
