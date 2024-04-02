import styles from '@/styles/Section3.module.css';

// type Section3Props = {
//     id: string;
// }

export default function Section3(){


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
        </div>
    );
}