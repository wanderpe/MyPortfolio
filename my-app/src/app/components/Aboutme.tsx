"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "Java",
    "Supabase",
    "TypeScript",
    "Prisma",
    "Tailwind CSS",
    "NestJS",
    "PostgreSQL",
    "MongoDB",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.section
      className="relative px-4 sm:px-6 py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div className="space-y-12" {...fadeIn}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-stack developer crafting high-performance, scalable solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Bio */}
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-xl">
              <motion.div
                className="space-y-6 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="leading-relaxed">
                  👋 I'm a results-driven full-stack developer passionate about
                  building high-performance, scalable, and user-centric web
                  applications.
                </p>
                <p className="leading-relaxed">
                  With expertise in modern web technologies, I develop robust
                  backend systems, optimize databases, and create seamless,
                  responsive UIs that drive engagement and efficiency.
                </p>
                <p className="text-white font-medium">
                  💡 Let's collaborate on your next project!
                </p>
              </motion.div>
            </Card>

            {/* Right Column - Skills & Status */}
            <div className="space-y-6">
              {/* Skills Card */}
              <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technical Expertise
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-sm text-white/80 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </Card>

              {/* Status Card */}
              <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Currently Available
                </h3>
                <p className="text-gray-300">
                  Open to opportunities in software development where I can
                  contribute and continue growing as a developer.
                </p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.section>
  );
}
