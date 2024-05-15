import styles from "@/styles/Contact.module.css";
import SectionSeparator from "./SectionSeparator";
import Image from "next/image";
import Link from "next/link";

const Contact: React.FC = () => {

    const handleClickSendMail = () => {
        window.open('mailto:lapand@hotmail.fr?subject=&body=');
    }

    return(
        <section className={styles.contactViewport}>
            <SectionSeparator sectionName="Contact" />
            <div className={styles.contactContainer}>
                <div className={styles.linksContainer}>
                    <button 
                        onClick={handleClickSendMail} 
                        className={`${styles.contactItem} ${styles.item1}`}
                    >
                        <Image 
                            src="/email-brick.png"
                            alt="email"
                            width={300}
                            height={300}
                            style={{
                                width:"auto",
                                height:"100%",
                                display:"block",
                            }}
                        />
                    </button>
                    <button className={`${styles.contactItem} ${styles.item2}`}>
                        <Link 
                            href="https://fr.linkedin.com/in/andoni-laporte-7b579429a" 
                            target="_blank"
                        >
                            <Image 
                                src="/linkedin-brick2.png"
                                alt="email"
                                width={300}
                                height={300}
                                style={{
                                    width:"auto",
                                    height:"100%",
                                    display:"block",
                                }}
                            />
                        </Link>
                    </button>
                    <button className={`${styles.contactItem} ${styles.item3}`}>
                        <Link href="https://github.com/lapand" target="_blank">
                            <Image 
                                src="/github-icon-brick.png"
                                alt="email"
                                width={300}
                                height={300}
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
                    <p 
                        className={`${styles.credits} text-black font-size2`} 
                        data-text="2024 - Andoni Laporte">
                            2024 - Andoni Laporte
                    </p>
                </div>
            </footer>
        </section>
    );
}

export default Contact;