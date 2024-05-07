import styles from '@/styles/ProjectSection.module.css';
import SectionSeparator from './SectionSeparator';
import { FC, PropsWithChildren, useState } from 'react';
import Project from './Project';
import { LayoutGroup, motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "react-i18next";

type ProjectSectionProps = PropsWithChildren;
type ProjectType = {
  title: string,
  content: string,
  stack: string[],
  githubLink?: string,
  projectLink?: string,
  videoUri?: string,
}[];

const ProjectSection: FC<ProjectSectionProps> = () => {

  const [activeProjectId, setActiveProjectId] = useState<Number | null>(null);
  const { t } = useTranslation();

  const projects: ProjectType = [
    {
      title: t('projectSection.projects.0.title'),
      videoUri: "bgc.mp4",
      content: t('projectSection.projects.0.content'),
      stack: ["React-Native", "Expo", "Redux", "Node", "Express", "MongoDB", "Vercel"],
      githubLink: "",
      projectLink: "",
    },
    {
      title: t('projectSection.projects.1.title'),
      videoUri: "amaia.mp4",
      content: t('projectSection.projects.1.content'),
      stack: ["JS vanilla"],
      githubLink: "",
      projectLink: "https://www.amaia-carrere.com/",
    },  
    {
      title: t('projectSection.projects.2.title'),
      videoUri: "",
      content: t('projectSection.projects.2.content'),
      stack: ["React", "Next.js", "Framer-Motion"],
      githubLink: "https://github.com/lapand/My-portfolio.git",
      projectLink: "",
    },
  ]

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
          <SectionSeparator sectionName={t("projectSection.sectionName")} />
          <div className={styles.projectContainer}>
            <div className={styles.leftSide}>
              <LayoutGroup>
                {projectsJSX}
              </LayoutGroup>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.videoContainer}>
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
          </div>
        </div>
    );
}

export default ProjectSection;