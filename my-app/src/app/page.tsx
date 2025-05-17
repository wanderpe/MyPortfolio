"use client";

import About from "@/app/components/Aboutme";
import Projects from "@/app/components/Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["0 1", "1 0"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Navigation */}

      {/* Hero Section */}
      <main className=" min-h-screen bg-neutral-950 text-white relative overflow-hidden">
        <About />

        {/* Subtle background effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
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
      </main>

      {/* About Section */}
      {/* <motion.section
        ref={aboutRef}
        style={{ y, opacity }}
        className="w-full scroll-mt-24"
      >
        <Aboutme />
      </motion.section> */}

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        
      >
        <Projects/>
      </motion.section>

      {/* Contact Section */}
      {/* <motion.section
        ref={contactRef}
        className="w-full scroll-mt-24 py-16 md:py-32 bg-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">Get In Touch</h2>

          <div className="max-w-md">
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work and open to new
              opportunities. If you have a project that needs some creative
              coding, let's talk.
            </p>

            <Button
              variant="default"
              className="min-w-[10px] bg-white hover:bg-gray-200 text-black rounded-sm"
            >
              <a href="mailto:harvypettesardiza@gmail.com">Send Email</a>
            </Button>
          </div>
        </div>
      </motion.section> */}

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 · Harvy Pettes Ardiza
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/wanderpe"
                className="text-white/60 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harvy-pettes-ardiza-4952b6238/"
                className="text-white/60 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
