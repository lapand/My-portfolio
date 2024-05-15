import styles from '@/styles/About.module.css';
import SectionSeparator from './SectionSeparator';
import AssetWrapper from './AssetWrapper';
import { useTranslation } from "react-i18next";
import type { SubSection } from "@/types";
import SubSectionWrapper from './SubSectionWrapper';
import SubSectionText from './SubSectionText';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About: React.FC = () => {

  const { t } = useTranslation();

    const subSections: SubSection[] = [
      {
        text: {
          description: t('aboutSection.description.0'),
        },
        assetDisplay: {
          assetWidth: "50%",
          gradientBlend: true,
        },
        image: {
          imgUri: "/moi.jpg",
          imgAlt: "photo de profil : andoni",
        },
      },
      {
        layout: {
          isHorizontalSwitch: true,
        },
        text: {
          description: t('aboutSection.description.1'),
        },
        assetDisplay: {
          assetWidth: "100%",
        },
        video: {
          videoUri: "/phare.mp4",
          linkUrl: "https://fr.wikipedia.org/wiki/Phare_d%27Aniva#/media/Fichier:%D0%9C%D0%B0%D1%8F%D0%BA_%D0%90%D0%BD%D0%B8%D0%B2%D0%B0.jpg"
        },
      },
  ]

  const subSectionsJSX = subSections.map((subSection, i) => {
    return (
        <SubSectionWrapper 
            key={i} 
            {...(subSection.layout && subSection.layout)}
        >
            <SubSectionText {...subSection.text} />
            { subSection.image && 
                <AssetWrapper {...(subSection.assetDisplay && subSection.assetDisplay)}>
                    <Image 
                        src={subSection.image.imgUri}
                        alt={subSection.image.imgAlt}
                        width={1000}
                        height={1000}
                        style={{
                            width: "100%",
                            height:"auto",
                            display:"block",
                        }}
                    /> 
                </AssetWrapper>
            }
            { subSection.video &&
                <AssetWrapper {...(subSection.assetDisplay && subSection.assetDisplay)}>
                    <div style={{position: "relative"}}>
                        <motion.video 
                            src={subSection.video.videoUri}
                            className={styles.video} 
                            autoPlay={true} 
                            muted={true} 
                            loop={true}
                            playsInline
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} 
                        >
                            <source src={subSection.video.videoUri} type="video/mp4" />
                            Votre navigateur ne permet pas de lire cette vidéo.
                        </motion.video>
                        {subSection.video.linkUrl &&
                            <Link  
                                href={subSection.video.linkUrl} 
                                target="_blank" 
                                className={styles.link} 
                            />
                        }
                    </div>
                </AssetWrapper>
            }
        </SubSectionWrapper>
    );
  });

    return(
      <div className={ styles.aboutViewport }>
        <SectionSeparator sectionName={t('aboutSection.sectionName')} />
        <div className={styles.aboutContainer}>
          {subSectionsJSX}
        </div>
      </div>
    );
}

export default About;