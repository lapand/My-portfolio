import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  // debug: true,
  interpolation: { escapeValue: false },
  fallbackLng: "fr",
  resources: {
    fr: {
      translation: {
        menu: ["Accueil", "Projets", "Compétences", "A propos", "Contact"],
        home: {
          title: '<0 className="font-size41">Développeur web & mobile</0>',
          tagline:
            '<0 className="text-coral font-size5" >Plongez</0> dans ma toile,<2/> tissée de code et de passion.',
        },
        projectSection: {
          sectionName: "Projets",
          projects: [
            {
              title: "Amaia Carrere",
              content: `Site vitrine d'une illustratrice de bandes dessinées.\n
              => Design sur mesure, maquettage
              => Animations & transitions
                ~ Gestion des transitions DOM sans bibliothèques (principe du state machine)
                ~ Utilisation de la Web API Intersection Observer
                ~ Animations CSS personnalisées
              => Amélioration de l'expérience utilisateur
                ~ Script de génération d'URI de données pour les images LQIP
                ~ Respect des règles d'accessibilité
              => Optimisation des performances
                ~ Compression des images et conversion au format WebP
              => Données de formulaire sécurisées
                ~ Zod validations côté client & serveur
                ~ Création d'un client SMTP avec Nodemailer
                ~ Protocole OAuth2 & intégration avec serveur SMTP de Gmail
                ~ Mise en place des enregistrements DNS sur serveur de noms : SPF, DKIM et DMARC
              => Design responsive
              => Optimisation du référencement web
                ~ Balises sémantiques, métadonnées, mots clefs`,
            },
            {
              title: "Board Game Companion",
              content: `Application mobile de ludothèque permettant de répertorier ses jeux de société et les parties faites entre amis.\n
              Projet collaboratif organisé en sprints, méthode SCRUM\n
              => Enregistrer et noter ses jeux favoris dans sa ludothèque parmi une centaine de jeux en base de données
              => Enregistrer les informations liées aux parties réalisées (joueurs, points, équipes, vainqueurs)
              => Prise de photos du plateau de jeu
              => Accès aux statistiques des parties réalisées
              => Accessoires ludiques : lancer de dés, chronos, bloc-notes`,
            },
            {
              title: "Mon portfolio",
              content: `Celui-ci même, maquetté puis développé.\n
              => Conforme aux règles d'accessibilité
              => Adaptable à toute taille d'écran
              => Application des pratiques de référencement SEO
              => Compatible entre navigateurs
              => Performances optimisées
              => Ressources utilisées libres de droit, majoritairement créées par IA`,
            },
          ],
          toProject: "Vers le projet",
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
              description: `Manipulateur en électroradiologie\n
              IRM - CT-Scan - Radios
              Gardes et prise en charge des urgences`,
              skills: [
                "Communication",
                "Travail d'équipe",
                "Autonomie",
                "Adaptabilité",
                "Rigueur",
              ],
            },
          ],
          cv: "Télécharger CV",
        },
        aboutSection: {
          sectionName: "A propos",
          description: [
            `Né à Bayonne en 1992, je vis actuellement à Dax dans le Sud Ouest de la France.\n
            Après 10 ans d'exercice à l'hopital de Dax en tant que manipulateur en électroradiologie, je me passionne pour le développement web et mobile.`,
            `Amateur d'énigmes, de puzzles et défis logiques,
            fan de l'univers des jeux vidéos Myst.`,
          ],
        },
      },
    },
    en: {
      translation: {
        menu: ["Home", "Projects", "Skills", "About", "Contact"],
        home: {
          title: '<0 className="font-size41">Web & mobile developer</0>',
          tagline:
            '<0 className="text-coral font-size5" >Dive</0> into my web,<2/> woven of code and passion.',
        },
        projectSection: {
          sectionName: "Projects",
          projects: [
            {
              title: "Amaia Carrere",
              content:
                `Showcase website for a comic book illustrator.\n
                => Custom design and mockup
                => Animations & transitions
                  ~ Managing DOM transitions without libraries (state machine principle)
                  ~ Using the Intersection Observer Web API
                  ~ Custom CSS animations
                => User experience enhancement
                  ~ Data URI generation script for LQIP images
                  ~ Compliance with accessibility standards
                => Performance optimization
                  ~ Image compression and conversion to WebP format
                => Secure form data
                  ~ Zod validations on client & server side
                  ~ Creating an SMTP client with Nodemailer
                  ~ OAuth2 protocol & integration with Gmail SMTP server
                  ~ Setting up DNS records on name server: SPF, DKIM, and DMARC
                => Responsive design
                => Web SEO optimization
                  ~ Semantic tags, metadata, keywords`,
            },
            {
              title: "Board Game Companion",
              content: `Mobile app for board game library management, allowing users to catalogue their board games and track games played with friends.\n
              Collaborative project organized in sprints, using SCRUM methodology.\n
              => Record and rate favorite board games in one's library among a hundred games in the database
              => Record information related to games played (players, points, teams, winners)
              => Take photos of the game board
              => Access statistics of games played
              => Fun accessories: dice rolling, timers, notepads`,
            },
            {
              title: "My portfolio",
              content: `This one right here, designed and developed.\n
              => Compliance with accessibility guidelines
              => Adaptable to all screen sizes
              => SEO best practices
              => Browser compatibility
              => Performance optimization
              => Royalty-free resources, mostly created by AI.`,
            },
          ],
          toProject: "To the project",
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
              description: `Radiologic technologist\n
              MRI - CT-Scan - X-rays
              Shifts and emergency care`,
              skills: [
                "Communication",
                "Teamwork",
                "Autonomy",
                "Adaptability",
                "Rigor",
              ],
            },
          ],
          cv: "Download CV",
        },
        aboutSection: {
          sectionName: "About",
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
});

export default i18next;
