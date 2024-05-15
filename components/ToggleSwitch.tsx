import { useState } from 'react';
import styles from '@/styles/ToggleSwitch.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
}

const ToggleSwitch: React.FC = () => {

    const [toggle, setToggle] = useState(false);
    const { i18n } = useTranslation();

    const handleToggle = () => {
        setToggle(toggle => !toggle);
        toggle ?
            i18n.changeLanguage('fr')
        :
            i18n.changeLanguage('en');
    }

    return (
        <button className={styles.toggleSwitch} onClick={handleToggle}>
            <div className={styles.languagesBloc}>
                <div 
                    className={`
                        ${styles.language} 
                        ${!toggle && styles.active} 
                        font-size00
                    `}
                >FR
                </div>
                <div 
                    className={`
                        ${styles.language} 
                        ${toggle && styles.active} 
                        font-size00
                    `}
                >EN
                </div>
            </div>
            <div className={`${styles.absoluteContainer} ${toggle && styles.moveRight}`}>
                <motion.div 
                    className={styles.indicator} 
                    layout 
                    transition={spring}
                ></motion.div>
            </div>
        </button>
    );
}


export default ToggleSwitch;