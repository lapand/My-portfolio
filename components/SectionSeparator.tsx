import styles from '@/styles/SectionSeparator.module.css';
import { motion } from 'framer-motion';

type SectionSeparatorProps = {
    sectionName: string,
};

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ sectionName }) => {

    return (
        <div className={styles.sectionSeparator}>
            <motion.div 
                style={{borderTop: "1px solid rgb(224, 192, 151)"}}
                initial={{ width: 0 }}
                whileInView={{ width: "clamp(200px, 25%, 100vw)" }}
                transition={{ duration: .6 }}
            ></motion.div>
            <motion.h2 
                className={`${styles.sectionName} font-size2`}
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: .8 }}
            >
                {sectionName}
            </motion.h2>
        </div>
    );

}

export default SectionSeparator;