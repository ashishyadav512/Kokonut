"use client"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react"
import AnimatedBackground from "./animated-background"

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Design", href: "#" },
        { name: "Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Branding", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Github size={18} />, href: "#" },
  ]

  return (
    <footer className="relative bg-[#030303] pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <AnimatedBackground variant="primary" density="low" className="opacity-50" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="#hero" className="inline-block">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/logo-kokonut.png" // Updated path
                    alt="Kokonut UI Logo"
                    fill
                    className="object-contain"
                    unoptimized={true}
                  />
                </div>
              </a>
            </div>
            <p className="text-white/40 mb-6 max-w-md">
              Crafting exceptional digital experiences through innovative design and cutting-edge technology. We help
              businesses transform their ideas into reality.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors duration-300"
                  aria-label={`Follow us on ${link.icon.type.displayName || "social media"}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-white/90 font-medium mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-white/50 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kokonut UI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
