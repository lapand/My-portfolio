import { CSSProperties } from 'react';
import styles from '@/styles/ToggleSwitch.module.css';

type ToggleSwitchProps = {
    style?: CSSProperties;
    width?: string;
}

export default function ToggleSwitch ({style, width = '100%', ...rest }: ToggleSwitchProps): JSX.Element {

    const combinedStyles: CSSProperties = {
        ...style,
        width,
    };

    return(
        <div className={styles.toggleSwitch} style={combinedStyles} {...rest}>
            <div className={styles.languagesBloc}>
                <button className={`${styles.btn} font-size00`}>FR</button>
                <button className={`${styles.btn} font-size00`}>EN</button>
            </div>
            <div className={styles.btnBloc}>
                <div className={`${styles.btn} ${styles.textDisappear} bg-copper font-size00`}>GG</div>
            </div>
        </div>
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