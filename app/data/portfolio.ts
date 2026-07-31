export type Skill = {
  name: string;
  items: string[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const profile = {
  name: "Alan Di Giovanni",
  role: "Fullstack Developer",
  location: "Buenos Aires, Argentina",
  email: "mailto:alan.digiovanni@gmail.com",
  linkedin: "https://www.linkedin.com/in/alan-digiovanni",
  github: "https://github.com/adicio",
  about:
    "Fullstack developer with focus on building scalable and maintainable products. I have worked with JVM and Node.js ecosystems, SQL databases, and modern front-end frameworks. I value simple designs, clean code, and steady delivery.",
} as const;

export const skills: Skill[] = [
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
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "React Native",
    ],
  },
  {
    name: "Data",
    items: ["SQL", "MySQL", "SQL Server", "PostgreSQL"],
  },
  {
    name: "Also explored",
    items: ["C#", "Flutter"],
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Developer",
    company: "Mercado Libre",
    period: "2022 - Present",
    description:
      "Building and maintaining high-traffic services with Java, Kotlin and Spring. Collaborating on API design, performance tuning and observability.",
  },
  {
    id: "exp-2",
    role: "Software Engineer",
    company: "Coasin",
    period: "2019 - 2022",
    description:
      "Fullstack development for enterprise applications using Java, React and SQL Server. Led migrations to REST APIs and microservices.",
  },
  {
    id: "exp-3",
    role: "Software Developer",
    company: "10Pines",
    period: "2016 - 2019",
    description:
      "Worked in agile teams across multiple projects with Scala, Java, React and Node.js. Mentored junior developers and ran technical workshops.",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Internal Platform",
    description:
      "Back-office platform for operations teams built with Next.js, Kotlin and PostgreSQL.",
    tags: ["Next.js", "Kotlin", "Spring", "PostgreSQL"],
  },
  {
    id: "proj-2",
    title: "API Gateway",
    description:
      "Gateway service handling authentication, rate limiting and routing for microservices.",
    tags: ["Java", "Spring Cloud Gateway", "Docker", "Kubernetes"],
  },
  {
    id: "proj-3",
    title: "Mobile App",
    description:
      "Cross-platform logistics app for drivers built with React Native and Node.js.",
    tags: ["React Native", "TypeScript", "Node.js", "Express"],
  },
];
