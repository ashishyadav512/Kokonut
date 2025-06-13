"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import AnimatedBackground from "./animated-background"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ProjectCard({
  title,
  category,
  image,
  index,
}: {
  title: string
  category: string
  image: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-700">
        {" "}
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse" />
        <Image
          src={image || "/placeholder.svg"} // Will use placeholder.svg for the first card
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index < 2}
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-sm font-medium text-indigo-300 mb-2">{category}</p>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
        <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <span>View Project</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ShowcaseSection() {
  const projects = [
    {
      title: "Geometric Dashboard",
      category: "Web Design",
      // Using a direct placeholder.svg URL for diagnostics
      image: "/geometric-dashboard-placeholder.png",
    },
    {
      title: "Neon Marketplace",
      category: "E-commerce",
      image: "/images/project-showcase-neon-market.png",
    },
    {
      title: "Gradient Portfolio",
      category: "Portfolio",
      image: "/images/project-showcase-gradient-folio.png",
    },
    {
      title: "Minimal Blog",
      category: "Blog",
      image: "/images/project-showcase-minimal-blog.png",
    },
  ]

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <AnimatedBackground variant="secondary" density="medium" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-indigo-400/80 font-medium mb-3"
          >
            Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Explore Our</span>{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                pacifico.className,
              )}
            >
              Featured Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            A curated selection of our most innovative and impactful projects, showcasing our expertise and creativity.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              index={index}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto group">
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
