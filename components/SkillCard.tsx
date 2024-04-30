import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SkillCard.module.css";

export default function SkillCard ({ content }): JSX.Element {

    return (
        <div 
            className={`${styles.skillcard} font-size0 bg-copper`}
            data-text={content}
        >
            {content}
        </div>
    )
}