import styles from "@/styles/TextAndImg.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";

type MyComponentProps = Record<string, any>;

const TextAndImg: React.FC<MyComponentProps> = ({ 
    imgUri, 
    imgAlt,
    videoUri, 
    assetWidth = "100%", 
    gradientBlend = true,
    isHorizontalSwitch = false,
    activityDomain,
    description,
    skills,
    linkUrl,
}): JSX.Element => {

    const formattedDescription = description.split('\n').map((slice, i) => {
        return <span key={i} className="font-size1">{slice}<br/></span>
    })

    let skillCards;
    if(skills){
        skillCards = skills.map((skill, i) => {
            return (
                <SkillCard key={i} content={skill} />
            );
        });
    }

    return (
        <div 
            className={`${styles.container} ${isHorizontalSwitch ? styles.reverse : ""}`} 
        >
            <div 
                className={styles.descriptionContainer}
            >
                <div className={styles.description}>
                    {activityDomain && 
                        <h4 className={styles.activityDomain}>{activityDomain}</h4>
                    }
                    <p>{formattedDescription}</p>
                    {(skillCards && skillCards.length !== 0) &&
                        <div 
                            className={styles.containerSkills}
                        >
                            {skillCards}
                        </div>
                    }
                </div>
            </div>
            <div 
                className={styles.assetOuterContainer}
            >
                <div 
                    className={gradientBlend ? 
                        styles.assetInnerContainer : styles.assetInnerContainerWithoutAfter
                    }
                    style={{ width: assetWidth }}
                >
                    {imgUri &&
                        <Image 
                            src={imgUri}
                            alt={imgAlt}
                            width={1000}
                            height={1000}
                            style={{
                                width: "100%",
                                height:"auto",
                                display:"block",
                            }}
                        />
                    }
                    {videoUri &&
                        <div style={{position: "relative"}}>
                            <motion.video 
                                src={videoUri}
                                className={styles.video} 
                                autoPlay={true} 
                                muted={true} 
                                loop={true}
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} 
                            >
                                <source src={videoUri} type="video/mp4" />
                                Votre navigateur ne permet pas de lire cette vidéo.
                            </motion.video>
                            <Link  href={linkUrl} target="_blank" className={styles.link} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}

export default TextAndImg;