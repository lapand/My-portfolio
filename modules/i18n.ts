import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
        // debug: true,
        interpolation: { escapeValue: false },
        fallbackLng: 'fr',
        resources: {
            fr: {
                translation: {
                    menu: ['Accueil', 'Projets', 'Compétences', 'A propos', 'Contact'],
                    home: {
                        title: 'Développeur web & mobile',
                        tagline: '<0 className="text-coral font-size5" >Plongez</0> dans ma toile,<2/> tissée de code et de passion.',
                    },
                    projectSection: {
                        sectionName: "Projets",
                        projects: [
                            {
                                title: 'Board Game Companion',
                                content: 'Application mobile de ludothèque permettant de répertorier ses jeux de société et les parties faites entre amis.',
                            },
                            {
                                title: 'Amaia Carrere',
                                content: `Site vitrine d'une illustratrice de bandes dessinées.\n Statique - Responsive - SEO`,
                            },
                            {
                                title: 'Mon portfolio',
                                content: 'Celui-ci même !',
                            },
                        ],
                        toProject: 'Vers le projet',
                    },
                    skillSection: {
                        sectionName: "Compétences",
                        activityDomain: [
                            {
                                title: "Secteur informatique",
                                description: "Développeur web",
                                skills: [
                                    "React", 
                                    "Redux", 
                                    "Next.js",
                                    "Typescript",
                                    "React-Native", 
                                    "Expo",
                                    "Node.js", 
                                    "Express", 
                                    "MongoDB", 
                                    "Vercel",
                                    "Figma",
                                ],
                            },
                            {
                                title: "Secteur paramédical",
                                description: 
                                    `Manipulateur en électroradiologie\n
                                    IRM - CT-Scan - Radios
                                    Gardes et prise en charge des urgences`,
                                skills: ["Communication", "Travail d'équipe", "Autonomie", "Adaptabilité", "Rigueur"],
                            },
                        ],
                        cv: "Télécharger CV",
                    },
                    contactSection: {
                        sectionName: "Contact",
                        description: [
                            `Né à Bayonne en 1992, je vis actuellement à Dax dans le Sud Ouest de la France.\n
                            Après 10 ans d'exercice à l'hopital de Dax en tant que manipulateur en électroradiologie, je me passionne pour le développement web et mobile.`,
                            `Amateur d'énigmes, de puzzles et défis logiques,
                            fan de l'univers des jeux vidéos Myst.`,
                        ],
                    },
                }
            },
            en: {
                translation: {
                    menu: ['Home', 'Projects', 'Skills', 'About', 'Contact'],
                    home: {
                        title: 'Web & mobile developer',
                        tagline: '<0 className="text-coral font-size5" >Dive</0> into my web,<2/> woven of code and passion.',
                    },
                    projectSection: {
                        sectionName: "Projects",
                        projects: [
                            {
                                title: 'Board Game Companion',
                                content: 'Mobile application for cataloging board games and keeping track of game sessions with friends.',
                            },
                            {
                                title: 'Amaia Carrere',
                                content: 'The portfolio website of a comic book illustrator.\n Static - Responsive - SEO',
                            },
                            {
                                title: 'My portfolio',
                                content: 'This one right here!',
                            },
                        ],
                        toProject: 'To the project',
                    },
                    skillSection: {
                        sectionName: "Skills",
                        activityDomain: [
                            {
                                title: "Information technology sector",
                                description: "web developer",
                                skills: [
                                    "React", 
                                    "Redux", 
                                    "Next.js",
                                    "Typescript",
                                    "React-Native", 
                                    "Expo",
                                    "Node.js", 
                                    "Express", 
                                    "MongoDB", 
                                    "Vercel",
                                    "Figma",
                                ],
                            },
                            {
                                title: "Paramedical sector",
                                description: 
                                    `Radiologic technologist\n
                                    MRI - CT-Scan - X-rays
                                    Shifts and emergency care`,
                                skills: ["Communication", "Teamwork", "Autonomy", "Adaptability", "Rigor"],
                            },
                        ],
                        cv: "Download CV",
                    },
                    contactSection: {
                        sectionName: "Contact",
                        description: [
                            `Born in Bayonne in 1992, I currently live in Dax in the Southwest of France.\n
                            After 10 years of working at the hospital in Dax as a radiologic technologist, I became passionate about web and mobile development.`,
                            `Enthusiast of puzzles, riddles, and logical challenges,
                            fan of the Myst video game universe.`,
                        ],
                    },
                },
            },
        },
    })

    export default i18next;