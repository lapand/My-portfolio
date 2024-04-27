import { CSSProperties, useState } from 'react';
import styles from '@/styles/ToggleSwitch.module.css';
import { motion, useScroll } from 'framer-motion';

type ToggleSwitchProps = {
    style?: CSSProperties;
    width?: string;
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
}

export default function ToggleSwitch ({style, width = '100%', ...rest }: ToggleSwitchProps): JSX.Element {

    const [toggle, setToggle] = useState(false);

    const combinedStyles: CSSProperties = {
        ...style,
        width,
    };

    const handleToggle = () => {
        setToggle(toggle => !toggle);
    }

    return (
        <button className={styles.toggleSwitch} style={combinedStyles} {...rest} onClick={handleToggle}>
            <div className={styles.languagesBloc}>
                <div className={`${styles.language} ${!toggle && styles.active} font-size00`}>FR</div>
                <div className={`${styles.language} ${toggle && styles.active} font-size00`}>EN</div>
            </div>
            <div className={`${styles.absoluteContainer} ${toggle && styles.moveRight}`}>
                <motion.div className={styles.indicator} layout transition={spring}></motion.div>
            </div>
        </button>
    );
}

/**
 * Composant ToggleSwitch
 * 
 * @param {CSSProperties} style - Les styles CSS à appliquer au composant.
 * @param {string} width - La largeur du composant. La valeur par défaut est "100%".
 * @param {React.HTMLAttributes<HTMLDivElement>} rest - Les autres props à passer à la <div> racine du composant. 
 *                                                     Les props non documentées seront transmises directement à la <div>.
 * @returns {JSX.Element} - Le composant ToggleSwitch.
 */