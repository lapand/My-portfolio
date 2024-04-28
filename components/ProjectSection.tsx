import styles from '@/styles/ProjectSection.module.css';
import SectionSeparator from './SectionSeparator';
import { FC, PropsWithChildren, useState } from 'react';
import Project from './Project';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';

type ProjectSectionProps = PropsWithChildren;
type ProjectType = {
  title: string,
  content: string,
  stack: string[],
  githubLink?: string,
  projectLink?: string,
  videoUri?: string,
}[];

const projects: ProjectType = [
  {
    title: "Board Game Companion",
    videoUri: "bgc.mp4",
    content: "Application mobile de ludothèque permettant de répertorier ses jeux de société et les parties faites entre amis.",
    stack: ["React-Native", "Expo", "Redux", "Node", "Express", "MongoDB"],
    githubLink: "",
    projectLink: "",
  },
  {
    title: "Mon portfolio",
    videoUri: "",
    content: "Celui-ci même !",
    stack: ["React", "Next.js", "Framer-Motion"],
    githubLink: "",
    projectLink: "",
  },
  {
    title: "Amaia Carrere",
    videoUri: "amaia.mp4",
    content: `Site vitrine d'une illustratrice de bandes dessinées.\n Statique - Responsive - SEO`,
    stack: ["JS vanilla"],
    githubLink: "",
    projectLink: "https://www.amaia-carrere.com/",
  },
]

const ProjectSection: FC<ProjectSectionProps> = () => {

  const [activeProjectId, setActiveProjectId] = useState<Number | null>(null);

  const handleClickProject = (id: Number | null) => id !== activeProjectId ?
      setActiveProjectId(id)
    :
      setActiveProjectId(null);

  const projectsJSX = projects.map((project, i) => {
    return (
      <Project 
        key={i} 
        id={i} 
        {...project} 
        isActive={ i === activeProjectId ? true : false } 
        onClick={handleClickProject} 
      />
    );
  })

    return(
        <div className={styles.projectViewport}>
          <SectionSeparator sectionName="Projets" />
          <div className={styles.projectContainer}>
            <div className={styles.leftSide}>
              <LayoutGroup>
                {projectsJSX}
              </LayoutGroup>
            </div>
            <div className={styles.rightSide}>
              <AnimatePresence>
                {activeProjectId !== null &&
                  <motion.video 
                    src={projects[activeProjectId].videoUri}
                    className={styles.video} 
                    autoPlay={true} 
                    muted={true} 
                    loop={true}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} 
                  >
                    <source src={projects[activeProjectId].videoUri} type="video/mp4" />
                    Votre navigateur ne permet pas de lire cette vidéo.
                  </motion.video>
                }
              </AnimatePresence>
            </div>
          </div>
          <hr className={`${styles.bottomSeparator} bc-beige`}/>
        </div>
    );
}

export default ProjectSection;