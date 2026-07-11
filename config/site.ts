export const siteConfig = {
  name: "Uma Maheshwari",
  title: "Uma Maheshwari — Full-Stack Developer",
  description: "Building modern full-stack web applications with React, Next.js, and AI. Focused on responsive layouts, clean interfaces, and reliable functionality.",
  url: "https://my-portfolio-uma-s-projects2.vercel.app",
  ogImage: "https://my-portfolio-uma-s-projects2.vercel.app/og-image.png",
  resumeUrl: "/Uma_FreeLancer.pdf",
  links: {
    github: "https://github.com/UmaMaheshwariDev",
    linkedin: "https://www.linkedin.com/in/uma-maheshwari-muthyala-46736434b/",
    leetcode: "https://leetcode.com/u/uma_7474/",
    email: "muthyalaumamaheshwari.dev@gmail.com",
    resume: "/Uma_FreeLancer.pdf"
  },
  navItems: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  metadata: {
    title: {
      default: "Uma Maheshwari | Full-Stack Developer",
      template: "%s | Uma Maheshwari"
    },
    description: "Building modern full-stack web applications with React, Next.js, and AI. Focused on responsive layouts, clean interfaces, and reliable functionality.",
    keywords: [
      "Full-Stack Developer",
      "Next.js Developer",
      "React Developer",
      "Node.js Developer",
      "Spring Boot Developer",
      "Python Machine Learning",
      "Web Developer Portfolio",
      "Freelance Web Developer India"
    ]
  }
};

export type SiteConfig = typeof siteConfig;
