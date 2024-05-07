import styles from "@/styles/Skills.module.css";
import SectionSeparator from "./SectionSeparator";
import TextAndImg from "./TextAndImg";
import { useTranslation } from "react-i18next";

type skillSection = {
    activityDomain?: string,
    description?: string,
    skills?: any,
    imgUri?: string,
    imgAlt?: string,
    videoUri?: string,
    assetWidth?: string,
    isHorizontalSwitch ?: Boolean,
};

type skillSections = skillSection[];

const cvUri = "/cv-andoni-laporte.pdf";
const cvFileName = "cv-andoni-laporte.pdf";

const Skills: React.FC = () => {

    const { t } = useTranslation();

    const sections: skillSections = [
        {
            activityDomain: t('skillSection.activityDomain.0.title'),
            description: t('skillSection.activityDomain.0.description'),
            skills: t('skillSection.activityDomain.0.skills', { returnObjects: true }),
            imgUri: "/codeur.png",
            imgAlt: "developer working on computer",
            assetWidth: "100%",
        },
        {
            activityDomain: t('skillSection.activityDomain.1.title'),
            description: t('skillSection.activityDomain.1.description'),
            skills: t('skillSection.activityDomain.1.skills', { returnObjects: true }),
            imgUri: "/irm.png",
            imgAlt: "IRM machine",
            assetWidth: "100%",
            isHorizontalSwitch: true,
        },
    ]

    const sectionsJSX = sections.map((section, i) => {
        return (
            <TextAndImg key={i} {...section} />
        );
    })

    return (
        <div className={styles.skillsViewport}>
            <SectionSeparator sectionName={t("skillSection.sectionName")} />
            <div className={styles.skillsContainer}>
                {sectionsJSX}
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