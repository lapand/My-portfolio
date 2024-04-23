import styles from "@/styles/Project.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project (): JSX.Element {

    return (
        <div className={`${styles.projectContainer} ${styles.active}`}>
            <div className={styles.top}>
                <h3 className={`${styles.projectTitle} font-size4`}>Amaia Carrere</h3>
                <div className={styles.githubIcon}>
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
                </div>
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
                <div className={styles.toProject}>
                    <p className="font-size1 text-copper">Vers le projet
                    <span className={styles.externalLink}>
                        <Link href="">
                            <Image 
                                src="/external-link-arrow.png" 
                                alt="lien externe"
                                width={20}
                                height={20}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </Link>
                    </span>
                    </p>
                </div>
            </div>
        </div>
    );

}