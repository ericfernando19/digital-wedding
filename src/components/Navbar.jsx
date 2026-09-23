import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Heart, Calendar, Image, Mail, Gift, MessageCircle } from 'lucide-react'
import { scrollToSection } from '../utils/helpers'

const navItems = [
  { id: 'hero', label: 'Beranda', icon: Home },
  { id: 'couple', label: 'Mempelai', icon: Heart },
  { id: 'event', label: 'Acara', icon: Calendar },
  { id: 'gallery', label: 'Galeri', icon: Image },
  { id: 'rsvp', label: 'RSVP', icon: Mail },
  { id: 'gift', label: 'Hadiah', icon: Gift },
  { id: 'wishes', label: 'Ucapan', icon: MessageCircle },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].element) {
          const rect = sections[i].element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  return (
    <motion.nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      aria-label="Navigasi undangan"
    >
      <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-2 bg-cream-50/95 backdrop-blur-md rounded-full shadow-[0_10px_30px_-8px_rgba(61,52,46,0.45)] border border-bronze-300/70">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-bronze-400 focus:ring-offset-1 focus:ring-offset-cream-50 ${
                isActive
                  ? 'bg-taupe-700 text-cream-100 shadow-md'
                  : 'text-bronze-500 hover:bg-bronze-100 hover:text-bronze-700'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'true' : undefined}
              title={item.label}
            >
              <Icon className="w-[17px] h-[17px]" />
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}
