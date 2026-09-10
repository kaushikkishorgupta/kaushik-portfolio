import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
      {repo && repo !== "#" && (
        <a
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: (
    <span
      role="img"
      aria-label={title}
      className="block bg-current"
      style={{
        width: "1em",
        height: "1em",
        WebkitMaskImage: `url(/assets/logos/${file})`,
        maskImage: `url(/assets/logos/${file})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  ),
});

const PROJECT_SKILLS = {
  html: brand("HTML", "html5-mono.svg"),
  css: brand("CSS", "css3-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">C++</span>,
  },
  sql: brand("PostgreSQL", "postgresql-mono.svg"),
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PHP</span>,
  },
  wordpress: brand("WordPress", "wordpress-mono.svg"),
  git: brand("Git", "git-mono.svg"),
  github: brand("GitHub", "github-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "portfolio",
    category: "Web Development",
    title: "Personal Portfolio Website",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Responsive portfolio website with modern UI, animations,
            SEO-focused structure, and internship-focused sections.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "todo",
    category: "Web Application",
    title: "To-Do List Application",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.js,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Task management application with add, delete, complete, and
            localStorage persistence functionality.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "studentdb",
    category: "Database System",
    title: "Student Database System",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.sql,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            CRUD-based student record management system demonstrating C++
            programming and SQL / DBMS concepts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;
