import styles from "@/styles/SubSectionWrapper.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

type SubSectionWrapperProps = Record<string, any>;

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