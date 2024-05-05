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
          ` Le 06/03/1992,\n
            une cascade d'instructions donna naissance à un tout nouveau projet.\n
            Me voici, quittant l'environnement de développement sécurisé pour rencontrer l'immense réseau extérieur.`
          ,
          imgUri: "/bebe-ando.jpg",
          imgAlt: "bébé andoni",
          assetWidth: "30%",
      },
      {
          description: 
          `Amateur d'énigmes, de puzzles et défis logiques,
            fan de l'univers des jeux vidéos Myst.`
          ,
          videoUri: "/phare.mp4",
          assetWidth: "80%",
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