"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
// Import the AnimatedBackground component
import AnimatedBackground from "./animated-background"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  index,
}: {
  title: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
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
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full text-xs font-medium text-white">
            Most Popular
          </div>
        </div>
      )}
      <div
        className={cn(
          "relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-colors duration-300",
          isPopular
            ? "border-white/20 bg-white/[0.05] hover:bg-white/[0.08]"
            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]",
        )}
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-white/90">{title}</h3>
          <div className="mb-3">
            <span className="text-3xl md:text-4xl font-bold text-white">{price}</span>
            {price !== "Custom" && <span className="text-white/50 ml-1">/month</span>}
          </div>
          <p className="text-white/50 text-sm">{description}</p>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-1 text-indigo-400">
                <Check size={16} />
              </div>
              <span className="text-white/70 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button
          className={cn(
            "w-full py-2.5 px-4 rounded-lg font-medium transition-colors duration-300",
            isPopular
              ? "bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
              : "bg-white/10 text-white hover:bg-white/20",
          )}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$49",
      description: "Perfect for small projects and individuals",
      features: ["5 pages included", "Basic animations", "Responsive design", "1 month support"],
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "10 pages included",
        "Advanced animations",
        "Responsive design",
        "3 months support",
        "SEO optimization",
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom animations",
        "Responsive design",
        "12 months support",
        "SEO optimization",
        "Performance optimization",
      ],
      isPopular: false,
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <AnimatedBackground variant="tertiary" density="medium" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-indigo-400/80 font-medium mb-3"
          >
            Pricing Plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Choose the Perfect
            </span>{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                pacifico.className,
              )}
            >
              Plan for You
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-white/40 max-w-2xl mx-auto text-lg"
          >
            Flexible pricing options designed to meet your needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
