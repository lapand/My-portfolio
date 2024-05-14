import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useTranslation, Trans } from "react-i18next";

type HomeProps = Record<string, any>;

export default function Home({}: HomeProps): JSX.Element {

  useTranslation();

    return(
      <div className={ styles.homeContainer }>
        <div className={ styles.homeContent }>
          <p className="font-size5">
            <Trans i18nKey="home.tagline">
              <span className="text-coral font-size5" >Plongez</span> dans ma toile,<br/> tissée de code et de passion.
            </Trans>
          </p>
          <h2 style={{ alignSelf: "flex-end" }}>
            <Trans i18nKey="home.title">
              <strong className="font-size41">Développeur web & mobile</strong>
            </Trans>
          </h2>
        </div>
        {/* <div className={styles.light}></div> */}
        <Image
            src="/lanterne2.png"
            alt="lanterne"
            width={500}
            height={500}
            className={styles.lanterne}
        />
      </div>
    );
}