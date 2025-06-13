import HeroGeometric from "@/components/kokonutui/hero-geometric"
import FeaturesSection from "@/components/kokonutui/features-section"
import ShowcaseSection from "@/components/kokonutui/showcase-section"
import PricingSection from "@/components/kokonutui/pricing-section"
import ContactSection from "@/components/kokonutui/contact-section"
import Footer from "@/components/kokonutui/footer"
import Navbar from "@/components/kokonutui/navbar"

export default function Home() {
  return (
    <main className="bg-[#030303] text-white overflow-x-hidden">
      {" "}
      {/* Added overflow-x-hidden */}
      <Navbar />
      <HeroGeometric /> {/* Hero section already has id="hero" */}
      <div id="features">
        <FeaturesSection />
      </div>
      {/* ShowcaseSection already has id="projects" */}
      <ShowcaseSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
