import styles from '@/styles/Section1.module.css';

// type Section1Props = {
//     id: string;
// }

export default function Section1(){


    return(
        <div className={ styles.grid }>
            <div className={ styles.title }>
                Développeur web & mobile
            </div>
            <div className={styles.content}></div>
        </div>
    );
}