import styles from '@/styles/Home.module.css';
import Image from 'next/image';

// type HomeSectionProps = {
//     id: string;
// }

export default function Home(): JSX.Element {


    return(
      <div className={ styles.homeContainer }>
        {/* <div className={styles.backgroundReveal}>
          <div className={styles.light}></div>
        </div> */}
        <div className={ styles.homeContent }>
          <p className={ styles.tagline }>
            <span className="text-coral" >Plongez</span> dans ma toile,<br/> tissée de code et de possibilités
          </p>
          <h2 className={ styles.job }>
              Développeur web & mobile
          </h2>
          <Image
            src="/lanterne.png"
            alt="lanterne"
            width={60}
            height={120}
            style={{
              width: '7%',
              height: 'auto',
            }}
            className={styles.lanterne}
          />
          <div className={styles.light}></div>
        </div>
      </div>
    );
}