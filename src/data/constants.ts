export enum SkillNames {
  HTML = "html",
  CSS = "css",
  JS = "js",
  CPP = "cpp",
  SQL = "sql",
  PHP = "php",
  WORDPRESS = "wordpress",
  GIT = "git",
  GITHUB = "github",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.HTML]: {
    id: 1,
    name: "html",
    label: "HTML",
    shortDescription: "Building the structure of the web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 2,
    name: "css",
    label: "CSS",
    shortDescription: "Styling and designing responsive layouts.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription: "Adding interactivity and dynamic behavior.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.CPP]: {
    id: 4,
    name: "cpp",
    label: "C / C++",
    shortDescription: "Core programming and system-level concepts.",
    color: "#00599C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.SQL]: {
    id: 5,
    name: "sql",
    label: "SQL / DBMS",
    shortDescription: "Managing and querying relational databases.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.PHP]: {
    id: 6,
    name: "php",
    label: "PHP",
    shortDescription: "Server-side scripting for web development.",
    color: "#777BB4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 7,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "CMS-based website development and customization.",
    color: "#21759b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.GIT]: {
    id: 8,
    name: "git",
    label: "Git",
    shortDescription: "Version control for source code management.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaboration, code hosting, and portfolio management.",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
};

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  institution: string;
  board: string;
  description: string;
  skills: SkillNames[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "L. N. Mishra Institute of Economic Development & Social Change",
    board: "Patna University",
    description:
      "Currently in 2nd Year. Core focus: Programming, DBMS, Web Technologies, and Software Engineering.",
    skills: [
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.JS,
      SkillNames.CPP,
      SkillNames.SQL,
      SkillNames.PHP,
    ],
  },
  {
    id: 2,
    startDate: "2022",
    endDate: "2024",
    title: "Intermediate (12th) — Science",
    institution: "D.P.C.S.S. Miller Inter School",
    board: "Bihar School Examination Board (BSEB)",
    description: "Completed with a focus on Science stream.",
    skills: [],
  },
  {
    id: 3,
    startDate: "2020",
    endDate: "2022",
    title: "Matriculation (10th)",
    institution: "D.P.C.S.S. Miller Inter School",
    board: "Bihar School Examination Board (BSEB)",
    description: "Completed secondary education.",
    skills: [],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

