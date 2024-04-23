import styles from '@/styles/SectionSeparator.module.css';

type SectionSeparatorProps = any;

export default function SectionSeparator ({ sectionName }: SectionSeparatorProps): JSX.Element {

    return (
        <div className={styles.sectionSeparator}>
            <hr className="bc-beige"/>
            <h2 className={`${styles.sectionName} font-size2`}>{sectionName}</h2>
        </div>
    );

}