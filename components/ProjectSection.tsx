import styles from '@/styles/ProjectSection.module.css';
import SectionSeparator from './SectionSeparator';
import { FC, PropsWithChildren, useState } from 'react';
import Project from './Project';
import { LayoutGroup } from 'framer-motion';

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

  const projects: ProjectType = [
    {
      title: "Board Game Companion",
      videoUri: "bgc3.mp4",
      content: "Application mobile de ludothèque permettant de répertorier ses jeux de société et les parties faites entre amis.",
      stack: ["React-Native", "Expo", "Redux", "Node", "Express", "MongoDB"],
      githubLink: "",
      projectLink: "",
    },
    {
      title: "Mon portfolio",
      videoUri: "amaia-website.mp4",
      content: "Celui-ci même !",
      stack: ["React", "Next.js", "Framer-Motion"],
      githubLink: "",
      projectLink: "",
    },
    {
      title: "Amaia Carrere",
      videoUri: "amaia-website2.mp4",
      content: `Site vitrine d'une illustratrice de bandes dessinées.\n Statique - Responsive - SEO`,
      stack: ["JS vanilla"],
      githubLink: "",
      projectLink: "https://www.amaia-carrere.com/",
    },    
  ]

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
              <video 
                src="/bgc.mp4"
                className={styles.video} 
                autoPlay={true} 
                muted={true} 
                loop={true}
              >
                <source src="/bgc.mp4" type="video/mp4" />
                Votre navigateur ne permet pas de lire cette vidéo.
              </video>
            </div>
          </div>
          <hr className={`${styles.bottomSeparator} bc-beige`}/>
        </div>
    );
}

export default ProjectSection;