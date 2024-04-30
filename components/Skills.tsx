import styles from "@/styles/Skills.module.css";
import SectionSeparator from "./SectionSeparator";
import Image from "next/image";
import Link from "next/link";
import TextAndImg from "./TextAndImg";

type skillSection = {
    activityDomain?: string,
    description?: string,
    skills?: Array<string>,
    imgUri?: string,
    imgAlt?: string,
    videoUri?: string,
    assetWidth?: string,
    isHorizontalSwitch ?: Boolean,
};

type skillSections = skillSection[];

const cvUri = "/cv-andoni-laporte.pdf";
const cvFileName = "cv-andoni-laporte.pdf";
const sections: skillSections = [
    {
        activityDomain: "Secteur informatique",
        description: "Développeur web",
        skills: [
            "React", 
            "Redux", 
            "Next.js",
            "Typescript",
            "React-Native", 
            "Expo",
            "Node.js", 
            "Express", 
            "MongoDB", 
            "Vercel",
            "Figma",
        ],
        imgUri: "/codeur.png",
        imgAlt: "developer working on computer",
        assetWidth: "80%",
    },
    {
        activityDomain: "Secteur paramédical",
        description: 
            `Manipulateur en électroradiologie\n
            IRM - CT-Scan - Radios
            Gardes et prise en charge des urgences`
        ,
        skills: ["Communication", "Travail d'équipe", "Autonomie", "Adaptabilité", "Rigueur"],
        imgUri: "/irm.png",
        imgAlt: "IRM machine",
        assetWidth: "80%",
        isHorizontalSwitch: true,
    },
]

export default function Skills (): JSX.Element {

    const sectionsJSX = sections.map((section, i) => {
        return (
            <TextAndImg key={i} {...section} />
        );
    })

    return (
        <div className={styles.skillsViewport}>
            <SectionSeparator sectionName="Compétences" />
            <div className={styles.skillsContainer}>
                {sectionsJSX}
            </div>
            <div className={styles.cvBtnContainer}>
                <a 
                    className={styles.cvBtn}
                    href={cvUri}
                    download={cvFileName}
                >
                    Download CV
                </a>
            </div>
        </div>
    );

}