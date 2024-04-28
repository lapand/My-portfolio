import styles from "@/styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Project ({ id, onClick, isActive, title, content, stack, githubLink, projectLink }): JSX.Element {

    const formattedContent = content.split('\n').map((slice, i) => {
        return <span key={i} className="font-size1">{slice}<br/></span>
    })

    const stackJSX = stack.map((techno, i) => (
        <div key={i} className={`${styles.techno} bg-copper text-black font-size0`} data-text={techno}>{techno}</div>
    ))

    return (
        <motion.button 
            layout 
            transition={{layout: { duration: 1, type: "spring" }}} 
            onClick={() => onClick(id)} 
            className={`${styles.projectContainer} ${isActive && styles.active}`}
            style={{ 
                borderRadius: "1rem", 
                boxShadow: "2px 5px 6px rgba(224, 192, 151, .5)"
            }}
        >
            <motion.div className={styles.top}>
                <motion.h3 
                    layout="position" 
                    className={`${styles.projectTitle} font-size4`}
                >
                    {title}
                </motion.h3>
                {isActive &&
                    <motion.button 
                        className={styles.githubBtn} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                    >
                        <Link href={githubLink} target="_blank">
                            <Image
                                src="/github-icon-brick.png"
                                alt="github-icon"
                                width={60}
                                height={120}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </Link>
                    </motion.button>
                }
            </motion.div>
            {isActive &&
                <motion.p 
                    className={`${styles.description} font-size1 space-line`}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                >
                    {formattedContent}
                </motion.p>
            }
            {isActive &&
                <motion.div 
                    className={styles.bottom}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                >
                    <div className={styles.stack}>
                        {stackJSX}
                    </div>
                    <button className={styles.toProject}>
                        <Link href={projectLink} target="_blank" className="font-size1 text-copper">
                            Vers le projet
                            <Image 
                                src="/external-link-arrow.png" 
                                alt="lien externe"
                                width={20}
                                height={20}
                                style={{
                                    width: '12%',
                                    height: 'auto',
                                }}
                                className={styles.externalLinkImg}
                            />
                        </Link>
                    </button>
                </motion.div>
            }
        </motion.button>
    );

}