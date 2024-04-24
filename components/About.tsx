import styles from '@/styles/About.module.css';
import Image from 'next/image';
import SectionSeparator from './SectionSeparator';

type AboutProps = {
    [key: string]: any;
}

export default function About({}: AboutProps): JSX.Element{

    return(
      <div className={ styles.aboutViewport }>
        <SectionSeparator sectionName="A propos" />
        <div className={styles.aboutContainer}>
          <div className={styles.leftSegment}>
            <h3 className={styles.segmentTitle}>Qui suis je ?</h3>
            <p className={`${styles.content} font-size1 space-line`}>
              Anciennement manipulateur en électroradiologie dans le Sud Ouest de la France, j'ai fait le choix de me lancer dans le développement web.
              J'y ai découvert un domaine passionnant qui répond à mon plaisir de résoudre des énigmes et des défis logique.
              Mon parcours dans le domaine de la santé m'a permis de développer des compétences précieuses en communication et travail d'équipe.
              En quête de défis stimulants et de nouvelles technologies à maîtriser. Adaptabilité, curiosité et désir d'apprendre sont au cœur de mon approche. Je suis convaincu que chaque problème peut être résolu avec la bonne dose de réflexion stratégique et de créativité.
            </p>
          </div>
          <div className={styles.centerSegment}>
            <div className={styles.videoContainer}>
              <Image 
                src="/openbook8.webp"
                alt="openbook"
                width={1000}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className={styles.openbook}
              />
              {/* <video 
                src={""} 
                className={styles.video}
                autoPlay={true} 
                muted={true} 
                loop={true}
              >
                  <source src={""} type="video/mp4" />
                  Votre navigateur ne permet pas de lire cette vidéo.
              </video> */}
            </div>
          </div>
          <div className={styles.rightSegment}>
            <h3 className={styles.segmentTitle}>Mon parcours de dév</h3>
            <p className={`${styles.content} font-size1 space-line`}>
              Anciennement manipulateur en électroradiologie dans le Sud Ouest de la France, j'ai fait le choix de me lancer dans le développement web.
              J'y ai découvert un domaine passionnant qui répond à mon plaisir de résoudre des énigmes et des défis logique.
              Mon parcours dans le domaine de la santé m'a permis de développer des compétences précieuses en communication et travail d'équipe.
              En quête de défis stimulants et de nouvelles technologies à maîtriser. Adaptabilité, curiosité et désir d'apprendre sont au cœur de mon approche. Je suis convaincu que chaque problème peut être résolu avec la bonne dose de réflexion stratégique et de créativité.
            </p>
          </div>
        </div>
      </div>
    );
}