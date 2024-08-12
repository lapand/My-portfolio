import styles from "@/styles/ProjectSection.module.css";
import SectionSeparator from "./SectionSeparator";
import { useState } from "react";
import Project from "./Project";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

type ProjectType = {
  title: string;
  content: string;
  stack: string[];
  githubLink?: string;
  projectLink?: string;
  videoUri?: string;
  imgUri?: string;
  imgAlt?: string;
}[];

const ProjectSection: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const { t } = useTranslation();

  const projects: ProjectType = [
    {
      title: t("projectSection.projects.0.title"),
      videoUri: "amaia.mp4",
      content: t("projectSection.projects.0.content"),
      stack: [
        "Figma",
        "React",
        "Next.js",
        "Typescript",
        "Tailwind",
        "i18Next",
        "React-Hook-Form",
        "Zod",
        "Nodemailer",
      ],
      githubLink: "https://github.com/lapand/Amaia-Carrere",
      projectLink: "https://www.amaia-carrere.com/",
    },
    {
      title: t("projectSection.projects.1.title"),
      videoUri: "bgc.mp4",
      content: t("projectSection.projects.1.content"),
      stack: [
        "React-Native",
        "Expo",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Vercel",
        "Trello",
      ],
      githubLink: "",
      projectLink: "",
    },
    {
      title: t("projectSection.projects.2.title"),
      videoUri: "",
      imgUri: "/code-editor.png",
      imgAlt: "éditeur de code",
      content: t("projectSection.projects.2.content"),
      stack: [
        "Figma",
        "React",
        "Next.js",
        "Typescript",
        "Framer-Motion",
        "i18Next",
      ],
      githubLink: "https://github.com/lapand/My-portfolio.git",
      projectLink: "",
    },
  ];

  const handleClickProject = (id: number | null) =>
    id !== activeProjectId ? setActiveProjectId(id) : setActiveProjectId(null);

  const projectsJSX = projects.map((project, i) => {
    if (activeProjectId !== null && activeProjectId !== i) {
      return;
    }

    return (
      <Project
        key={i}
        id={i}
        {...project}
        isActive={i === activeProjectId ? true : false}
        onClick={handleClickProject}
      />
    );
  });

  return (
    <section className={styles.projectViewport}>
      <SectionSeparator sectionName={t("projectSection.sectionName")} />
      <motion.div
        className={styles.projectContainer}
        transition={{ duration: 0.5 }}
        layout
      >
        <motion.div
          className={styles.leftSide}
          transition={{ duration: 0.5 }}
          layout
        >
          <LayoutGroup>{projectsJSX}</LayoutGroup>
        </motion.div>
        <motion.div
          className={styles.rightSide}
          transition={{ duration: 0.5 }}
          layout
        >
          <motion.div
            transition={{ duration: 0.5 }}
            layout
            className={styles.mediaContainer}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AnimatePresence>
              <LayoutGroup>
                {activeProjectId !== null &&
                  (projects[activeProjectId].videoUri ? (
                    <motion.video
                      src={projects[activeProjectId].videoUri}
                      className={styles.video}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      playsInline
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <source
                        src={projects[activeProjectId].videoUri}
                        type="video/mp4"
                      />
                      Votre navigateur ne permet pas de lire cette vidéo.
                    </motion.video>
                  ) : (
                    <motion.div
                      className={`${styles.mediaContainer} ${styles.imgCtn}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src={`${projects[activeProjectId].imgUri}`}
                        alt={`${projects[activeProjectId].imgAlt}`}
                        width={1024}
                        height={1024}
                        style={{
                          width: "100%",
                          height: "auto",
                          border: "2px solid red",
                        }}
                      />
                    </motion.div>
                  ))}
              </LayoutGroup>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
