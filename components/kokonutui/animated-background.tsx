"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type CapsuleProps = {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  duration?: number
  yOffset?: number
}

export function AnimatedCapsule({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  duration = 12,
  yOffset = 15,
}: CapsuleProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, yOffset, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

type AnimatedBackgroundProps = {
  variant?: "primary" | "secondary" | "tertiary"
  density?: "low" | "medium" | "high"
  className?: string
}

export default function AnimatedBackground({
  variant = "primary",
  density = "medium",
  className,
}: AnimatedBackgroundProps) {
  // Define color schemes based on variant
  const gradients = {
    primary: {
      bg: "from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]",
      capsules: [
        "from-indigo-500/[0.15]",
        "from-rose-500/[0.15]",
        "from-violet-500/[0.15]",
        "from-amber-500/[0.15]",
        "from-cyan-500/[0.15]",
      ],
    },
    secondary: {
      bg: "from-rose-500/[0.05] via-transparent to-indigo-500/[0.05]",
      capsules: [
        "from-rose-500/[0.15]",
        "from-indigo-500/[0.15]",
        "from-amber-500/[0.15]",
        "from-violet-500/[0.15]",
        "from-cyan-500/[0.15]",
      ],
    },
    tertiary: {
      bg: "from-amber-500/[0.05] via-transparent to-cyan-500/[0.05]",
      capsules: [
        "from-amber-500/[0.15]",
        "from-cyan-500/[0.15]",
        "from-indigo-500/[0.15]",
        "from-rose-500/[0.15]",
        "from-violet-500/[0.15]",
      ],
    },
  }

  // Define capsule configurations based on density
  const capsuleConfigs = {
    low: [
      {
        width: 600,
        height: 140,
        rotate: 12,
        delay: 0.3,
        className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
      },
      {
        width: 500,
        height: 120,
        rotate: -15,
        delay: 0.5,
        className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]",
      },
      {
        width: 300,
        height: 80,
        rotate: -8,
        delay: 0.4,
        className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]",
      },
    ],
    medium: [
      {
        width: 600,
        height: 140,
        rotate: 12,
        delay: 0.3,
        className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
      },
      {
        width: 500,
        height: 120,
        rotate: -15,
        delay: 0.5,
        className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]",
      },
      {
        width: 300,
        height: 80,
        rotate: -8,
        delay: 0.4,
        className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]",
      },
      {
        width: 200,
        height: 60,
        rotate: 20,
        delay: 0.6,
        className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]",
      },
      { width: 150, height: 40, rotate: -25, delay: 0.7, className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]" },
    ],
    high: [
      {
        width: 600,
        height: 140,
        rotate: 12,
        delay: 0.3,
        className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
      },
      {
        width: 500,
        height: 120,
        rotate: -15,
        delay: 0.5,
        className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]",
      },
      {
        width: 300,
        height: 80,
        rotate: -8,
        delay: 0.4,
        className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]",
      },
      {
        width: 200,
        height: 60,
        rotate: 20,
        delay: 0.6,
        className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]",
      },
      { width: 150, height: 40, rotate: -25, delay: 0.7, className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]" },
      {
        width: 250,
        height: 70,
        rotate: 15,
        delay: 0.8,
        className: "right-[25%] md:right-[30%] bottom-[15%] md:bottom-[20%]",
      },
      { width: 180, height: 50, rotate: -10, delay: 0.9, className: "left-[30%] md:left-[35%] top-[40%] md:top-[45%]" },
    ],
  }

  const selectedGradients = gradients[variant]
  const selectedCapsules = capsuleConfigs[density]

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", selectedGradients.bg, "blur-3xl")} />

      {selectedCapsules.map((capsule, index) => (
        <AnimatedCapsule
          key={index}
          width={capsule.width}
          height={capsule.height}
          rotate={capsule.rotate}
          delay={capsule.delay}
          gradient={selectedGradients.capsules[index % selectedGradients.capsules.length]}
          className={capsule.className}
          duration={10 + Math.random() * 4} // Slightly randomize durations for more natural movement
          yOffset={10 + Math.random() * 10} // Slightly randomize y-offset for more natural movement
        />
      ))}
    </div>
  )
}
