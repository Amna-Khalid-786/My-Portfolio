
import { Project, Skill, Experience } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/amna-khalid-pk/",
  github: "https://github.com/Amna-Khalid-786",
  email: "amnapersonal4@gmail.com",
  phone: "+92 3364695525"
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "SK Associates",
    description: "A comprehensive professional platform showcasing services and portfolio for SK Associates.",
    image: "/assets/real-estate.jpg",
    tags: ["Next.js", "Tailwind CSS", "Frontend"],
    githubLink: "https://github.com/Amna-Khalid-786/sk-associates",
    vercelLink: "https://sk-associates.vercel.app"
  },
  {
    id: 2,
    title: "Camera Based App",
    description: "Medical imaging application for high-quality skin analysis with advanced camera controls.",
    image: "/assets/camera.jpg",
    tags: ["React Native", "Medical Imaging", "Mobile"],
    isPrivate: true
  },
  {
    id: 3,
    title: "Remote Patient Monitoring",
    description: "Real-time health monitoring application for tracking vital patient parameters.",
    image: "/assets/Remote-Patient-Monitoring.jpg",
    tags: ["React Native", "Healthcare", "Real-time"],
    isPrivate: true
  },
  {
    id: 4,
    title: "Devfolio Site",
    description: "Revive Medical Technologies portfolio project developed with modern web technologies.",
    image: "/assets/devfolio-site.jpg",
    tags: ["Next.js", "Portfolio", "RMT"],
    githubLink: "https://github.com/Amna-Khalid-786/devfolio-site",
    vercelLink: "https://devfolio-site.vercel.app"
  },
  {
    id: 5,
    title: "Proactive Care RPM",
    description: "Advanced healthcare system for proactive monitoring and patient management.",
    image: "/assets/proactive.png",
    tags: ["Next.js", "Healthcare IT", "Monitoring"],
    githubLink: "https://github.com/Amna-Khalid-786/PROACTIVECARE-RPM",
    vercelLink: "https://proactivecare-rpm.vercel.app"
  },
  {
    id: 6,
    title: "GitHub Portfolio",
    description: "Customized GitHub landing page and personal branding for engineering excellence.",
    image: "/assets/github-portfolio.jpg",
    tags: ["Markdown", "Branding", "Open Source"],
    githubLink: "https://github.com/Amna-Khalid-786/Amna-Khalid-786"
  },
  {
    id: 7,
    title: "Advanced Calculator",
    description: "Sophisticated calculator app with scientific functions and modern UI.",
    image: "/assets/calculator.jpg",
    tags: ["JavaScript", "Frontend", "UI/UX"],
    githubLink: "https://github.com/Amna-Khalid-786/calculator",
    vercelLink: "https://calculator-mu-three-60.vercel.app"
  },
  {
    id: 8,
    title: "Macrobuddy App Design",
    description: "UI/UX design for a nutrition tracker and wellness companion app in Figma.",
    image: "/assets/macrobuddy.jpg",
    tags: ["Figma", "UI/UX", "Nutrition"],
    figmaLink: "https://www.figma.com/design/u1evcKpeSwqESqXegfqAyR/Copy-of-Final?node-id=0-1&p=f&t=JXiy46oLzdGcYyeV-0"
  },
  {
    id: 9,
    title: "Recipe App Design",
    description: "Interactive mobile design for a recipe sharing and cooking social platform.",
    image: "/assets/recpie.jpg",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    figmaLink: "https://www.figma.com/design/HXDv0OhGeJG9Iebay4TNDU/P1?t=JXiy46oLzdGcYyeV-0"
  },
  {
    id: 10,
    title: "Medical Device Design",
    description: "Professional product design and visualization for medical instrumentation.",
    image: "/assets/medical-device.jpg",
    tags: ["Canva", "Design", "Medical"],
    canvaLink: "https://www.canva.com/design/DAHC35r2nIc/U0xkqNEVn45thrJF3tO-Ig/edit"
  },
  {
    id: 11,
    title: "Brochure Design",
    description: "Creative marketing materials for app branding and promotional brochures.",
    image: "/assets/broucher.jpg",
    tags: ["Canva", "Marketing", "Graphic Design"],
    canvaLink: "https://www.canva.com/design/DAGnUS9P33M/NOj_Iqas8T6JDWKOGI4HKg/edit"
  },
  {
    id: 12,
    title: "Personal Portfolio",
    description: "A modern, high-performance developer portfolio featuring 3D animations and dynamic interactions.",
    image: "/assets/my-portfolio.jpg",
    tags: ["Next.js", "Three.js", "Framer Motion"],
    githubLink: "https://github.com/Amna-Khalid-786/My-Portfolio"
  }
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React / React Native", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Flutter", category: "Frontend" },
  { name: "Figma / Canva", category: "Design" },
  { name: "UI/UX Design", category: "Design" },
  { name: "Responsive Design", category: "Design" },
  { name: "CapCut / InShot", category: "Media" },
  { name: "Hailuo AI", category: "Media" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "npm / Nodemailer", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Android Studio", category: "Tools" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Freelance",
    role: "Software Developer",
    period: "Present",
    description: "Currently working on independent projects and freelance opportunities, specializing in mobile and web development with a focus on creating secure, scalable, and human-centric software solutions.",
    link: ""
  },
  {
    company: "Revive Medical Technologies Inc.",
    role: "Software Engineering Intern",
    period: "1 Year Internship",
    description: "Applied engineering principles to real-world healthcare solutions. Developed medical-grade software modules for patient monitoring and hospital workflows.",
    link: "https://rmt-usa.com/"
  },
  {
    company: "Foundation University",
    role: "Information Engineering Technology",
    period: "2022 - 2026",
    description: "Bridged theoretical academic excellence with practical industrial applications, graduating with a strong foundation in software engineering and systems design.",
    link: "https://www.fui.edu.pk/"
  }
];
