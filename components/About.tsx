import styles from '@/styles/About.module.css';
import Image from 'next/image';

// type AboutProps = {
//     id: string;
// }

export default function About(){


    return(
        <div className={ styles.grid }>
          <div className={ styles.title }>
            Section 3
          </div>
            <div className={styles.content}>
                Anciennement manipulateur en électroradiologie dans le Sud Ouest de la France, j'ai fait le choix de me lancer dans le développement web.
                J'y ai découvert un domaine passionnant qui répond à mon plaisir de résoudre des énigmes et des défis logique.
                Mon parcours dans le domaine de la santé m'a permis de développer des compétences précieuses en communication et travail d'équipe.
                En quête de défis stimulants et de nouvelles technologies à maîtriser. Adaptabilité, curiosité et désir d'apprendre sont au cœur de mon approche. Je suis convaincu que chaque problème peut être résolu avec la bonne dose de réflexion stratégique et de créativité.
            </div>
            <Image 
              src="/openbook8.webp"
              alt="openbook"
              width={1000}
              height={500}
              style={{
                width: '52%',
                height: 'auto',
              }}
              className={`${styles.openbook} ${isBookAtSection2 && styles.translation} `}
            />
            <video 
              src={currentVideoUri} 
              className={`${styles.video} ${isBookAtSection2 && styles.translation} `} 
              autoPlay={true} 
              muted={true} 
              loop={true}
            >
                <source src={currentVideoUri} type="video/mp4" />
                Votre navigateur ne permet pas de lire cette vidéo.
            </video>
        </div>
    );
}