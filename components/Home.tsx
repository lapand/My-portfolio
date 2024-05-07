import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { useTranslation, Trans } from "react-i18next";

export default function Home(): JSX.Element {

  const { t } = useTranslation();

    return(
      <div className={ styles.homeContainer }>
        <div className={ styles.homeContent }>
          <p className="font-size5">
            <Trans i18nKey="home.tagline">
              <span className="text-coral font-size5" >Plongez</span> dans ma toile,<br/> tissée de code et de passion.
            </Trans>
          </p>
          <h2 className="font-size41" style={{ alignSelf: "flex-end" }}>
              {t('home.title')}
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