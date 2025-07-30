import { ExpandableNavigation } from "@/components/expandable-navigation"
import { Hero } from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F8FAFC] relative">
      <ParticleBackground />
      <div className="relative z-10">
        <ExpandableNavigation />
        <main className="space-y-0">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
