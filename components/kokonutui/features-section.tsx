"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Code, Layers, Palette, Zap } from "lucide-react"

// Import the AnimatedBackground component
import AnimatedBackground from "./animated-background"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
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
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-300">
        <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit">
          <div className="text-white/80">{icon}</div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white/90">{title}</h3>
        <p className="text-white/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Palette size={24} />,
      title: "Stunning Design",
      description: "Beautiful, responsive interfaces that captivate users and elevate your brand.",
    },
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Maintainable, well-structured code that scales with your project needs.",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance First",
      description: "Lightning-fast experiences optimized for all devices and connection speeds.",
    },
    {
      icon: <Layers size={24} />,
      title: "Modular Components",
      description: "Flexible, reusable components that adapt to your specific requirements.",
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <AnimatedBackground variant="primary" density="medium" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-indigo-400/80 font-medium mb-3"
          >
            Our Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Powerful Features for
            </span>{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                pacifico.className,
              )}
            >
              Modern Websites
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            Everything you need to create exceptional digital experiences that engage and convert.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
