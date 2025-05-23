"use client";

import { useSectionInView } from "@/app/lib/hooks";
import admin from "@/assests/admin.png";
import planetario from "@/assests/planetario.png";
import Versa from "@/assests/versa.png";
import versaproperties from "@/assests/versaproperties.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Versa",
    description:
      "Innovative platform that combines the power of subscription-based business with affiliate marketing, creating endless opportunities for growth and success.",
    image: Versa, // Add your project image
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "NestJs",
      "Prisma",
      "Postgres",
    ],

    demo: "https://versaventures.app/",
  },
  {
    title: "Planetario Realty",
    description:
      "Planetario Realty and Brokerage Services Inc. is a top-performing real estate firm in Bohol, recognized for three consecutive years for its excellence. Clients benefit from expert guidance and personalized service, while agents enjoy significant incentives that drive success.",
    image: planetario, // Add your project image
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "NestJs",
      "Prisma",
      "Postgres",
    ],

    demo: "https://planetario.pro/public/sdm-planetario/real-estate",
  },
  {
    title: "Real Estate Admin System",
    description:
      "An advanced admin system that automates commission processing with a highly scalable compensation plan logic, ensuring transparency, efficiency, and seamless financial tracking within the company",
    image: admin, // Add your project image
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "NestJs",
      "Prisma",
      "Postgres",
    ],

    demo: "/no-demo",
  },
  {
    title: "Versa Properties",
    description:
      "Versa Properties is a modern real estate platform that streamlines property sales and commissions with an automated, multi-level compensation system.",
    image: versaproperties, // Add your project image
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind Css",
      "NestJs",
      "Prisma",
      "Postgres",
    ],

    demo: "https://real-estate.versa.com.ph/public/harvy-pettes/real-estate",
  },
  // Add more projects...
];

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.section
          ref={ref}
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-foreground  mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="h-full" // Add height full
            >
              <Link href={project.demo} className="h-full block">
                <Card className="group relative overflow-hidden backdrop-blur-xl  transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="relative aspect-video p-0 overflow-hidden rounded-t-lg flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </CardHeader>

                  <CardContent className="p-6 flex-grow flex flex-col">
                    <CardTitle className="text-xl font-semibold e mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground mb-4 line-clamp-3">
                      {project.description}text-whit
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-lg transition-all duration-300" />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
