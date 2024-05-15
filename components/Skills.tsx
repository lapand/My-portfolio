import styles from "@/styles/Skills.module.css";
import SectionSeparator from "./SectionSeparator";
import SubSectionWrapper from "./SubSectionWrapper";
import { useTranslation } from "react-i18next";
import SubSectionText from "./SubSectionText";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AssetWrapper from "./AssetWrapper";
import type { SubSection } from "@/types";

const cvUri = "/cv-andoni-laporte.pdf";
const cvFileName = "cv-andoni-laporte.pdf";

const Skills: React.FC = () => {

    const { t } = useTranslation();

    const subSections: SubSection[] = [
        {
            text: {
                activityDomain: t('skillSection.activityDomain.0.title'),
                description: t('skillSection.activityDomain.0.description'),
                skills: t('skillSection.activityDomain.0.skills', { returnObjects: true }),
            },
            assetDisplay: {
                assetWidth: "100%",
                gradientBlend: true,
            },
            image: {
                imgUri: "/codeur.png",
                imgAlt: "developer working on computer",
            },
        },
        {
            layout: {
                isHorizontalSwitch: true,
            },
            text: {
                activityDomain: t('skillSection.activityDomain.1.title'),
                description: t('skillSection.activityDomain.1.description'),
                skills: t('skillSection.activityDomain.1.skills', { returnObjects: true }),
            },
            assetDisplay: {
                assetWidth: "100%",
                gradientBlend: true,
            },
            image: {
                imgUri: "/irm.png",
                imgAlt: "IRM machine",
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

    return (
        <div className={styles.skillsViewport}>
            <SectionSeparator sectionName={t("skillSection.sectionName")} />
            <div className={styles.skillsContainer}>
                {subSectionsJSX}
            </div>
            <div className={styles.cvBtnContainer}>
                <a 
                    className={styles.cvBtn}
                    href={cvUri}
                    download={cvFileName}
                >
                    {t('skillSection.cv')}
                </a>
            </div>
        </div>
    );

}

export default Skills;