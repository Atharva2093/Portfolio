import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121212] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Atharva</span>
              <span className="text-purple-400">.dev</span>
            </div>
            <p className="text-gray-400">Building scalable digital experiences, one line of code at a time.</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/atharvajondhale"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvajondhale7"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:atharvajondhale@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Atharva Jondhale. Made with <Heart className="h-4 w-4 text-red-400" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
