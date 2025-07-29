import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import About from "@/components/about"
import { Skills } from "@/components/skills"
import Projects from "@/components/projects"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/ui/particle-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#F8FAFC] relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main className="space-y-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
