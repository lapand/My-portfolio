import styles from "@/styles/Contact.module.css";
import SectionSeparator from "./SectionSeparator";
import Image from "next/image";
import Link from "next/link";

export default function Contact (): JSX.Element {
    return(
        <div className={styles.contactViewport}>
            <SectionSeparator sectionName="Contact" />
            <div className={styles.contactContainer}>
                <div className={styles.linksContainer}>
                    <button className={`${styles.contactItem} ${styles.item1}`}>
                        <Link href="">
                            <Image 
                                src="/email-brick.png"
                                alt="email"
                                width={50}
                                height={50}
                                style={{
                                    width:"auto",
                                    height:"100%",
                                    display:"block",
                                }}
                            />
                        </Link>
                    </button>
                    <button className={`${styles.contactItem} ${styles.item2}`}>
                        <Link href="">
                            <Image 
                                src="/linkedin-brick2.png"
                                alt="email"
                                width={50}
                                height={50}
                                style={{
                                    width:"auto",
                                    height:"100%",
                                    display:"block",
                                }}
                            />
                        </Link>
                    </button>
                    <button className={`${styles.contactItem} ${styles.item3}`}>
                        <Link href="">
                            <Image 
                                src="/github-icon-brick.png"
                                alt="email"
                                width={50}
                                height={50}
                                style={{
                                    width:"auto",
                                    height:"100%",
                                    display:"block",
                                }}
                            />
                        </Link>
                    </button>
                </div>
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.copyrightContainer}>
                        <Image 
                            src="/copyright.png"
                            alt="copyright"
                            width={50}
                            height={50}
                            style={{
                                width:"100%",
                                height:"auto",
                                display:"block",
                            }}                    
                        />
                    </div>
                    <p className={`${styles.credits} text-black font-size2`}>2024 - Andoni Laporte</p>
                </div>
            </footer>
        </div>
    );
}