export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
  result?: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud" | "Tools";
  iconName: string;
  level: "Expert" | "Proficient";
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  bullets: string[];
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  status: string; // e.g. "Coming Soon"
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const portfolioData = {
  profile: {
    tagline: "FULL-STACK DEVELOPER",
    headline: "Building Modern Full-Stack Web Applications with React, Next.js & AI",
    subheadline: "I build responsive, scalable, and user-focused web applications using modern frontend, backend, and AI technologies. I focus on clean interfaces, reliable functionality, performance, and real-world problem solving.",
    bio: "I am a Full-Stack Developer focused on building modern, responsive, and practical web applications. My experience includes React, Next.js, Node.js, Express.js, Java, Spring Boot, MongoDB, PostgreSQL, REST APIs, authentication, deployment, and AI API integration. I enjoy turning ideas into functional products with clean user interfaces, structured backend systems, and reliable performance. Currently, I am improving my full-stack skills while building portfolio projects and exploring freelance opportunities.",
    availability: "Open to Freelance Opportunities & Collaborations",
    location: "Vadodara, Gujarat, India",
    status: "Open to Freelance Opportunities"
  },
  
  stats: [
    { id: "projects", value: "3+", label: "Major Projects", description: "Built and deployed from scratch" },
    { id: "tech", value: "15+", label: "Technologies", description: "Frontend, backend, databases & AI APIs" },
    { id: "dsa", value: "250+", label: "DSA Problems Solved", description: "Data structures & algorithms in Java" },
    { id: "freelance", value: "Available", label: "For Freelance", description: "Ready for web projects & MVPs" }
  ] as StatItem[],

  services: [
    {
      id: "full-stack",
      title: "Full-Stack Web Applications",
      description: "End-to-end development of functional web products. Designing responsive client interfaces, establishing secure authentication, and configuring databases.",
      benefits: ["React & Next.js frontend interfaces", "Structured Express.js or Spring Boot backends", "Secure JWT authentication & role controls"],
      iconName: "Layers",
      badge: "Full-Stack"
    },
    {
      id: "front-end",
      title: "Responsive Front-End Development",
      description: "Building clean, accessible, and fast web pages based on modern layouts. Focus on CSS structure, responsiveness, and clean interactive elements.",
      benefits: ["Tailwind CSS responsive alignment", "Framer Motion micro-animations", "Next.js performance optimizations"],
      iconName: "MonitorPlay"
    },
    {
      id: "apis-backend",
      title: "REST APIs & Backend Systems",
      description: "Engineering secure API endpoints, connecting Relational and Non-Relational databases, and structuring route request lifecycles.",
      benefits: ["Java Spring Boot & Spring Data JPA", "Node.js & MongoDB Atlas connections", "PostgreSQL database structure and queries"],
      iconName: "Cpu"
    },
    {
      id: "ai-integrations",
      title: "AI & API Integrations",
      description: "Incorporating artificial intelligence features into applications using modern Large Language Model (LLM) APIs.",
      benefits: ["Gemini or OpenAI API integrations", "Context-aware AI chatbots", "Dynamic content generation prompts"],
      iconName: "Zap"
    }
  ] as ServiceItem[],

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio",
      subtitle: "Premium Developer Portfolio",
      description: "A premium, responsive developer portfolio built to showcase my skills, projects, services, and freelance availability through a modern and accessible interface.",
      category: "Frontend Showcase",
      technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Vercel"],
      links: {
        live: "https://my-portfolio-uma-s-projects2.vercel.app/",
        github: "https://github.com/UmaMaheshwari7474/MyPortfolio"
      },
      accentColor: "from-slate-900 via-slate-800 to-zinc-900"
    },
    {
      id: "safe-her",
      title: "SafeHer",
      subtitle: "AI-Powered Safety Platform",
      description: "An AI-powered women’s safety platform with SOS alerts, live location tracking, guardian notifications, safe-route assistance, real-time communication, and PWA support.",
      category: "Full-Stack & AI",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Gemini API", "Twilio", "Leaflet", "WebRTC", "PWA"],
      links: {
        live: "https://safe-her-psi.vercel.app/",
        github: "https://github.com/UmaMaheshwari7474/SafeHer"
      },
      accentColor: "from-rose-600 to-pink-500"
    },
    {
      id: "study-planner",
      title: "Student Study Planner",
      subtitle: "Full-Stack Academic Organizer",
      description: "A full-stack study management application for organizing tasks, timetables, study sessions, authentication, and academic progress.",
      category: "Full-Stack Web App",
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "JWT", "REST APIs", "JPA"],
      links: {
        live: "https://student-study-planner-beta.vercel.app/",
        github: "https://github.com/UmaMaheshwari7474/Student-Study-Planner"
      },
      accentColor: "from-blue-600 to-cyan-500"
    },
    {
      id: "performance-predictor",
      title: "Student Performance Predictor",
      subtitle: "Machine Learning Analytics",
      description: "A machine learning project that predicts student academic performance using study hours, attendance, previous scores, assignments, and sleep patterns.",
      category: "Machine Learning / Python",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Linear Regression", "Data Analysis"],
      links: {
        github: "https://github.com/UmaMaheshwari7474/student-performance-predictor-ml"
      },
      accentColor: "from-indigo-600 to-purple-500"
    }
  ] as ProjectItem[],

  skills: [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3", "Responsive Layouts"]
    },
    {
      category: "Backend & REST APIs",
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "RESTful Endpoints", "JWT Authentication", "API Testing"]
    },
    {
      category: "Databases & Cloud",
      skills: ["MongoDB & Atlas", "PostgreSQL", "Supabase", "SQL Queries", "Vercel", "Render", "Neon DB"]
    },
    {
      category: "Tools & Libraries",
      skills: ["Git & GitHub", "Postman", "Socket.io", "Gemini API", "Leaflet Map API", "Pandas & Scikit-learn"]
    }
  ] as SkillCategory[],

  techStack: [
    { name: "Next.js", category: "Frontend", iconName: "nextjs", level: "Proficient" },
    { name: "React", category: "Frontend", iconName: "react", level: "Expert" },
    { name: "TypeScript", category: "Frontend", iconName: "typescript", level: "Proficient" },
    { name: "Tailwind CSS", category: "Frontend", iconName: "tailwind", level: "Expert" },
    { name: "Node.js", category: "Backend", iconName: "nodejs", level: "Proficient" },
    { name: "Java", category: "Backend", iconName: "nodejs", level: "Proficient" }, 
    { name: "PostgreSQL", category: "Database", iconName: "postgresql", level: "Proficient" },
    { name: "Supabase", category: "Database", iconName: "supabase", level: "Proficient" },
    { name: "Stripe", category: "Tools", iconName: "stripe", level: "Proficient" },
    { name: "Vercel", category: "Cloud", iconName: "vercel", level: "Proficient" }
  ] as TechItem[],

  experience: [
    {
      period: "2025 — Present",
      role: "Full-Stack Development Journey",
      company: "Independent Projects and Continuous Learning",
      location: "Vadodara, Gujarat, India",
      description: "Building and deploying full-stack, AI-integrated, and machine-learning projects while strengthening practical skills in frontend development, backend APIs, databases, authentication, cloud deployment, testing, and problem solving.",
      bullets: [
        "Built and deployed projects using React, Next.js, Node.js, Java, Spring Boot, MongoDB, and PostgreSQL.",
        "Implemented JWT authentication, REST APIs, real-time communication, geolocation, AI integrations, and PWA features.",
        "Practiced 250+ data structures and algorithms problems using Java.",
        "Used Git, GitHub, Postman, Vercel, Render, and cloud databases for development and deployment.",
        "Continuously improving through project-based learning and practical implementation."
      ]
    }
  ] as ExperienceItem[],

  blogs: [
    {
      id: "1",
      title: "How I Built SafeHer: An AI-Powered Women’s Safety Platform",
      excerpt: "A breakdown of integrating real-time Socket.io communication, Leaflet maps, Twilio alerts, and Gemini AI assistant recommendations.",
      status: "Coming Soon",
      category: "Full-Stack & AI"
    },
    {
      id: "2",
      title: "Building Secure JWT Authentication with Spring Boot and React",
      excerpt: "A step-by-step tutorial on securing Spring Boot REST endpoints with JWT filters and managing authorization states inside React client sessions.",
      status: "Coming Soon",
      category: "Backend & Security"
    },
    {
      id: "3",
      title: "Deploying Full-Stack Applications Using Vercel, Render, and Cloud Databases",
      excerpt: "How to safely configure environment variables, connect Neon Postgres or MongoDB Atlas clusters, and run production builds on serverless hostings.",
      status: "Coming Soon",
      category: "Deployment"
    },
    {
      id: "4",
      title: "What I Learned from Building a Student Performance Prediction Model",
      excerpt: "Exploring linear regression models in Python, sanitizing datasets with Pandas/NumPy, and predicting grades from sleep and study behavior metrics.",
      status: "Coming Soon",
      category: "Machine Learning"
    }
  ] as BlogItem[],

  faqs: [
    {
      question: "What type of projects can you build?",
      answer: "I can build responsive landing pages, business websites, portfolio websites, full-stack web applications, REST APIs, dashboards, and AI-integrated applications."
    },
    {
      question: "Which technologies do you work with?",
      answer: "I work with React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, Java, Spring Boot, MongoDB, PostgreSQL, REST APIs, and AI APIs."
    },
    {
      question: "Can you build mobile-responsive websites?",
      answer: "Yes. Every website I build is designed to work properly across mobile, tablet, laptop, and desktop screens."
    },
    {
      question: "Can you integrate AI features?",
      answer: "Yes. I can integrate features such as AI chatbots, content generation, summarization, recommendation assistance, and Gemini or OpenAI-based functionality."
    },
    {
      question: "Do you provide deployment support?",
      answer: "Yes. I can deploy frontend and full-stack applications using platforms such as Vercel, Render, MongoDB Atlas, Neon, and other cloud services."
    },
    {
      question: "How can we start a project?",
      answer: "Submit the contact form with your project requirements, goals, and preferred timeline. I will review the details and respond with the next steps."
    }
  ] as FAQItem[]
};
