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
          <p className="font-size5">
            <span className="text-coral font-size5" >Plongez</span> dans ma toile,<br/> tissée de code et de possibilités
          </p>
          <h2 className="font-size41">
              Développeur web & mobile
          </h2>
        </div>
        {/* <div className={styles.light}></div> */}
        <Image
            src="/lanterne2.png"
            alt="lanterne"
            width={500}
            height={500}
            style={{
              width: '10%',
              height: 'auto',
            }}
            className={styles.lanterne}
        />
      </div>
    );
}