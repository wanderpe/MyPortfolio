"use client";

import Aboutme from "@/app/components/aboutme/about-me-page";
import Projects from "@/app/components/Projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null); // Add projects ref

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["0 1", "1 0"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-[80vh] gap-8"
          >
            <Card className="w-full max-w-4xl p-8 bg-black/40 border-white/10 backdrop-blur-xl">
              <TypeAnimation
                sequence={[
                  "Transforming Ideas into Reality",
                  2000,
                  "Engineering Digital Excellence",
                  2000,
                  "Building the Future of Web",
                  2000,
                ]}
                wrapper="h1"
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 text-center tracking-tight"
                repeat={Infinity}
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mt-6"
              >
                <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
                  Full-stack Developer crafting high-performance, scalable
                  solutions that drive business growth and user engagement.
                </p>
                <p className="text-gray-400 text-base md:text-lg text-center max-w-2xl mx-auto">
                  Specialized in{" "}
                  <span className="text-white font-medium">Next.js</span>,
                  <span className="text-white font-medium"> TypeScript</span>,
                  and
                  <span className="text-white font-medium">
                    {" "}
                    Cloud Architecture
                  </span>{" "}
                  | Turning complex challenges into elegant solutions
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  {
                    href: "#about",
                    text: "About Me",
                    variant: "default",
                    onClick: scrollToAbout,
                  },
                  {
                    href: "#projects",
                    text: "View Projects",
                    variant: "secondary",
                    onClick: scrollToProjects, // Add scroll handler
                  },
                  {
                    href: "/contact",
                    text: "Get in Touch",
                    variant: "outline",
                  },
                ].map((link, index) => (
                  <Button
                    key={index}
                    variant="default"
                    asChild
                    className="min-w-[160px] rounded-full hover:scale-105 transition-transform"
                    onClick={link.onClick}
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </Button>
                ))}
              </motion.div>
            </Card>
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/60">Available for work</span>
            </div>
          </div>
        </div>
      </main>

      <motion.section
        ref={aboutRef}
        style={{ y, opacity }}
        className="w-full scroll-mt-24"
      >
        <Aboutme />
      </motion.section>

      <motion.section
        ref={projectsRef} // Add ref here
        style={{ y, opacity }}
        className="w-full scroll-mt-24"
      >
        <Projects />
      </motion.section>
    </>
  );
}
