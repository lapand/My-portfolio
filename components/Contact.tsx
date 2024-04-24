import styles from "@/styles/Contact.module.css";
import SectionSeparator from "./SectionSeparator";
import Image from "next/image";

export default function Contact (): JSX.Element {
    return(
        <div className={styles.contactViewport}>
            <SectionSeparator sectionName="Contact" />
            <div className={styles.contactContainer}>
                <div className={styles.linksContainer}>
                    <div className={`${styles.contactItem} ${styles.item1}`}>
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
                    </div>
                    <div className={`${styles.contactItem} ${styles.item2}`}>
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
                    </div>
                    <div className={`${styles.contactItem} ${styles.item3}`}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}