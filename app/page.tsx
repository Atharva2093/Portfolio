"use client";

import { useState, useEffect } from "react";
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
import { Loader } from "@/components/ui/loader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [skipLoader, setSkipLoader] = useState(false);

  useEffect(() => {
    // Check if user wants to skip loader (for development)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skip-loader') === 'true') {
      setSkipLoader(true);
    }
    
    // Force show loader for testing (development only)
    if (urlParams.get('force-loader') === 'true') {
      localStorage.removeItem("portfolio-visited");
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Futuristic Loading Screen */}
      <Loader 
        onLoadingComplete={handleLoadingComplete}
        skipLoader={skipLoader}
      />

      {/* Main Portfolio Content */}
      {!isLoading && (
        <div className="min-h-screen bg-[#121212] text-[#F8FAFC] relative overflow-x-hidden">
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
      )}
    </>
  )
}
