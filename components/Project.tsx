import styles from "@/styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Project (): JSX.Element {

    const [isProjectActive, setIsProjectActive] = useState(false);

    return (
        <div className={`${styles.projectContainer} ${styles.active}`}>
            <div className={styles.top}>
                <h3 className={`${styles.projectTitle} font-size4`}>Board Game Companion</h3>
                <button className={styles.githubBtn}>
                    <Link href="">
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
                </button>
            </div>
            <p className={`${styles.description} font-size1 space-line`}>
                Site vitrine d'une illustratrice de bandes dessinées.<br/>
                Statique - Responsive - SEO
            </p>
            <div className={styles.bottom}>
                <div className={styles.stack}>
                    <div className={`${styles.techno} bg-copper text-black font-size0`}>JS Vanilla</div>
                    <div className={`${styles.techno} bg-copper text-black font-size0`}>JS Vanilla</div>
                </div>
                <button className={styles.toProject}>
                    <Link href="" className="font-size1 text-copper">
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
            </div>
        </div>
    );

}