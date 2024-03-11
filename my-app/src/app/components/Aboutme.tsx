"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-6 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a thrid year BSIT Student{" "}
        <span className="font-medium">At Cebu Institute of Technology- University</span>, Im very passionate about my programing career.  
        Im always seeking opportunities to gain more knowledge and to improve my{" "}
        <span className="font-medium">full-stack web developing skills</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the Learning never stops and there is always room for growth
        and improvement. I <span className="underline">love</span> the
        feeling of always learing new things and just seeing the world differently{" "}
        <span className="font-medium">
          I have a strong knowledge on React, Next.js, Java, and Supabase
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Any opportunities</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to the gym and running. I also enjoy{" "}
        <span className="font-medium">Reading books.</span>{" "}
        <span className="font-medium">I am handsome.</span>
        <span className="font-medium">I want to be future CBUM.</span>
      </p>
    </motion.section>
  );
}
