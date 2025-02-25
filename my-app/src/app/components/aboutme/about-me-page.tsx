"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "../../lib/hooks";
import About from "../Aboutme";

export default function Aboutme() {
  const { ref } = useSectionInView("About");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const socialLinks = [
    {
      href: "/CV.pdf",
      text: "Download CV",
      icon: <HiDownload className="w-4 h-4" />,
      variant: "secondary",
      download: true,
    },
    {
      href: "https://linkedin.com",
      icon: <BsLinkedin className="w-5 h-5" />,
      variant: "outline",
    },
    {
      href: "https://github.com",
      icon: <FaGithubSquare className="w-5 h-5" />,
      variant: "outline",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-[#000000] bg-gradient-to-b from-neutral-950 to-black overflow-hidden">
      <motion.div
        className="fixed inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"
        style={{ opacity }}
      />

      <div className="max-w-[60rem] mx-auto pt-10 px-4 relative z-10">
        <motion.section
          ref={ref}
          id="about"
          className="mb-28 max-w-[50rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem] py-24 flex flex-col items-center"
          style={{ scale }}
        >
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              <Image
                src="/Profile.jpg"
                alt="Profile picture"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white/10 shadow-2xl backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 animate-pulse" />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.5,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>

          <motion.h1
            className="mb-10 text-2xl sm:text-4xl font-medium text-white/90 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Hello, I'm Harvy Pettes Ardiza.
            </span>{" "}
            <span className="mt-2 block text-white/70">
              Freelance Full-stack Developer crafting elegant digital solutions.
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap justify-center gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  asChild
                  className="group border-white/10"
                >
                  <Link
                    href={link.href}
                    download={link.download}
                    className="flex items-center justify-center gap-2 px-6 py-3"
                  >
                    {link.text}
                    <span className="transition-transform duration-300">
                      {link.icon}
                    </span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <About />
      </div>
    </div>
  );
}
