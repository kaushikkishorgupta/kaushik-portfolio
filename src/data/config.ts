const config = {
  title: "Kaushik Kishor Gupta | Aspiring Web Developer",
  description: {
    long: "Explore the portfolio of Kaushik Kishor Gupta, a BCA student and aspiring web developer from Bihar, India. View my projects, tech stack, and connect for internship opportunities in software and web development.",
    short:
      "Portfolio of Kaushik Kishor Gupta — BCA Student | Aspiring Web Developer | Tech Enthusiast from Bihar, India.",
  },
  keywords: [
    "Kaushik Kishor Gupta",
    "portfolio",
    "web developer",
    "BCA student",
    "software developer",
    "web development",
    "internship",
    "Bihar",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "WordPress",
    "Git",
  ],
  author: "Kaushik Kishor Gupta",
  email: "kaushikkishorgupta@gmail.com",
  site: "https://kaushikkishorgupta.dev",

  // for github stars button
  githubUsername: "kaushikkishorgupta",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/kaushikkishorgupta",
    linkedin: "https://linkedin.com/in/kaushik-kishor-gupta",
  },
};
export { config };
