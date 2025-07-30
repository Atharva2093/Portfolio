"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence } from "framer-motion";

export function ExpandableNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationTabs = [
    { title: "Home", icon: Home },
    { title: "About", icon: User },
    { title: "Projects", icon: FolderOpen },
    { title: "Skills", icon: Code },
    { title: "Experience", icon: Briefcase },
    { title: "Education", icon: GraduationCap },
    { title: "Contact", icon: Mail },
  ];

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const sections = ["#home", "#about", "#projects", "#skills", "#experience", "#education", "#contact"];
      const targetSection = sections[index];
      
      // Smooth scroll to section
      const element = document.querySelector(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const mobileNavItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-green-400">Atharva</span>
            <span className="text-purple-400">.dev</span>
          </Link>

          {/* Desktop Expandable Navigation */}
          <div className="hidden lg:block">
            <ExpandableTabs
              tabs={navigationTabs}
              activeColor="text-blue-400"
              onChange={handleTabChange}
              className="border-gray-800 bg-gray-900/50 backdrop-blur-sm"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-800/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={20} />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
} 