// Dans votre composant App.js

import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(""); // État pour stocker l'élément de menu actif

  useEffect(() => {
    // Fonction pour mettre à jour l'élément de menu actif en fonction de la section visible
    const handleScroll = () => {
      const sections = document.querySelectorAll('div.section'); // Sélectionnez toutes les sections de la page
      const scrollPosition = window.scrollY; // Position de défilement actuelle de la fenêtre

      sections.forEach(section => {
        const sectionTop = section.offsetTop; // Position de début de la section
        const sectionHeight = section.clientHeight; // Hauteur de la section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveMenuItem(section.id); // Mettre à jour l'élément de menu actif avec l'identifiant de la section
        }
      });
    };

    // Ajouter un écouteur d'événements de défilement pour appeler handleScroll lorsque l'utilisateur fait défiler la page
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Utiliser une dépendance vide pour s'assurer que useEffect s'exécute une seule fois après le rendu initial

  return (
    <div>
      <Menu activeItem={activeMenuItem} />
      <Section1 id="section1" />
      <Section2 id="section2" />
      <Section3 id="section3" />
    </div>
  );
}

export default App;
