
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
    title: "Nutrition & Wellness Companion Mobile Application",
    description: "A mobile application aimed at supporting users in managing their nutrition, fitness routines, and overall wellness.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000",
    tags: ["Figma", "UI/UX", "User-Centered Design"],
    documentation: "This project focuses on the design of a mobile application aimed at supporting users in managing their nutrition, fitness routines, and overall wellness. The application integrates multiple health-related features into a single platform, allowing users to track dietary intake, follow workout plans, and maintain healthy lifestyle habits through an intuitive and visually engaging interface.\n\n### Objectives\n- To design a user-friendly health and wellness mobile application\n- To simplify nutrition tracking and fitness planning for users\n- To create an engaging and motivating user experience\n- To ensure accessibility and visual consistency across all screens\n\n### Project Description\nThe application includes features such as a smart grocery list, diet recommendations through visual, text, or automated inputs, calorie intake recording, personalized workout plans, appointment reminders, supplement guidance, motivational prompts, time tracking, and a favorite foods library that stores homemade meals and restaurant selections with modifications.\n\n### Role & Responsibilities\n**UI/UX Designer**\n- Designed the complete application interface independently\n- Created logo, color palette, typography, icons, and illustrations\n- Developed navigation flow and interactive layouts using Figma\n\n### Tools & Technologies\n- Figma\n- UI/UX Design Principles\n- User-Centered Design Methodology",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584432830661-3c586e0821c4?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 2,
    title: "Remote Patient Monitoring Web Platform",
    description: "A web-based remote patient monitoring platform designed for healthcare professionals to track patient vitals in real time.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
    tags: ["Next.js", "React", "REST APIs", "Frontend"],
    documentation: "This project involves the development of a web-based remote patient monitoring platform designed to help healthcare professionals track and manage patient vital information in real time. The platform supports efficient medical record management and continuous patient monitoring through a modern, responsive web interface.\n\n### Objectives\n- To develop a responsive and scalable healthcare web platform\n- To display real-time patient health data efficiently\n- To maintain consistency between web and mobile platforms\n\n### Project Description\nThe platform allows healthcare professionals to access patient data remotely, monitor health progress, and manage medical records. It was developed using the Next.js framework, ensuring optimized performance, server-side rendering, and improved SEO.\n\n### Role & Responsibilities\n**Frontend Developer**\n- Designed and implemented responsive web layouts\n- Developed reusable UI components\n- Integrated APIs for real-time data visualization\n- Ensured visual consistency across platforms\n\n### Tools & Technologies\n- Next.js\n- React\n- HTML, CSS, JavaScript\n- REST APIs",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 3,
    title: "Vital Signs Monitoring Mobile Application",
    description: "A mobile app for recording and monitoring vital health parameters like blood pressure, glucose, and weight.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["React Native", "JavaScript", "Charts", "Healthcare"],
    documentation: "This project focuses on the development of a mobile application that enables users to record and monitor vital health parameters such as blood pressure, blood glucose, and body weight. The app supports real-time health tracking to assist in chronic condition management and early risk detection.\n\n### Objectives\n- To design an intuitive vital tracking mobile application\n- To enable real-time health data visualization\n- To improve usability for both patients and healthcare providers\n\n### Project Description\nUsers can manually input health data or synchronize it through connected devices. The application presents data using graphs and charts for easy interpretation.\n\n### Role & Responsibilities\n**Frontend Developer**\n- Developed vital tracking screens using React Native CLI\n- Implemented charts and data visualization\n- Improved overall UI usability\n- Collaborated with team for frontend-backend integration\n\n### Tools & Technologies\n- React Native CLI\n- JavaScript\n- Chart Libraries\n- REST APIs",
    screenshots: [
      "https://images.unsplash.com/photo-1581056319156-5230a272c28b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 4,
    title: "Camera-Based Medical Imaging Mobile Application",
    description: "A professional-level medical imaging application for capturing and analyzing high-quality skin images.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000",
    tags: ["React Native", "Camera API", "Device Integration"],
    documentation: "This project involves the development of a camera-based mobile application designed for capturing and analyzing high-quality skin images using advanced camera and lens integration. The application supports professional-level imaging for medical use.\n\n### Objectives\n- To implement real-time camera functionality in a mobile app\n- To ensure high-quality image capture and usability\n- To integrate hardware features with frontend UI\n\n### Project Description\nThe application enables users to capture detailed skin images with zoom and focus controls, supports Wi-Fi connectivity for device pairing, and includes gallery management for image organization.\n\n### Role & Responsibilities\n**Frontend Developer**\n- Implemented zoom, focus, and camera controls\n- Developed Wi-Fi connectivity features\n- Created gallery management UI\n- Optimized UI for real-time camera operations\n\n### Tools & Technologies\n- React Native CLI\n- Camera APIs\n- Wi-Fi & Device Integration",
    screenshots: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: 5,
    title: "Remote Patient Monitoring Video Animation & Demonstration",
    description: "Educational animations demonstrating medical device connectivity and patient monitoring workflows.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    tags: ["Animation", "CapCut", "Healthcare Visualization"],
    documentation: "This project focuses on the creation of video animations to demonstrate a remote patient monitoring solution integrated with multiple medical devices. The videos visually explain app workflows, device connectivity, and data visualization.\n\n### Objectives\n- To create clear and engaging product demonstration videos\n- To visually explain complex healthcare workflows\n- To improve user and client understanding of the application\n\n### Project Description\nThe animations demonstrate monitoring of vital signs such as blood pressure, blood glucose, oxygen saturation, ECG, and body weight, showing how data is collected and displayed within the application.\n\n### Role & Responsibilities\n**Video Editor & Animator**\n- Created animations, voiceovers, captions, and transitions\n- Designed step-by-step visual workflows\n- Ensured clarity and professional presentation\n\n### Tools & Technologies\n- CapCut\n- Hailuo\n- Pixverse\n- Canva Pro",
    screenshots: [
      "https://images.unsplash.com/photo-1492619375914-88005aa9ee5f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800"
    ]
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
