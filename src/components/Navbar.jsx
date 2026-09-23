import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'
import { scrollToSection } from '../utils/helpers'

const navItems = [
  { id: 'hero', label: 'Beranda' },
  { id: 'couple', label: 'Mempelai' },
  { id: 'event', label: 'Acara' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'rsvp', label: 'RSVP' },
  { id: 'gift', label: 'Hadiah' },
  { id: 'wishes', label: 'Ucapan' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => ({
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
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-beige-200'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <motion.button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-1.5 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Kembali ke beranda"
          >
            <Heart className={`w-4 h-4 ${scrolled ? 'text-dusty-pink-300' : 'text-dusty-pink-300'}`} />
            <span className={`font-serif text-sm font-medium ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              A & S
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-300 focus:outline-none ${
                  activeSection === item.id
                    ? 'bg-dusty-pink-100 text-dusty-pink-400'
                    : 'text-gray-500 hover:text-dusty-pink-300 hover:bg-dusty-pink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-beige-100 transition-colors focus:outline-none focus:ring-2 focus:ring-dusty-pink-200"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-14 left-4 right-4 z-40 bg-white rounded-2xl shadow-xl border border-beige-200 p-4 md:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-sans transition-all focus:outline-none ${
                      activeSection === item.id
                        ? 'bg-dusty-pink-50 text-dusty-pink-400 font-medium'
                        : 'text-gray-600 hover:bg-beige-50'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
