import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'
import { useGuestName } from '../hooks/useGuestName'
import weddingData from '../data/weddingData'

const FloralOrnament = () => (
  <svg viewBox="0 0 200 100" className="w-40 md:w-56 opacity-40" aria-hidden="true">
    <g fill="none" stroke="#9CAF88" strokeWidth="1">
      <path d="M100,90 Q60,60 30,70 Q50,40 80,30 Q60,10 100,20 Q140,10 120,30 Q150,40 170,70 Q140,60 100,90Z" />
      <path d="M100,80 C80,60 50,65 40,70" />
      <path d="M100,80 C120,60 150,65 160,70" />
      <circle cx="100" cy="50" r="3" fill="#D4A5A5" opacity="0.6" />
      <circle cx="85" cy="45" r="2" fill="#D4A5A5" opacity="0.4" />
      <circle cx="115" cy="45" r="2" fill="#D4A5A5" opacity="0.4" />
    </g>
  </svg>
)

const FloralOrnamentLeft = () => (
  <svg viewBox="0 0 150 200" className="w-20 md:w-28 opacity-30" aria-hidden="true">
    <g fill="none" stroke="#9CAF88" strokeWidth="0.8">
      <path d="M10,200 Q20,150 15,100 Q25,80 10,50 Q30,30 20,10" />
      <path d="M15,150 Q40,140 50,120 Q35,110 15,120" />
      <path d="M15,110 Q45,100 55,80 Q40,75 15,85" />
      <path d="M15,70 Q40,60 48,40 Q35,35 15,45" />
      <circle cx="50" cy="120" r="3" fill="#D4A5A5" opacity="0.5" />
      <circle cx="55" cy="80" r="2.5" fill="#D4A5A5" opacity="0.4" />
      <circle cx="48" cy="40" r="2" fill="#D4A5A5" opacity="0.3" />
    </g>
  </svg>
)

const FloralOrnamentRight = () => (
  <svg viewBox="0 0 150 200" className="w-20 md:w-28 opacity-30" aria-hidden="true">
    <g fill="none" stroke="#9CAF88" strokeWidth="0.8">
      <path d="M140,200 Q130,150 135,100 Q125,80 140,50 Q120,30 130,10" />
      <path d="M135,150 Q110,140 100,120 Q115,110 135,120" />
      <path d="M135,110 Q105,100 95,80 Q110,75 135,85" />
      <path d="M135,70 Q110,60 102,40 Q115,35 135,45" />
      <circle cx="100" cy="120" r="3" fill="#D4A5A5" opacity="0.5" />
      <circle cx="95" cy="80" r="2.5" fill="#D4A5A5" opacity="0.4" />
      <circle cx="102" cy="40" r="2" fill="#D4A5A5" opacity="0.3" />
    </g>
  </svg>
)

export default function InvitationCover({ onOpen }) {
  const guestName = useGuestName()

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-beige-100 via-ivory to-dusty-pink-50 overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0">
          <FloralOrnamentLeft />
        </div>
        <div className="absolute top-0 right-0">
          <FloralOrnamentRight />
        </div>
        <div className="absolute bottom-0 left-0 rotate-180">
          <FloralOrnamentRight />
        </div>
        <div className="absolute bottom-0 right-0 rotate-180">
          <FloralOrnamentLeft />
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <FloralOrnament />
        </motion.div>

        <motion.p
          className="font-sans text-xs md:text-sm tracking-[0.3em] text-dusty-pink-400 uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          className="font-serif text-4xl md:text-6xl text-gray-800 mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {weddingData.groom.nickname}
          <span className="font-script text-dusty-pink-300 mx-2 text-3xl md:text-5xl">&</span>
          {weddingData.bride.nickname}
        </motion.h1>

        <motion.p
          className="font-sans text-sm md:text-base text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {weddingData.event.resepsi.date}
        </motion.p>

        {guestName && (
          <motion.div
            className="mb-6 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-dusty-pink-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <p className="font-sans text-xs text-gray-400 mb-1">Kepada Yth.</p>
            <p className="font-sans text-sm md:text-base text-gray-700 font-medium">
              Bapak/Ibu/Saudara/i {guestName}
            </p>
          </motion.div>
        )}

        {!guestName && (
          <motion.div
            className="mb-6 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-dusty-pink-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <p className="font-sans text-xs text-gray-400 mb-1">Kepada Yth.</p>
            <p className="font-sans text-sm md:text-base text-gray-700 font-medium">
              Bapak/Ibu/Saudara/i
            </p>
          </motion.div>
        )}

        <motion.button
          onClick={onOpen}
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-dusty-pink-300 text-white rounded-full font-sans text-sm tracking-wide shadow-lg hover:shadow-xl hover:bg-dusty-pink-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dusty-pink-300 focus:ring-offset-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Buka Undangan"
        >
          <Heart className="w-4 h-4 group-hover:fill-white transition-all" />
          <span>Buka Undangan</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.button>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-dusty-pink-300 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        />
      </div>
    </motion.div>
  )
}
