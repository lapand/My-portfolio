import styles from '@/styles/About.module.css';
import Image from 'next/image';
import SectionSeparator from './SectionSeparator';
import TextAndImg from './TextAndImg';

type AboutProps = {
    [key: string]: any;
}

export default function About({}: AboutProps): JSX.Element{

    const sections = [
      {
          description: 
          `Né à Bayonne en 1992, je vis actuellement à Dax dans le Sud Ouest de la France.\n
          Après 10 ans d'exercice à l'hopital de Dax en tant que manipulateur en électroradiologie, je me passionne pour le développement web et mobile.`
          ,
          imgUri: "/moi.jpg",
          imgAlt: "photo de profil : andoni",
          assetWidth: "50%",
      },
      {
          description: 
          `Amateur d'énigmes, de puzzles et défis logiques,
            fan de l'univers des jeux vidéos Myst.`
          ,
          videoUri: "/phare.mp4",
          assetWidth: "100%",
          linkUrl: "https://fr.wikipedia.org/wiki/Phare_d%27Aniva#/media/Fichier:%D0%9C%D0%B0%D1%8F%D0%BA_%D0%90%D0%BD%D0%B8%D0%B2%D0%B0.jpg"
      },
  ]

    return(
      <div className={ styles.aboutViewport }>
        <SectionSeparator sectionName="A propos" />
        <div className={styles.aboutContainer}>
          <TextAndImg 
            {...sections[0]}
          />
          <TextAndImg 
            {...sections[1]}
            isHorizontalSwitch={true} 
            gradientBlend={false}
          />
        </div>
      </div>
    );
}