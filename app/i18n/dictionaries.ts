import { defaultLocale, type Locale } from "@/app/i18n/config";

type Skill = {
  name: string;
  items: string[];
};

type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string;
  links?: Array<{ label: string; href: string }>;
};

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links?: Array<{ label: string; href: string }>;
};

type Education = {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
  };
  profile: {
    name: string;
    role: string;
    location: string;
    englishLevel: string;
    linkedinLabel: string;
    githubLabel: string;
    linkedinHref: string;
    githubHref: string;
    about: string;
  };
  contact: {
    intro: string;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    metadata: {
      title: "Alan Di Giovanni - Full-stack Developer",
      description:
        "Portfolio and resume of Alan Di Giovanni, full-stack developer based in Buenos Aires, Argentina.",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
    },
    profile: {
      name: "Alan Di Giovanni",
      role: "Software Developer",
      location: "Buenos Aires, Argentina",
      englishLevel: "English: Intermediate (B2-C1)",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinHref: "https://www.linkedin.com/in/ardigiovanni/",
      githubHref: "https://github.com/adigio",
      about:
        "I am a Software Developer from Buenos Aires, Argentina, and a graduate of UNLaM's Web Development program.\n\nMy work is driven by the idea of building software that is useful, sustainable, and pleasant to use. At 35, my greatest pride is being the father of Hada, who reminds me every day why it is worth creating things with purpose.\n\nI develop solutions for web, mobile, and beyond, always exploring new technologies and designing clean, scalable systems.",
    },
    contact: {
      intro:
        "Open to new opportunities and collaborations. Let's connect on LinkedIn or GitHub.",
    },
    skills: [
      {
        name: "Backend",
        items: [
          "Java",
          "Kotlin",
          "Scala",
          "Spring",
          "Quarkus",
          "Play with Scala",
          "Node.js",
          "Express",
          "NestJS",
        ],
      },
      {
        name: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue", "React Native"],
      },
      {
        name: "Data",
        items: ["SQL", "MySQL", "SQL Server", "PostgreSQL"],
      },
      {
        name: "Also explored",
        items: ["C#", "Flutter"],
      },
    ],
    experience: [
      {
        id: "exp-1",
        role: "Full-stack Developer",
        company: "Trade & Finance Technology",
        period: "Apr 2022 - Present",
        location: "CABA, Buenos Aires, Argentina - Remote",
        description:
          "Full-time role delivering projects for a major insurance company. I work across the full software lifecycle using Java (Spring) and Node.js (Express) for backend services, and React or Vue on the frontend depending on the project. I also work with SQL Server, collaborate on Azure service integration and administration, and implement authentication and authorization with Okta.",
        links: [{ label: "Client: Aon", href: "https://www.aon.com/en/" }],
      },
      {
        id: "exp-2",
        role: "Freelance Software Developer",
        company: "Trade & Finance Technology",
        period: "Apr 2022 - Nov 2025",
        location: "Buenos Aires, Argentina - Remote",
        description:
          "Part-time freelance work focused on insurance solutions, collaborating on initiatives for Aon with end-to-end delivery and close coordination with business stakeholders.",
        links: [{ label: "Aon", href: "https://www.aon.com/en/" }],
      },
      {
        id: "exp-3",
        role: "Full-stack Developer",
        company: "redbee Studios",
        period: "Jan 2021 - Nov 2025",
        location: "CABA, Buenos Aires, Argentina - Remote",
        description:
          "Full-time role across backend and frontend. The backend stack included Kotlin with Spring Boot and Quarkus, Scala with Play Framework, and TypeScript with NestJS. I designed and implemented solutions with DDD, hexagonal architecture, Clean Architecture, and SOLID principles, plus microservices, Kafka messaging, and authentication with Kong and Keycloak. On the frontend, I built React and TypeScript applications with a Single-SPA microfrontend architecture. I also worked with MySQL, Redis, GitHub, Bitbucket, GitLab, Jira, and Jenkins.",
        links: [{ label: "Client: Payway", href: "https://www.payway.com.ar/" }],
      },
      {
        id: "exp-4",
        role: "Full-stack Developer",
        company: "geco | Technology & Services",
        period: "Aug 2018 - Dec 2020",
        location: "CABA, Buenos Aires, Argentina - On-site",
        description:
          "Full-time role delivering multiple projects, including appointment booking systems and mobile apps for pharmacies. Backend work with Java (Spring MVC and Spring Boot) and PHP; frontend work with JSP and jQuery; mobile development with React Native; and day-to-day tooling with SVN, Redmine, and Jenkins.",
      },
    ],
    projects: [
      {
        id: "proj-1",
        title: "Cuoco",
        description:
          "Final project (2025) for the University Technical Degree in Web Development at UNLaM. Developed with Java, Spring Boot, MySQL, Next.js, and Gemini.",
        tags: ["Java", "Spring Boot", "MySQL", "Next.js", "Gemini"],
        links: [
          { label: "cuoco-api", href: "https://github.com/adigio/cuoco-api" },
          { label: "cuoco-ui", href: "https://github.com/adigio/cuoco-ui" },
        ],
      },
    ],
    education: [
      {
        id: "edu-1",
        degree: "University Technical Degree in Web Development",
        institution: "UNLaM",
        institutionUrl: "https://www.unlam.edu.ar/",
        period: "Completed in 2026",
      },
    ],
  },
  es: {
    metadata: {
      title: "Alan Di Giovanni - Desarrollador Full-stack",
      description:
        "Portfolio y currículum de Alan Di Giovanni, desarrollador full-stack en Buenos Aires, Argentina.",
    },
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Estudios",
    },
    profile: {
      name: "Alan Di Giovanni",
      role: "Desarrollador de Software",
      location: "Buenos Aires, Argentina",
      englishLevel: "Inglés: Intermedio (B2-C1)",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      linkedinHref: "https://www.linkedin.com/in/ardigiovanni/",
      githubHref: "https://github.com/adigio",
      about:
        "Soy desarrollador de software de Buenos Aires, Argentina, y graduado de la Tecnicatura Universitaria en Desarrollo Web de la UNLaM.\n\nMe interesa construir software útil, sostenible y agradable de usar, cuidando tanto la calidad técnica como la experiencia de las personas. A mis 35 años, mi mayor orgullo es ser papá de Hada, quien me recuerda cada día por qué vale la pena crear cosas con propósito.\n\nDesarrollo soluciones para web, mobile y más allá, siempre explorando nuevas tecnologías y diseñando sistemas limpios y escalables.",
    },
    contact: {
      intro:
        "Abierto a nuevas oportunidades y colaboraciones. Conectemos por LinkedIn o GitHub.",
    },
    skills: [
      {
        name: "Backend",
        items: [
          "Java",
          "Kotlin",
          "Scala",
          "Spring",
          "Quarkus",
          "Play con Scala",
          "Node.js",
          "Express",
          "NestJS",
        ],
      },
      {
        name: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue", "React Native"],
      },
      {
        name: "Datos",
        items: ["SQL", "MySQL", "SQL Server", "PostgreSQL"],
      },
      {
        name: "También exploré",
        items: ["C#", "Flutter"],
      },
    ],
    experience: [
      {
        id: "exp-1",
        role: "Desarrollador Full-stack",
        company: "Trade & Finance Technology",
        period: "abr. 2022 - actualidad",
        location: "CABA, Buenos Aires, Argentina - En remoto",
        description:
          "Rol full-time desarrollando proyectos para una importante empresa del sector seguros. Participo en todo el ciclo de vida de las soluciones con Java (Spring) y Node.js (Express) en backend, y React o Vue en frontend según el proyecto. Trabajo con SQL Server, colaboro en la integración y administración de servicios en Azure, e implemento autenticación y autorización con Okta.",
        links: [{ label: "Cliente: Aon", href: "https://www.aon.com/en/" }],
      },
      {
        id: "exp-2",
        role: "Desarrollador Full-stack Freelance",
        company: "Trade & Finance Technology",
        period: "abr. 2022 - nov. 2025",
        location: "Buenos Aires, Argentina - En remoto",
        description:
          "Trabajo freelance part-time enfocado en soluciones para seguros, colaborando en iniciativas para Aon con entrega end-to-end y coordinación cercana con el negocio.",
        links: [{ label: "Aon", href: "https://www.aon.com/en/" }],
      },
      {
        id: "exp-3",
        role: "Desarrollador Full-stack",
        company: "redbee Studios",
        period: "ene. 2021 - nov. 2025",
        location: "CABA, Buenos Aires, Argentina - En remoto",
        description:
          "Rol full-time en backend y frontend. El stack de backend incluía Kotlin con Spring Boot y Quarkus, Scala con Play Framework y TypeScript con NestJS. Diseñé e implementé soluciones con DDD, arquitectura hexagonal, Clean Architecture y principios SOLID, además de microservicios, mensajería con Kafka y autenticación con Kong y Keycloak. En frontend, desarrollé aplicaciones con React y TypeScript con arquitectura de microfrontends Single-SPA. También trabajé con MySQL, Redis, GitHub, Bitbucket, GitLab, Jira y Jenkins.",
        links: [{ label: "Cliente: Payway", href: "https://www.payway.com.ar/" }],
      },
      {
        id: "exp-4",
        role: "Desarrollador Full-stack",
        company: "geco | Technology & Services",
        period: "ago. 2018 - dic. 2020",
        location: "CABA, Buenos Aires, Argentina - Presencial",
        description:
          "Rol full-time trabajando en múltiples proyectos, incluyendo sistemas de turnos y aplicaciones móviles para farmacias. Backend con Java (Spring MVC y Spring Boot) y PHP; frontend con JSP y jQuery; desarrollo mobile con React Native; y herramientas de uso diario como SVN, Redmine y Jenkins.",
      },
    ],
    projects: [
      {
        id: "proj-1",
        title: "Cuoco",
        description:
          "Proyecto final (2025) de la Tecnicatura Universitaria en Desarrollo Web de la UNLaM. Desarrollado con Java, Spring Boot, MySQL, Next.js y Gemini.",
        tags: ["Java", "Spring Boot", "MySQL", "Next.js", "Gemini"],
        links: [
          { label: "cuoco-api", href: "https://github.com/adigio/cuoco-api" },
          { label: "cuoco-ui", href: "https://github.com/adigio/cuoco-ui" },
        ],
      },
    ],
    education: [
      {
        id: "edu-1",
        degree: "Tecnicatura Universitaria en Desarrollo Web",
        institution: "UNLaM",
        institutionUrl: "https://www.unlam.edu.ar/",
        period: "Finalizada en 2026",
      },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
