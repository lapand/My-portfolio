import styles from '@/styles/About.module.css';
import SectionSeparator from './SectionSeparator';
import TextAndImg from './TextAndImg';
import { useTranslation } from "react-i18next";

const About: React.FC = () => {

  const { t } = useTranslation();

    const sections = [
      {
          description: t('contactSection.description.0'),
          imgUri: "/moi.jpg",
          imgAlt: "photo de profil : andoni",
          assetWidth: "50%",
      },
      {
          description: t('contactSection.description.1'),
          videoUri: "/phare.mp4",
          assetWidth: "100%",
          linkUrl: "https://fr.wikipedia.org/wiki/Phare_d%27Aniva#/media/Fichier:%D0%9C%D0%B0%D1%8F%D0%BA_%D0%90%D0%BD%D0%B8%D0%B2%D0%B0.jpg"
      },
  ]

    return(
      <div className={ styles.aboutViewport }>
        <SectionSeparator sectionName={t('contactSection.sectionName')} />
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

export default About;