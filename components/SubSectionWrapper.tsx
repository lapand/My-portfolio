import styles from "@/styles/SubSectionWrapper.module.css";
import type { PropsWithChildren } from "react";

type SubSectionWrapperProps = PropsWithChildren<{
    isHorizontalSwitch?: Boolean,
}>;

const SubSectionWrapper: React.FC<SubSectionWrapperProps> = ({ 
    children,
    isHorizontalSwitch = false,
}) => {
    return (
        <div 
            className={`${styles.container} ${isHorizontalSwitch ? styles.reverse : ""}`} 
        >
            {children}
        </div>
    );
}

export default SubSectionWrapper;