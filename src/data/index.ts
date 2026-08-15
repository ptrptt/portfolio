import { NavLink, SkillCategory, Project, Education, ContactItem } from "@/types";
import Image from "next/image";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Testing Skills",
    icon: "TestTube",
    skills: [
      "Manual Testing",
      "UI/UX Testing",
      "Test Planning",
      "Test Case Design",
      "Test Scenario",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Postman", "Playwright", "GitHub", "Jira", "Trello", "Figma"],
  },
  {
    title: "Languages",
    icon: "Code2",
    skills: ["SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Concepts",
    icon: "BookOpen",
    skills: ["SDLC", "Bug Tracking", "Scrum"],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      "Highly responsible and committed to work",
      "Eager to improve myself and always willing to learn",
      "Detail-oriented and dedicated to achieving goalsr",
      "Possess clear communication skills and able to work effectively in a team",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "easy-cook",
    title: "Easy Cook",
    subtitle: "Web Application",
    description:
      "A recipe management web application designed to help users discover, save, and organize their favorite recipes. Features include ingredient search, step-by-step cooking guides, and personalized meal planning.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gradient: "from-orange-400 to-rose-500",
  },
  {
    id: "software-testing-mini",
    title: "Software Testing Mini Project",
    subtitle: "QA Project",
    description:
      "A comprehensive software testing project covering test plan creation, test case design, defect reporting, and regression testing for a student management system. Documented full QA lifecycle.",
    technologies: ["Jira", "Postman", "Excel", "Test Planning"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: "pos-mormilk",
    title: "POS - Mormilk Cafe",
    subtitle: "Point of Sale System",
    description:
      "A point-of-sale system designed for a café environment. Supports order management, menu customization, sales reporting, and inventory tracking to streamline café operations.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: "easy-class-pay",
    title: "EasyClassPay",
    subtitle: "Payment Management System",
    description:
      "An educational payment management platform that simplifies tuition fee collection for educational institutions. Includes student registration, fee tracking, receipt generation, and payment history.",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    gradient: "from-violet-400 to-purple-500",
  },
];

export const education: Education[] = [
  
  {
    id: "up",
    institution: "University of Phayao",
    degree: "Bachelor of Science (Information Technology)",
    field: "Bachelor of Engineering (Software Engineering)",
    gpa: "2.50",
    period: "2024 – Present",
    current: true,
    logo: "/Logo_of_University_of_Phayao.svg",
    
  },
  {
    id: "obac",
    institution: "Ekawit Business Administration Vocational College (OBAC)",
    degree: "Computer Business Studies",
    gpa: "3.66",
    period: "2021 – 2024",
    current: false,
    logo: "/obaclogo.png"
  },
];

export const contactItems: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "phattharaphon@example.com",
    href: "mailto:phattharaphon@example.com",
    icon: "Mail",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/ptrptt",
    href: "https://github.com/ptrptt",
    icon: "Github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/phattharaphon",
    href: "https://www.linkedin.com/in/phattharaphon-tangtaeng-a1a624427/",
    icon: "Linkedin",
  },
  {
    id: "phone",
    label: "Phone",
    value: "096-350-5763",
    href: "tel:096-350-5763",
    icon: "Phone",
  },
];
