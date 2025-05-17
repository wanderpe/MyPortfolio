"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/them-toggler";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);

  // Organized skills by category
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux",
    ],
    backend: ["Node.js", "NestJS", "Java", "Prisma", "Express.js"],
    database: ["PostgreSQL", "MongoDB", "Supabase", "MySQL"],
    devops: ["Docker", "Git", "CI/CD", "AWS", "Vercel"],
  };

  // Work experience data
  const experiences = [
    {
      year: "2024 - Present",
      company: "Versa Solutions",
      position: "Full-Stack Developer",
      description:
        "Joined Versa Solutions as a Full-Stack Developer, building and maintaining large-scale systems using Next.js, NestJS, Prisma, and PostgreSQL. Gained hands-on experience with DevOps tools like Nginx, PM2, and Vercel. Strengthened skills in scalable backend architecture, clean frontend development, and real-world problem-solving across complex business domains.",
    },
    {
      year: "2021 - 2024",
      company: "School and Freelance",
      position: "Full-Stack Developer",
      description:
        "Worked on various freelance and academic projects using React, Tailwind, Spring Boot, and PostgreSQL. Later transitioned to full-stack development with Next.js and TypeScript, integrating tools like Prisma, Drizzle ORM, and Supabase. Gained experience with third-party APIs, OAuth (Google, GitHub, Azure), and deployment via Vercel.",
    },
    {
      year: "2020 - 2021",
      company: "Self-Learning Phase",
      position: "Junior Developer",
      description:
        "Began coding journey with HTML, CSS, and JavaScript. Explored backend development with Java and PostgreSQL, followed by game development using Python. This period was focused on foundational learning and exploring different technologies.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Animation variants for cards
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (delay: any) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay * 0.1 },
    }),
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative px-4 sm:px-6 py-16 md:py-24 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="space-y-4 md:gap-6">
          {/* Profile Card - 2 cols wide on large screens */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="col-span-1 md:col-span-2"
          >
            <Card className="border-border bg-card h-full overflow-hidden relative">
              {/* Theme Toggle Button - Positioned at top right */}
              <div className="absolute top-4 right-4 z-10">
                <ModeToggle />
              </div>

              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden border-2 border-border relative">
                      <img
                        src="/Profile.jpg"
                        alt="Your Name"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-accent border border-border text-xs text-accent-foreground backdrop-blur-md rounded-sm">
                      Available
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="space-y-4 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Harvy Pettes Ardiza
                    </h3>

                    <div className="flex flex-col gap-3 text-muted-foreground text-sm">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>Cebu City, Philippines</span>
                      </div>

                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500 dark:text-blue-400"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        <span>Full Stack Web Developer</span>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-3 pt-2">
                      <button className="px-4 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <a href="mailto:harvypettesardiza@gmail.com">
                            Send Email
                          </a>
                        </div>
                      </button>

                      <a
                        href="/Ardiza_Resume.pdf"
                        download
                        className="px-4 py-2 border border-border text-foreground font-medium text-sm rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" x2="12" y1="15" y2="3"></line>
                        </svg>
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Bio Card - Spans 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <motion.div
                custom={1}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                className="h-full"
              >
                <Card className="border-border bg-card h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500 dark:text-blue-400"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Bio
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed text-lg">
                      👋 I'm a results-driven full-stack developer passionate
                      about building high-performance, scalable, and
                      user-centric web applications.
                    </p>
                    <p className="leading-relaxed">
                      With expertise in modern web technologies, I develop
                      robust backend systems, optimize databases, and create
                      seamless, responsive UIs that drive engagement and
                      efficiency.
                    </p>
                    <p className="text-foreground font-medium">
                      💡 Let's collaborate on your next project!
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                custom={3}
                variants={cardVariants}
                initial="initial"
                animate="animate"
              >
                <Card className="border-border bg-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        label: "Frontend",
                        iconColor: "text-blue-500 dark:text-blue-400",
                        icon: (
                          <>
                            <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6z" />
                            <polygon points="10 15 15 12 10 9"></polygon>
                          </>
                        ),
                        skills: skills.frontend,
                      },
                      {
                        label: "Backend",
                        iconColor: "text-purple-500 dark:text-purple-400",
                        icon: (
                          <>
                            <rect
                              x="4"
                              y="4"
                              width="16"
                              height="16"
                              rx="2"
                            ></rect>
                            <rect x="9" y="9" width="6" height="6"></rect>
                            <path d="M15 2v2"></path>
                            <path d="M15 20v2"></path>
                            <path d="M2 15h2"></path>
                            <path d="M20 15h2"></path>
                          </>
                        ),
                        skills: skills.backend,
                      },
                      {
                        label: "Database",
                        iconColor: "text-green-500 dark:text-green-400",
                        icon: (
                          <>
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                          </>
                        ),
                        skills: skills.database,
                      },
                      {
                        label: "DevOps",
                        iconColor: "text-orange-500 dark:text-orange-400",
                        icon: (
                          <>
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                          </>
                        ),
                        skills: skills.devops,
                      },
                    ].map(({ label, iconColor, icon, skills }) => (
                      <div key={label}>
                        <div className="flex items-center gap-2 mb-2 text-foreground text-lg font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={iconColor}
                          >
                            {icon}
                          </svg>
                          {label}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span
                              key={`${label}-${skill}`}
                              className="px-3 py-1.5 bg-accent/50 hover:bg-accent border border-border text-sm text-foreground rounded-sm transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Work Experience Card - Spans 2 rows */}
            <motion.div
              custom={7}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="h-full"
            >
              <Card className="border-border bg-card h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500 dark:text-blue-400"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

                    {/* Experience items */}
                    <div className="space-y-8 relative">
                      {experiences.map((experience, index) => (
                        <div key={index} className="relative pl-6">
                          {/* Timeline dot */}
                          <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />

                          <div className="space-y-2">
                            <div className="text-blue-500 dark:text-blue-400 font-medium">
                              {experience.year}
                            </div>
                            <h4 className="text-foreground font-semibold text-lg">
                              {experience.position}
                            </h4>
                            <div className="text-muted-foreground">
                              {experience.company}
                            </div>
                            <p className="text-muted-foreground">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* What I Do Card */}
          <motion.div
            custom={8}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            className="col-span-1 md:col-span-2"
          >
            <Card className="border-border bg-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500 dark:text-purple-400"
                  >
                    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 2v2"></path>
                    <path d="M12 22v-2"></path>
                    <path d="m17 20.66-1-1.73"></path>
                    <path d="M11 10.27 7 3.34"></path>
                    <path d="m20.66 17-1.73-1"></path>
                    <path d="m3.34 7 1.73 1"></path>
                    <path d="M14 12h8"></path>
                    <path d="M2 12h2"></path>
                    <path d="m20.66 7-1.73 1"></path>
                    <path d="m3.34 17 1.73-1"></path>
                    <path d="m17 3.34-1 1.73"></path>
                    <path d="m7 20.66-1-1.73"></path>
                  </svg>
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-accent/50 rounded-md border border-border">
                  <h4 className="text-foreground font-medium mb-2">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Creating responsive, intuitive user interfaces using modern
                    frameworks and design principles.
                  </p>
                </div>
                <div className="p-4 bg-accent/50 rounded-md border border-border">
                  <h4 className="text-foreground font-medium mb-2">
                    Backend Architecture
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Building scalable, secure APIs and server applications with
                    optimized performance.
                  </p>
                </div>
                <div className="p-4 bg-accent/50 rounded-md border border-border">
                  <h4 className="text-foreground font-medium mb-2">
                    Database Design
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Creating efficient data structures and relationships for
                    optimal application performance.
                  </p>
                </div>
                <div className="p-4 bg-accent/50 rounded-md border border-border">
                  <h4 className="text-foreground font-medium mb-2">
                    DevOps & Deployment
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Setting up CI/CD pipelines and managing cloud infrastructure
                    for smooth deployments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            custom={11}
            variants={cardVariants}
            initial="initial"
            animate="animate"
          >
            <Card className="border-border bg-card h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500 dark:text-yellow-400"
                  >
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                  <p className="text-muted-foreground text-sm">
                    <a
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_XugLHi9jz97vM84qx_1677194329426_completion_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors underline"
                    >
                      Forage Developer Virtual Experience
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                  <p className="text-muted-foreground text-sm">
                    <a
                      href="https://www.hackerrank.com/certificates/iframe/81bf0d1820d7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors underline"
                    >
                      Hacker Rank Java
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                  <p className="text-muted-foreground text-sm">
                    <a
                      href="https://www.sololearn.com/en/certificates/CC-MR0ZJWZ2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors underline"
                    >
                      Solo Learn SQL
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>
    </motion.section>
  );
}
