import styles from "@/styles/SubSectionText.module.css";
import SkillCard from "./SkillCard";

type SubSectionTextProps = {
    activityDomain?: string,
    description?: string,
    skills?: string[],
};

const SubSectionText: React.FC<SubSectionTextProps> = ({
    activityDomain,
    description,
    skills,
}) => {

    const formattedDescription = description?.split('\n').map((slice: string, i: number) => {
        return <span key={i} className="font-size1">{slice}<br/></span>
    });

    let skillCards;
    if(skills){
        skillCards = skills.map((skill: string, i: number) => {
            return (
                <SkillCard key={i} content={skill} />
            );
        });
    }

    return (
        <div 
            className={styles.descriptionContainer}
        >
            <div className={styles.description}>
                {activityDomain && 
                    <h4 className={styles.activityDomain}>{activityDomain}</h4>
                }
                {formattedDescription && 
                    <p>{formattedDescription}</p>
                }
                {(skillCards && skillCards.length !== 0) &&
                    <div 
                        className={styles.containerSkills}
                    >
                        {skillCards}
                    </div>
                }
            </div>
        </div>
    )
}

export default SubSectionText;