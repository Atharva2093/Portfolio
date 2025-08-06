"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

export function ExpandableNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

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

  const handleMobileNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl lg:text-2xl font-bold transition-transform hover:scale-105 touch-target min-h-[44px] min-w-[44px] flex items-center"
            onClick={() => {
              const homeElement = document.querySelector('#home');
              if (homeElement) {
                homeElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
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
            className="lg:hidden text-slate-300 touch-target hover:bg-gray-800/50 rounded-lg mobile-menu-button min-h-[48px] min-w-[48px] p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 pb-4 overflow-hidden mobile-menu-container"
            >
              <div className="flex flex-col space-y-2 bg-gray-900/95 backdrop-blur-md rounded-xl p-4 border border-gray-800/50 shadow-xl">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleMobileNavClick(item.href)}
                      className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors duration-200 p-4 rounded-lg hover:bg-gray-800/50 w-full text-left touch-target min-h-[56px] active:bg-gray-700/50"
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <item.icon size={20} className="flex-shrink-0" />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
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