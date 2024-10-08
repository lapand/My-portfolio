import styles from "@/styles/SkillCard.module.css";

type SkillCardProps = {
    content: string,
};

const SkillCard: React.FC<SkillCardProps> = ({ content }) => {

    return (
        <div 
            className={`${styles.skillcard} font-size0 bg-copper`}
            data-text={content}
        >
            {content}
        </div>
    )
}

export default SkillCard;